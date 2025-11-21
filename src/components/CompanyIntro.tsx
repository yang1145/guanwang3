'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { fetchSiteConfig, SiteConfig } from '../services/api';

export default function CompanyIntro() {
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
              alt={`${siteConfig?.company_name || '华纺集团'}公司简介`} 
              width={500} 
              height={300} 
              className="rounded-xl shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">公司简介</h2>
            <p className="text-gray-600 mb-6">
              {siteConfig?.company_description || (
                <>
                  华纺集团成立于1990年，是一家专业从事纺织品研发、生产与销售的企业。
                  经过三十余年的发展，已成为行业内具有影响力的企业之一。
                </>
              )}
            </p>
            <p className="text-gray-600 mb-6">
              我们拥有一支经验丰富的团队，在传统纺织工艺的基础上不断创新，
              引进先进的生产设备和技术，确保产品质量达到国际标准。
            </p>
            <p className="text-gray-600 mb-6">
              公司产品远销欧美、东南亚等多个国家和地区，深受客户好评。
              我们始终坚持"质量第一、客户至上"的经营理念，致力于为客户提供最优质的产品和服务。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}