import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioHero from '../components/PortfolioHero';
import ProjectsGrid from '../components/ProjectsGrid';
import CTA from '../components/CTA';

export default function PortfolioPage() {
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // All available categories
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'custom-platform', name: 'Custom Platforms' },
    { id: 'ppc', name: 'PPC' },
    { id: 'email-marketing', name: 'Email Marketing' },
    { id: 'social-media', name: 'Social Media' },
    { id: 'linkedin', name: 'LinkedIn Management' },
    { id: 'consultancy', name: 'Consultancy' }
  ];

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PortfolioHero 
          categories={categories} 
          activeCategory={activeCategory} 
          onCategoryChange={handleCategoryChange} 
        />
        <ProjectsGrid activeCategory={activeCategory} />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}