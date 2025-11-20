import React from 'react';

export default function QualityPolicy() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
          </div>
          <div className="md:w-1/2 md:pl-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">质量方针</h2>
            <p className="text-gray-600 mb-6">
              华纺集团始终坚持"质量第一、客户至上"的质量方针，致力于为客户提供最优质的产品和服务。
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <span className="font-bold">质量第一：</span>将产品质量视为企业生存和发展的根本
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <span className="font-bold">持续改进：</span>不断优化生产工艺和管理体系，提升产品质量
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <span className="font-bold">客户满意：</span>以满足客户需求为最终目标，提供超越期望的产品和服务
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <span className="font-bold">全员参与：</span>每个员工都是质量管理的参与者，共同维护产品质量
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}