import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';

// Use placeholder images for now
const client_climatic_gps_home_carousel = '/img/client_climatic_gps_home_carousel.png';
const client_pulse_welding_home_carousel = '/img/client_pulse_welding_home_carousel.png';
const client_unicool_home_carousel = '/img/client_unicool_home_carousel.png';

interface ProjectsGridProps {
  activeCategory: string;
}

export default function ProjectsGrid({ activeCategory }: ProjectsGridProps) {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Sample projects data
  // In a real application, this would come from an API or CMS
  const projects: Project[] = [
    {
      id: 'climatic-gps',
      title: 'GPS Fleet Management Platform',
      client: 'Climatic GPS',
      categories: ['custom-platform', 'web-development'],
      thumbnail: client_climatic_gps_home_carousel,
      featured: true,
      year: 2024,
    },
    {
      id: 'pulse-welding',
      title: 'Manufacturing Services Website',
      client: 'Pulse Welding',
      categories: ['web-development', 'consultancy'],
      thumbnail: client_pulse_welding_home_carousel,
      year: 2023,
    },
    {
      id: 'unicool',
      title: 'HVAC Solutions E-commerce',
      client: 'Unicool',
      categories: ['ecommerce', 'web-development', 'ppc'],
      thumbnail: client_unicool_home_carousel,
      year: 2024,
    },
    {
      id: 'thd-plast',
      title: 'Plastic Manufacturing Rebrand',
      client: 'THD Plast',
      categories: ['web-development', 'consultancy'],
      thumbnail: client_pulse_welding_home_carousel, // Placeholder
      year: 2023,
    },
    {
      id: 'optimar',
      title: 'Optometry Chain Digital Strategy',
      client: 'Optimar',
      categories: ['social-media', 'email-marketing', 'ppc'],
      thumbnail: client_climatic_gps_home_carousel, // Placeholder
      year: 2023,
    },
    {
      id: 'zaharias',
      title: 'Premium Restaurant Website',
      client: 'Zaharias',
      categories: ['web-development', 'social-media'],
      thumbnail: client_unicool_home_carousel, // Placeholder
      featured: true,
      year: 2024,
    },
    {
      id: 'gradinita',
      title: 'Educational Institution Platform',
      client: 'Gradinita Magica',
      categories: ['web-development', 'custom-platform'],
      thumbnail: client_climatic_gps_home_carousel, // Placeholder
      year: 2022,
    },
    {
      id: 'linkedin-program',
      title: 'Executive LinkedIn Management',
      client: 'Multiple Clients',
      categories: ['linkedin', 'consultancy'],
      thumbnail: client_pulse_welding_home_carousel, // Placeholder
      year: 2023,
    },
  ];

  // Filter projects when category changes
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call with timeout
    const timer = setTimeout(() => {
      const filtered = 
        activeCategory === 'all' 
          ? projects 
          : projects.filter(project => project.categories.includes(activeCategory));
      
      setFilteredProjects(filtered);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [activeCategory]);

  // Variants for container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
            >
              {filteredProjects.length === 0 ? (
                <div className="text-center py-20">
                  <h3 className="text-2xl font-bold text-gray-700 mb-3">No projects found</h3>
                  <p className="text-gray-500">Try selecting a different category</p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-12">
                    <p className="text-primary font-medium">
                      {activeCategory === 'all' 
                        ? 'Showing all projects' 
                        : `Showing ${filteredProjects.length} ${activeCategory.replace('-', ' ')} project${filteredProjects.length !== 1 ? 's' : ''}`}
                    </p>
                  </div>
                
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                      <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}