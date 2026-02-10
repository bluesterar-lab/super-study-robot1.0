'use client';

import { useState, useEffect } from 'react';
import { 
  ArrowLeft, Check, X, Star, RotateCcw, Calculator, 
  BookOpen, Target, Save, Clock, PlayCircle, AlertCircle 
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';

import { allMathQuestions } from '@/lib/math-questions';
import { 
  saveMathProgress, 
  getMathProgress, 
  clearMathProgress,
  hasValidMathProgress,
  getMathProgressAge,
  type MathProgress 
} from '@/lib/math-progress';

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
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [savedProgress, setSavedProgress] = useState<MathProgress | null>(null);

  // 检查是否有保存的进度
  useEffect(() => {
    if (hasValidMathProgress()) {
      const progress = getMathProgress();
      setSavedProgress(progress);
    }
  }, []);

  // 计算过滤后的题目
  const filteredProblems = selectedGrade && selectedCategory
    ? getQuestionsByGradeAndCategory(selectedGrade, selectedCategory)
    : [];

  // 自动保存进度
  useEffect(() => {
    if (selectedGrade && currentProblemIndex > 0 && filteredProblems.length > 0) {
      const progress: MathProgress = {
        grade: selectedGrade,
        category: selectedCategory,
        currentQuestionIndex: currentProblemIndex,
        correctCount: score,
        totalCount: currentProblemIndex + 1,
        timestamp: Date.now(),
        totalQuestions: filteredProblems.length
      };
      saveMathProgress(progress);
    }
  }, [currentProblemIndex, score, selectedGrade, selectedCategory, filteredProblems.length]);

  const currentProblem = filteredProblems[currentProblemIndex];
  const progress = filteredProblems.length > 0 
    ? ((currentProblemIndex + 1) / filteredProblems.length) * 100 
    : 0;

  // 恢复进度
  const handleResumeProgress = () => {
    if (savedProgress) {
      setSelectedGrade(savedProgress.grade);
      setSelectedCategory(savedProgress.category);
      setCurrentProblemIndex(savedProgress.currentQuestionIndex);
      setScore(savedProgress.correctCount);
      setSavedProgress(null);
    }
  };

  // 清除保存的进度
  const handleClearProgress = () => {
    clearMathProgress();
    setSavedProgress(null);
    reset();
  };

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
      handleComplete();
    }
  };

  const handleComplete = () => {
    clearMathProgress();
    setShowExitDialog(true);
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
    clearMathProgress();
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

  if (!currentProblem) {
    return (
      <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
        {/* 顶部导航 */}
        <div className="flex items-center gap-4 mb-6">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">数学练习</h1>
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
                    <h3 className="font-semibold text-lg">继续上次练习</h3>
                    <p className="text-sm text-muted-foreground">
                      保存于 {getMathProgressAge()}
                    </p>
                  </div>
                </div>
                <Badge variant="outline">练习进度</Badge>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">年级:</span>
                  <span className="font-medium">{savedProgress.grade}年级</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">进度:</span>
                  <span className="font-medium">{savedProgress.currentQuestionIndex + 1} / {savedProgress.totalQuestions}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">正确:</span>
                  <span className="font-medium">{savedProgress.correctCount} / {savedProgress.totalCount}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={handleResumeProgress} className="flex-1">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  继续练习
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

        {/* 题目类型选择 */}
        {selectedGrade && (
          <Card className="mb-6 hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-purple-500" />
                选择题目类型
              </h3>
              <Button
                variant="outline"
                size="sm"
                className="mb-4"
                onClick={() => setSelectedCategory(null)}
              >
                显示全部
              </Button>
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
                      <div className="text-5xl mb-3">{category.icon}</div>
                      <h4 className="text-xl font-bold mb-2">{category.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                      <Badge className={`mt-3 bg-gradient-to-r ${category.color}`}>
                        {getQuestionsByGradeAndCategory(selectedGrade, category.id).length} 题
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {selectedCategory && (
                <Button 
                  size="lg" 
                  className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  onClick={() => setCurrentProblemIndex(0)}
                >
                  开始练习
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  // 题目练习页面
  return (
    <div className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setShowExitDialog(true)}>
            <ArrowLeft className="w-5 w-5" />
          </Button>
          <div>
            <h1 className="text-xl md:text-2xl font-bold">数学练习</h1>
            <div className="text-sm text-muted-foreground">
              {selectedGrade}年级 · {selectedCategory || '全部'}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge className={getGradeColor(selectedGrade || 3)}>
            {selectedGrade}年级
          </Badge>
          <Badge variant="outline">
            {score} / {filteredProblems.length}
          </Badge>
        </div>
      </div>

      <Card className="w-full">
        <CardContent className="p-6 space-y-6">
          {/* 进度条 */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>进度</span>
              <span>{currentProblemIndex + 1} / {filteredProblems.length}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* 题目 */}
          <div className="text-center space-y-6 py-8">
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-semibold mb-2">
                第 {currentProblemIndex + 1} 题
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary">
                {currentProblem.question}
              </div>
            </div>

            {/* 选项 */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mt-8">
              {currentProblem.options.map((option, index) => {
                const isSelected = selectedOption === index;
                const isCorrect = index === currentProblem.correctAnswer;
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
                    className={`h-16 text-lg font-medium ${buttonClass}`}
                    onClick={() => handleOptionClick(index)}
                    disabled={answered}
                  >
                    <span className="mr-2">{['A', 'B', 'C', 'D'][index]}.</span>
                    {option}
                  </Button>
                );
              })}
            </div>

            {answered && (
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-xl font-semibold">
                  {selectedOption === currentProblem.correctAnswer ? (
                    <div className="text-green-600 flex items-center gap-2">
                      <Check className="w-6 h-6" />
                      回答正确！
                    </div>
                  ) : (
                    <div className="text-red-600 flex items-center gap-2">
                      <X className="w-6 h-6" />
                      正确答案是：{['A', 'B', 'C', 'D'][currentProblem.correctAnswer]}
                    </div>
                  )}
                </div>

                {/* 解析 */}
                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-2">解析：</div>
                  <div className="text-base">{currentProblem.explanation}</div>
                </div>
              </div>
            )}
          </div>

          {/* 按钮 */}
          <div className="flex gap-3 justify-center">
            <Button
              onClick={handleNext}
              disabled={!answered}
              size="lg"
            >
              {currentProblemIndex < filteredProblems.length - 1 ? '下一题' : '完成'}
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
            <DialogTitle>🎉 练习完成！</DialogTitle>
            <DialogDescription>
              查看你的练习成绩
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">
                {score} / {filteredProblems.length}
              </div>
              <div className="text-muted-foreground">
                正确率: {Math.round((score / filteredProblems.length) * 100)}%
              </div>
              <div className="flex items-center justify-center gap-1 mt-2">
                {Array.from({ length: stars }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            {/* 保存提示 */}
            {currentProblemIndex > 0 && (
              <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                <Save className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">练习进度已保存</div>
                  <div className="text-sm text-muted-foreground">
                    下次可以继续练习
                  </div>
                </div>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowExitDialog(false)}>
              关闭
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
