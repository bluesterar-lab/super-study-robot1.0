'use client';

import { useState, useRef } from 'react';
import { ArrowLeft, Mic, MicOff, Play, Check, X, RotateCcw, Volume2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

type PracticeItem = {
  id: number;
  text: string;
  translation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
};

const practiceItems: PracticeItem[] = [
  {
    id: 1,
    text: 'Hello, how are you?',
    translation: '你好，你好吗？',
    difficulty: 'easy',
    category: '日常问候',
  },
  {
    id: 2,
    text: 'Good morning!',
    translation: '早上好！',
    difficulty: 'easy',
    category: '日常问候',
  },
  {
    id: 3,
    text: 'What is your name?',
    translation: '你叫什么名字？',
    difficulty: 'medium',
    category: '日常问候',
  },
  {
    id: 4,
    text: 'Nice to meet you.',
    translation: '很高兴见到你。',
    difficulty: 'medium',
    category: '日常问候',
  },
  {
    id: 5,
    text: 'How are you doing today?',
    translation: '你今天怎么样？',
    difficulty: 'hard',
    category: '日常问候',
  },
  {
    id: 6,
    text: 'I am fine, thank you.',
    translation: '我很好，谢谢。',
    difficulty: 'medium',
    category: '自我介绍',
  },
  {
    id: 7,
    text: 'My name is Tom.',
    translation: '我叫汤姆。',
    difficulty: 'easy',
    category: '自我介绍',
  },
  {
    id: 8,
    text: 'I live in Beijing.',
    translation: '我住在北京。',
    difficulty: 'medium',
    category: '自我介绍',
  },
];

export default function SpeakingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedText, setRecordedText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const currentItem = practiceItems[currentIndex];
  const progress = ((currentIndex + 1) / practiceItems.length) * 100;

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
        setAudioChunks(chunks);
        await processAudio(audioBlob);
      };

      recorder.start();
      mediaRecorderRef.current = recorder;
      setMediaRecorder(recorder);
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
    if (!str1 || !str2) return 0;

    const words1 = str1.split(/\s+/);
    const words2 = str2.split(/\s+/);
    
    let matchCount = 0;
    words1.forEach(word => {
      if (words2.includes(word)) {
        matchCount++;
      }
    });

    return matchCount / Math.max(words1.length, words2.length);
  };

  const handleNext = () => {
    if (currentIndex < practiceItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
      resetState();
    } else {
      alert(`🎉 恭喜完成本次练习！\n总得分: ${totalScore}`);
      setCurrentIndex(0);
      setTotalScore(0);
      resetState();
    }
  };

  const handleReset = () => {
    resetState();
  };

  const resetState = () => {
    setRecordedText('');
    setScore(0);
    setFeedback('');
    setIsRecording(false);
    setIsProcessing(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'hard':
        return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 dark:text-green-400';
    if (score >= 70) return 'text-blue-600 dark:text-blue-400';
    if (score >= 50) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

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
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
            口语练习
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            跟读练习，提升发音
          </p>
        </div>
        <div className="text-right">
          <div className="text-sm text-slate-600 dark:text-slate-400">总得分</div>
          <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">{totalScore}</div>
        </div>
      </div>

      {/* 进度条 */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-slate-600 dark:text-slate-400">
            进度: {currentIndex + 1}/{practiceItems.length}
          </span>
          <span className="text-sm font-medium text-pink-600 dark:text-pink-400">
            {Math.round(progress)}%
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* 当前练习内容 */}
      <Card className="mb-6 hover:shadow-2xl transition-shadow">
        <CardContent className="p-8">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Badge className={getDifficultyColor(currentItem.difficulty)}>
                {currentItem.difficulty}
              </Badge>
              <Badge variant="outline">{currentItem.category}</Badge>
            </div>

            <div className="mb-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3">
                {currentItem.text}
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                {currentItem.translation}
              </p>
            </div>

            <Button
              size="lg"
              onClick={() => speakText(currentItem.text)}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
            >
              <Volume2 className="w-5 h-5 mr-2" />
              听示范
            </Button>
          </div>

          {/* 录音控制 */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!isRecording && !isProcessing && (
                <Button
                  size="lg"
                  onClick={startRecording}
                  className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 min-w-[200px]"
                >
                  <Mic className="w-5 h-5 mr-2" />
                  开始录音
                </Button>
              )}

              {isRecording && (
                <Button
                  size="lg"
                  onClick={stopRecording}
                  variant="destructive"
                  className="min-w-[200px]"
                >
                  <MicOff className="w-5 h-5 mr-2" />
                  停止录音
                </Button>
              )}

              {isProcessing && (
                <Button size="lg" disabled className="min-w-[200px]">
                  正在处理...
                </Button>
              )}

              {recordedText && !isProcessing && (
                <>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleReset}
                    className="min-w-[200px]"
                  >
                    <RotateCcw className="w-5 h-5 mr-2" />
                    重新录音
                  </Button>
                  <Button
                    size="lg"
                    onClick={handleNext}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 min-w-[200px]"
                  >
                    {currentIndex < practiceItems.length - 1 ? '下一题' : '完成练习'}
                  </Button>
                </>
              )}
            </div>

            {/* 录音状态指示 */}
            {isRecording && (
              <div className="flex items-center justify-center gap-3 text-pink-600 dark:text-pink-400">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-16 h-16 bg-pink-500/30 rounded-full animate-ping" />
                  <div className="relative w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center">
                    <Mic className="w-8 h-8 text-white" />
                  </div>
                </div>
                <span className="text-lg font-semibold">正在录音...</span>
              </div>
            )}

            {/* 识别结果 */}
            {recordedText && (
              <Card className="bg-slate-50 dark:bg-slate-900 border-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">识别结果</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">标准答案</p>
                      <p className="text-lg font-medium">{currentItem.text}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">你的发音</p>
                      <p className="text-lg font-medium">{recordedText}</p>
                    </div>
                  </div>

                  {/* 得分 */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">得分</span>
                      <span className={`text-3xl font-bold ${getScoreColor(score)}`}>
                        {score}%
                      </span>
                    </div>
                    <Progress value={score} className="h-3" />
                  </div>

                  {/* 反馈 */}
                  {feedback && (
                    <div className="text-center py-4">
                      <p className="text-xl font-semibold text-slate-900 dark:text-white">
                        {feedback}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </CardContent>
      </Card>

      {/* 提示卡片 */}
      <Card className="bg-gradient-to-r from-blue-50 to-pink-50 dark:from-blue-900/20 dark:to-pink-900/20 border-blue-200 dark:border-blue-800">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🎤</div>
            <div>
              <h3 className="font-semibold mb-2">练习小贴士</h3>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <li>• 点击"听示范"先听标准发音</li>
                <li>• 录音时保持清晰的发音</li>
                <li>• 每天练习10-15分钟效果最佳</li>
                <li>• 得分越高说明发音越标准</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
