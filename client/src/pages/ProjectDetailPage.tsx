import { useEffect, useState } from 'react';
import { useRoute, Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, ExternalLink, Clock, CalendarDays, Tag, Check, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Project } from '../components/ProjectCard';
import CTA from '../components/CTA';

// Use project images
const client_climatic_gps_home_carousel = '/img/client_climatic_gps_home_carousel.png';
const client_pulse_welding_home_carousel = '/img/client_pulse_welding_home_carousel.png';
const client_unicool_home_carousel = '/img/client_unicool_home_carousel.png';
const project_screenshot1 = '/img/image_1744032914194.png';
const project_screenshot2 = '/img/image_1744032957432.png';
const project_screenshot3 = '/img/image_1744033336407.png';

// Technology icon mapping
const techIcons: Record<string, string> = {
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'WordPress': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
  'Shopify': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg',
  'Google Ads': 'https://www.gstatic.com/images/branding/product/2x/google_ads_24dp.png',
  'Facebook Ads': 'https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/7MwwngZVp_D.png',
  'Mailchimp': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mailchimp/mailchimp-original.svg',
  'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
  'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
};

// Sample projects data
// In a real application, this would come from an API or CMS
const projectsData: Record<string, Project & {
  description: string;
  challenge: string;
  solution: string;
  results: Array<{metric: string; value: string}>;
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  gallery: string[];
  duration: string;
  services: string[];
}> = {
  'climatic-gps': {
    id: 'climatic-gps',
    title: 'GPS Fleet Management Platform',
    client: 'Climatic GPS',
    categories: ['custom-platform', 'web-development'],
    thumbnail: client_climatic_gps_home_carousel,
    featured: true,
    year: 2024,
    description: 'We designed and developed a comprehensive GPS fleet management platform for Climatic GPS, enabling real-time tracking, analytics, and management of their vehicle fleet.',
    challenge: 'Climatic GPS needed a custom solution to track and manage their growing fleet of vehicles. Their existing system was fragmented, using multiple tools that did not communicate well.',
    solution: 'We developed a custom web platform that integrates real-time GPS tracking, maintenance scheduling, driver management, and comprehensive analytics.',
    results: [
      { metric: 'Fleet Efficiency Increase', value: '34%' },
      { metric: 'Maintenance Costs Reduced', value: '28%' },
      { metric: 'Driver Safety Improved', value: '42%' },
      { metric: 'Fuel Consumption Decreased', value: '18%' },
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Firebase'],
    testimonial: {
      quote: 'The custom platform revolutionized how we manage our fleet. The real-time insights and streamlined processes have significantly improved our efficiency.',
      author: 'Alexandru Popescu',
      position: 'Operations Director, Climatic GPS',
    },
    gallery: [client_climatic_gps_home_carousel, client_pulse_welding_home_carousel, client_unicool_home_carousel],
    duration: '4 months',
    services: ['Custom Platform Development', 'UX/UI Design', 'Integration Services', 'Technical Consultancy'],
  },
  'pulse-welding': {
    id: 'pulse-welding',
    title: 'Manufacturing Services Website',
    client: 'Pulse Welding',
    categories: ['web-development', 'consultancy'],
    thumbnail: client_pulse_welding_home_carousel,
    year: 2023,
    description: 'We created a modern, user-focused website for Pulse Welding to showcase their manufacturing services and generate high-quality leads in the B2B sector.',
    challenge: 'Pulse Welding needed a website that would showcase their capabilities, highlight their portfolio, and generate qualified leads from industrial clients.',
    solution: 'We designed a modern, responsive website with a focus on showcasing their work through detailed case studies and high-quality imagery.',
    results: [
      { metric: 'Organic Traffic Increase', value: '156%' },
      { metric: 'Quote Request Conversions', value: '27%' },
      { metric: 'Average Session Duration', value: '+3:45 min' },
      { metric: 'Qualified Lead Generation', value: '+43%' },
    ],
    technologies: ['WordPress', 'PHP', 'MySQL', 'Tailwind CSS'],
    testimonial: {
      quote: 'Our new website has transformed our business development efforts. We are now getting high-quality leads from exactly the type of clients we want.',
      author: 'Mihai Dumitrescu',
      position: 'CEO, Pulse Welding',
    },
    gallery: [client_pulse_welding_home_carousel, client_climatic_gps_home_carousel, client_unicool_home_carousel],
    duration: '2 months',
    services: ['Web Design', 'Web Development', 'Content Strategy', 'SEO'],
  },
  'unicool': {
    id: 'unicool',
    title: 'HVAC Solutions E-commerce',
    client: 'Unicool',
    categories: ['ecommerce', 'web-development', 'ppc'],
    thumbnail: client_unicool_home_carousel,
    year: 2024,
    description: 'We built a comprehensive e-commerce platform for Unicool, specializing in HVAC solutions, with integrated marketing campaigns to drive qualified traffic and sales.',
    challenge: 'Unicool wanted to expand their business by selling HVAC equipment and supplies online. They needed a robust e-commerce platform with specialized features.',
    solution: 'We developed a custom Shopify-based e-commerce platform with features tailored to HVAC product sales, including technical specification comparisons and bulk ordering.',
    results: [
      { metric: 'Revenue Growth', value: '78%' },
      { metric: 'Conversion Rate', value: '4.2%' },
      { metric: 'PPC ROI', value: '350%' },
      { metric: 'Average Order Value', value: '+€420' },
    ],
    technologies: ['Shopify', 'Google Ads', 'Facebook Ads', 'Mailchimp'],
    testimonial: {
      quote: 'The e-commerce platform exceeded our expectations. Not only is it visually impressive, but the technical features have significantly boosted our sales.',
      author: 'Ana Marinescu',
      position: 'Marketing Manager, Unicool',
    },
    gallery: [client_unicool_home_carousel, client_climatic_gps_home_carousel, client_pulse_welding_home_carousel],
    duration: '3 months',
    services: ['E-commerce Development', 'UI/UX Design', 'PPC Advertising', 'Email Marketing'],
  },
  'techdash': {
    id: 'techdash',
    title: 'Tech Dashboard Platform',
    client: 'TechDash Inc.',
    categories: ['web-development', 'ui-ux-design', 'custom-platform'],
    thumbnail: project_screenshot1,
    featured: true,
    year: 2024,
    description: 'We developed an innovative dashboard platform for TechDash Inc., enabling real-time data visualization, analytics, and business intelligence for technical teams.',
    challenge: 'TechDash needed a user-friendly yet powerful dashboard solution that could integrate with multiple data sources and provide customizable visualizations for different team roles.',
    solution: 'We built a React-based frontend with a Node.js backend that connects to various APIs and data sources. The platform features real-time updates, customizable widgets, and role-based access control.',
    results: [
      { metric: 'Data Processing Time', value: '-67%' },
      { metric: 'User Adoption Rate', value: '94%' },
      { metric: 'Decision Time Reduced', value: '3.5 hrs' },
      { metric: 'ROI After 6 Months', value: '247%' },
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Firebase'],
    testimonial: {
      quote: 'The dashboard platform has transformed how our teams work with data. The intuitive interface combined with powerful analytics capabilities has dramatically improved our decision-making process.',
      author: 'Maria Ionescu',
      position: 'CTO, TechDash Inc.',
    },
    gallery: [project_screenshot1, project_screenshot2, project_screenshot3],
    duration: '4 months',
    services: ['Custom Platform Development', 'UI/UX Design', 'Data Visualization', 'API Integration', 'Responsive Design'],
  },
};

export default function ProjectDetailPage() {
  const [, params] = useRoute('/portfolio/:id');
  const [project, setProject] = useState<(typeof projectsData)[keyof typeof projectsData] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    
    // Process immediately to avoid unnecessary delays
    if (params && params.id) {
      const foundProject = projectsData[params.id];
      setProject(foundProject || null);
    } else {
      setProject(null);
    }
    
    // Set loading to false after a minimal timeout
    // This helps ensure DOM is updated properly
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [params]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="relative w-16 h-16">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-primary/20 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-8">The project you're looking for doesn't exist or has been removed.</p>
            <button 
              onClick={() => window.location.href = '/portfolio'} 
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors cursor-pointer border-0"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Portfolio
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center text-sm text-gray-500">
              <button
                onClick={() => window.location.href = '/'} 
                className="hover:text-primary bg-transparent border-0 cursor-pointer p-0 flex"
              >
                Home
              </button>
              <ChevronRight className="h-4 w-4 mx-2" />
              <button
                onClick={() => window.location.href = '/portfolio'} 
                className="hover:text-primary bg-transparent border-0 cursor-pointer p-0 flex"
              >
                Portfolio
              </button>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-gray-900 font-medium">{project.title}</span>
            </div>
          </div>
        </div>
        
        {/* Hero Section */}
        <section className="bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button 
                onClick={() => window.location.href = '/portfolio'} 
                className="inline-flex items-center text-gray-600 hover:text-primary mb-8 bg-transparent border-0 cursor-pointer"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Portfolio
              </button>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
                <div className="flex items-center">
                  <Tag className="h-5 w-5 mr-2" />
                  <span>{project.categories.map(c => c.charAt(0).toUpperCase() + c.slice(1).replace('-', ' ')).join(', ')}</span>
                </div>
                <div className="flex items-center">
                  <CalendarDays className="h-5 w-5 mr-2" />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{project.duration}</span>
                </div>
              </div>
            </motion.div>
              
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-video overflow-hidden rounded-xl mb-12 shadow-xl"
            >
              <img 
                src={project.gallery[selectedImageIndex]} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              
              {/* Modern image counter overlay */}
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium flex items-center">
                <span className="mr-1.5">{selectedImageIndex + 1}</span>
                <span className="text-white/60">/</span>
                <span className="ml-1.5">{project.gallery.length}</span>
              </div>
            </motion.div>
              
            {/* Gallery Thumbnails - 2025 Style */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex space-x-3 overflow-x-auto pb-4 mb-12 snap-x"
            >
              {project.gallery.map((image, i) => (
                <button 
                  key={i}
                  onClick={() => setSelectedImageIndex(i)}
                  className={`relative flex-shrink-0 w-28 h-20 rounded-lg overflow-hidden transition-all duration-300 snap-start
                    ${selectedImageIndex === i 
                      ? 'ring-4 ring-primary shadow-lg scale-105 z-10' 
                      : 'ring-1 ring-gray-200 hover:ring-gray-300 shadow-sm'
                    }`}
                >
                  <img 
                    src={image} 
                    alt={`Gallery ${i+1}`} 
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay for non-selected items */}
                  <div 
                    className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                      selectedImageIndex === i ? 'opacity-0' : 'opacity-40'
                    }`}
                  ></div>
                </button>
              ))}
            </motion.div>
            
            {/* Project Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="lg:col-span-2"
              >
                {/* Description */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-3">Challenge</h3>
                      <p className="text-gray-700">{project.challenge}</p>
                    </div>
                    <div className="bg-primary/5 p-6 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-3">Solution</h3>
                      <p className="text-gray-700">{project.solution}</p>
                    </div>
                  </div>
                </div>
                
                {/* Results - 2025 Style */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Results & Impact</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {project.results.map((result, i) => (
                      <div 
                        key={i} 
                        className="bg-white p-5 rounded-xl border border-gray-100 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/20 relative overflow-hidden group"
                      >
                        {/* Background decoration */}
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Accent decoration */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>
                        
                        <div className="relative z-10">
                          <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 mb-2">
                            {result.value}
                          </div>
                          <div className="text-sm text-gray-600 font-medium">{result.metric}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h2>
                  <div className="flex flex-wrap gap-4">
                    {project.technologies.map((tech, i) => (
                      <div key={i} className="flex items-center bg-white px-4 py-3 rounded-lg border border-gray-100 shadow-sm">
                        {techIcons[tech] && (
                          <img 
                            src={techIcons[tech]} 
                            alt={tech} 
                            className="w-5 h-5 mr-2"
                          />
                        )}
                        <span className="text-gray-800">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="lg:col-span-1"
              >
                {/* Client Info */}
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm mb-8">
                  <h3 className="font-bold text-gray-900 mb-4">Client</h3>
                  <p className="text-gray-700 mb-4">{project.client}</p>
                  
                  <h3 className="font-bold text-gray-900 mb-4">Services Provided</h3>
                  <ul className="space-y-2">
                    {project.services.map((service, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {project.featured && (
                    <div className="mt-6 flex items-center text-primary font-medium">
                      <Award className="h-5 w-5 mr-2" />
                      Featured Project
                    </div>
                  )}
                </div>
                
                {/* Testimonial */}
                {project.testimonial && (
                  <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
                    {/* Decorative quotes */}
                    <div className="absolute top-4 left-6 text-primary opacity-10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
                      </svg>
                    </div>
                    
                    <div className="relative z-10">
                      {/* Rating stars */}
                      <div className="flex mb-4 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      
                      <p className="text-gray-700 font-medium italic text-lg mb-6 leading-relaxed">{project.testimonial.quote}</p>
                      
                      <div className="flex items-center border-t border-gray-100 pt-4">
                        <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center text-primary font-bold text-xl mr-4">
                          {project.testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{project.testimonial.author}</div>
                          <div className="text-sm text-gray-600">{project.testimonial.position}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Call to action for other projects - 2025 Style */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-24 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full translate-y-1/2 blur-3xl"></div>
          
          {/* Decorative grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwIDAgMTMuNDMxIDEzLjQzMSAwIDMwIDBjMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjRUJFQkVCIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-10 z-0"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Looking for More Amazing Projects?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Browse our portfolio to discover more successful projects and innovative solutions we've delivered across various industries.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button
                onClick={() => window.location.href = '/portfolio'}
                className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300 border-0 cursor-pointer"
              >
                View All Projects
                <ExternalLink className="ml-2 h-5 w-5" />
              </button>
            </motion.div>
          </div>
        </section>
        
        <CTA />
      </main>
      <Footer />
    </div>
  );
}