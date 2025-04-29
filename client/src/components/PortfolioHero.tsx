import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Filter, LayoutGrid } from 'lucide-react';

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
  
  // Get the active category name for display
  const activeCategoryName = categories.find(c => c.id === activeCategory)?.name || 'All Projects';

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
    <section className="relative pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Elements - 2025 Style with Blur Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-primary opacity-5 blur-3xl"></div>
        <div className="absolute -left-20 top-40 w-80 h-80 rounded-full bg-blue-400 opacity-5 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-0 w-80 h-80 rounded-full bg-purple-400 opacity-5 blur-3xl"></div>
      </div>
      
      {/* Decorative grid pattern (2025 style) */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwIDAgMTMuNDMxIDEzLjQzMSAwIDMwIDBjMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjRUJFQkVCIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-5 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge Indicator - 2025 Style */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center bg-white/80 backdrop-blur-sm text-primary rounded-full px-4 py-1.5 mb-6 border border-primary/10 shadow-sm"
          >
            <Code className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Our Projects</span>
          </motion.div>
          
          {/* Animated Title with Modern Typography */}
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Work Speaks <span className="text-primary">For Itself</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our diverse portfolio of digital solutions that have driven 
            real business results across various industries.
          </motion.p>
          
          {/* Filters - Enhanced Design for 2025 */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center bg-white/90 backdrop-blur-sm py-1.5 px-4 rounded-full shadow-sm border border-gray-100">
                <Filter className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm font-medium text-gray-700">Filter by category</span>
              </div>
            </div>
            
            <div 
              ref={filtersRef}
              className="flex overflow-x-auto justify-center space-x-2 pb-4 px-4 scrollbar-hide snap-x"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  data-category={category.id}
                  className={`px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 snap-start ${
                    activeCategory === category.id
                      ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                      : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                  onClick={() => onCategoryChange(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* Gradient edges for scroll indication */}
            <div className="absolute left-0 top-10 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-10 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </motion.div>
          
          {/* Category status display - 2025 Style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 flex justify-center"
          >
            <div className="flex items-center text-sm text-gray-500 bg-white/80 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-sm border border-gray-100">
              <LayoutGrid className="h-4 w-4 mr-2 text-primary/70" />
              <span>
                Viewing <span className="font-medium text-primary">{activeCategoryName}</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}