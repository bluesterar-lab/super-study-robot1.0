'use client';

import { ArrowLeft, Trophy, Clock, BookOpen, Mic, Target, TrendingUp, Award, Flame } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

type ProgressData = {
  totalDays: number;
  todayTime: number;
  totalTime: number;
  vocabularyLearned: number;
  vocabularyTotal: number;
  readingBooks: number;
  speakingPractice: number;
  speakingScore: number;
  currentStreak: number;
  weeklyGoal: number;
  weeklyProgress: number;
};

const progressData: ProgressData = {
  totalDays: 15,
  todayTime: 45,
  totalTime: 360,
  vocabularyLearned: 35,
  vocabularyTotal: 50,
  readingBooks: 3,
  speakingPractice: 12,
  speakingScore: 85,
  currentStreak: 7,
  weeklyGoal: 150,
  weeklyProgress: 45,
};

const weeklyActivity = [
  { day: '周一', time: 30 },
  { day: '周二', time: 45 },
  { day: '周三', time: 25 },
  { day: '周四', time: 50 },
  { day: '周五', time: 35 },
  { day: '周六', time: 60 },
  { day: '周日', time: 45 },
];

const achievements = [
  {
    id: 1,
    title: '初学者',
    description: '完成第一次学习',
    icon: '🎉',
    unlocked: true,
  },
  {
    id: 2,
    title: '连续学习者',
    description: '连续学习 7 天',
    icon: '🔥',
    unlocked: true,
  },
  {
    id: 3,
    title: '词汇达人',
    description: '学习 30 个单词',
    icon: '📚',
    unlocked: true,
  },
  {
    id: 4,
    title: '阅读爱好者',
    description: '阅读 5 本绘本',
    icon: '📖',
    unlocked: false,
  },
  {
    id: 5,
    title: '口语专家',
    description: '口语练习 20 次',
    icon: '🎤',
    unlocked: false,
  },
  {
    id: 6,
    title: '满分王者',
    description: '获得一次满分',
    icon: '👑',
    unlocked: false,
  },
];

export default function ProgressPage() {
  const vocabularyProgress = (progressData.vocabularyLearned / progressData.vocabularyTotal) * 100;
  const weeklyProgressPercent = (progressData.weeklyProgress / progressData.weeklyGoal) * 100;

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
      {/* 顶部导航 */}
      <div className="flex items-center gap-4 mb-6">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            学习进度
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            查看你的学习成就
          </p>
        </div>
      </div>

      {/* 连续学习天数 */}
      <Card className="mb-6 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 border-amber-300 dark:border-amber-700 hover:shadow-2xl transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-6xl">🔥</div>
              <div>
                <h3 className="text-2xl font-bold text-amber-800 dark:text-amber-300 mb-1">
                  连续学习 {progressData.currentStreak} 天
                </h3>
                <p className="text-sm text-amber-700 dark:text-amber-400">
                  你真棒！继续保持！
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-800 dark:text-amber-300">
                {progressData.totalDays}
              </div>
              <div className="text-sm text-amber-700 dark:text-amber-400">总天数</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 今日学习 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="hover:shadow-2xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">今日学习</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{progressData.todayTime} 分钟</p>
              </div>
            </div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {progressData.todayTime}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              目标: 60 分钟
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-2xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">总学习时长</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">累计 {progressData.totalTime} 分钟</p>
              </div>
            </div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              {Math.floor(progressData.totalTime / 60)}h {progressData.totalTime % 60}m
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              相当于 {Math.floor(progressData.totalTime / 30)} 节课
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 学习模块进度 */}
      <Card className="mb-6 hover:shadow-2xl transition-shadow">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-amber-500" />
            学习模块进度
          </h3>
          
          <div className="space-y-6">
            {/* 单词学习 */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-blue-500" />
                  <span className="font-medium">单词学习</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {progressData.vocabularyLearned}/{progressData.vocabularyTotal}
                  </span>
                  <Badge variant="outline" className="border-blue-300 dark:border-blue-700">
                    {Math.round(vocabularyProgress)}%
                  </Badge>
                </div>
              </div>
              <Progress value={vocabularyProgress} className="h-3" />
            </div>

            {/* 绘本阅读 */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-purple-500" />
                  <span className="font-medium">绘本阅读</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {progressData.readingBooks} 本
                  </span>
                  <Badge variant="outline" className="border-purple-300 dark:border-purple-700">
                    60%
                  </Badge>
                </div>
              </div>
              <Progress value={60} className="h-3" />
            </div>

            {/* 口语练习 */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <Mic className="w-5 h-5 text-pink-500" />
                  <span className="font-medium">口语练习</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {progressData.speakingPractice} 次
                  </span>
                  <Badge variant="outline" className="border-pink-300 dark:border-pink-700">
                    平均 {progressData.speakingScore}分
                  </Badge>
                </div>
              </div>
              <Progress value={progressData.speakingScore} className="h-3" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 本周学习统计 */}
      <Card className="mb-6 hover:shadow-2xl transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-500" />
              本周学习统计
            </h3>
            <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
              {weeklyProgressPercent}%
            </Badge>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-600 dark:text-slate-400">本周目标</span>
              <span className="text-sm font-medium">
                {progressData.weeklyProgress}/{progressData.weeklyGoal} 分钟
              </span>
            </div>
            <Progress value={weeklyProgressPercent} className="h-2" />
          </div>

          <div className="flex items-end justify-between gap-2">
            {weeklyActivity.map((activity, index) => {
              const height = (activity.time / 60) * 100;
              const isToday = index === 6;
              
              return (
                <div key={activity.day} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className={`w-full rounded-t-lg transition-all duration-300 ${
                      isToday
                        ? 'bg-gradient-to-t from-green-500 to-emerald-400'
                        : 'bg-slate-200 dark:bg-slate-700'
                    }`}
                    style={{ height: `${Math.max(height, 10)}%` }}
                  />
                  <div className="text-xs text-slate-600 dark:text-slate-400 text-center">
                    <div>{activity.day}</div>
                    <div className="font-medium">{activity.time}m</div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* 成就徽章 */}
      <Card className="mb-6 hover:shadow-2xl transition-shadow">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-yellow-500" />
            成就徽章
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <Card
                key={achievement.id}
                className={`transition-all duration-300 ${
                  achievement.unlocked
                    ? 'bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-amber-300 dark:border-amber-700'
                    : 'opacity-50 grayscale'
                }`}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-5xl mb-3">{achievement.icon}</div>
                  <h4 className="font-bold mb-1">{achievement.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {achievement.description}
                  </p>
                  {achievement.unlocked && (
                    <Badge className="mt-3 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                      已解锁
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 激励卡片 */}
      <Card className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-blue-900/30 border-purple-300 dark:border-purple-700">
        <CardContent className="p-8 text-center">
          <div className="text-6xl mb-4">🌟</div>
          <h3 className="text-2xl font-bold mb-2">你真了不起！</h3>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            坚持{progressData.currentStreak}天学习了英语，你的努力一定会得到回报！
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/vocabulary">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                <BookOpen className="w-4 h-4 mr-2" />
                继续学习
              </Button>
            </Link>
            <Link href="/reading">
              <Button variant="outline" className="border-purple-300 dark:border-purple-700">
                <BookOpen className="w-4 h-4 mr-2" />
                阅读绘本
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
