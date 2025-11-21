'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchSiteConfig, SiteConfig } from '../services/api';

interface HeaderProps {
  currentPage: string;
}

export default function Header({ currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [siteConfig, setSiteConfig] = useState<SiteConfig | null>(null);

  useEffect(() => {
    const loadSiteConfig = async () => {
      try {
        const config = await fetchSiteConfig();
        setSiteConfig(config);
      } catch (error) {
        console.error('Failed to load site config:', error);
      }
    };

    loadSiteConfig();
  }, []);

  const navItems = [
    { name: '首页', path: '/' },
    { name: '关于我们', path: '/about' },
    { name: '产品中心', path: '/products' },
    { name: '新闻资讯', path: '/news' },
    { name: '质量体系', path: '/quality' },
    { name: '联系我们', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && currentPage === 'home') return true;
    return path === `/${currentPage}`;
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
          <h1 className="text-2xl font-bold text-gray-800">{siteConfig?.company_name || '华纺集团'}</h1>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  href={item.path} 
                  className={`font-medium ${isActive(item.path) ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="container mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  href={item.path} 
                  className={`block py-2 ${isActive(item.path) ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}