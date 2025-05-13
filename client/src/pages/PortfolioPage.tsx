import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ArrowUpRight, Calendar, Building } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioHero from '../components/PortfolioHero';
import CTA from '../components/CTA';
import { useTranslation } from 'react-i18next';

export default function PortfolioPage() {
  const { t } = useTranslation();
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState<string>('all');
  // State for projects data
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Custom project data with performance metrics
  const projects = [
    {
      id: 1,
      title: "Redesign website Pulse Welding",
      domain: "pulsewelding.com",
      categories: ['web-development', 'multilingual'],
      logo: "/assets/client_pulse_welding_home_carousel.png",
      image: "/assets/client_pulse_welding_home_carousel.png",
      bgColor: "#2B5F93",
      performance: "+ 100% new customers",
      date: "may 2024"
    },
    {
      id: 2,
      title: "E-commerce Climatic",
      domain: "climatic.ro",
      categories: ['ecommerce', 'web-design'],
      logo: "/assets/client_climatic_gps_home_carousel.png",
      image: "/assets/client_climatic_gps_home_carousel.png",
      bgColor: "#2B5F93",
      performance: "+ 20% sells",
      date: "jan 2024"
    },
    {
      id: 3,
      title: "Redesign website Zaharia's Honey",
      domain: "zaharias-honey.com",
      categories: ['website-presentation', 'web-design'],
      logo: "/assets/client_zaharias_home_carousel.png",
      image: "/assets/client_zaharias_home_carousel.png",
      bgColor: "#F5D38E",
      performance: "+ 45% website visits",
      date: "jan 2024"
    },
    {
      id: 4,
      title: "THD Plast E-commerce Platform",
      domain: "thdplast.ro",
      categories: ['ecommerce', 'web-design'],
      logo: "/assets/client_thd_plast_home_carousel.png",
      image: "/assets/client_thd_plast_home_carousel.png",
      bgColor: "#2B5F93",
      performance: "+ 35% conversion rate",
      date: "feb 2024"
    },
    {
      id: 5,
      title: "Universul Copiilor",
      domain: "universulcopiilor.ro",
      categories: ['web-development', 'custom-platform'],
      logo: "/assets/client_gradinita_home_carousel.png",
      image: "/assets/client_gradinita_home_carousel.png",
      bgColor: "#E91E63",
      performance: "+ 200% parent engagement",
      date: "mar 2024"
    },
    {
      id: 6,
      title: "Optimar Corporate Website",
      domain: "optimar.ro",
      categories: ['web-development', 'branding'],
      logo: "/assets/client_optimar_home_carousel.png",
      image: "/assets/client_optimar_home_carousel.png",
      bgColor: "#2196F3",
      performance: "+ 80% appointment bookings",
      date: "dec 2023"
    }
  ];

  // All available categories matching the mockup
  const categories = [
    { id: 'all', name: 'All projects' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'custom-platform', name: 'Custom Platform' },
    { id: 'branding', name: 'Branding' },
    { id: 'ui-ux', name: 'UI/UX' },
    { id: 'media', name: 'Media' },
    { id: 'content-strategy', name: 'Content Strategy' },
    { id: 'optimization', name: 'Optimization' }
  ];

  // Filter projects when category changes
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setIsLoading(true);
    
    setTimeout(() => {
      if (categoryId === 'all') {
        setFilteredProjects(projects);
      } else {
        const filtered = projects.filter(project => 
          project.categories.some(cat => cat === categoryId || cat.includes(categoryId))
        );
        setFilteredProjects(filtered);
      }
      setIsLoading(false);
    }, 300);
  };

  // Initialize projects on first render
  useEffect(() => {
    setFilteredProjects(projects);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero section with orange background and arrows */}
        <PortfolioHero />
        
        {/* Category filter tabs */}
        <section className="bg-white py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-6">
              <Filter className="w-5 h-5 mr-2 text-gray-700" />
              <h3 className="text-sm font-medium text-gray-700">Filter by category:</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-5 py-2.5 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300
                    ${activeCategory === category.id
                      ? 'bg-[#EB7127] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Custom projects grid based on mockup */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Number of projects found indicator */}
            <div className="text-right mb-8">
              <p className="text-sm text-gray-500">{filteredProjects.length} projects founded</p>
            </div>
            
            {/* Projects grid */}
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-center items-center py-20"
                >
                  <div className="relative w-16 h-16">
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-primary/20 rounded-full"></div>
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {filteredProjects.length === 0 ? (
                    <div className="text-center py-20">
                      <h3 className="text-2xl font-bold text-gray-700 mb-3">No projects found</h3>
                      <p className="text-gray-500">Try selecting a different category</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredProjects.map((project) => (
                        <motion.div 
                          key={project.id}
                          whileHover={{ y: -5 }}
                          transition={{ duration: 0.3 }}
                          className="bg-[#F8F8F8] rounded-lg overflow-hidden h-full"
                        >
                          {/* Performance Badge */}
                          {project.performance && (
                            <div className="absolute top-4 left-4 z-10 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                              {project.performance}
                            </div>
                          )}
                          
                          {/* Project Image & Logo */}
                          <div className="relative" style={{ backgroundColor: project.bgColor }}>
                            <div className="aspect-[16/10] flex items-center justify-center p-8 relative">
                              <img 
                                src={project.logo} 
                                alt={project.title} 
                                className="max-h-32 object-contain z-10"
                              />
                            </div>
                            
                            {/* View button */}
                            <div className="absolute top-4 right-4">
                              <button className="w-8 h-8 bg-black flex items-center justify-center rounded-md shadow-lg">
                                <ArrowUpRight className="h-4 w-4 text-white" />
                              </button>
                            </div>
                          </div>
                          
                          {/* Category tags */}
                          <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-3">
                              {project.categories.slice(0, 2).map((category, index) => (
                                <span 
                                  key={index}
                                  className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                                >
                                  {category.replace('-', ' ')}
                                </span>
                              ))}
                            </div>
                            
                            {/* Project title */}
                            <h3 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h3>
                            
                            {/* Project info */}
                            <div className="flex items-center text-gray-600 text-sm mt-4 mb-2">
                              <Building className="h-4 w-4 mr-1.5" />
                              <span className="mr-2">{project.domain}</span>
                              <Calendar className="h-4 w-4 mr-1.5 ml-2" />
                              <span>{project.date}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
        
        <CTA />
      </main>
      <Footer />
    </div>
  );
}