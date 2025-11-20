import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import ProductsPreview from '@/components/home/ProductsPreview';
import AboutSection from '@/components/home/AboutSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="home" />

      <HeroSection />

      <FeaturesSection />

      <ProductsPreview />

      <AboutSection />

      <ContactSection />

      <Footer />
    </div>
  );
}