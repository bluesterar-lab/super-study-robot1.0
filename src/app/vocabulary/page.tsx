'use client';

import { useState, useEffect } from 'react';
import { 
  ArrowLeft, Volume2, Check, X, Star, RotateCcw, 
  BookOpen, Target, Save, Clock, PlayCircle, FileText
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import DictationComponent from '@/components/dictation-component';

import { allVocabulary, getWordsByGrade } from '@/lib/vocabulary-data';
import { 
  saveVocabularyProgress, 
  getVocabularyProgress, 
  clearVocabularyProgress,
  hasValidProgress,
  getProgressAge,
  type VocabularyProgress 
} from '@/lib/vocabulary-progress';

type Word = {
  id: number;
  word: string;
  chinese: string;
  pronunciation: string;
  example: string;
  exampleChinese: string;
  level: number;
  category: string;
};

type Category = {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
};

type Mode = 'learn' | 'quiz' | 'dictation-en-zh' | 'dictation-zh-en';

const categories: Category[] = [
  {
    id: '水果',
    name: '水果',
    icon: '🍎',
    color: 'from-red-400 to-red-600',
    description: '各种水果词汇',
  },
  {
    id: '动物',
    name: '动物',
    icon: '🐶',
    color: 'from-amber-400 to-amber-600',
    description: '动物世界',
  },
  {
    id: '食物',
    name: '食物',
    icon: '🍔',
    color: 'from-orange-400 to-orange-600',
    description: '美味食物',
  },
  {
    id: '身体',
    name: '身体',
    icon: '👋',
    color: 'from-pink-400 to-pink-600',
    description: '身体部位',
  },
  {
    id: '颜色',
    name: '颜色',
    icon: '🎨',
    color: 'from-purple-400 to-purple-600',
    description: '彩虹颜色',
  },
  {
    id: '家庭',
    name: '家庭',
    icon: '👨‍👩‍👧',
    color: 'from-blue-400 to-blue-600',
    description: '家庭成员',
  },
  {
    id: '自然',
    name: '自然',
    icon: '🌿',
    color: 'from-green-400 to-green-600',
    description: '大自然',
  },
  {
    id: '时间',
    name: '时间',
    icon: '⏰',
    color: 'from-cyan-400 to-cyan-600',
    description: '时间相关',
  },
];

export default function VocabularyPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mode, setMode] = useState<Mode>('learn');
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [stars, setStars] = useState(0);
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [savedProgress, setSavedProgress] = useState<VocabularyProgress | null>(null);
  const [showDictationComplete, setShowDictationComplete] = useState(false);
  const [dictationResults, setDictationResults] = useState<{ score: number; correct: boolean[] } | null>(null);

  // 检查是否有保存的进度
  useEffect(() => {
    if (hasValidProgress()) {
      const progress = getVocabularyProgress();
      setSavedProgress(progress);
    }
  }, []);

  // 计算过滤后的单词
  const filteredWords = selectedGrade && selectedCategory
    ? getWordsByGrade(selectedGrade).filter(w => w.category === selectedCategory)
    : selectedGrade
    ? getWordsByGrade(selectedGrade)
    : [];

  // 自动保存进度
  useEffect(() => {
    if (selectedGrade && currentIndex > 0) {
      const progress: VocabularyProgress = {
        grade: selectedGrade,
        category: selectedCategory,
        mode,
        currentIndex,
        score,
        stars,
        timestamp: Date.now(),
        totalWords: filteredWords.length
      };
      saveVocabularyProgress(progress);
    }
  }, [currentIndex, score, stars, selectedGrade, selectedCategory, mode, filteredWords.length]);

  const currentWord = filteredWords[currentIndex];
  const progress = filteredWords.length > 0 
    ? ((currentIndex + 1) / filteredWords.length) * 100 
    : 0;

  // 恢复进度
  const handleResumeProgress = () => {
    if (savedProgress) {
      setSelectedGrade(savedProgress.grade);
      setSelectedCategory(savedProgress.category);
      setCurrentIndex(savedProgress.currentIndex);
      setMode(savedProgress.mode);
      setScore(savedProgress.score);
      setStars(savedProgress.stars);
      setSavedProgress(null);
    }
  };

  // 清除保存的进度
  const handleClearProgress = () => {
    clearVocabularyProgress();
    setSavedProgress(null);
    reset();
  };

  const generateOptions = () => {
    if (!currentWord) return [];
    const correctWord = currentWord.word;
    const options = [correctWord];
    const otherWords = filteredWords.filter(w => w.id !== currentWord.id);

    while (options.length < 4 && otherWords.length > 0) {
      const randomIndex = Math.floor(Math.random() * otherWords.length);
      const randomWord = otherWords[randomIndex];
      if (!options.includes(randomWord.word)) {
        options.push(randomWord.word);
      }
      otherWords.splice(randomIndex, 1);
    }

    return options.sort(() => Math.random() - 0.5);
  };

  const quizOptions = currentWord ? generateOptions() : [];

  const speakWord = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleOptionClick = (option: string) => {
    if (answered || !currentWord) return;
    
    setSelectedOption(quizOptions.indexOf(option));
    setAnswered(true);

    if (option === currentWord.word) {
      setScore(score + 1);
      setStars(stars + 1);
      speakWord('Good job!');
    } else {
      speakWord('Try again!');
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredWords.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setAnswered(false);
      setSelectedOption(null);
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    clearVocabularyProgress();
    setShowExitDialog(true);
  };

  const reset = () => {
    setCurrentIndex(0);
    setScore(0);
    setStars(0);
    setMode('learn');
    setAnswered(false);
    setSelectedOption(null);
    setSelectedCategory(null);
    setSelectedGrade(null);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setStars(0);
    setMode('learn');
    setAnswered(false);
    setSelectedOption(null);
    clearVocabularyProgress();
    setShowExitDialog(false);
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

  const getModeText = () => {
    switch (mode) {
      case 'learn': return '学习模式';
      case 'quiz': return '测试模式';
      case 'dictation-en-zh': return '听写 - 英译中';
      case 'dictation-zh-en': return '听写 - 中译英';
      default: return '';
    }
  };

  const handleDictationComplete = (score: number, correct: boolean[]) => {
    setDictationResults({ score, correct });
    setShowDictationComplete(true);
    clearVocabularyProgress();
  };

  // 显示选择页面
  if (!currentWord) {
    return (
      <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
        {/* 顶部导航 */}
        <div className="flex items-center gap-4 mb-6">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">单词学习</h1>
        </div>

        {/* 恢复进度卡片 */}
        {savedProgress && (
          <Card className="mb-6 border-2 border-primary bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">恢复学习进度</h3>
                    <p className="text-sm text-muted-foreground">
                      保存于 {getProgressAge()}
                    </p>
                  </div>
                </div>
                <Badge variant="outline">{getModeText()}</Badge>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">年级:</span>
                  <span className="font-medium">三年级</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">进度:</span>
                  <span className="font-medium">{savedProgress.currentIndex + 1} / {savedProgress.totalWords}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">得分:</span>
                  <span className="font-medium">{savedProgress.score}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={handleResumeProgress} className="flex-1">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  继续学习
                </Button>
                <Button variant="outline" onClick={handleClearProgress}>
                  <RotateCcw className="mr-2 h-4 w-4" />
                  重新开始
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 年级选择 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[3, 4, 5, 6].map((grade) => (
            <Card
              key={grade}
              className={`cursor-pointer transition-all hover:shadow-lg hover:scale-105 ${
                selectedGrade === grade ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => {
                setSelectedGrade(grade);
                setSelectedCategory(null);
              }}
            >
              <CardContent className="p-6 text-center">
                <div className={`text-4xl font-bold mb-2 ${getGradeColor(grade)} inline-block px-4 py-2 rounded-lg`}>
                  {grade}
                </div>
                <div className="text-sm text-muted-foreground">年级</div>
                <div className="text-xs text-muted-foreground mt-2">
                  {getWordsByGrade(grade).length} 个单词
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 分类选择 */}
        {selectedGrade && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">选择分类</h2>
            <Button
              variant="outline"
              size="sm"
              className="mb-4"
              onClick={() => setSelectedCategory(null)}
            >
              显示全部
            </Button>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <Card
                  key={category.id}
                  className={`cursor-pointer transition-all hover:shadow-lg hover:scale-105 ${
                    selectedCategory === category.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <div className="font-semibold">{category.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {category.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* 学习模式选择 */}
        {selectedGrade && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">选择学习模式</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card
                className={`cursor-pointer transition-all hover:shadow-lg hover:scale-105 ${
                  mode === 'learn' ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setMode('learn')}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">学习模式</div>
                      <div className="text-sm text-muted-foreground">
                        学习单词的含义和发音
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`cursor-pointer transition-all hover:shadow-lg hover:scale-105 ${
                  mode === 'quiz' ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setMode('quiz')}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Target className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">测试模式</div>
                      <div className="text-sm text-muted-foreground">
                        通过选择题测试记忆
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`cursor-pointer transition-all hover:shadow-lg hover:scale-105 ${
                  mode === 'dictation-en-zh' ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setMode('dictation-en-zh')}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <FileText className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">听写 - 英译中</div>
                      <div className="text-sm text-muted-foreground">
                        看英文写中文意思
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`cursor-pointer transition-all hover:shadow-lg hover:scale-105 ${
                  mode === 'dictation-zh-en' ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setMode('dictation-zh-en')}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <PlayCircle className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">听写 - 中译英</div>
                      <div className="text-sm text-muted-foreground">
                        看中文写英文单词
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {mode && (
              <Button 
                size="lg" 
                className="w-full"
                onClick={() => setCurrentIndex(0)}
              >
                开始学习
              </Button>
            )}
          </div>
        )}
      </div>
    );
  }

  // 听写模式
  if (mode === 'dictation-en-zh' || mode === 'dictation-zh-en') {
    return (
      <div className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => setShowExitDialog(true)}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl md:text-2xl font-bold">{getModeText()}</h1>
          </div>
          <Badge className={getGradeColor(selectedGrade || 3)}>
            {selectedGrade}年级
          </Badge>
        </div>

        <DictationComponent
          words={filteredWords}
          mode={mode}
          currentIndex={currentIndex}
          onComplete={handleDictationComplete}
          onNext={handleNext}
          onSkip={handleNext}
        />

        {/* 听写完成对话框 */}
        <Dialog open={showDictationComplete} onOpenChange={setShowDictationComplete}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>🎉 听写完成！</DialogTitle>
              <DialogDescription>
                查看你的成绩
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">
                  {dictationResults?.score} / {filteredWords.length}
                </div>
                <div className="text-muted-foreground">
                  得分率: {Math.round(((dictationResults?.score || 0) / filteredWords.length) * 100)}%
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <div className="text-sm text-muted-foreground mb-2">正确率详情：</div>
                <div className="flex flex-wrap gap-2">
                  {dictationResults?.correct.map((correct, index) => (
                    <div
                      key={index}
                      className={`w-8 h-8 flex items-center justify-center rounded-full text-white text-sm font-bold ${
                        correct ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowDictationComplete(false)}>
                关闭
              </Button>
              <Button onClick={handleRestart}>
                重新开始
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* 退出确认对话框 */}
        <Dialog open={showExitDialog} onOpenChange={setShowExitDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>确认退出？</DialogTitle>
              <DialogDescription>
                当前进度已保存，下次可以继续学习
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowExitDialog(false)}>
                取消
              </Button>
              <Button onClick={() => {
                setShowExitDialog(false);
                reset();
              }}>
                退出
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  // 学习和测试模式
  return (
    <div className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setShowExitDialog(true)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-xl md:text-2xl font-bold">{getModeText()}</h1>
            <div className="text-sm text-muted-foreground">
              {selectedGrade}年级 · {selectedCategory || '全部'}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge className={getGradeColor(selectedGrade || 3)}>
            {selectedGrade}年级
          </Badge>
          {mode === 'quiz' && (
            <Badge variant="outline">
              {score} / {filteredWords.length}
            </Badge>
          )}
        </div>
      </div>

      <Card className="w-full">
        <CardContent className="p-6 space-y-6">
          {/* 进度条 */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>进度</span>
              <span>{currentIndex + 1} / {filteredWords.length}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* 单词卡片 */}
          <div className="text-center space-y-6 py-8">
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                {currentWord.word}
              </div>
              <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground">
                <Volume2 
                  className="w-5 h-5 cursor-pointer hover:text-primary" 
                  onClick={() => speakWord(currentWord.word)}
                />
                <span>{currentWord.pronunciation}</span>
              </div>
            </div>

            {mode === 'learn' && (
              <div className="space-y-4">
                <div className="text-3xl font-semibold text-foreground">
                  {currentWord.chinese}
                </div>
                <div className="bg-muted p-4 rounded-lg space-y-2">
                  <div className="text-sm text-muted-foreground">例句：</div>
                  <div className="text-lg">{currentWord.example}</div>
                  <div className="text-sm text-muted-foreground">{currentWord.exampleChinese}</div>
                </div>
              </div>
            )}

            {mode === 'quiz' && (
              <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
                {quizOptions.map((option, index) => {
                  const isSelected = selectedOption === index;
                  const isCorrect = option === currentWord.word;
                  const showResult = answered;

                  let buttonClass = 'transition-all';
                  if (!showResult) {
                    buttonClass = isSelected ? 'ring-2 ring-primary' : '';
                  } else if (isCorrect) {
                    buttonClass = 'bg-green-100 dark:bg-green-900 border-green-500';
                  } else if (isSelected && !isCorrect) {
                    buttonClass = 'bg-red-100 dark:bg-red-900 border-red-500';
                  }

                  return (
                    <Button
                      key={index}
                      variant="outline"
                      className={`h-16 text-lg ${buttonClass}`}
                      onClick={() => handleOptionClick(option)}
                      disabled={answered}
                    >
                      {option}
                    </Button>
                  );
                })}
              </div>
            )}

            {answered && mode === 'quiz' && (
              <div className="flex items-center justify-center gap-2 text-xl font-semibold">
                {selectedOption !== null && quizOptions[selectedOption] === currentWord.word ? (
                  <div className="text-green-600 flex items-center gap-2">
                    <Check className="w-6 h-6" />
                    正确！
                  </div>
                ) : (
                  <div className="text-red-600 flex items-center gap-2">
                    <X className="w-6 h-6" />
                    正确答案是：{currentWord.word}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 按钮 */}
          <div className="flex gap-3 justify-center">
            <Button
              onClick={handleNext}
              disabled={mode === 'quiz' && !answered}
              size="lg"
            >
              {currentIndex < filteredWords.length - 1 ? '下一个' : '完成'}
            </Button>

            <Button
              variant="outline"
              onClick={handleRestart}
              size="lg"
            >
              重新开始
            </Button>
          </div>

          {/* 星星显示 */}
          {stars > 0 && (
            <div className="flex items-center justify-center gap-1">
              {Array.from({ length: stars }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* 完成对话框 */}
      <Dialog open={showExitDialog} onOpenChange={setShowExitDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {mode === 'quiz' ? '🎉 测试完成！' : '📚 学习完成！'}
            </DialogTitle>
            <DialogDescription>
              {mode === 'quiz' 
                ? '查看你的测试成绩'
                : '当前进度已保存，下次可以继续学习'
              }
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {mode === 'quiz' && (
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">
                  {score} / {filteredWords.length}
                </div>
                <div className="text-muted-foreground">
                  得分率: {Math.round((score / filteredWords.length) * 100)}%
                </div>
                <div className="flex items-center justify-center gap-1 mt-2">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            )}
            {mode === 'learn' && (
              <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                <Save className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">学习进度已保存</div>
                  <div className="text-sm text-muted-foreground">
                    你已经学习了 {currentIndex + 1} 个单词，下次可以继续
                  </div>
                </div>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowExitDialog(false)}>
              {mode === 'quiz' ? '查看详情' : '继续学习'}
            </Button>
            <Button onClick={handleRestart}>
              重新开始
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
