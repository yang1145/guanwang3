'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import NewsList from '@/components/news/NewsList';
import NewsSidebar from '@/components/news/NewsSidebar';
import { fetchAllNews, NewsItem } from '@/services/api';

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // 获取所有新闻
        const newsData = await fetchAllNews();
        setNews(newsData);
      } catch (err) {
        setError('获取数据失败，请稍后重试');
        console.error('Error loading data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="news" />

      <PageTitle title="新闻资讯" />

      {/* News Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            {/* Main Content */}
            <div className="lg:w-2/3 lg:pr-12">
              {loading ? (
                <div className="text-center py-8">
                  <p>加载中...</p>
                </div>
              ) : error ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  {error}
                </div>
              ) : (
                <NewsList 
                  news={news} 
                />
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <NewsSidebar />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}