import React from 'react';

export default function Certifications() {
  // 质量认证数据
  const certifications = [
    {
      id: 1,
      title: 'ISO 9001质量管理体系认证',
      description: '这是我们最重要的质量管理体系认证，确保我们的产品和服务符合国际标准。',
      image: ''
    },
    {
      id: 2,
      title: 'ISO 14001环境管理体系认证',
      description: '体现了我们对环境保护的承诺，确保生产过程符合环保要求。',
      image: ''
    },
    {
      id: 3,
      title: 'OEKO-TEX Standard 100认证',
      description: '确保我们的纺织品不含有害物质，对人体健康无害。',
      image: ''
    },
    {
      id: 4,
      title: 'GOTS全球有机纺织品标准认证',
      description: '针对有机纤维纺织品的认证，确保从原料到成品的全过程符合有机标准。',
      image: ''
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">质量认证</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          我们通过了多项国际权威认证，确保产品质量达到国际先进水平
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{cert.title}</h3>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                <button className="text-blue-600 font-medium hover:text-blue-800">
                  了解更多 →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}