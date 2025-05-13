import { motion } from 'framer-motion';
import LocalizedLink from './LocalizedLink';
import { useTranslation } from 'react-i18next';

export default function PortfolioHero() {
  const { t } = useTranslation();
  
  return (
    <section className="relative pt-16 pb-20 bg-[#EB7127] overflow-hidden">
      {/* Large left arrow decoration */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-96 w-96 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      {/* Large right arrow decoration */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-96 w-96 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full border-4 border-white"></div>
        <div className="absolute -left-40 -bottom-40 w-96 h-96 rounded-full border-4 border-white"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 text-white font-play"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Portfolio
          </motion.h1>
          
          <motion.p 
            className="text-lg text-white/90 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Descoperă proiectele noastre care au generat rezultate remarcabile pentru afacerile clienților noștri.
          </motion.p>
          
          {/* Breadcrumb navigation */}
          <motion.div
            className="text-white text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <LocalizedLink to="/" className="hover:underline">
              Homepage
            </LocalizedLink>
            <span className="mx-2">›</span>
            <span className="font-medium">Portfolio</span>
          </motion.div>
        </div>
      </div>
      
      {/* Slanted bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform -skew-y-1.5 origin-right"></div>
    </section>
  );
}