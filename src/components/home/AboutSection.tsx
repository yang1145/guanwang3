'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { fetchSiteConfig, SiteConfig } from '../../services/api';

export default function AboutSection() {
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <Image 
              src="/banner2.jpg" 
              alt={siteConfig?.company_name || '华纺集团'} 
              width={500} 
              height={300} 
              className="rounded-xl shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">关于{siteConfig?.company_name || '华纺集团'}</h2>
            <p className="text-gray-600 mb-6">
              {siteConfig?.company_name || '华纺集团'}成立于1990年，是一家专业从事纺织品研发、生产与销售的企业。
              经过三十余年的发展，已成为行业内具有影响力的企业之一。
            </p>
            <p className="text-gray-600 mb-6">
              我们拥有一支经验丰富的团队，在传统纺织工艺的基础上不断创新，
              引进先进的生产设备和技术，确保产品质量达到国际标准。
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">年产值超亿元</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">出口多个国家</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">员工超过500人</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">多项专利技术</span>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              了解更多
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}