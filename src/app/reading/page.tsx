'use client';

import { useState } from 'react';
import { ArrowLeft, Volume2, Book, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

type Book = {
  id: number;
  title: string;
  author: string;
  level: number;
  description: string;
  pages: Page[];
  coverEmoji: string;
  color: string;
};

type Page = {
  id: number;
  text: string;
  translation: string;
  illustration: string;
};

const books: Book[] = [
  {
    id: 1,
    title: '彩虹小熊',
    author: 'Happy English',
    level: 1,
    description: '认识美丽的颜色',
    coverEmoji: '🌈',
    color: 'from-blue-400 to-purple-500',
    pages: [
      {
        id: 1,
        text: 'Hello, I am Little Bear.',
        translation: '你好，我是小熊。',
        illustration: '🐻',
      },
      {
        id: 2,
        text: 'Look at the rainbow. It is so beautiful!',
        translation: '看彩虹。它真美丽！',
        illustration: '🌈',
      },
      {
        id: 3,
        text: 'Red, orange, yellow, green, blue, purple.',
        translation: '红色、橙色、黄色、绿色、蓝色、紫色。',
        illustration: '🎨',
      },
      {
        id: 4,
        text: 'I love all the colors!',
        translation: '我爱所有的颜色！',
        illustration: '💖',
      },
    ],
  },
  {
    id: 2,
    title: '我的朋友们',
    author: 'Happy English',
    level: 1,
    description: '认识动物朋友',
    coverEmoji: '🦁',
    color: 'from-orange-400 to-red-500',
    pages: [
      {
        id: 1,
        text: 'This is my friend, the Lion.',
        translation: '这是我的朋友，狮子。',
        illustration: '🦁',
      },
      {
        id: 2,
        text: 'Roar! Roar! says the Lion.',
        translation: '狮子说：嗷呜！嗷呜！',
        illustration: '🦁🗣️',
      },
      {
        id: 3,
        text: 'This is my friend, the Elephant.',
        translation: '这是我的朋友，大象。',
        illustration: '🐘',
      },
      {
        id: 4,
        text: 'Tromp! Tromp! goes the Elephant.',
        translation: '大象发出：咚！咚！',
        illustration: '🐘👣',
      },
    ],
  },
  {
    id: 3,
    title: '数字故事',
    author: 'Happy English',
    level: 2,
    description: '学习数字 1-10',
    coverEmoji: '🔢',
    color: 'from-green-400 to-teal-500',
    pages: [
      {
        id: 1,
        text: 'One little bird flies in the sky.',
        translation: '一只小鸟在天空中飞翔。',
        illustration: '🐦',
      },
      {
        id: 2,
        text: 'Two fish swim in the sea.',
        translation: '两条鱼在海里游泳。',
        illustration: '🐟🐟',
      },
      {
        id: 3,
        text: 'Three rabbits hop on the grass.',
        translation: '三只兔子在草地上跳。',
        illustration: '🐰🐰🐰',
      },
      {
        id: 4,
        text: 'Counting is fun! 1, 2, 3!',
        translation: '数数真有趣！1、2、3！',
        illustration: '🎉',
      },
    ],
  },
];

export default function ReadingPage() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleBookSelect = (book: Book) => {
    setSelectedBook(book);
    setCurrentPage(0);
    setShowTranslation(false);
  };

  const handlePageChange = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'next' && selectedBook && currentPage < selectedBook.pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (selectedBook) {
    const currentPageData = selectedBook.pages[currentPage];
    const progress = ((currentPage + 1) / selectedBook.pages.length) * 100;

    return (
      <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
        {/* 顶部导航 */}
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => setSelectedBook(null)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {selectedBook.title}
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {currentPage + 1} / {selectedBook.pages.length}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="font-bold">Level {selectedBook.level}</span>
          </div>
        </div>

        {/* 进度条 */}
        <div className="mb-6">
          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* 阅读内容 */}
        <Card className="mb-6 hover:shadow-2xl transition-shadow">
          <CardContent className="p-8">
            {/* 插图区域 */}
            <div className="mb-8 text-center">
              <div className="text-9xl mb-4">{currentPageData.illustration}</div>
            </div>

            {/* 文本区域 */}
            <div className="text-center mb-8">
              <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-relaxed">
                {currentPageData.text}
              </p>
              {showTranslation && (
                <p className="text-xl text-slate-600 dark:text-slate-400">
                  {currentPageData.translation}
                </p>
              )}
            </div>

            {/* 按钮区域 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => speakText(currentPageData.text)}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
              >
                <Volume2 className="w-5 h-5 mr-2" />
                播放朗读
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setShowTranslation(!showTranslation)}
                className="border-purple-300 dark:border-purple-700"
              >
                {showTranslation ? '隐藏翻译' : '显示翻译'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 翻页按钮 */}
        <div className="flex justify-between">
          <Button
            size="lg"
            variant="outline"
            onClick={() => handlePageChange('prev')}
            disabled={currentPage === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            上一页
          </Button>
          {currentPage === selectedBook.pages.length - 1 ? (
            <Button
              size="lg"
              onClick={() => setSelectedBook(null)}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
            >
              完成阅读
            </Button>
          ) : (
            <Button
              size="lg"
              onClick={() => handlePageChange('next')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex items-center gap-2"
            >
              下一页
              <ChevronRight className="w-5 h-5" />
            </Button>
          )}
        </div>
      </div>
    );
  }

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
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            绘本阅读
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            选择一本绘本开始阅读
          </p>
        </div>
      </div>

      {/* 书籍列表 */}
      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <Card
              key={book.id}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-2 hover:border-purple-300 dark:hover:border-purple-700"
              onClick={() => handleBookSelect(book)}
            >
              <CardContent className="p-6">
                {/* 书籍封面 */}
                <div className={`mb-4 p-8 rounded-2xl bg-gradient-to-br ${book.color} text-white text-center shadow-lg`}>
                  <div className="text-6xl mb-2">{book.coverEmoji}</div>
                </div>

                {/* 书籍信息 */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    {book.description}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">
                    作者: {book.author}
                  </p>
                </div>

                {/* 难度标签 */}
                <div className="flex items-center justify-between">
                  <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                    Level {book.level}
                  </Badge>
                  <Badge variant="outline" className="border-purple-300 dark:border-purple-700">
                    {book.pages.length} 页
                  </Badge>
                </div>

                {/* 阅读按钮 */}
                <Button
                  className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  <Book className="w-4 h-4 mr-2" />
                  开始阅读
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>

      {/* 提示卡片 */}
      <Card className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="text-4xl">💡</div>
            <div>
              <h3 className="font-semibold mb-2">阅读小贴士</h3>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <li>• 先听一遍朗读，理解故事大意</li>
                <li>• 自己尝试朗读每一页</li>
                <li>• 遇到生词可以查看翻译</li>
                <li>• 每天坚持阅读15分钟</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
