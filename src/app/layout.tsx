import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';
import { Navigation } from '@/components/navigation';

export const metadata: Metadata = {
  title: {
    default: '快乐英语学习 | 儿童英语启蒙',
    template: '%s | 快乐英语',
  },
  description: '专为儿童设计的英语学习平台，包含单词学习、绘本阅读、口语练习等功能，让孩子在游戏中快乐学英语。',
  keywords: [
    '儿童英语',
    '英语启蒙',
    '英语学习',
    '单词学习',
    '绘本阅读',
    '口语练习',
    'AI 语音评测',
  ],
  authors: [{ name: 'Happy English Team' }],
  generator: 'Happy English',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="zh-CN">
      <body className={`antialiased bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-blue-900/20 min-h-screen pb-16`}>
        {isDev && <Inspector />}
        {children}
        <Navigation />
      </body>
    </html>
  );
}
