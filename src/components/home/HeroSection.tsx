'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { fetchSiteConfig, SiteConfig } from '../../services/api';

export default function HeroSection() {
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

  return (
    <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            传承纺织工艺<span className="text-blue-600">创新</span>科技品质
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            {siteConfig?.company_name || '华纺集团'}致力于打造高品质纺织产品，融合传统工艺与现代技术，
            为客户提供卓越的纺织解决方案。
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              了解我们的产品
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition duration-300">
              联系我们
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image 
            src="/banner3.jpg" 
            alt={`${siteConfig?.company_name || '华纺集团'}展示`} 
            width={500} 
            height={300} 
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}