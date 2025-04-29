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
  
  // Import additional image assets
  const consultingStrategyImg = '/img/consulting_strategy_services_page.png';
  const webDevelopmentImg = '/img/web_mobile_development_services_page.png';
  const aboutAgencyImg = '/img/about_agency_about_us_page.png';
  const placeholderSvg = '/img/placeholder.svg';
  
  // Sample projects data with improved details
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
      shortDescription: 'A comprehensive GPS fleet management platform enabling real-time tracking, analytics, and management of vehicle fleets.',
    },
    {
      id: 'pulse-welding',
      title: 'Manufacturing Services Website',
      client: 'Pulse Welding',
      categories: ['web-development', 'consultancy'],
      thumbnail: client_pulse_welding_home_carousel,
      year: 2023,
      shortDescription: 'Modern, user-focused website showcasing manufacturing capabilities and generating high-quality B2B leads.',
    },
    {
      id: 'unicool',
      title: 'HVAC Solutions E-commerce',
      client: 'Unicool',
      categories: ['ecommerce', 'web-development', 'ppc'],
      thumbnail: client_unicool_home_carousel,
      year: 2024,
      shortDescription: 'Comprehensive e-commerce platform for HVAC solutions with integrated marketing campaigns.',
    },
    {
      id: 'thd-plast',
      title: 'Plastic Manufacturing Rebrand',
      client: 'THD Plast',
      categories: ['branding', 'web-development', 'consultancy'],
      thumbnail: webDevelopmentImg,
      year: 2023,
      shortDescription: 'Complete rebranding initiative for a plastic manufacturing company, including visual identity and web presence.',
    },
    {
      id: 'optimar',
      title: 'Optometry Chain Digital Strategy',
      client: 'Optimar',
      categories: ['social-media', 'email-marketing', 'ppc'],
      thumbnail: consultingStrategyImg,
      year: 2023,
      shortDescription: 'Integrated digital marketing strategy for a national optometry chain, increasing patient acquisition by 47%.',
    },
    {
      id: 'zaharias',
      title: 'Premium Restaurant Website',
      client: 'Zaharias',
      categories: ['web-development', 'social-media', 'branding'],
      thumbnail: aboutAgencyImg,
      featured: true,
      year: 2024,
      shortDescription: 'Award-winning website for an upscale restaurant featuring online reservations, menus, and virtual tours.',
    },
    {
      id: 'gradinita',
      title: 'Educational Institution Platform',
      client: 'Gradinita Magica',
      categories: ['web-development', 'custom-platform'],
      thumbnail: webDevelopmentImg,
      year: 2022,
      shortDescription: 'Custom educational platform with parent portal, student progress tracking, and administrative tools.',
    },
    {
      id: 'linkedin-program',
      title: 'Executive LinkedIn Management',
      client: 'Multiple Clients',
      categories: ['linkedin', 'consultancy', 'content-strategy'],
      thumbnail: consultingStrategyImg,
      year: 2023,
      shortDescription: 'Comprehensive LinkedIn management program for C-level executives across multiple industries.',
    },
    {
      id: 'ehealth-portal',
      title: 'Patient Management System',
      client: 'MedCare Group',
      categories: ['custom-platform', 'web-development', 'ui-ux-design'],
      thumbnail: placeholderSvg,
      year: 2024,
      shortDescription: 'Secure patient management system with appointment scheduling, medical records, and provider communications.',
    },
    {
      id: 'mountain-resort',
      title: 'Luxury Resort Booking Platform',
      client: 'Alpine Escape',
      categories: ['ecommerce', 'web-development', 'ui-ux-design'],
      thumbnail: placeholderSvg,
      featured: true,
      year: 2024,
      shortDescription: 'High-end booking platform with virtual room tours, activity reservations, and personalized guest experiences.',
    },
    {
      id: 'tech-conference',
      title: 'Virtual Conference Platform',
      client: 'TechNow Events',
      categories: ['custom-platform', 'web-development'],
      thumbnail: placeholderSvg,
      year: 2023,
      shortDescription: 'Interactive virtual conference platform supporting 5,000+ simultaneous attendees with networking features.',
    },
    {
      id: 'sustainable-fashion',
      title: 'Eco-Fashion Marketplace',
      client: 'GreenThread',
      categories: ['ecommerce', 'branding', 'ppc'],
      thumbnail: placeholderSvg,
      year: 2024,
      shortDescription: 'Sustainable fashion marketplace connecting eco-conscious consumers with ethical clothing manufacturers.',
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
                  <div className="flex items-center justify-between mb-8">
                    <p className="text-primary font-medium">
                      {activeCategory === 'all' 
                        ? 'Showing all projects' 
                        : `Showing ${filteredProjects.length} ${activeCategory.replace('-', ' ')} project${filteredProjects.length !== 1 ? 's' : ''}`}
                    </p>
                    <div className="text-sm text-gray-500">
                      {filteredProjects.length} projects
                    </div>
                  </div>
                
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                      <div key={project.id} className="col-span-1"> {/* Force uniform grid layout */}
                        <ProjectCard project={project} index={index} />
                      </div>
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