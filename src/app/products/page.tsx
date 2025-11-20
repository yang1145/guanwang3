'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import ProductCategories from '@/components/products/ProductCategories';
import ProductList from '@/components/products/ProductList';
import { fetchProducts, extractProductCategories, ProductCategory, Product } from '@/services/api';

export default function ProductsPage() {
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // 获取产品列表
        const productsData = await fetchProducts(selectedCategory !== null ? selectedCategory : undefined);
        setProducts(productsData);
        
        // 从产品数据中提取分类
        const categoriesData = extractProductCategories(productsData);
        setCategories(categoriesData);
      } catch (err) {
        setError('获取数据失败，请稍后重试');
        console.error('Error loading data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [selectedCategory, currentPage]);

  const handleCategoryChange = (categoryId: number | null) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1); // 重置到第一页
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="products" />

      <PageTitle title="产品中心" />

      {loading && categories.length === 0 ? (
        <div className="container mx-auto px-4 py-8 text-center">
          <p>加载中...</p>
        </div>
      ) : error && categories.length === 0 ? (
        <div className="container mx-auto px-4 py-8">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p>{error}</p>
            <button 
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              onClick={() => window.location.reload()}
            >
              重新加载
            </button>
          </div>
        </div>
      ) : (
        <>
          <ProductCategories 
            categories={categories} 
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          {loading ? (
            <div className="container mx-auto px-4 py-8 text-center">
              <p>加载中...</p>
            </div>
          ) : error ? (
            <div className="container mx-auto px-4 py-8">
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                <p>{error}</p>
                <button 
                  className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  onClick={() => window.location.reload()}
                >
                  重新加载
                </button>
              </div>
            </div>
          ) : (
            <ProductList 
              products={products} 
              categories={categories} 
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          )}
        </>
      )}

      <Footer />
    </div>
  );
}