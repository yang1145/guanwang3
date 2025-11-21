import React from 'react';

interface ProductCategory {
  id: number;
  name: string;
  description: string;
}

interface ProductCategoriesProps {
  categories: ProductCategory[];
  selectedCategory: number | null;
  onCategoryChange?: (categoryId: number | null) => void;
}

export default function ProductCategories({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: ProductCategoriesProps) {
  const handleCategoryClick = (categoryId: number | null) => {
    onCategoryChange && onCategoryChange(categoryId);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">产品分类</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          我们提供多种类型的纺织产品，满足不同领域的需求
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* "所有产品" 选项 */}
          <div 
            className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer border-2 ${
              selectedCategory === null ? 'border-blue-500' : 'border-transparent'
            }`}
            onClick={() => handleCategoryClick(null)}
          >
            <div className="flex items-start">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">所有产品</h3>
                <p className="text-gray-600">浏览我们完整的產品系列</p>
              </div>
            </div>
          </div>
          
          {categories.map((category) => (
            <div 
              key={category.id} 
              className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer border-2 ${
                selectedCategory === category.id ? 'border-blue-500' : 'border-transparent'
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="flex items-start">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}