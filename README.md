# 华纺集团官网

这是一个使用 [Next.js](https://nextjs.org) 构建的传统纺织企业官方网站。

## 项目概述

华纺集团是一家拥有数十年历史的传统纺织企业，专注于高品质纺织品的研发、生产和销售。本项目旨在展示公司的产品、技术实力和企业文化。

## 技术栈

- [Next.js 16](https://nextjs.org)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)

## 运行项目

首先，安装依赖：

```bash
npm install
```

然后，启动开发服务器：

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 在浏览器中查看结果。

## 后端API对接

本项目需要与后端API服务进行对接，API基础URL通过环境变量配置：

1. 创建 `.env.local` 文件并配置 `NEXT_PUBLIC_API_BASE_URL`
2. 默认API地址为: `http://localhost:3001/api`

### 联系我们页面

联系我们页面的表单提交接口为: `POST /api/contact`

请求体格式:
```json
{
  "name": "用户名",
  "email": "用户邮箱",
  "phone": "用户电话",
  "message": "留言内容"
}
```

### 新闻资讯页面

新闻资讯页面需要以下API接口：

1. 获取新闻列表: `GET /api/news?page={page}&limit={limit}`
   - 参数:
     - page: 页码 (默认: 1)
     - limit: 每页条数 (默认: 6)
   - 响应格式:
     ```json
     {
       "news": [
         {
           "id": 1,
           "title": "新闻标题",
           "excerpt": "新闻摘要",
           "date": "2023-12-15",
           "author": "作者",
           "image": "图片URL"
         }
       ],
       "totalPages": 3
     }
     ```

2. 获取热门新闻: `GET /api/news/popular`
   - 响应格式:
     ```json
     [
       {
         "id": 1,
         "title": "热门新闻标题"
       }
     ]
     ```

### 产品中心页面

产品中心页面需要以下API接口：

1. 获取产品分类: `GET /api/products/categories`
   - 响应格式:
     ```json
     [
       {
         "id": 1,
         "name": "分类名称",
         "description": "分类描述"
       }
     ]
     ```

2. 获取产品列表: `GET /api/products?page={page}&limit={limit}&categoryId={categoryId}`
   - 参数:
     - page: 页码 (默认: 1)
     - limit: 每页条数 (默认: 8)
     - categoryId: 分类ID (可选)
   - 响应格式:
     ```json
     {
       "products": [
         {
           "id": 1,
           "name": "产品名称",
           "category": "分类名称",
           "categoryId": 1,
           "image": "图片URL",
           "description": "产品描述"
         }
       ],
       "totalPages": 3
     }
     ```

## 项目结构

```
.
├── public/                      # 静态资源文件
│   ├── banner.jpg               # 首页横幅图片
│   ├── banner2.jpg              # 首页横幅图片
│   ├── banner3.jpg              # 首页横幅图片
│   └── ...                      # 其他静态资源
├── src/                         # 源代码目录
│   ├── app/                     # 应用程序目录 (使用App Router)
│   │   ├── about/               # 关于我们页面
│   │   │   └── page.tsx         # 关于我们页面入口
│   │   ├── contact/             # 联系我们页面
│   │   │   └── page.tsx         # 联系我们页面入口
│   │   ├── news/                # 新闻资讯页面
│   │   │   └── page.tsx         # 新闻资讯页面入口
│   │   ├── products/            # 产品中心页面
│   │   │   └── page.tsx         # 产品中心页面入口
│   │   ├── quality/             # 质量体系页面
│   │   │   └── page.tsx         # 质量体系页面入口
│   │   ├── favicon.ico          # 网站图标
│   │   ├── globals.css          # 全局样式
│   │   ├── layout.tsx           # 根布局文件
│   │   └── page.tsx             # 首页入口
│   ├── components/              # 可复用组件
│   │   ├── home/                # 首页专用组件
│   │   │   ├── AboutSection.tsx     # 首页关于模块
│   │   │   ├── ContactSection.tsx   # 首页联系模块
│   │   │   ├── FeaturesSection.tsx  # 首页特性模块
│   │   │   ├── HeroSection.tsx      # 首页横幅模块
│   │   │   └── ProductsPreview.tsx  # 首页产品预览模块
│   │   ├── news/                # 新闻页面专用组件
│   │   │   ├── NewsList.tsx     # 新闻列表组件
│   │   │   └── NewsSidebar.tsx  # 新闻侧边栏组件
│   │   ├── products/            # 产品页面专用组件
│   │   │   ├── ProductCategories.tsx  # 产品分类组件
│   │   │   └── ProductList.tsx        # 产品列表组件
│   │   ├── ui/                  # 通用UI组件
│   │   │   ├── Button.tsx       # 按钮组件
│   │   │   ├── Card.tsx         # 卡片组件
│   │   │   └── Container.tsx    # 容器组件
│   │   ├── Certifications.tsx   # 质量认证组件
│   │   ├── CompanyIntro.tsx     # 公司介绍组件
│   │   ├── ContactForm.tsx      # 联系表单组件
│   │   ├── ContactInfo.tsx      # 联系信息组件
│   │   ├── Footer.tsx           # 页脚组件
│   │   ├── Header.tsx           # 页头组件
│   │   ├── HistoryTimeline.tsx  # 历史时间线组件
│   │   ├── ManagementTeam.tsx   # 管理团队组件
│   │   ├── PageTitle.tsx        # 页面标题组件
│   │   ├── QualityPolicy.tsx    # 质量方针组件
│   │   └── QualityProcess.tsx   # 质量流程组件
├── .eslintrc.json              # ESLint配置
├── next.config.js               # Next.js配置
├── package.json                 # 项目依赖和脚本
├── postcss.config.js            # PostCSS配置
├── tailwind.config.js           # Tailwind CSS配置
└── tsconfig.json                # TypeScript配置
```

## 页面模块化

所有页面均已实现模块化设计，将页面内容拆分为独立的可复用组件：

- 首页拆分为: Header, HeroSection, FeaturesSection, ProductsPreview, AboutSection, ContactSection, Footer
- 关于我们拆分为: Header, PageTitle, CompanyIntro, HistoryTimeline, ManagementTeam, Footer
- 产品中心拆分为: Header, PageTitle, ProductCategories, ProductList, Footer
- 新闻资讯拆分为: Header, PageTitle, NewsList, NewsSidebar, Footer
- 质量体系拆分为: Header, PageTitle, QualityPolicy, Certifications, QualityProcess, Footer
- 联系我们拆分为: Header, PageTitle, ContactForm, ContactInfo, Footer

## 主要功能

- 响应式设计，适配各种设备屏幕
- 简洁大气的界面设计，符合纺织企业形象
- 清晰的信息架构，方便用户浏览
- 现代化的前端技术栈，保证性能和可维护性
- 完整的模块化组件系统，提高代码复用性和可维护性

## 部署

可以使用 [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) 一键部署此 Next.js 应用。

有关 Next.js 部署的更多信息，请参阅 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying)。

## 开发说明

如需修改页面内容，请编辑相应的 `.tsx` 文件。页面会在保存后自动更新。

如需修改样式，请编辑 `app/globals.css` 文件或在组件中使用 Tailwind CSS 类。

### 组件开发规范

1. 所有组件应遵循单一职责原则
2. 组件应尽量无状态，通过props接收数据
3. 组件文件使用PascalCase命名
4. 组件应具有清晰的接口定义（TypeScript类型）