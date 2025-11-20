'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import { fetchNewsDetail, NewsDetailItem } from '@/services/api';

export default function NewsDetailPage() {
  const params = useParams();
  const { id } = params;
  const [news, setNews] = useState<NewsDetailItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const loadNewsDetail = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const newsData = await fetchNewsDetail(Number(id));
        setNews(newsData);
      } catch (err) {
        setError('获取新闻详情失败，请稍后重试');
        console.error('Error loading news detail:', err);
      } finally {
        setLoading(false);
      }
    };

    loadNewsDetail();
  }, [id]);

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="news" />

      {loading ? (
        <div className="container mx-auto px-4 py-8 text-center">
          <p>加载中...</p>
        </div>
      ) : error ? (
        <div className="container mx-auto px-4 py-8">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p>{error}</p>
            <button 
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              onClick={() => window.location.reload()}
            >
              重新加载
            </button>
          </div>
        </div>
      ) : news ? (
        <>
          <PageTitle title={news.title} />
          
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 mb-8" />
                  
                  <div className="flex items-center text-gray-600 mb-6">
                    <span>作者: {news.author}</span>
                    <span className="mx-2">•</span>
                    <span>{news.date}</span>
                    <span className="mx-2">•</span>
                    <span>浏览量: {news.views}</span>
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      {news.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="container mx-auto px-4 py-8">
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
            <p>未找到相关新闻</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}