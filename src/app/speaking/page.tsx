'use client';

import { useState, useRef } from 'react';
import { ArrowLeft, Mic, MicOff, Play, Volume2, Star, BookOpen, Target } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

import { allSpeaking, getSpeakingByGrade } from '@/lib/speaking-data';

type PracticeItem = {
  id: number;
  text: string;
  translation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  grade: number;
};

type Category = {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
};

const categories: Category[] = [
  {
    id: '日常问候',
    name: '日常问候',
    icon: '👋',
    color: 'from-blue-400 to-blue-600',
    description: '基础问候语',
  },
  {
    id: '自我介绍',
    name: '自我介绍',
    icon: '👤',
    color: 'from-green-400 to-green-600',
    description: '介绍自己',
  },
  {
    id: '日常对话',
    name: '日常对话',
    icon: '💬',
    color: 'from-purple-400 to-purple-600',
    description: '日常交流',
  },
  {
    id: '家庭介绍',
    name: '家庭介绍',
    icon: '👨‍👩‍👧',
    color: 'from-pink-400 to-pink-600',
    description: '介绍家人',
  },
  {
    id: '学校生活',
    name: '学校生活',
    icon: '🏫',
    color: 'from-amber-400 to-amber-600',
    description: '校园话题',
  },
  {
    id: '爱好兴趣',
    name: '爱好兴趣',
    icon: '🎨',
    color: 'from-cyan-400 to-cyan-600',
    description: '兴趣话题',
  },
  {
    id: '日常活动',
    name: '日常活动',
    icon: '🌅',
    color: 'from-orange-400 to-orange-600',
    description: '日常生活',
  },
  {
    id: '礼貌表达',
    name: '礼貌表达',
    icon: '🤝',
    color: 'from-teal-400 to-teal-600',
    description: '礼貌用语',
  },
];

