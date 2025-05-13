import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Globe, ArrowUpRight, ArrowLeft, BadgeCheck } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams, Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import problemIconImage from '../assets/fi_1743994.png';

// We'll use paths to images instead of imports
const figmaIcon = "/img/figma.svg";
const wordpressIcon = "/img/wordpress.svg";
const reactIcon = "/img/react.svg";
const chatGPTIcon = "/img/chatgpt.svg";
const problemIcon = "/img/fi_1743994.png";

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
        {/* Hero section with orange background - two columns */}
        <section className="relative pt-20 pb-32 bg-[#EB7127] overflow-hidden">
          {/* Secondary orange tone slice - increased height and z-index for visibility */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-[#EC884C] transform skew-y-3 origin-bottom-left z-[1]"></div>
          {/* White slanted bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-white transform skew-y-3 origin-bottom-left z-[2]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left column - text content */}
              <div className="pt-6">
                {/* Category Tags with special styling */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.categories.map((category, index) => (
                    <div
                      key={index}
                      className="relative"
                    >
                      <div className="bg-[#FFEFD7] px-2 py-1 rounded-[8px_8px_0px_8px]">
                        <span
                          className="text-xs font-semibold px-2 py-1"
                          style={{
                            background: 'linear-gradient(180deg, #EB7127 0%, #D3804E 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          }}
                        >
                          {category.replace('-', ' ')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Project Title */}
                <h1 className="text-4xl md:text-5xl font-play font-bold text-white mb-8">
                  {project.title}
                </h1>
                
                {/* Project Info */}
                <div className="flex flex-wrap items-center gap-6 mb-6 text-white">
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 mr-2" />
                    <span>{project.domain}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{project.date}</span>
                  </div>
                </div>
                
                {/* Project Description */}
                <p className="text-white/90 mb-8 text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Donec velit non ipsum vulputate 
                  incidunt. Facilisis lectus donec ornare rhoncus vitae. Arcu at in donec at 
                  et orci sed aliquot turpis. Facilisi non pharetra tellus ut quam amet tellus 
                  id lobortis. Nascetur amet non suspendisse mi faucibus tempor. 
                  Curabitur dignissim fames aliquam elementum adipiscing ac. Etiam dolor 
                  massa mauris habitant sit arcu. Gravida aliquot ut diam facilisis sed.
                </p>
              </div>
              
              {/* Right column - macbook mockup */}
              <div className="relative">
                <img 
                  src={project.screenshot} 
                  alt={project.title} 
                  className="w-full h-auto relative z-10"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Removing the duplicate diagonal separator as we've improved the one in the hero section */}
        
        {/* Project Tabs - white background buttons, orange for active */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setActiveTab('overview')}
                className={activeTab === 'overview' 
                  ? 'px-4 py-2 font-semibold text-lg text-white rounded-lg bg-gradient-to-b from-[#EB7127] to-[#D3804E]' 
                  : 'px-4 py-2 font-semibold text-lg text-[#6E6E6E] rounded-lg bg-[#F1F1F1] hover:bg-gradient-to-b hover:from-[#EB7127] hover:to-[#D3804E] hover:text-white transition-colors'
                }
              >
                Project overview
              </button>
              <button
                onClick={() => setActiveTab('process')}
                className={activeTab === 'process' 
                  ? 'px-4 py-2 font-semibold text-lg text-white rounded-lg bg-gradient-to-b from-[#EB7127] to-[#D3804E]' 
                  : 'px-4 py-2 font-semibold text-lg text-[#6E6E6E] rounded-lg bg-[#F1F1F1] hover:bg-gradient-to-b hover:from-[#EB7127] hover:to-[#D3804E] hover:text-white transition-colors'
                }
              >
                Development Process
              </button>
              <button
                onClick={() => setActiveTab('results')}
                className={activeTab === 'results' 
                  ? 'px-4 py-2 font-semibold text-lg text-white rounded-lg bg-gradient-to-b from-[#EB7127] to-[#D3804E]' 
                  : 'px-4 py-2 font-semibold text-lg text-[#6E6E6E] rounded-lg bg-[#F1F1F1] hover:bg-gradient-to-b hover:from-[#EB7127] hover:to-[#D3804E] hover:text-white transition-colors'
                }
              >
                Results & Impact
              </button>
            </div>
          </div>
        </section>
        
        {/* Project Content based on active tab */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {activeTab === 'overview' && (
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left column with Problem/Solution & Technologies */}
                  <div className="space-y-8">
                    {/* Problem/Solution section */}
                    <div className="bg-[rgba(255,138,0,0.04)] rounded-[24px_24px_0px_24px] p-6">
                      <div className="space-y-8">
                        {/* Problem section */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 flex items-center justify-center">
                              <img 
                                src={problemIconImage}
                                alt="Problem icon"
                                className="w-6 h-6"
                              />
                            </div>
                            <h3 className="text-lg font-semibold text-[#8F8F8F]">Problem</h3>
                          </div>
                          <p className="text-gray-700 text-base">
                            {project.problem}
                          </p>
                        </div>
                        
                        {/* Solution section */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 flex items-center justify-center">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                  <path d="M2.9 14.17L1.76 24L12.76 14.17H2.9Z" fill="#EB7127"/>
                                  <path d="M19.73 14.3L4.3 14.3L4.31 0L19.73 14.3Z" fill="#EB7127"/>
                                  <path d="M19.73 4.68L21.76 5.98L19.73 0.94V4.68Z" fill="#EB7127"/>
                                  <path d="M19.27 0.94L19.27 7.74L19.27 1.55L19.27 0.94Z" fill="#EB7127"/>
                                  <path d="M3.33 4.68L1.3 5.98L3.33 0.94V4.68Z" fill="#EB7127"/>
                                  <path d="M3.99 0.94V7.74V1.55V0.94Z" fill="#EB7127"/>
                                  <path d="M10.18 12.42L5.67 8.27H15.22L10.18 12.42Z" fill="#EB7127"/>
                                </g>
                              </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-[#EB7127]">Solution</h3>
                          </div>
                          <p className="text-gray-700 text-base">
                            {project.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Technologies Used section */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.25 1.25V22.75H22.75V1.25H1.25ZM21.25 21.25H2.75V2.75H21.25V21.25Z" fill="#454545"/>
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-[#454545]">Technologie Used</h3>
                      </div>
                      
                      <div className="flex flex-wrap gap-5">
                        {/* Technology cards */}
                        {project.technologies.map((tech, index) => (
                          <div 
                            key={index} 
                            className="w-[130px] h-[130px] flex flex-col items-center justify-center gap-1 bg-[rgba(255,138,0,0.04)] rounded-[24px_24px_0px_24px] p-6"
                          >
                            <div className="w-16 h-16 flex items-center justify-center">
                              {/* Using orange gradient SVG icons with Figma, WordPress, React and ChatGPT styling */}
                              <svg width="65" height="66" viewBox="0 0 65 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {tech.name === 'Figma' && (
                                  <>
                                    <path d="M14.2 6.81L30.47 6.81L30.47 39L14.2 39L14.2 6.81Z" fill="url(#figma_grad1)"/>
                                    <path d="M30.47 6.81L46.73 6.81V39H30.47V6.81Z" fill="url(#figma_grad2)"/>
                                    <path d="M30.47 23L46.73 23V46H30.47V23Z" fill="url(#figma_grad3)"/>
                                    <path d="M14.2 39.2L30.47 39.2L30.47 66H14.2L14.2 39.2Z" fill="url(#figma_grad4)"/>
                                    <path d="M14.2 23L30.47 23L30.47 46H14.2L14.2 23Z" fill="url(#figma_grad5)"/>
                                  </>
                                )}
                                {tech.name === 'Wordpress' && (
                                  <path d="M33 0C14.77 0 0 14.77 0 33C0 51.23 14.77 66 33 66C51.23 66 66 51.23 66 33C66 14.77 51.23 0 33 0Z" fill="url(#wp_grad)"/>
                                )}
                                {tech.name === 'React' && (
                                  <>
                                    <path d="M33 40.95C37.3 40.95 40.95 37.3 40.95 33C40.95 28.7 37.3 25.05 33 25.05C28.7 25.05 25.05 28.7 25.05 33C25.05 37.3 28.7 40.95 33 40.95Z" fill="url(#react_grad)"/>
                                    <path d="M33 49.23C51.15 49.23 66 42.03 66 33C66 23.97 51.15 16.77 33 16.77C14.85 16.77 0 23.97 0 33C0 42.03 14.85 49.23 33 49.23Z" fill="url(#react_grad)"/>
                                    <path d="M23.43 41.12C32.45 57.07 44.88 66 51.15 62.37C57.42 58.74 56.43 43.45 47.52 27.39C38.61 11.33 26.07 2.51 19.8 6.14C13.53 9.77 14.41 25.17 23.43 41.12Z" fill="url(#react_grad)"/>
                                    <path d="M23.43 24.88C14.41 40.83 13.53 56.23 19.8 59.86C26.07 63.49 38.61 54.67 47.52 38.61C56.43 22.55 57.42 7.26 51.15 3.63C44.88 0 32.56 8.93 23.43 24.88Z" fill="url(#react_grad)"/>
                                  </>
                                )}
                                {tech.name === 'Chat GPT' && (
                                  <>
                                    <path d="M30 0L5.36 14.14V42.43L12.85 46.93V18.64L30 9.28L47.15 18.64V46.93L54.64 42.43V14.14L30 0Z" fill="url(#chatgpt_grad)"/>
                                    <path d="M47.14 51.43L30 60.79L12.86 51.43V32.71L5.36 28.21V56.29L30 75L54.64 56.29V28.21L47.14 32.71V51.43Z" fill="url(#chatgpt_grad)"/>
                                    <path d="M12.86 23.14L30 32.5L47.14 23.14L30 13.79L12.86 23.14Z" fill="url(#chatgpt_grad)"/>
                                  </>
                                )}
                              </svg>
                            </div>
                            <span 
                              className="text-base font-semibold" 
                              style={{
                                background: 'linear-gradient(180deg, #EB7127 0%, #D3804E 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                              }}
                            >
                              {tech.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Right column with Services Provided, Client Testimonial & Interested in similar */}
                  <div className="space-y-8">
                    {/* Services Provided */}
                    <div className="bg-[#EB7127] rounded-[24px_24px_0px_24px] p-6">
                      <div className="space-y-8">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.5 1.5H9V9H1.5V1.5Z" stroke="white" strokeWidth="1.5"/>
                              <path d="M14.25 1.5H21.75V9H14.25V1.5Z" stroke="white" strokeWidth="1.5"/>
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold text-white">Services provided</h3>
                        </div>
                        
                        <div className="space-y-4">
                          {project.services.map((service, index) => (
                            <div key={index} className="flex items-start gap-1">
                              <span className="text-[#F2F3F2] text-lg">*</span>
                              <span className="text-white">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Client testimonial */}
                    <div className="bg-[rgba(255,138,0,0.01)] rounded-[24px_24px_0px_24px] p-6">
                      <div className="space-y-6">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.36 2.99V18.01H5.68V8.07L17.68 18.01V2.99H13.36V12.93L1.36 2.99Z" fill="url(#testimonial_grad)"/>
                              <defs>
                                <linearGradient id="testimonial_grad" x1="1.36" y1="2.99" x2="17.68" y2="18.01" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#EB7127"/>
                                  <stop offset="1" stopColor="#D3804E"/>
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <h3 
                            className="text-lg font-semibold"
                            style={{
                              background: 'linear-gradient(180deg, #EB7127 0%, #D3804E 100%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text'
                            }}
                          >
                            Client testimonial
                          </h3>
                        </div>
                        
                        <p className="text-gray-700">
                          "{project.testimonial.quote}"
                        </p>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-[42px] h-[42px] rounded-full bg-[#39688E] relative">
                            {/* Client avatar would go here */}
                          </div>
                          <span className="text-gray-700">{project.testimonial.author} | {project.testimonial.position}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Interested in similar project */}
                    <div className="bg-[#F2F3F2] rounded-[24px_24px_0px_24px] p-6">
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-[#454545]">Interested in a similar project?</h3>
                        
                        <p className="text-[#737373] text-sm">
                          Share the vision for your brand, and we'll create an awesome digital marketing strategy that not only fits your budget, but also amplifies your message. We're eager to connect and bring your ideas to life.
                        </p>
                        
                        <button className="w-full bg-[#282828] text-white font-semibold py-3 rounded-[8px_8px_0px_8px] hover:opacity-90 transition-opacity">
                          Get your Free Proposal
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'process' && (
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-6">Development Process</h3>
                <p className="text-gray-700 mb-6">
                  Our development process for this project followed a well-established methodology designed to ensure quality results.
                </p>
                <ol className="list-decimal pl-6 space-y-6 text-gray-700">
                  <li className="pl-2">
                    <strong className="text-gray-800">Discovery & Planning</strong>
                    <p className="mt-2">We began with a thorough discovery phase, understanding the client's business goals, target audience, and unique value proposition.</p>
                  </li>
                  <li className="pl-2">
                    <strong className="text-gray-800">Design Phase</strong>
                    <p className="mt-2">Our design team created wireframes, mockups, and prototypes to visualize the user interface and experience.</p>
                  </li>
                  <li className="pl-2">
                    <strong className="text-gray-800">Development Stage</strong>
                    <p className="mt-2">Using the latest technologies, our development team brought the designs to life with clean, maintainable code.</p>
                  </li>
                  <li className="pl-2">
                    <strong className="text-gray-800">Testing & Quality Assurance</strong>
                    <p className="mt-2">Rigorous testing was performed to ensure compatibility across devices and browsers, as well as performance optimization.</p>
                  </li>
                  <li className="pl-2">
                    <strong className="text-gray-800">Deployment & Training</strong>
                    <p className="mt-2">We carefully deployed the solution and provided training to ensure the client could manage their new digital platform effectively.</p>
                  </li>
                </ol>
              </div>
            )}
            
            {activeTab === 'results' && (
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-6">Results & Impact</h3>
                <p className="text-gray-700 mb-6">
                  Our work with {project.title.split(' ').pop()} delivered significant results across key performance indicators.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-[#EB7127]">
                    <div className="text-3xl font-bold text-[#EB7127] mb-2">+87%</div>
                    <div className="text-gray-700">Increase in website traffic</div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-[#EB7127]">
                    <div className="text-3xl font-bold text-[#EB7127] mb-2">+45%</div>
                    <div className="text-gray-700">Improvement in conversion rate</div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-[#EB7127]">
                    <div className="text-3xl font-bold text-[#EB7127] mb-2">-35%</div>
                    <div className="text-gray-700">Decrease in bounce rate</div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-[#EB7127]">
                    <div className="text-3xl font-bold text-[#EB7127] mb-2">+92%</div>
                    <div className="text-gray-700">Increase in mobile engagement</div>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold mb-4">Long-term Impact</h4>
                <p className="text-gray-700 mb-6">
                  Beyond the immediate metrics, our work has enabled {project.title.split(' ').pop()} to establish a stronger market presence, 
                  improve customer experience, and build a foundation for future digital growth. The modern, responsive design and 
                  intuitive user interface have significantly improved brand perception and customer satisfaction.
                </p>
              </div>
            )}
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