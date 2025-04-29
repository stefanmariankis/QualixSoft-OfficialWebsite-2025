import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Category {
  id: string;
  name: string;
}

interface PortfolioHeroProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function PortfolioHero({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: PortfolioHeroProps) {
  const filtersRef = useRef<HTMLDivElement>(null);

  // Scroll active filter into view when it changes
  useEffect(() => {
    if (filtersRef.current) {
      const activeElement = filtersRef.current.querySelector(`[data-category="${activeCategory}"]`);
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeCategory]);

  return (
    <section className="relative pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-primary opacity-5"></div>
        <div className="absolute -left-20 top-40 w-40 h-40 rounded-full bg-blue-400 opacity-5"></div>
        <div className="absolute right-1/4 bottom-0 w-60 h-60 rounded-full bg-purple-400 opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Title */}
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Work Speaks For Itself
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our diverse portfolio of digital solutions that have driven real business results across various industries.
          </motion.p>
          
          {/* Filters */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div 
              ref={filtersRef}
              className="flex overflow-x-auto space-x-2 pb-4 px-4 scrollbar-hide snap-x"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  data-category={category.id}
                  className={`px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 snap-start ${
                    activeCategory === category.id
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => onCategoryChange(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* Gradient edges for scroll indication */}
            <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}