export default function SpeakingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedText, setRecordedText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [stars, setStars] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const filteredItems = selectedGrade && selectedCategory
    ? getSpeakingByGrade(selectedGrade).filter(item => item.category === selectedCategory)
    : selectedGrade
    ? getSpeakingByGrade(selectedGrade)
    : [];

  const currentItem = filteredItems[currentIndex];
  const progress = filteredItems.length > 0 
    ? ((currentIndex + 1) / filteredItems.length) * 100 
    : 0;

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks: Blob[] = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      recorder.onstop = async () => {
        const audioBlob = new Blob(chunks, { type: 'audio/wav' });
        await processAudio(audioBlob);
      };

      recorder.start();
      mediaRecorderRef.current = recorder;
      setIsRecording(true);
      setRecordedText('');
      setFeedback('');
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('无法访问麦克风，请确保已授予权限');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      // 停止所有音频轨道
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  const processAudio = async (audioBlob: Blob) => {
    setIsProcessing(true);
    
    try {
      // 将音频转换为 base64
      const arrayBuffer = await audioBlob.arrayBuffer();
      const base64Data = btoa(
        new Uint8Array(arrayBuffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
      );

      // 发送到后端进行语音识别
      const response = await fetch('/api/speech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ audioData: base64Data }),
      });

      const result = await response.json();

      if (result.success) {
        const recognizedText = result.text.trim().toLowerCase();
        const targetText = currentItem.text.trim().toLowerCase();
        setRecordedText(recognizedText);

        // 简单的相似度计算
        const similarity = calculateSimilarity(recognizedText, targetText);
        const roundedScore = Math.round(similarity * 100);
        setScore(roundedScore);
        setTotalScore(totalScore + roundedScore);

        // 获取星星
        if (roundedScore >= 70) {
          setStars(stars + 1);
        }

        // 提供反馈
        if (roundedScore >= 90) {
          setFeedback('🎉 太棒了！发音非常标准！');
          speakText('Excellent!');
        } else if (roundedScore >= 70) {
          setFeedback('👍 很好！继续加油！');
          speakText('Good job!');
        } else if (roundedScore >= 50) {
          setFeedback('💪 不错，再试一次！');
          speakText('Try again!');
        } else {
          setFeedback('🎤 需要多练习，加油！');
          speakText('Keep practicing!');
        }
      } else {
        console.error('Speech recognition failed:', result.error);
        setFeedback('语音识别失败，请重试');
      }
    } catch (error) {
      console.error('Error processing audio:', error);
      setFeedback('处理音频时出错，请重试');
    } finally {
      setIsProcessing(false);
    }
  };

  const calculateSimilarity = (str1: string, str2: string): number => {
    const len1 = str1.length;
    const len2 = str2.length;
    const matrix: number[][] = [];

    for (let i = 0; i <= len1; i++) {
      matrix[i] = [];
      for (let j = 0; j <= len2; j++) {
        if (i === 0) matrix[i][j] = j;
        else if (j === 0) matrix[i][j] = i;
        else {
          const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
          matrix[i][j] = Math.min(
            matrix[i - 1][j] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j - 1] + cost
          );
        }
      }
    }

    const distance = matrix[len1][len2];
    const maxLen = Math.max(len1, len2);
    return maxLen === 0 ? 1 : 1 - distance / maxLen;
  };

  const handleNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setScore(0);
      setRecordedText('');
      setFeedback('');
    } else {
      alert(`🎉 恭喜完成练习！\n总得分: ${totalScore} 分\n获得星星: ${stars} 颗`);
      reset();
    }
  };

  const reset = () => {
    setCurrentIndex(0);
    setScore(0);
    setTotalScore(0);
    setStars(0);
    setRecordedText('');
    setFeedback('');
  };

  const getGradeColor = (grade: number) => {
    switch (grade) {
      case 3: return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 4: return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 5: return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300';
      case 6: return 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300';
      default: return 'bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'medium': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'hard': return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300';
    }
  };

  // 显示选择页面
  if (!currentItem) {
    return (
      <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
        {/* 顶部导航 */}
        <div className="flex items-center gap-4 mb-6">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              口语练习
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              选择年级和练习类型
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="font-bold text-lg">{stars}</span>
          </div>
        </div>

        {/* 年级选择 */}
        <Card className="mb-6 hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-500" />
              选择年级
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[3, 4, 5, 6].map((grade) => (
                <Button
                  key={grade}
                  variant={selectedGrade === grade ? "default" : "outline"}
                  size="lg"
                  onClick={() => {
                    setSelectedGrade(grade);
                    setSelectedCategory(null);
                  }}
                  className={`text-lg font-semibold ${selectedGrade === grade ? 'bg-gradient-to-r from-blue-500 to-purple-500' : ''}`}
                >
                  {grade}年级
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 分类选择 */}
        {selectedGrade && (
          <Card className="mb-6 hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-purple-500" />
                选择练习类型
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((category) => {
                  const itemCount = getSpeakingByGrade(selectedGrade).filter(item => item.category === category.id).length;
                  if (itemCount === 0) return null;
                  return (
                    <Card
                      key={category.id}
                      className={`cursor-pointer hover:shadow-2xl transition-all transform hover:-translate-y-1 border-2 ${
                        selectedCategory === category.id
                          ? 'border-blue-500 dark:border-blue-700'
                          : 'border-transparent'
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="text-5xl mb-3">{category.icon}</div>
                        <h4 className="text-lg font-bold mb-2">{category.name}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                          {category.description}
                        </p>
                        <Badge variant="outline" className="border-slate-300 dark:border-slate-700">
                          {itemCount} 个练习
                        </Badge>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* 开始按钮 */}
        {selectedGrade && selectedCategory && (
          <Card className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border-green-300 dark:border-green-700">
            <CardContent className="p-6 text-center">
              <div className="mb-4 text-lg">
                共 <span className="font-bold text-green-600">
                  {getSpeakingByGrade(selectedGrade).filter(item => item.category === selectedCategory).length}
                </span> 个练习
              </div>
              <Button
                size="lg"
                onClick={() => {
                  setCurrentIndex(0);
                  setScore(0);
                  setTotalScore(0);
                  setStars(0);
                  setRecordedText('');
                  setFeedback('');
                }}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-lg px-12"
              >
                <Mic className="w-5 h-5 mr-2" />
                开始练习
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
      {/* 顶部导航 */}
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="icon" onClick={() => {
          setSelectedCategory(null);
          setSelectedGrade(null);
          setCurrentIndex(0);
        }}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            口语练习
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {currentIndex + 1} / {filteredItems.length}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-500" />
          <span className="font-bold text-lg">{stars}</span>
        </div>
      </div>

      {/* 进度条 */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-slate-600 dark:text-slate-400">
            进度
          </span>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {Math.round(progress)}%
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* 练习卡片 */}
      <Card className="mb-6 hover:shadow-xl transition-shadow">
        <CardContent className="p-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Badge className={getGradeColor(currentItem.grade)}>
              {currentItem.grade}年级
            </Badge>
            <Badge className={getDifficultyColor(currentItem.difficulty)}>
              {currentItem.difficulty}
            </Badge>
            <Badge variant="outline">
              {currentItem.category}
            </Badge>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {currentItem.text}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {currentItem.translation}
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <Button
              size="lg"
              onClick={() => speakText(currentItem.text)}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              <Volume2 className="w-5 h-5 mr-2" />
              听示范
            </Button>
          </div>

          <div className="flex flex-col items-center mb-8">
            <Button
              size="lg"
              onClick={isRecording ? stopRecording : startRecording}
              disabled={isProcessing}
              className={`w-full max-w-md ${
                isRecording
                  ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600'
                  : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'
              }`}
            >
              {isRecording ? (
                <>
                  <MicOff className="w-5 h-5 mr-2" />
                  停止录音
                </>
              ) : (
                <>
                  <Mic className="w-5 h-5 mr-2" />
                  开始录音
                </>
              )}
            </Button>
            {isRecording && (
              <p className="mt-4 text-red-600 dark:text-red-400 animate-pulse">
                正在录音...
              </p>
            )}
            {isProcessing && (
              <p className="mt-4 text-blue-600 dark:text-blue-400">
                正在处理...
              </p>
            )}
          </div>

          {recordedText && (
            <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 mb-6">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">你说的是：</p>
                <p className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  {recordedText}
                </p>
                {score > 0 && (
                  <div className="mb-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">得分：</p>
                    <p className={`text-4xl font-bold ${
                      score >= 90 ? 'text-green-600' : score >= 70 ? 'text-blue-600' : score >= 50 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {score} 分
                    </p>
                  </div>
                )}
                {feedback && (
                  <p className="text-lg text-slate-800 dark:text-slate-200">
                    {feedback}
                  </p>
                )}
              </CardContent>
            </Card>
          )}

          {feedback && (
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={handleNext}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                {currentIndex < filteredItems.length - 1 ? '下一个' : '完成'}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
