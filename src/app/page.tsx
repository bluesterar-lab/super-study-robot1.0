'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BookOpen, Mic, Trophy, Sparkles, Play, Star, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function Home() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('早上好！');
    } else if (hour < 18) {
      setGreeting('下午好！');
    } else {
      setGreeting('晚上好！');
    }
  }, []);

  const modules = [
    {
      title: '单词闯关',
      description: '趣味单词游戏，轻松掌握核心词汇',
      icon: BookOpen,
      color: 'bg-blue-500',
      gradient: 'from-blue-400 to-blue-600',
      href: '/vocabulary',
      progress: 0,
    },
    {
      title: '数学练习',
      description: '按年级分类，系统学习数学知识',
      icon: Calculator,
      color: 'bg-green-500',
      gradient: 'from-green-400 to-green-600',
      href: '/math',
      progress: 0,
    },
    {
      title: '古诗词',
      description: '经典古诗词，与课本同步学习',
      icon: BookOpen,
      color: 'bg-purple-500',
      gradient: 'from-purple-400 to-purple-600',
      href: '/reading',
      progress: 0,
    },
    {
      title: '口语练习',
      description: 'AI 智能评测，提升口语表达能力',
      icon: Mic,
      color: 'bg-pink-500',
      gradient: 'from-pink-400 to-pink-600',
      href: '/speaking',
      progress: 0,
    },
    {
      title: '学习进度',
      description: '查看学习统计，追踪成长足迹',
      icon: Trophy,
      color: 'bg-amber-500',
      gradient: 'from-amber-400 to-amber-600',
      href: '/progress',
      progress: 0,
    },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
      {/* 欢迎区域 */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-8 h-8 text-yellow-500" />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {greeting}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              今天也是快乐学习的一天！
            </p>
          </div>
        </div>

        {/* 今日目标卡片 */}
        <Card className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border-2 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-1">🎯 今日学习目标</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">完成 3 个学习模块</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">0/3</div>
                <div className="text-xs text-slate-500">已完成</div>
              </div>
            </div>
            <Progress value={0} className="h-3" />
          </CardContent>
        </Card>
      </div>

      {/* 学习模块 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <Link key={module.href} href={module.href}>
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border-2 hover:border-blue-300 dark:hover:border-blue-700">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${module.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                        {module.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                        {module.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <Progress value={module.progress} className="flex-1 h-2" />
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400 whitespace-nowrap">
                          {module.progress}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-end">
                    <Button variant="ghost" className="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                      <Play className="w-4 h-4 mr-2" />
                      开始学习
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* 推荐内容 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Star className="w-6 h-6 text-yellow-500" />
          今日推荐
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="text-4xl mb-2">📚</div>
              <h4 className="font-semibold mb-1">动物主题单词</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">认识 10 个常见动物</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="text-4xl mb-2">🎨</div>
              <h4 className="font-semibold mb-1">颜色主题绘本</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">彩虹小熊的故事</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="text-4xl mb-2">🎤</div>
              <h4 className="font-semibold mb-1">日常用语练习</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">学习 5 句问候语</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 连续学习天数 */}
      <Card className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 border-amber-300 dark:border-amber-700">
        <CardContent className="p-6 text-center">
          <div className="text-6xl mb-2">🔥</div>
          <h3 className="text-2xl font-bold text-amber-800 dark:text-amber-300 mb-1">
            连续学习 0 天
          </h3>
          <p className="text-sm text-amber-700 dark:text-amber-400">
            开始你的学习之旅吧！
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
