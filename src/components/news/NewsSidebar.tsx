'use client';

import React, { useState } from 'react';

interface PopularNewsItem {
  id: number;
  title: string;
}

interface NewsSidebarProps {
  popularNews: PopularNewsItem[];
}

export default function NewsSidebar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 搜索功能可以在这里实现
    console.log('搜索关键词:', searchQuery);
  };

  return (
    <div>
      {/* Search */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">搜索新闻</h3>
        <form onSubmit={handleSearch}>
          <div className="relative">
            <input 
              type="text" 
              placeholder="输入关键词..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button 
              type="submit"
              className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
      
      {/* Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">最新公告</h3>
        <ul className="space-y-3">
          <li className="text-blue-600 hover:text-blue-800 cursor-pointer">
            <span className="text-sm text-gray-500 mr-2">2023-06-01</span>
            公司新生产线正式投产
          </li>
          <li className="text-blue-600 hover:text-blue-800 cursor-pointer">
            <span className="text-sm text-gray-500 mr-2">2023-05-15</span>
            获得ISO14001环境管理体系认证
          </li>
          <li className="text-blue-600 hover:text-blue-800 cursor-pointer">
            <span className="text-sm text-gray-500 mr-2">2023-04-22</span>
            参加国际纺织机械展览会圆满成功
          </li>
        </ul>
      </div>
    </div>
  );
}