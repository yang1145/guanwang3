import React from 'react';
import Image from 'next/image';

export default function ProductsPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">我们的产品</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            多年行业经验积累，提供多种类高品质纺织产品
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">纺织产品 {item}</h3>
                <p className="text-gray-600 mb-4">
                  高品质纺织材料，适用于多种用途和场景
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-800">
                  了解更多 →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition duration-300">
            查看全部产品
          </button>
        </div>
      </div>
    </section>
  );
}