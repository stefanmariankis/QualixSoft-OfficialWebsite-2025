import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

// Simplified hero component without filters
export default function PortfolioHero() {
  return (
    <section className="relative pt-28 pb-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our diverse portfolio of digital solutions that have driven 
            real business results across various industries.
          </motion.p>
        </div>
      </div>
    </section>
  );
}