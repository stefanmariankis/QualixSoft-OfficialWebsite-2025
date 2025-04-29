import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
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
    { id: 'branding', name: 'Branding' },
    { id: 'ui-ux-design', name: 'UI/UX Design' },
    { id: 'ppc', name: 'PPC' },
    { id: 'email-marketing', name: 'Email Marketing' },
    { id: 'social-media', name: 'Social Media' },
    { id: 'content-strategy', name: 'Content Strategy' },
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
        {/* Simplified hero without filters */}
        <PortfolioHero />
        
        {/* Category filter tabs */}
        <section className="bg-white border-b border-gray-100 sticky top-20 z-30 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center mb-4">
              <Filter className="w-4 h-4 mr-2 text-primary" />
              <h3 className="text-sm font-medium text-gray-700">Filter by category:</h3>
            </div>
            
            <div className="flex overflow-x-auto pb-3 scrollbar-hide gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300
                    ${activeCategory === category.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Projects grid */}
        <ProjectsGrid activeCategory={activeCategory} />
        
        <CTA />
      </main>
      <Footer />
    </div>
  );
}