import { useEffect, useState } from 'react';
import { useRoute, Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, ExternalLink, Clock, CalendarDays, Tag, Check, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Project } from '../components/ProjectCard';
import CTA from '../components/CTA';

// Import images directly
import client_climatic_gps_home_carousel from '../../public/img/client_climatic_gps_home_carousel.png';
import client_pulse_welding_home_carousel from '../../public/img/client_pulse_welding_home_carousel.png';
import client_unicool_home_carousel from '../../public/img/client_unicool_home_carousel.png';

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
};

export default function ProjectDetailPage() {
  const [, params] = useRoute('/portfolio/:id');
  const [project, setProject] = useState<(typeof projectsData)[keyof typeof projectsData] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call with timeout
    const timer = setTimeout(() => {
      if (params && params.id && projectsData[params.id]) {
        setProject(projectsData[params.id]);
      }
      setIsLoading(false);
    }, 500);
    
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
            <Link href="/portfolio">
              <a className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Portfolio
              </a>
            </Link>
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
              <Link href="/">
                <a className="hover:text-primary">Home</a>
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link href="/portfolio">
                <a className="hover:text-primary">Portfolio</a>
              </Link>
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
              <Link href="/portfolio">
                <a className="inline-flex items-center text-gray-600 hover:text-primary mb-8">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Portfolio
                </a>
              </Link>
              
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
            </motion.div>
              
            {/* Gallery Thumbnails */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex space-x-3 overflow-x-auto pb-4 mb-12"
            >
              {project.gallery.map((image, i) => (
                <button 
                  key={i}
                  onClick={() => setSelectedImageIndex(i)}
                  className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${selectedImageIndex === i ? 'border-primary shadow-md' : 'border-transparent'}`}
                >
                  <img 
                    src={image} 
                    alt={`Gallery ${i+1}`} 
                    className="w-full h-full object-cover"
                  />
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
                
                {/* Results */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Results</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.results.map((result, i) => (
                      <div key={i} className="bg-white p-4 rounded-lg border border-gray-100 text-center shadow-sm">
                        <div className="text-3xl font-bold text-primary mb-1">{result.value}</div>
                        <div className="text-sm text-gray-600">{result.metric}</div>
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
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <div className="mb-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="opacity-20">
                        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
                      </svg>
                    </div>
                    <p className="text-gray-700 italic mb-4">{project.testimonial.quote}</p>
                    <div className="flex items-center">
                      <div>
                        <div className="font-bold text-gray-900">{project.testimonial.author}</div>
                        <div className="text-sm text-gray-600">{project.testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Call to action for other projects */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore More Projects</h2>
            <Link href="/portfolio">
              <a className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                View All Projects
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Link>
          </div>
        </section>
        
        <CTA />
      </main>
      <Footer />
    </div>
  );
}