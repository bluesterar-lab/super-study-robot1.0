'use client';

import { useState } from 'react';
import { ArrowLeft, Volume2, Check, X, Star, RotateCcw, BookOpen, Target } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

import { allVocabulary, getWordsByGrade } from '@/lib/vocabulary-data';

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
  const [mode, setMode] = useState<'learn' | 'quiz'>('learn');
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [stars, setStars] = useState(0);

  const filteredWords = selectedGrade && selectedCategory
    ? getWordsByGrade(selectedGrade).filter(w => w.category === selectedCategory)
    : selectedGrade
    ? getWordsByGrade(selectedGrade)
    : [];

  const currentWord = filteredWords[currentIndex];
  const progress = filteredWords.length > 0 
    ? ((currentIndex + 1) / filteredWords.length) * 100 
    : 0;

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
      alert(`🎉 恭喜完成练习！\n得分: ${score}/${filteredWords.length}`);
      reset();
    }
  };

  const reset = () => {
    setCurrentIndex(0);
    setScore(0);
    setStars(0);
    setMode('learn');
    setAnswered(false);
    setSelectedOption(null);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setStars(0);
    setMode('learn');
    setAnswered(false);
    setSelectedOption(null);
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

  // 显示选择页面
  if (!currentWord) {
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
              单词闯关
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              选择年级和单词类型
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
                选择单词类型
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((category) => {
                  const wordCount = getWordsByGrade(selectedGrade).filter(w => w.category === category.id).length;
                  if (wordCount === 0) return null;
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
                          {wordCount} 个单词
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
                  {getWordsByGrade(selectedGrade).filter(w => w.category === selectedCategory).length}
                </span> 个单词
              </div>
              <div className="flex gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => {
                    setCurrentIndex(0);
                    setScore(0);
                    setStars(0);
                    setMode('learn');
                    setAnswered(false);
                    setSelectedOption(null);
                  }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-12"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  学习模式
                </Button>
                <Button
                  size="lg"
                  onClick={() => {
                    setCurrentIndex(0);
                    setScore(0);
                    setStars(0);
                    setMode('quiz');
                    setAnswered(false);
                    setSelectedOption(null);
                  }}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-lg px-12"
                >
                  <Target className="w-5 h-5 mr-2" />
                  测验模式
                </Button>
              </div>
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
          setMode('learn');
        }}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            单词闯关
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {mode === 'learn' ? '学习模式' : '测验模式'} • {currentIndex + 1} / {filteredWords.length}
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

      {/* 学习模式 */}
      {mode === 'learn' && (
        <Card className="mb-6 hover:shadow-xl transition-shadow">
          <CardContent className="p-8">
            <div className="text-center">
              <Badge className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                Level {currentWord.level}
              </Badge>
              
              <div className="mb-6">
                <h2 className="text-5xl md:text-7xl font-bold mb-2 text-slate-900 dark:text-white">
                  {currentWord.word}
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-2">
                  {currentWord.chinese}
                </p>
                <p className="text-lg text-slate-500 dark:text-slate-500">
                  {currentWord.pronunciation}
                </p>
              </div>

              <Button
                size="lg"
                onClick={() => speakWord(currentWord.word)}
                className="mb-8 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                <Volume2 className="w-5 h-5 mr-2" />
                播放发音
              </Button>

              <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">例句</h3>
                  <p className="text-lg text-slate-800 dark:text-slate-200 mb-2">
                    {currentWord.example}
                  </p>
                  <p className="text-base text-slate-600 dark:text-slate-400">
                    {currentWord.exampleChinese}
                  </p>
                </CardContent>
              </Card>

              <div className="flex gap-4 justify-center">
                {currentIndex > 0 && (
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      setCurrentIndex(currentIndex - 1);
                      setAnswered(false);
                      setSelectedOption(null);
                    }}
                  >
                    上一个
                  </Button>
                )}
                <Button
                  size="lg"
                  onClick={handleNext}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  {currentIndex < filteredWords.length - 1 ? '下一个' : '完成'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* 测验模式 */}
      {mode === 'quiz' && (
        <Card className="mb-6 hover:shadow-xl transition-shadow">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                {currentWord.chinese}
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                选择正确的英文单词
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-6">
                {quizOptions.map((option, index) => {
                  const isCorrect = option === currentWord.word;
                  const isSelected = selectedOption === index;
                  
                  let bgColor = 'bg-white dark:bg-slate-800';
                  let borderColor = 'border-slate-200 dark:border-slate-700';
                  
                  if (answered) {
                    if (isCorrect) {
                      bgColor = 'bg-green-50 dark:bg-green-900/20';
                      borderColor = 'border-green-500 dark:border-green-600';
                    } else if (isSelected) {
                      bgColor = 'bg-red-50 dark:bg-red-900/20';
                      borderColor = 'border-red-500 dark:border-red-600';
                    }
                  } else if (isSelected) {
                    bgColor = 'bg-blue-50 dark:bg-blue-900/20';
                    borderColor = 'border-blue-500 dark:border-blue-600';
                  }

                  return (
                    <Card
                      key={index}
                      className={`cursor-pointer transition-all border-2 ${bgColor} ${borderColor} ${
                        !answered ? 'hover:shadow-lg' : ''
                      }`}
                      onClick={() => handleOptionClick(option)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-center gap-3">
                          <span className="text-2xl font-bold text-slate-900 dark:text-white">
                            {option}
                          </span>
                          {answered && isCorrect && <Check className="w-6 h-6 text-green-600" />}
                          {answered && isSelected && !isCorrect && <X className="w-6 h-6 text-red-600" />}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {answered && (
                <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 max-w-2xl mx-auto mb-6">
                  <CardContent className="p-6 text-left">
                    <div className="flex items-start gap-3 mb-3">
                      <Volume2 className="w-5 h-5 text-blue-600 mt-1 cursor-pointer" onClick={() => speakWord(currentWord.word)} />
                      <div>
                        <p className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                          {currentWord.word} • {currentWord.pronunciation}
                        </p>
                        <p className="text-base text-slate-700 dark:text-slate-300 mb-2">
                          {currentWord.example}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {currentWord.exampleChinese}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {answered && (
                <Button
                  size="lg"
                  onClick={handleNext}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  {currentIndex < filteredWords.length - 1 ? '下一个' : '完成'}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
