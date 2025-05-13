import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Globe, ArrowUpRight, ArrowLeft, BadgeCheck } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams, Link } from 'wouter';
import { useTranslation } from 'react-i18next';

// We'll use paths to images instead of imports
const figmaIcon = "/img/figma.svg";
const wordpressIcon = "/img/wordpress.svg";
const reactIcon = "/img/react.svg";
const chatGPTIcon = "/img/chatgpt.svg";

type ProjectTab = 'overview' | 'process' | 'results';

export default function ProjectDetailPage() {
  const { t } = useTranslation();
  const { projectId } = useParams();
  const [activeTab, setActiveTab] = useState<ProjectTab>('overview');
  
  // In a real application, fetch project data based on projectId
  const project = {
    id: 'pulse-welding',
    title: "Redesign website Pulse Welding",
    domain: "pulsewelding.com",
    date: "may 2024",
    categories: ['web-design', 'multilingual'],
    logo: "/img/client_pulse_welding_home_carousel.png",
    screenshot: "/img/Mac Studio.png",
    problem: "Lorem ipsum dolor sit amet consectetur. Quam sed aliquot sit vitae lacus. Leo aliquot sit pretium neque arcu vitae. Quam malesuada in euctor varius est aliquot. Quis dictum lorem est ut sed amet. Pretium nec iaculis diam vel egestas. Vel prom egestas vel malesuada mollis. Etiam non condimentum risus quam euidmod presenti gravida. Tempor interst fringilla vestibulum egel lobortis. Sollicitudin tristique nisi pellentesque commodo.",
    solution: "Lorem ipsum dolor sit amet consectetur. Quam sed aliquot sit vitae lacus. Leo aliquot sit pretium neque arcu vitae. Quam malesuada in euctor varius est aliquot. Quis dictum lorem est ut sed amet. Pretium nec iaculis diam vel egestas. Vel prom egestas vel malesuada mollis. Etiam non condimentum risus quam euidmod presenti gravida. Tempor interst fringilla vestibulum egel lobortis. Sollicitudin tristique nisi pellentesque commodo.",
    technologies: [
      { id: 'figma', name: 'Figma', icon: figmaIcon },
      { id: 'wordpress', name: 'Wordpress', icon: wordpressIcon },
      { id: 'react', name: 'React', icon: reactIcon },
      { id: 'chatgpt', name: 'Chat GPT', icon: chatGPTIcon },
    ],
    services: [
      'Custom Platform Development',
      'UI/UX Design',
      'Data Visualization',
      'API Integration',
      'Responsive Design'
    ],
    testimonial: {
      quote: "Many times, entrepreneurs come to us with a great product, but when it comes to brand image, things are a bit fuzzy. People don't recognize the brand, they don't identify with it, and that can be a serious problem in business growth.",
      author: "Andrei Pavel",
      position: "Pulse Welding Manager"
    },
    similarProjects: [
      {
        id: 'climatic',
        title: 'E-commerce Climatic',
        domain: 'climatic.ro',
        logo: '/img/client_climatic_gps_home_carousel.png',
        bgColor: '#FFF'
      },
      {
        id: 'pulse-welding',
        title: 'Pulse Welding',
        domain: 'pulsewelding.com',
        logo: '/img/client_pulse_welding_home_carousel.png',
        bgColor: '#2B5F93'
      },
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero section with orange background */}
        <section className="relative pt-32 pb-24 bg-[#EB7127] overflow-hidden">
          {/* White slanted bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform -skew-y-1.5 origin-right"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumbs */}
            <div className="flex items-center text-white/80 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/portfolio" className="hover:text-white transition-colors">
                Portfolio
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white font-medium">
                {project.title}
              </span>
            </div>
            
            {/* Category Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.categories.map((category, index) => (
                <span
                  key={index}
                  className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full"
                >
                  {category.replace('-', ' ')}
                </span>
              ))}
            </div>
            
            {/* Project Title */}
            <h1 className="text-4xl md:text-5xl font-play font-bold text-white mb-8">
              {project.title}
            </h1>
            
            {/* Project Info */}
            <div className="flex flex-wrap items-center gap-6 mb-12 text-white">
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                <span>{project.domain}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{project.date}</span>
              </div>
            </div>
            
            {/* MacBook Mockup */}
            <div className="max-w-4xl mx-auto relative">
              <img 
                src={project.screenshot} 
                alt={project.title} 
                className="w-full h-auto relative z-10"
              />
            </div>
          </div>
        </section>
        
        {/* Project Tabs */}
        <section className="py-8 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-3 font-medium rounded-md transition-all
                  ${activeTab === 'overview' 
                    ? 'bg-[#EB7127] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                Project overview
              </button>
              <button
                onClick={() => setActiveTab('process')}
                className={`px-6 py-3 font-medium rounded-md transition-all
                  ${activeTab === 'process' 
                    ? 'bg-[#EB7127] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                Development Process
              </button>
              <button
                onClick={() => setActiveTab('results')}
                className={`px-6 py-3 font-medium rounded-md transition-all
                  ${activeTab === 'results' 
                    ? 'bg-[#EB7127] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                Results & Impact
              </button>
            </div>
          </div>
        </section>
        
        {/* Problem & Solution Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Problem Section */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Problem</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">{project.problem}</p>
              </div>
              
              {/* Solution Section */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-[#FFF0E8] rounded-lg flex items-center justify-center mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 12H4.5M4.5 12C5.88071 12 7 13.1193 7 14.5V15C7 16.1046 7.89543 17 9 17H15C16.1046 17 17 16.1046 17 15V14.5C17 13.1193 18.1193 12 19.5 12M19.5 12H22M19.5 12V10M4.5 12V10M9 7H15M12 7V3" stroke="#EB7127" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Solution</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technologies Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-800 mb-10 flex items-center">
              <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5H11M3 12H16M3 19H21" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              Technologies Used
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {project.technologies.map(tech => (
                <div key={tech.id} className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-4">
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-gray-700 font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Services Provided Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#FEF7F2] rounded-lg p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#EB7127] opacity-5 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#EB7127] opacity-5 rounded-full -ml-16 -mb-16"></div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                <div className="w-10 h-10 bg-[#EB7127] rounded-lg flex items-center justify-center mr-4">
                  <BadgeCheck className="text-white" />
                </div>
                Services provided
              </h2>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-[#EB7127] mt-0.5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        
        {/* Client Testimonial Section */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <div className="w-10 h-10 bg-[#FFF0E8] rounded-lg flex items-center justify-center mr-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 7H2V18H7.5M7.5 7V18M7.5 7H10.5M16.5 7H22V18H16.5M16.5 7V18M16.5 7H13.5M10.5 7H13.5V18H10.5V7ZM10.5 7C10.5 4.5 9.5 3 7.5 3M13.5 7C13.5 4.5 14.5 3 16.5 3" stroke="#EB7127" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              Client testimonial
            </h2>
            
            <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-8">
              <blockquote className="text-gray-700 text-lg italic mb-6">
                "{project.testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#EB7127] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {project.testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-800">{project.testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{project.testimonial.position}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Similar Projects Section */}
        <section className="py-16 bg-[#EB7127]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Similar projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {project.similarProjects.map(similar => (
                <Link 
                  key={similar.id} 
                  href={`/portfolio/${similar.id}`}
                  className="block group"
                >
                  <div 
                    className="bg-white rounded-lg overflow-hidden"
                    style={{ backgroundColor: similar.bgColor }}
                  >
                    <div className="relative aspect-[16/9] p-8 flex items-center justify-center">
                      <img 
                        src={similar.logo} 
                        alt={similar.title}
                        className="max-h-16 object-contain"
                      />
                      
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-8 h-8 bg-black flex items-center justify-center rounded-md shadow-lg">
                          <ArrowUpRight className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 text-center">
                      <p className="text-gray-600 font-medium text-sm">{similar.domain}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link href="/portfolio" className="inline-flex items-center text-white hover:underline">
                <span>All projects</span>
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Interested in a similar project?
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Share the vision for your brand, and we'll create an awesome digital marketing 
                strategy that not only fits your budget, but also amplifies your message. We're 
                eager to connect and bring your ideas to life.
              </p>
              
              <button className="bg-black text-white font-medium px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                Get your Free Proposal
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}