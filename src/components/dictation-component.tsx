'use client';

import { useState, useEffect } from 'react';
import { Volume2, Check, X, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

type DictationMode = 'dictation-en-zh' | 'dictation-zh-en';

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

interface DictationProps {
  words: Word[];
  mode: DictationMode;
  currentIndex: number;
  onComplete: (score: number, correct: boolean[]) => void;
  onNext: () => void;
  onSkip: () => void;
}

export default function DictationComponent({
  words,
  mode,
  currentIndex,
  onComplete,
  onNext,
  onSkip
}: DictationProps) {
  const currentWord = words[currentIndex];
  const [userAnswer, setUserAnswer] = useState('');
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState<boolean[]>([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setUserAnswer('');
    setAnswered(false);
    setIsCorrect(false);
    setShowHint(false);
  }, [currentIndex, mode]);

  if (!currentWord) return null;

  const isEnToZh = mode === 'dictation-en-zh';
  const targetText = isEnToZh ? currentWord.chinese : currentWord.word;
  const promptText = isEnToZh ? currentWord.word : currentWord.chinese;
  const placeholder = isEnToZh ? '输入中文意思...' : '输入英文单词...';

  const speakWord = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(currentWord.word);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const checkAnswer = () => {
    if (!userAnswer.trim()) return;

    let correct = false;
    if (isEnToZh) {
      // 检查中文答案（允许模糊匹配）
      correct = userAnswer.trim().includes(currentWord.chinese[0]) || 
                currentWord.chinese.includes(userAnswer.trim());
    } else {
      // 检查英文答案（忽略大小写和空格）
      correct = userAnswer.trim().toLowerCase().replace(/\s+/g, '') === 
                currentWord.word.toLowerCase().replace(/\s+/g, '');
    }

    setIsCorrect(correct);
    setAnswered(true);
    setCorrectAnswers([...correctAnswers, correct]);
    
    if (correct) {
      setScore(score + 1);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !answered) {
      checkAnswer();
    }
  };

  const progress = words.length > 0 ? ((currentIndex + 1) / words.length) * 100 : 0;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6 space-y-6">
        {/* 进度条 */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>进度</span>
            <span>{currentIndex + 1} / {words.length}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* 题目 */}
        <div className="text-center space-y-4">
          <Badge variant="outline" className="mb-2">
            {isEnToZh ? '英译中' : '中译英'}
          </Badge>

          {/* 显示单词/中文 */}
          <div className="py-8">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {promptText}
            </div>
            
            {isEnToZh && (
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Volume2 
                  className="w-4 h-4 cursor-pointer hover:text-primary" 
                  onClick={speakWord}
                />
                <span>{currentWord.pronunciation}</span>
              </div>
            )}
          </div>

          {/* 输入框 */}
          {!answered && (
            <div className="space-y-3">
              <Input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={placeholder}
                className="text-center text-xl py-6"
                autoFocus
              />
              <div className="flex gap-2 justify-center">
                <Button 
                  onClick={checkAnswer}
                  disabled={!userAnswer.trim()}
                  size="lg"
                >
                  提交
                </Button>
                {isEnToZh && (
                  <Button 
                    variant="outline"
                    onClick={speakWord}
                    size="lg"
                  >
                    <Volume2 className="mr-2 h-4 w-4" />
                    听读音
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* 答案显示 */}
          {answered && (
            <div className="space-y-4">
              <div className={`flex items-center justify-center gap-2 text-xl font-semibold ${
                isCorrect ? 'text-green-600' : 'text-red-600'
              }`}>
                {isCorrect ? (
                  <>
                    <Check className="w-6 h-6" />
                    回答正确！
                  </>
                ) : (
                  <>
                    <X className="w-6 h-6" />
                    回答错误
                  </>
                )}
              </div>

              <div className="bg-muted p-4 rounded-lg space-y-2">
                <div className="text-sm text-muted-foreground">正确答案：</div>
                <div className="text-2xl font-bold">{targetText}</div>
              </div>

              {/* 提示和例句 */}
              {!showHint && !isCorrect && (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowHint(true)}
                >
                  <Lightbulb className="mr-2 h-4 w-4" />
                  显示提示
                </Button>
              )}

              {showHint && !isCorrect && (
                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg space-y-2">
                  <div className="text-sm text-muted-foreground">例句：</div>
                  <div className="text-lg">{currentWord.example}</div>
                  <div className="text-sm text-muted-foreground">{currentWord.exampleChinese}</div>
                </div>
              )}

              {/* 按钮组 */}
              <div className="flex gap-3 justify-center pt-4">
                {currentIndex < words.length - 1 ? (
                  <Button onClick={onNext} size="lg">
                    下一题
                  </Button>
                ) : (
                  <Button 
                    onClick={() => onComplete(score, correctAnswers)} 
                    size="lg"
                    variant="default"
                  >
                    完成练习
                  </Button>
                )}
                
                <Button 
                  variant="outline" 
                  onClick={onSkip}
                  size="lg"
                >
                  跳过
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* 得分 */}
        <div className="text-center text-sm text-muted-foreground">
          当前得分: {score} / {words.length}
        </div>
      </CardContent>
    </Card>
  );
}
