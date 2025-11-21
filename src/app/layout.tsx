import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { fetchSiteConfig } from "../services/api";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 默认网站配置
const defaultSiteConfig = {
  company_name: "华纺集团",
  description: "华纺集团是一家拥有数十年历史的传统纺织企业，致力于高品质纺织品的研发、生产和销售。",
  site_title: "华纺集团 - 专业纺织企业"
};

// 动态生成metadata
export async function generateMetadata(): Promise<Metadata> {
  try {
    const siteConfig = await fetchSiteConfig();
    return {
      title: siteConfig.site_title || `${siteConfig.company_name} - 专业纺织企业`,
      description: siteConfig.company_description || defaultSiteConfig.description,
    };
  } catch (error) {
    console.error("Failed to fetch site config for metadata:", error);
    return {
      title: defaultSiteConfig.site_title,
      description: defaultSiteConfig.description,
    };
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}