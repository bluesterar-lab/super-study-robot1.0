'use client';

import { useState } from 'react';
import { ArrowLeft, Check, X, Star, RotateCcw, Calculator, BookOpen, Target } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

import { allMathQuestions, grade3Questions, grade4Questions, grade5Questions, grade6Questions } from '@/lib/math-questions';

type MathProblem = {
  id: number;
  grade: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
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
    id: 'calculation',
    name: '计算题',
    icon: '🧮',
    color: 'from-blue-400 to-blue-600',
    description: '加减乘除运算',
  },
  {
    id: 'application',
    name: '应用题',
    icon: '📝',
    color: 'from-purple-400 to-purple-600',
    description: '生活中的数学',
  },
  {
    id: 'geometry',
    name: '几何题',
    icon: '📐',
    color: 'from-pink-400 to-pink-600',
    description: '图形与面积',
  },
];

// 根据年级和题型筛选题目
const getQuestionsByGradeAndCategory = (grade: number, category: string): MathProblem[] => {
  const gradeQuestions = allMathQuestions.filter(q => q.grade === grade);
  if (category === 'all') {
    return gradeQuestions;
  }
  return gradeQuestions.filter(q => q.category === category);
};

export default function MathPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [stars, setStars] = useState(0);

  const filteredProblems = selectedGrade && selectedCategory
    ? getQuestionsByGradeAndCategory(selectedGrade, selectedCategory)
    : [];

  const currentProblem = filteredProblems[currentProblemIndex];
  const progress = filteredProblems.length > 0 
    ? ((currentProblemIndex + 1) / filteredProblems.length) * 100 
    : 0;

  const handleOptionClick = (optionIndex: number) => {
    if (answered || !currentProblem) return;
    
    setSelectedOption(optionIndex);
    setAnswered(true);

    if (optionIndex === currentProblem.correctAnswer) {
      setScore(score + 1);
      setStars(stars + 1);
    }
  };

  const handleNext = () => {
    if (currentProblemIndex < filteredProblems.length - 1) {
      setCurrentProblemIndex(currentProblemIndex + 1);
      setAnswered(false);
      setSelectedOption(null);
    } else {
      alert(`🎉 恭喜完成练习！\n得分: ${score}/${filteredProblems.length}`);
      reset();
    }
  };

  const reset = () => {
    setCurrentProblemIndex(0);
    setScore(0);
    setStars(0);
    setAnswered(false);
    setSelectedOption(null);
    setSelectedCategory(null);
    setSelectedGrade(null);
  };

  const handleRestart = () => {
    setCurrentProblemIndex(0);
    setScore(0);
    setStars(0);
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

  if (!currentProblem) {
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
              数学学习
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              选择年级和题目类型
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
                  onClick={() => setSelectedGrade(grade)}
                  className={`text-lg font-semibold ${selectedGrade === grade ? 'bg-gradient-to-r from-blue-500 to-purple-500' : ''}`}
                >
                  {grade}年级
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 题目类型选择 */}
        <Card className="mb-6 hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-purple-500" />
              选择题目类型
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {categories.map((category) => (
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
                    <div className={`text-5xl mb-3`}>{category.icon}</div>
                    <h4 className="text-xl font-bold mb-2">{category.name}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      {category.description}
                    </p>
                    <Badge variant="outline" className="border-slate-300 dark:border-slate-700">
                      {allMathQuestions.filter(p => p.category === category.id).length} 道题
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 开始按钮 */}
        {selectedGrade && selectedCategory && (
          <Card className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border-green-300 dark:border-green-700">
            <CardContent className="p-6 text-center">
              <div className="mb-4 text-lg">
                共 <span className="font-bold text-green-600">{getQuestionsByGradeAndCategory(selectedGrade, selectedCategory).length}</span> 道题
              </div>
              <Button
                size="lg"
                onClick={() => {
                  setCurrentProblemIndex(0);
                  setScore(0);
                  setStars(0);
                  setAnswered(false);
                  setSelectedOption(null);
                }}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-lg px-12"
              >
                <Calculator className="w-5 h-5 mr-2" />
                开始练习
              </Button>
            </CardContent>
          </Card>
        )}

        {/* 提示卡片 */}
        <Card className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl">💡</div>
              <div>
                <h3 className="font-semibold mb-2">学习小贴士</h3>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  <li>• 选择你所在的年级</li>
                  <li>• 选择想要练习的题目类型</li>
                  <li>• 认真思考，仔细计算</li>
                  <li>• 做错后查看解析，理解解题思路</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
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
          setCurrentProblemIndex(0);
        }}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            数学练习
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {currentProblemIndex + 1} / {filteredProblems.length}
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

      {/* 题目卡片 */}
      <Card className="mb-6 hover:shadow-2xl transition-shadow">
        <CardContent className="p-8">
          {/* 年级和类型标签 */}
          <div className="flex items-center gap-3 mb-6">
            <Badge className={getGradeColor(currentProblem.grade)}>
              {currentProblem.grade}年级
            </Badge>
            <Badge variant="outline">
              {categories.find(c => c.id === currentProblem.category)?.name}
            </Badge>
          </div>

          {/* 题目 */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              {currentProblem.question}
            </h2>
          </div>

          {/* 选项 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {currentProblem.options.map((option, index) => {
              const isSelected = selectedOption === index;
              const isCorrect = index === currentProblem.correctAnswer;
              
              let bgColor = 'bg-white dark:bg-slate-800';
              let borderColor = 'border-slate-200 dark:border-slate-700';
              let textColor = 'text-slate-900 dark:text-white';
              
              if (answered) {
                if (isCorrect) {
                  bgColor = 'bg-green-100 dark:bg-green-900/30';
                  borderColor = 'border-green-500 dark:border-green-700';
                  textColor = 'text-green-700 dark:text-green-300';
                } else if (isSelected) {
                  bgColor = 'bg-red-100 dark:bg-red-900/30';
                  borderColor = 'border-red-500 dark:border-red-700';
                  textColor = 'text-red-700 dark:text-red-300';
                }
              } else if (isSelected) {
                bgColor = 'bg-blue-100 dark:bg-blue-900/30';
                borderColor = 'border-blue-500 dark:border-blue-700';
                textColor = 'text-blue-700 dark:text-blue-300';
              }

              return (
                <Button
                  key={option}
                  variant="outline"
                  size="lg"
                  onClick={() => handleOptionClick(index)}
                  disabled={answered}
                  className={`text-2xl font-semibold py-6 h-auto transition-all ${bgColor} ${borderColor} ${textColor} border-2`}
                >
                  <span className="mr-3 text-lg opacity-60">{String.fromCharCode(65 + index)}.</span>
                  {option}
                  {answered && isSelected && (
                    isCorrect ? (
                      <Check className="w-6 h-6 ml-2" />
                    ) : (
                      <X className="w-6 h-6 ml-2" />
                    )
                  )}
                  {answered && isCorrect && !isSelected && (
                    <Check className="w-6 h-6 ml-2 opacity-50" />
                  )}
                </Button>
              );
            })}
          </div>

          {/* 解析 */}
          {answered && (
            <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-500" />
                  解析
                </h4>
                <p className="text-slate-700 dark:text-slate-300">
                  {currentProblem.explanation}
                </p>
              </CardContent>
            </Card>
          )}

          {/* 操作按钮 */}
          {answered && (
            <div className="mt-8 flex justify-center">
              <Button
                size="lg"
                onClick={handleNext}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                {currentProblemIndex < filteredProblems.length - 1 ? '下一题' : '查看结果'}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* 得分卡片 */}
      <Card className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 border-amber-300 dark:border-amber-700">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-1">当前得分</h3>
              <p className="text-sm text-amber-700 dark:text-amber-400">
                {score}/{filteredProblems.length}
              </p>
            </div>
            <div className="text-4xl font-bold text-amber-800 dark:text-amber-300">
              {filteredProblems.length > 0 ? Math.round((score / filteredProblems.length) * 100) : 0}%
            </div>
          </div>
          {score > 0 && (
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
