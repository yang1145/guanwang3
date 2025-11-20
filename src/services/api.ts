// API基础URL - 从环境变量获取
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api';

// 联系表单数据类型
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// 新闻数据类型
export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}

// 新闻详情数据类型
export interface NewsDetailItem {
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
  image: string;
  views: number;
}

// 热门新闻数据类型
export interface PopularNewsItem {
  id: number;
  title: string;
}

// 产品分类数据类型
export interface ProductCategory {
  id: number;
  name: string;
  description: string;
}

// 产品数据类型
export interface Product {
  id: number;
  name: string;
  category: string;
  categoryId: number;
  image: string;
  description: string;
}

// 提交联系表单
export const submitContactForm = async (data: ContactFormData): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Contact form submitted successfully:', result);
    return true;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error; // 重新抛出错误以便上层组件可以处理
  }
};

// 获取新闻列表
export const fetchNewsList = async (page: number = 1, limit: number = 6): Promise<{ news: NewsItem[], totalPages: number }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/news?page=${page}&limit=${limit}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.data ? result : { news: [], totalPages: 1 };
  } catch (error) {
    console.error('Error fetching news list:', error);
    return { news: [], totalPages: 1 }; // 返回默认值而不是抛出错误
  }
};

// 获取所有新闻
export const fetchAllNews = async (): Promise<NewsItem[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/news`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.data || [];
  } catch (error) {
    console.error('Error fetching all news:', error);
    throw error; // 重新抛出错误以便上层组件可以处理
  }
};

// 获取新闻详情
export const fetchNewsDetail = async (id: number): Promise<NewsDetailItem> => {
  try {
    const response = await fetch(`${API_BASE_URL}/news/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching news detail:', error);
    throw error; // 重新抛出错误以便上层组件可以处理
  }
};

// 从产品数据中提取分类
export const extractProductCategories = (products: Product[]): ProductCategory[] => {
  const categoriesMap = new Map<number, ProductCategory>();
  
  products.forEach(product => {
    if (!categoriesMap.has(product.categoryId)) {
      categoriesMap.set(product.categoryId, {
        id: product.categoryId,
        name: product.category,
        description: ''
      });
    }
  });
  
  return Array.from(categoriesMap.values());
};

// 获取产品列表
export const fetchProducts = async (category: number | undefined): Promise<Product[]> => {
  try {
    let url = `${API_BASE_URL}/products`;
    
    if (category !== undefined) {
      url += `?category=${category}`;
    }
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // 重新抛出错误以便上层组件可以处理
  }
};