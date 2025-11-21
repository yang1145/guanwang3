'use client';

import React, { useState, useEffect } from 'react';
import { fetchSiteConfig, SiteConfig } from '../services/api';

export default function Footer() {
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
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
              <h3 className="text-xl font-bold">{siteConfig?.company_name || '华纺集团'}</h3>
            </div>
            <p className="text-gray-400 mb-4">
              {siteConfig?.company_description || '专注纺织行业三十余载，致力于提供高品质纺织产品和服务。'}
            </p>
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((item) => (
                <a key={item} href="#" className="text-gray-400 hover:text-white">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">快速链接</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-white">网站首页</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">关于我们</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-white">产品中心</a></li>
              <li><a href="/news" className="text-gray-400 hover:text-white">新闻资讯</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">联系我们</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">产品类别</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white">棉纺织品</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">化纤制品</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">混纺面料</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">产业用纺织品</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">功能性纤维</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">联系方式</h4>
            <address className="not-italic text-gray-400">
              <p className="mb-3">地址：中国某地纺织工业园区</p>
              <p className="mb-3">电话：010-12345678</p>
              <p className="mb-3">传真：010-87654321</p>
              <p>邮箱：info@huafang.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p className="mb-2">{siteConfig?.copyright_info || `© ${new Date().getFullYear()} ${siteConfig?.company_name || '华纺集团'}版权所有`}</p>
          {siteConfig?.icp_number && (
            <p className="mb-2">
              <a href="http://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {siteConfig.icp_number}
              </a>
            </p>
          )}
          {siteConfig?.police_number && (
            <p>
              <a href="http://www.beian.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {siteConfig.police_number}
              </a>
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}