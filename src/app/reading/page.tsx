'use client';

import { useState } from 'react';
import { 
  ArrowLeft, BookOpen, ChevronLeft, ChevronRight, 
  Search, Volume2, Star, Bookmark, Lightbulb 
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { allPoetry, getPoetryByGrade, searchPoetry } from '@/lib/poetry-data';

type Poetry = {
  id: number;
  title: string;
  author: string;
  dynasty: string;
  level: number;
  content: string[];
  translation: string;
  appreciation: string;
  keywords: string[];
};

export default function PoetryPage() {
  const [selectedPoetry, setSelectedPoetry] = useState<Poetry | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showTranslation, setShowTranslation] = useState(false);
  const [showAppreciation, setShowAppreciation] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  // 获取显示的诗词列表
  const displayPoetryList = selectedGrade
    ? getPoetryByGrade(selectedGrade)
    : searchQuery
    ? searchPoetry(searchQuery)
    : allPoetry;

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handlePoetrySelect = (poetry: Poetry) => {
    setSelectedPoetry(poetry);
    setCurrentPage(0);
    setShowTranslation(false);
    setShowAppreciation(false);
  };

  const getGradeColor = (grade: number) => {
    switch (grade) {
      case 3: return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 border-green-300 dark:border-green-700';
      case 4: return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 border-blue-300 dark:border-blue-700';
      case 5: return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 border-purple-300 dark:border-purple-700';
      case 6: return 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300 border-pink-300 dark:border-pink-700';
      default: return 'bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300 border-slate-300 dark:border-slate-700';
    }
  };

  const getGradeName = (grade: number) => {
    switch (grade) {
      case 3: return '三年级';
      case 4: return '四年级';
      case 5: return '五年级';
      case 6: return '六年级';
      default: return '';
    }
  };

  // 如果选择了诗词，显示详情页
  if (selectedPoetry) {
    const totalPages = selectedPoetry.content.length;
    const currentContent = selectedPoetry.content[currentPage];
    const progress = totalPages > 0 ? ((currentPage + 1) / totalPages) * 100 : 0;

    return (
      <div className="min-h-screen p-4 md:p-8 max-w-5xl mx-auto">
        {/* 顶部导航 */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => setSelectedPoetry(null)}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{selectedPoetry.title}</h1>
              <p className="text-sm text-muted-foreground">
                {selectedPoetry.dynasty} · {selectedPoetry.author}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="font-bold">Grade {selectedPoetry.level}</span>
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
          <div className="text-center text-sm text-muted-foreground mt-2">
            {currentPage + 1} / {totalPages}
          </div>
        </div>

        {/* 诗词内容 */}
        <Card className="mb-6">
          <CardContent className="p-8">
            {/* 诗句显示 */}
            <div className="text-center mb-8">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-relaxed">
                {currentContent}
              </div>
              
              {/* 朗读按钮 */}
              <Button
                variant="outline"
                size="lg"
                onClick={() => speakText(currentContent)}
                className="gap-2"
              >
                <Volume2 className="w-5 h-5" />
                朗读
              </Button>
            </div>

            {/* 导航按钮 */}
            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                上一句
              </Button>

              <Button
                variant="outline"
                onClick={() => speakText(selectedPoetry.content.join(''))}
              >
                <Volume2 className="w-4 h-4 mr-2" />
                全文朗读
              </Button>

              <Button
                variant="outline"
                onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                disabled={currentPage === totalPages - 1}
              >
                下一句
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 翻译和赏析 */}
        <Tabs defaultValue="content" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="content">全文</TabsTrigger>
            <TabsTrigger value="translation">译文</TabsTrigger>
            <TabsTrigger value="appreciation">赏析</TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {selectedPoetry.content.map((line, index) => (
                    <div
                      key={index}
                      className={`text-center text-2xl font-medium transition-all ${
                        index === currentPage ? 'text-primary scale-105' : 'text-foreground'
                      }`}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="translation">
            <Card>
              <CardContent className="p-6">
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-lg leading-relaxed">
                    {selectedPoetry.translation}
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appreciation">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                    <div className="prose dark:prose-invert max-w-none">
                      <h3 className="text-lg font-semibold mb-2">赏析</h3>
                      <p className="text-base leading-relaxed">
                        {selectedPoetry.appreciation}
                      </p>
                    </div>
                  </div>

                  {/* 关键词 */}
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                      重点词汇
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPoetry.keywords.map((keyword, index) => (
                        <Badge key={index} variant="secondary">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  // 诗词列表页
  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
      {/* 顶部导航 */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">古诗词</h1>
            <p className="text-sm text-muted-foreground">
              经典古诗词，与课本同步
            </p>
          </div>
        </div>

        {/* 搜索框 */}
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="搜索诗词、作者、关键词..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* 年级筛选 */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">按年级选择</h2>
        <div className="flex flex-wrap gap-3">
          <Button
            variant={selectedGrade === null ? 'default' : 'outline'}
            onClick={() => setSelectedGrade(null)}
          >
            全部
          </Button>
          {[3, 4, 5, 6].map((grade) => (
            <Button
              key={grade}
              variant={selectedGrade === grade ? 'default' : 'outline'}
              onClick={() => setSelectedGrade(grade)}
            >
              {getGradeName(grade)}
            </Button>
          ))}
        </div>
      </div>

      {/* 统计信息 */}
      <div className="mb-6 text-sm text-muted-foreground">
        共 {displayPoetryList.length} 首诗词
        {selectedGrade && ` · ${getGradeName(selectedGrade)}`}
        {searchQuery && ` · 搜索: "${searchQuery}"`}
      </div>

      {/* 诗词列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayPoetryList.map((poetry) => (
          <Card
            key={poetry.id}
            className="cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02]"
            onClick={() => handlePoetrySelect(poetry)}
          >
            <CardContent className="p-6">
              {/* 标题和作者 */}
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-1">{poetry.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {poetry.dynasty} · {poetry.author}
                </p>
              </div>

              {/* 年级标签 */}
              <div className="mb-4">
                <Badge className={getGradeColor(poetry.level)}>
                  {getGradeName(poetry.level)}
                </Badge>
              </div>

              {/* 诗词内容预览 */}
              <div className="space-y-1 mb-4">
                {poetry.content.slice(0, 2).map((line, index) => (
                  <div
                    key={index}
                    className="text-sm text-muted-foreground truncate"
                  >
                    {line}
                  </div>
                ))}
                {poetry.content.length > 2 && (
                  <div className="text-sm text-muted-foreground">
                    ...
                  </div>
                )}
              </div>

              {/* 关键词 */}
              <div className="flex flex-wrap gap-1">
                {poetry.keywords.slice(0, 3).map((keyword, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 空状态 */}
      {displayPoetryList.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-xl font-semibold mb-2">未找到相关诗词</h3>
          <p className="text-muted-foreground">
            {searchQuery ? '请尝试其他搜索词' : '暂时没有诗词数据'}
          </p>
        </div>
      )}
    </div>
  );
}
