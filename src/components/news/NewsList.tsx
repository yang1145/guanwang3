import React from 'react';
import Link from 'next/link';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}

interface NewsListProps {
  news: NewsItem[];
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export default function NewsList({ 
  news, 
  currentPage, 
  totalPages, 
  onPageChange 
}: NewsListProps) {
  const handlePageChange = (page: number) => {
    if (onPageChange && currentPage !== undefined && totalPages !== undefined && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">最新新闻</h2>
      
      <div className="space-y-8">
        {news && news.length > 0 ? (
          news.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row border-b border-gray-100 pb-8">
              <div className="sm:w-1/3 mb-4 sm:mb-0 sm:mr-6">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
              </div>
              <div className="sm:w-2/3">
                <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer">
                  <Link href={`/news/${item.id}`}>
                    {item.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{item.date}</span>
                  <span className="mx-2">•</span>
                  <span>{item.author}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center py-8">暂无新闻数据</p>
        )}
      </div>
      
      {/* Pagination */}
      {totalPages !== undefined && currentPage !== undefined && totalPages > 1 && (
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-2 rounded-md ${
                currentPage === 1 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              ← 上一页
            </button>
            
            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-2 rounded-md ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {page}
                </button>
              );
            })}
            
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 rounded-md ${
                currentPage === totalPages 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              下一页 →
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}