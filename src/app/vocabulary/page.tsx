'use client';

import { useState } from 'react';
import { ArrowLeft, Volume2, Check, X, Star, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

type Word = {
  id: number;
  word: string;
  chinese: string;
  pronunciation: string;
  example: string;
  exampleChinese: string;
  level: number;
};

const vocabularyData: Word[] = [
  {
    id: 1,
    word: 'Apple',
    chinese: '苹果',
    pronunciation: '/ˈæpl/',
    example: 'I like to eat apples.',
    exampleChinese: '我喜欢吃苹果。',
    level: 1,
  },
  {
    id: 2,
    word: 'Banana',
    chinese: '香蕉',
    pronunciation: '/bəˈnænə/',
    example: 'Monkeys love bananas.',
    exampleChinese: '猴子喜欢香蕉。',
    level: 1,
  },
  {
    id: 3,
    word: 'Cat',
    chinese: '猫',
    pronunciation: '/kæt/',
    example: 'The cat is sleeping.',
    exampleChinese: '猫正在睡觉。',
    level: 1,
  },
  {
    id: 4,
    word: 'Dog',
    chinese: '狗',
    pronunciation: '/dɒɡ/',
    example: 'My dog is very friendly.',
    exampleChinese: '我的狗很友好。',
    level: 1,
  },
  {
    id: 5,
    word: 'Elephant',
    chinese: '大象',
    pronunciation: '/ˈelɪfənt/',
    example: 'The elephant is huge.',
    exampleChinese: '大象很大。',
    level: 2,
  },
];

export default function VocabularyPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mode, setMode] = useState<'learn' | 'quiz'>('learn');
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [stars, setStars] = useState(0);

  const currentWord = vocabularyData[currentIndex];
  const progress = ((currentIndex + 1) / vocabularyData.length) * 100;

  const generateOptions = () => {
    const correctWord = currentWord.word;
    const options = [correctWord];
    const otherWords = vocabularyData.filter(w => w.id !== currentWord.id);

    while (options.length < 4) {
      const randomWord = otherWords[Math.floor(Math.random() * otherWords.length)];
      if (!options.includes(randomWord.word)) {
        options.push(randomWord.word);
      }
    }

    return options.sort(() => Math.random() - 0.5);
  };

  const quizOptions = generateOptions();

  const speakWord = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleOptionClick = (option: string) => {
    if (answered) return;
    
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
    if (currentIndex < vocabularyData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setAnswered(false);
      setSelectedOption(null);
    } else {
      alert(`恭喜你完成本次学习！\n得分: ${score}/${vocabularyData.length}`);
      setCurrentIndex(0);
      setScore(0);
      setStars(0);
      setAnswered(false);
      setSelectedOption(null);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setStars(0);
    setMode('learn');
    setAnswered(false);
    setSelectedOption(null);
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
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            单词闯关
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {mode === 'learn' ? '学习模式' : '测验模式'}
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
            进度: {currentIndex + 1}/{vocabularyData.length}
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
                    onClick={() => setCurrentIndex(currentIndex - 1)}
                  >
                    上一个
                  </Button>
                )}
                {currentIndex < vocabularyData.length - 1 ? (
                  <Button
                    size="lg"
                    onClick={() => setCurrentIndex(currentIndex + 1)}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                  >
                    下一个
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    onClick={() => setMode('quiz')}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                  >
                    开始测验
                  </Button>
                )}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900 dark:text-white">
                这个单词是什么？
              </h2>
              <p className="text-2xl text-slate-600 dark:text-slate-400">
                {currentWord.chinese}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {quizOptions.map((option, index) => {
                const isSelected = selectedOption === index;
                const isCorrect = option === currentWord.word;
                
                let bgColor = 'bg-white dark:bg-slate-800';
                let borderColor = 'border-slate-200 dark:border-slate-700';
                
                if (answered && isSelected) {
                  if (isCorrect) {
                    bgColor = 'bg-green-100 dark:bg-green-900/30';
                    borderColor = 'border-green-500 dark:border-green-700';
                  } else {
                    bgColor = 'bg-red-100 dark:bg-red-900/30';
                    borderColor = 'border-red-500 dark:border-red-700';
                  }
                } else if (answered && isCorrect) {
                  bgColor = 'bg-green-100 dark:bg-green-900/30';
                  borderColor = 'border-green-500 dark:border-green-700';
                }

                return (
                  <Button
                    key={option}
                    variant="outline"
                    size="lg"
                    onClick={() => handleOptionClick(option)}
                    disabled={answered}
                    className={`text-xl font-semibold py-8 h-auto transition-all ${bgColor} ${borderColor} border-2`}
                  >
                    {option}
                    {answered && isSelected && (
                      isCorrect ? (
                        <Check className="w-6 h-6 ml-2 text-green-600 dark:text-green-400" />
                      ) : (
                        <X className="w-6 h-6 ml-2 text-red-600 dark:text-red-400" />
                      )
                    )}
                  </Button>
                );
              })}
            </div>

            {answered && (
              <div className="text-center">
                <Button
                  size="lg"
                  onClick={handleNext}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  {currentIndex < vocabularyData.length - 1 ? '下一题' : '查看结果'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* 分数卡片 */}
      <Card className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 border-amber-300 dark:border-amber-700">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-1">当前得分</h3>
              <p className="text-sm text-amber-700 dark:text-amber-400">
                {mode === 'quiz' ? '测验中...' : '学习模式'}
              </p>
            </div>
            <div className="text-4xl font-bold text-amber-800 dark:text-amber-300">
              {mode === 'quiz' ? `${score}/${vocabularyData.length}` : '-'}
            </div>
          </div>
          {mode === 'learn' && (
            <div className="mt-4 flex justify-center">
              <Button
                variant="outline"
                onClick={handleRestart}
                className="border-amber-300 dark:border-amber-700"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                重新开始
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
