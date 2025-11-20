import React from 'react';

export default function QualityProcess() {
  // 质量控制流程
  const qualityProcesses = [
    {
      id: 1,
      title: '原料检验',
      description: '对采购的原材料进行严格检验，确保符合质量标准。'
    },
    {
      id: 2,
      title: '生产过程控制',
      description: '在生产过程中设置多个质量控制点，实时监控产品质量。'
    },
    {
      id: 3,
      title: '成品检测',
      description: '对成品进行全面检测，确保各项指标符合标准要求。'
    },
    {
      id: 4,
      title: '出厂检验',
      description: '产品出厂前进行最终检验，确保客户收到的产品质量合格。'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">质量控制流程</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          我们建立了完善的质量控制体系，确保每一个环节都符合质量标准
        </p>
        
        <div className="relative">
          {/* Process line */}
          <div className="absolute left-8 top-12 bottom-12 w-1 bg-blue-200 hidden md:block"></div>
          
          <div className="space-y-8">
            {qualityProcesses.map((process, index) => (
              <div key={process.id} className="flex flex-col md:flex-row items-start">
                <div className="mb-4 md:mb-0 md:mr-8 relative">
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl z-10 relative">
                    {index + 1}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}