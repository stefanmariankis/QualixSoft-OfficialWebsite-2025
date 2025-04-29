import { useState } from 'react';
import { useRoute } from 'wouter';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  ChevronRight, 
  ExternalLink, 
  Clock, 
  CalendarDays, 
  Tag, 
  Check, 
  Award, 
  Building,
  Monitor,
  Smartphone,
  Code,
  Zap,
  Rocket,
  Lightbulb,
  PieChart
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
  'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'Tailwind': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg',
  'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
  'Azure': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
};

// Define mock projects data
const projectsData = {
  'climatic-gps': {
    id: 'climatic-gps',
    title: 'GPS Fleet Management Platform',
    client: 'Climatic GPS',
    categories: ['custom-platform', 'web-development'],
    thumbnail: client_climatic_gps_home_carousel,
    year: 2023,
    featured: true,
    shortDescription: 'A comprehensive GPS tracking and fleet management system for transportation companies',
    description: 'We developed a comprehensive fleet management platform that allows transportation companies to track their vehicles in real-time, optimize routes, and manage driver performance. The system includes customizable dashboards, automated reporting, and integration with fuel management systems.',
    challenge: 'The client needed a scalable solution that could handle thousands of vehicles simultaneously while providing real-time data updates and historical reporting capabilities. Additionally, the system needed to work across different device types and offer offline functionality in areas with poor connectivity.',
    solution: 'We built a responsive web application with a React frontend and Node.js backend. Real-time tracking was implemented using WebSockets, and we developed a sophisticated caching mechanism for offline functionality. The platform includes a custom map interface with route optimization algorithms.',
    results: [
      { metric: 'Fuel Savings', value: '23%' },
      { metric: 'Response Time', value: '-45%' },
      { metric: 'User Adoption', value: '95%' },
      { metric: 'ROI', value: '217%' },
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Docker', 'AWS'],
    gallery: [
      client_climatic_gps_home_carousel,
      project_screenshot1,
      project_screenshot2,
      project_screenshot3,
    ],
    duration: '7 months',
    testimonial: {
      quote: "The team delivered beyond our expectations. The platform has completely transformed how we manage our fleet, resulting in significant cost savings and operational efficiencies.",
      author: "Alex Dobrescu",
      position: "CTO, Climatic GPS"
    },
    services: ['Custom Platform Development', 'UI/UX Design', 'Data Visualization', 'API Integration', 'Responsive Design'],
    process: [
      { 
        phase: 'Discovery & Planning', 
        description: 'Comprehensive analysis of the client requirements and existing workflows',
        duration: '3 weeks'
      },
      { 
        phase: 'UX/UI Design', 
        description: 'Creating intuitive interfaces for both desktop and mobile applications',
        duration: '4 weeks'
      },
      { 
        phase: 'Development', 
        description: 'Implementing front-end interfaces and back-end services with regular testing',
        duration: '12 weeks'
      },
      { 
        phase: 'Testing & QA', 
        description: 'Rigorous testing across multiple devices and usage scenarios',
        duration: '3 weeks'
      },
      { 
        phase: 'Deployment & Training', 
        description: 'Smooth transition to production and comprehensive staff training',
        duration: '2 weeks'
      }
    ],
    deviceViews: {
      desktop: project_screenshot1,
      tablet: project_screenshot2,
      mobile: project_screenshot3
    }
  },
  'pulse-welding': {
    id: 'pulse-welding',
    title: 'Industrial Equipment E-Commerce',
    client: 'Pulse Welding',
    categories: ['e-commerce', 'web-development'],
    thumbnail: client_pulse_welding_home_carousel,
    year: 2022,
    featured: true,
    shortDescription: 'A specialized B2B e-commerce platform for industrial welding equipment',
    description: 'We created a comprehensive B2B e-commerce platform for a leading industrial welding equipment supplier. The platform includes advanced product filtering, bulk ordering capabilities, customer-specific pricing, and integration with their inventory management system.',
    challenge: 'The client needed to transition from a manual ordering process to a digital platform while maintaining the personal touch that their business relationships were built on. The system needed to handle complex product configurations, customer-specific pricing, and integrate with their legacy inventory system.',
    solution: 'We implemented a custom e-commerce solution with personalized dashboards for each customer account. We developed a sophisticated product configuration engine and built custom integrations with their ERP system to ensure real-time inventory updates and seamless order processing.',
    results: [
      { metric: 'Order Volume', value: '+156%' },
      { metric: 'Processing Time', value: '-68%' },
      { metric: 'Customer Adoption', value: '87%' },
      { metric: 'Sales Increase', value: '32%' },
    ],
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Docker', 'Azure'],
    gallery: [
      client_pulse_welding_home_carousel,
      project_screenshot1,
      project_screenshot2,
      project_screenshot3,
    ],
    duration: '5 months',
    testimonial: {
      quote: "This platform has revolutionized our sales process. What used to take hours now happens in minutes, and our customers love the convenience. The team understood our unique requirements and delivered a solution that perfectly fits our business model.",
      author: "Elena Munteanu",
      position: "Sales Director, Pulse Welding"
    },
    services: ['E-Commerce Development', 'Custom Integrations', 'UI/UX Design', 'Payment Gateway Integration', 'ERP System Integration'],
    process: [
      { 
        phase: 'Discovery & Planning', 
        description: 'Analyzing business requirements and customer ordering patterns',
        duration: '2 weeks'
      },
      { 
        phase: 'UX/UI Design', 
        description: 'Creating intuitive product catalogs and ordering flows',
        duration: '3 weeks'
      },
      { 
        phase: 'Development', 
        description: 'Building the platform with focus on performance and integration',
        duration: '10 weeks'
      },
      { 
        phase: 'Testing & QA', 
        description: 'Ensuring seamless ordering and accurate pricing across scenarios',
        duration: '3 weeks'
      },
      { 
        phase: 'Deployment & Training', 
        description: 'Staged rollout to customers with comprehensive training',
        duration: '2 weeks'
      }
    ],
    deviceViews: {
      desktop: project_screenshot2,
      tablet: project_screenshot3,
      mobile: project_screenshot1
    }
  },
  'unicool': {
    id: 'unicool',
    title: 'Smart Home Control Application',
    client: 'UniCool',
    categories: ['mobile-app', 'iot'],
    thumbnail: client_unicool_home_carousel,
    year: 2023,
    featured: false,
    shortDescription: 'A mobile application for controlling smart home cooling systems remotely',
    description: 'We developed a cross-platform mobile application that allows users to control their smart cooling systems remotely. The app provides real-time temperature monitoring, energy usage statistics, and intelligent scheduling for optimal energy efficiency.',
    challenge: 'The client needed a user-friendly interface for their complex IoT system that would appeal to both tech-savvy users and those less familiar with smart home technology. The application needed to maintain a stable connection with the devices and handle intermittent connectivity gracefully.',
    solution: 'We created a React Native application with an intuitive interface and robust error handling. The app uses a combination of websockets for real-time data and REST APIs for configuration changes. We implemented local caching to ensure the app remains functional even with spotty internet connections.',
    results: [
      { metric: 'Energy Savings', value: '27%' },
      { metric: 'User Engagement', value: '+78%' },
      { metric: 'Support Requests', value: '-35%' },
      { metric: 'App Store Rating', value: '4.8' },
    ],
    technologies: ['React Native', 'Node.js', 'Firebase', 'MongoDB', 'AWS'],
    gallery: [
      client_unicool_home_carousel,
      project_screenshot1,
      project_screenshot2,
      project_screenshot3,
    ],
    duration: '6 months',
    testimonial: {
      quote: "The app has exceeded our expectations in every way. It's intuitive, reliable, and our customers love how easy it makes managing their cooling systems. The energy savings features have been particularly well-received.",
      author: "Radu Ionescu",
      position: "Product Manager, UniCool"
    },
    services: ['Mobile App Development', 'IoT Integration', 'UI/UX Design', 'Backend Development', 'Cloud Infrastructure'],
    process: [
      { 
        phase: 'Discovery & Planning', 
        description: 'Understanding the IoT ecosystem and user requirements',
        duration: '2 weeks'
      },
      { 
        phase: 'UX/UI Design', 
        description: 'Creating intuitive mobile interfaces with focus on usability',
        duration: '4 weeks'
      },
      { 
        phase: 'Development', 
        description: 'Building cross-platform application and backend services',
        duration: '12 weeks'
      },
      { 
        phase: 'Testing & QA', 
        description: 'Extensive testing across different devices and connectivity scenarios',
        duration: '3 weeks'
      },
      { 
        phase: 'Deployment & Support', 
        description: 'App store release and ongoing maintenance',
        duration: '3 weeks'
      }
    ],
    deviceViews: {
      desktop: project_screenshot3,
      tablet: project_screenshot1,
      mobile: project_screenshot2
    }
  },
  'tech-dashboard': {
    id: 'tech-dashboard',
    title: 'Tech Dashboard Platform',
    client: 'TechVision Inc',
    categories: ['analytics', 'web-development'],
    thumbnail: client_pulse_welding_home_carousel,
    year: 2023,
    featured: true,
    shortDescription: 'An advanced analytics dashboard for technology resource management',
    description: 'We created a comprehensive analytics platform that helps technology companies track and optimize their resource allocation across projects. The dashboard provides real-time insights into team availability, project timelines, budget utilization, and performance metrics.',
    challenge: 'The client needed a centralized solution to replace their fragmented systems for resource management. They required a platform that could handle complex data relationships while providing intuitive visualizations for quick decision-making at different organizational levels.',
    solution: 'We developed a React-based frontend with an extensive dashboard system utilizing advanced charting libraries. The backend was built with Node.js and TypeScript, using PostgreSQL for data storage. We implemented a sophisticated permission system to ensure appropriate access levels throughout the organization.',
    results: [
      { metric: 'Resource Utilization', value: '+24%' },
      { metric: 'Decision Time', value: '-62%' },
      { metric: 'Project Overruns', value: '-38%' },
      { metric: 'Cost Savings', value: '€275K' },
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    gallery: [
      client_pulse_welding_home_carousel,
      project_screenshot1,
      project_screenshot2,
      project_screenshot3,
    ],
    duration: '8 months',
    testimonial: {
      quote: "This dashboard has transformed how we manage our technology resources. We now have visibility into areas that were previously black boxes, allowing us to make data-driven decisions that have significantly improved our operational efficiency.",
      author: "Cristian Petrescu",
      position: "CIO, TechVision Inc"
    },
    services: ['Custom Platform Development', 'Data Visualization', 'UI/UX Design', 'API Development', 'Database Architecture'],
    process: [
      { 
        phase: 'Discovery & Planning', 
        description: 'Analyzing existing systems and defining key performance indicators',
        duration: '3 weeks'
      },
      { 
        phase: 'UX/UI Design', 
        description: 'Designing intuitive data visualizations and dashboard layouts',
        duration: '4 weeks'
      },
      { 
        phase: 'Development', 
        description: 'Building the platform with focus on performance and scalability',
        duration: '14 weeks'
      },
      { 
        phase: 'Testing & QA', 
        description: 'Verifying data accuracy and system performance under load',
        duration: '4 weeks'
      },
      { 
        phase: 'Deployment & Training', 
        description: 'Phased implementation and comprehensive administrator training',
        duration: '3 weeks'
      }
    ],
    deviceViews: {
      desktop: project_screenshot1,
      tablet: project_screenshot3,
      mobile: project_screenshot2
    }
  },
};

export default function ProjectDetailPage() {
  const [, params] = useRoute('/portfolio/:id');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'process' | 'results'>('overview');
  const [selectedDevice, setSelectedDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  
  // Get project ID from URL and find project data
  const projectId = params?.id || '';
  const project = projectsData[projectId as keyof typeof projectsData];
  
  // If project not found, show error page
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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Project Hero Section with Creative Floating Elements - 2025 Style */}
        <section className="bg-gray-900 text-white relative overflow-hidden py-20 md:py-32">
          {/* Graphic elements */}
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/30 rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/30 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
          </div>
          
          {/* Grid overlay pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNTkuOTEgMEwwIDU5LjkxVjYwaDYwVjBILjAxdjU5LjkxTDU5LjkxIDBILjAxVjYwaDU5LjkxVi4wMUwwIDYwVi4wMWw1OS45MSA1OS45TDAgMFYuMDFMNTkuOTEgNjBIMHYtLjA5TDU5LjkxIDBILjAxVi4wMkw1OS45IDU5LjkxVi4wMUwuMDIgNTkuOVYuMDFoNTkuOVYwSC4wMXYuMDFMNjAgNjBWLjAxTDAgNjBWLjAxTDU5LjkxIDBoLS4wMVY2MGgtLjA5TDAgMGg2MHYuMDFMNjAgLjAxIiBvcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] bg-opacity-20 z-0"></div>
          
          {/* Back to portfolio link */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-10">
            <button
              onClick={() => window.location.href = '/portfolio'}
              className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              <span>Back to Portfolio</span>
            </button>
            
            {/* Project title and meta info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-4 flex items-center space-x-2">
                    {project.categories.map((category, index) => (
                      <span 
                        key={index} 
                        className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-primary/20 text-primary-foreground"
                      >
                        {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </span>
                    ))}
                    
                    {project.featured && (
                      <span className="inline-flex items-center text-amber-400 text-sm">
                        <Award className="h-4 w-4 mr-1" />
                        <span>Featured</span>
                      </span>
                    )}
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    {project.title}
                  </h1>
                  
                  <div className="flex flex-wrap gap-x-6 gap-y-3 text-white/80 mb-8">
                    <div className="flex items-center">
                      <Building className="h-5 w-5 mr-2" />
                      <span>Client: <span className="text-white font-medium">{project.client}</span></span>
                    </div>
                    
                    <div className="flex items-center">
                      <CalendarDays className="h-5 w-5 mr-2" />
                      <span>Year: <span className="text-white font-medium">{project.year}</span></span>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      <span>Duration: <span className="text-white font-medium">{project.duration}</span></span>
                    </div>
                  </div>
                  
                  <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                {/* Main featured image with glass effect frame */}
                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src={project.thumbnail} 
                    alt={`${project.title} screenshot`}
                    className="w-full rounded-xl object-cover" 
                  />
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Float tech tags */}
                <div className="absolute -bottom-4 left-4 right-4 flex flex-wrap justify-center gap-2 p-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  {project.technologies.slice(0, 5).map((tech, index) => (
                    <div 
                      key={index}
                      className="flex items-center bg-white/10 backdrop-blur rounded-full px-3 py-1"
                    >
                      {techIcons[tech] ? (
                        <img 
                          src={techIcons[tech]} 
                          alt={tech} 
                          className="h-4 w-4 mr-2"
                        />
                      ) : (
                        <Code className="h-4 w-4 mr-2" />
                      )}
                      <span className="text-xs font-medium">{tech}</span>
                    </div>
                  ))}
                  
                  {project.technologies.length > 5 && (
                    <div className="flex items-center bg-white/10 backdrop-blur rounded-full px-3 py-1">
                      <span className="text-xs font-medium">+{project.technologies.length - 5} more</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Project Content Tabs Section */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center mb-8 gap-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === 'overview' 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Project Overview
              </button>
              <button
                onClick={() => setActiveTab('process')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === 'process' 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Development Process
              </button>
              <button
                onClick={() => setActiveTab('results')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === 'results' 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Results & Impact
              </button>
            </div>
          </div>
        </section>
        
        {/* Tab Content */}
        <div className="bg-white pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  {/* Challenge and Solution */}
                  <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <div className="bg-amber-500/10 text-amber-600 p-2 rounded-lg mr-3">
                        <Lightbulb className="h-6 w-6" />
                      </div>
                      The Challenge
                    </h2>
                    <p className="text-gray-700 mb-8 leading-relaxed">
                      {project.challenge}
                    </p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <div className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
                        <Rocket className="h-6 w-6" />
                      </div>
                      Our Solution
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                  
                  {/* Device Views */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Device Views</h2>
                    
                    <div className="flex flex-wrap mb-4 gap-2">
                      <button
                        onClick={() => setSelectedDevice('desktop')}
                        className={`inline-flex items-center px-4 py-2 rounded-lg transition-all ${
                          selectedDevice === 'desktop' 
                            ? 'bg-gray-900 text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <Monitor className="h-5 w-5 mr-2" />
                        Desktop
                      </button>
                      <button
                        onClick={() => setSelectedDevice('tablet')}
                        className={`inline-flex items-center px-4 py-2 rounded-lg transition-all ${
                          selectedDevice === 'tablet' 
                            ? 'bg-gray-900 text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <TabletIcon className="h-5 w-5 mr-2" />
                        Tablet
                      </button>
                      <button
                        onClick={() => setSelectedDevice('mobile')}
                        className={`inline-flex items-center px-4 py-2 rounded-lg transition-all ${
                          selectedDevice === 'mobile' 
                            ? 'bg-gray-900 text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <Smartphone className="h-5 w-5 mr-2" />
                        Mobile
                      </button>
                    </div>
                    
                    <div className="bg-gray-100 p-8 rounded-2xl relative">
                      {selectedDevice === 'desktop' && (
                        <div className="relative mx-auto" style={{ maxWidth: '700px' }}>
                          <div className="bg-gray-800 rounded-t-lg p-2 flex items-center justify-start space-x-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <img 
                            src={project.deviceViews.desktop} 
                            alt="Desktop view"
                            className="w-full border-l-2 border-r-2 border-gray-800"
                          />
                          <div className="h-4 bg-gray-800 rounded-b-lg"></div>
                        </div>
                      )}
                      
                      {selectedDevice === 'tablet' && (
                        <div className="relative mx-auto" style={{ maxWidth: '500px' }}>
                          <div className="bg-gray-800 rounded-t-3xl h-6"></div>
                          <div className="border-l-8 border-r-8 border-gray-800">
                            <img 
                              src={project.deviceViews.tablet} 
                              alt="Tablet view"
                              className="w-full"
                            />
                          </div>
                          <div className="h-14 bg-gray-800 rounded-b-3xl flex items-center justify-center">
                            <div className="w-12 h-1.5 bg-gray-600 rounded-full"></div>
                          </div>
                        </div>
                      )}
                      
                      {selectedDevice === 'mobile' && (
                        <div className="relative mx-auto" style={{ maxWidth: '280px' }}>
                          <div className="bg-gray-800 rounded-t-3xl p-2">
                            <div className="w-1/2 h-5 bg-black mx-auto rounded-full"></div>
                          </div>
                          <div className="border-l-8 border-r-8 border-gray-800">
                            <img 
                              src={project.deviceViews.mobile} 
                              alt="Mobile view"
                              className="w-full"
                            />
                          </div>
                          <div className="h-12 bg-gray-800 rounded-b-3xl flex items-center justify-center">
                            <div className="w-10 h-1.5 bg-gray-600 rounded-full"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <div className="bg-blue-500/10 text-blue-600 p-2 rounded-lg mr-3">
                        <Code className="h-6 w-6" />
                      </div>
                      Technologies Used
                    </h2>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {project.technologies.map((tech, index) => (
                        <div 
                          key={index}
                          className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="w-12 h-12 mb-3 flex items-center justify-center">
                            {techIcons[tech] ? (
                              <img 
                                src={techIcons[tech]} 
                                alt={tech} 
                                className="h-10 w-10"
                              />
                            ) : (
                              <Code className="h-10 w-10 text-gray-400" />
                            )}
                          </div>
                          <span className="text-sm font-medium text-gray-700">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  {/* Project Details */}
                  <div className="sticky top-24">
                    {/* Services Provided */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Services Provided</h3>
                      <ul className="space-y-3">
                        {project.services.map((service, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-3 mt-0.5 bg-primary/10 p-1 rounded-full">
                              <Check className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-gray-700">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Client Testimonial */}
                    <div className="bg-gray-900 text-white rounded-2xl p-6 mb-8 relative overflow-hidden">
                      {/* Background decoration */}
                      <div className="absolute top-0 right-0 opacity-10">
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.80042 4.80035L8.57142 2.80059C5.60402 4.00935 1.59961 7.63261 2.59961 14.8003H6.2C6.2 12.4003 5.38742 8.4006 9.80042 4.80035ZM18.8004 4.80035L17.5714 2.80059C14.604 4.00935 10.5996 7.63261 11.5996 14.8003H15.2C15.2 12.4003 14.3874 8.4006 18.8004 4.80035Z" fill="white"/>
                        </svg>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-4">Client Testimonial</h3>
                      <p className="text-white/90 italic mb-4 relative z-10">"{project.testimonial.quote}"</p>
                      
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                          {project.testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{project.testimonial.author}</p>
                          <p className="text-white/70 text-sm">{project.testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl p-6">
                      <h3 className="text-lg font-bold mb-3">Interested in a similar project?</h3>
                      <p className="mb-4 text-white/90">Let's discuss how we can help you achieve your business goals with a custom digital solution.</p>
                      <button
                        onClick={() => window.location.href = '/contact'}
                        className="w-full py-3 px-6 bg-white text-primary font-medium rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center"
                      >
                        Start a Conversation
                        <ArrowUpRight className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Process Tab */}
            {activeTab === 'process' && (
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Process</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    We follow a structured approach to ensure every project is delivered with the highest quality standards.
                    Here's how we brought {project.title} to life.
                  </p>
                </div>
                
                {/* Process Timeline */}
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
                  
                  <div className="space-y-12">
                    {project.process.map((phase, index) => (
                      <div 
                        key={index}
                        className={`relative ${index % 2 === 0 ? 'lg:ml-auto lg:mr-[50%]' : 'lg:mr-auto lg:ml-[50%]'} lg:w-[45%]`}
                      >
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 relative z-10"
                        >
                          {/* Connector to timeline */}
                          <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white z-20 shadow-md
                            lg:left-[calc(100%+3.45rem)] lg:right-auto
                            left-1/2 -translate-x-1/2
                            "></div>
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{phase.phase}</h3>
                          <p className="text-sm text-primary mb-3">{phase.duration}</p>
                          <p className="text-gray-700">{phase.description}</p>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Image Gallery */}
                <div className="mt-20">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.gallery.map((image, index) => (
                      <div 
                        key={index}
                        className="group relative overflow-hidden rounded-xl aspect-video border border-gray-100 shadow-sm"
                      >
                        <img 
                          src={image} 
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4">
                            <p className="text-white font-medium">
                              Development Phase {index + 1}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Results Tab */}
            {activeTab === 'results' && (
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Results & Impact</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Our solution delivered measurable results for {project.client}, 
                    transforming their business operations and creating lasting impact.
                  </p>
                </div>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  {project.results.map((result, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-xl border border-gray-100 p-6 shadow-md flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow"
                    >
                      <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <PieChart className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">{result.value}</h3>
                      <p className="text-gray-600">{result.metric}</p>
                    </motion.div>
                  ))}
                </div>
                
                {/* Impact Overview */}
                <div className="bg-gray-50 rounded-3xl p-8 mb-16">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
                      <Zap className="h-6 w-6" />
                    </div>
                    Long-term Impact
                  </h3>
                  
                  <div className="space-y-6 text-lg text-gray-700">
                    <p>The implementation of the {project.title} for {project.client} has delivered significant value beyond the immediate metrics. The solution has positioned them as an industry leader in digital innovation and created a foundation for future growth.</p>
                    
                    <p>By streamlining their operations and providing powerful analytical capabilities, we've enabled data-driven decision making that continues to yield compounding returns on their initial investment.</p>
                    
                    <p>The solution was designed with scalability in mind, allowing {project.client} to easily expand functionality as their business grows and technology evolves.</p>
                  </div>
                </div>
                
                {/* Testimonial Highlight */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-3xl p-12 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                  <div className="absolute -top-16 -left-16 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
                  
                  <div className="max-w-3xl mx-auto relative z-10">
                    <div className="text-6xl text-primary mb-6">"</div>
                    
                    <p className="text-2xl italic mb-10 leading-relaxed">
                      {project.testimonial.quote}
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                        {project.testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-xl">{project.testimonial.author}</p>
                        <p className="text-white/80">{project.testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Projects - 2025 Style */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-24 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full translate-y-1/2 blur-3xl"></div>
          
          {/* Decorative grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNTkuOTEgMEwwIDU5LjkxVjYwaDYwVjBILjAxdjU5LjkxTDU5LjkxIDBILjAxVjYwaDU5LjkxVi4wMUwwIDYwVi4wMWw1OS45MSA1OS45TDAgMFYuMDFMNTkuOTEgNjBIMHYtLjA5TDU5LjkxIDBILjAxVi4wMkw1OS45IDU5LjkxVi4wMUwuMDIgNTkuOVYuMDFoNTkuOVYwSC4wMXYuMDFMNjAgNjBWLjAxTDAgNjBWLjAxTDU5LjkxIDBoLS4wMVY2MGgtLjA5TDAgMGg2MHYuMDFMNjAgLjAxIiBvcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Similar Projects</h2>
              <p className="text-gray-600">Explore more projects in the {project.categories.map(c => c.charAt(0).toUpperCase() + c.slice(1).replace('-', ' ')).join(' & ')} category</p>
            </motion.div>
            
            {/* Related Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {Object.values(projectsData)
                .filter(p => 
                  // Filter current project out and find projects with similar categories
                  p.id !== project.id && 
                  p.categories.some(cat => project.categories.includes(cat))
                )
                .slice(0, 4) // Limit to 4 projects
                .map((relatedProject, index) => (
                  <div 
                    key={relatedProject.id}
                    className="group"
                  >
                    <div 
                      onClick={() => window.location.href = `/portfolio/${relatedProject.id}`}
                      className="block h-full cursor-pointer"
                    >
                      <div className="relative overflow-hidden rounded-xl h-full border border-gray-100 bg-white shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                        {/* Thumbnail */}
                        <div className="relative overflow-hidden aspect-[16/10]">
                          <img 
                            src={relatedProject.thumbnail} 
                            alt={relatedProject.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          
                          {/* Gradient overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
                          
                          {/* View button overlay */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                              <ArrowUpRight className="h-4 w-4 mr-1.5" />
                              <span className="text-sm font-medium">View Project</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-4">
                          <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors line-clamp-1">
                            {relatedProject.title}
                          </h3>
                          
                          <div className="flex items-center text-gray-600 text-sm">
                            <Building className="h-3.5 w-3.5 mr-1" />
                            <span className="truncate">{relatedProject.client}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
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

function TabletIcon(props: any) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={props.className}
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <line x1="12" x2="12.01" y1="18" y2="18" />
    </svg>
  );
}