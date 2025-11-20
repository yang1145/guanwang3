import React from 'react';

export default function ManagementTeam() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">管理团队</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          我们的管理团队由一批经验丰富、专业素质高的专业人士组成
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="text-center">
              <div className="mx-auto mb-6">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">经理 {item}</h3>
              <p className="text-gray-600">拥有丰富的行业经验和管理能力</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}