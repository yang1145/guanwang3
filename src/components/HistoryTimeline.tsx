'use client';

import React, { useState, useEffect } from 'react';
import { fetchSiteConfig, SiteConfig } from '../services/api';

export default function HistoryTimeline() {
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

  const getDefaultHistoryItems = () => [
    { year: '1990年', description: `${siteConfig?.company_name || '华纺集团'}正式成立，专注于传统纺织品生产`, side: 'left' },
    { year: '1995年', description: '引进第一条现代化生产线，产能提升300%', side: 'right' },
    { year: '2005年', description: '通过ISO9001质量管理体系认证', side: 'left' },
    { year: '2010年', description: '产品出口至欧美市场，开启国际化进程', side: 'right' },
    { year: '2020年', description: '建立研发中心，加强产品创新能力', side: 'left' },
  ];

  const historyItems = getDefaultHistoryItems();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">发展历程</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {historyItems.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row">
                {item.side === 'left' ? (
                  <>
                    <div className="md:w-1/2 mb-4 md:mb-0 md:pr-8 md:text-right">
                      <div className="bg-white p-6 rounded-lg shadow-md inline-block ml-auto">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.year}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                      <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-white z-10"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0"></div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 mb-4 md:mb-0 md:pr-8 md:text-right mt-4 md:mt-0"></div>
                    <div className="md:w-1/2 flex justify-center">
                      <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-white z-10"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                      <div className="bg-white p-6 rounded-lg shadow-md inline-block mr-auto">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.year}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}