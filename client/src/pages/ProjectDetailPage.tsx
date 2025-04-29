import { useState } from 'react';
import { useRoute } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, ChevronRight, ExternalLink, Clock, CalendarDays, Tag, Check, Award, Building } from 'lucide-react';
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
  },
};

export default function ProjectDetailPage() {
  const [, params] = useRoute('/portfolio/:id');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
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