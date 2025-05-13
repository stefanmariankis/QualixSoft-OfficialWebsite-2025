import { useParams, Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';

// Import iconițe hexagonale
import OnlinePresenceIcon from '../assets/importance/24-7-online-presence.png';
import CredibilityIcon from '../assets/importance/credibility-and-professionalism.png';
import MarketingIcon from '../assets/importance/cost-effective-marketing.png';
import ConvenienceIcon from '../assets/importance/customer-convenience.png';
import AudienceReachIcon from '../assets/importance/wider-audience-reach.png';

// Options images
import WebDevImg from '../assets/options/web-development.png';
import EcommerceDevImg from '../assets/options/e-commerce-development.png';
import MobileDevImg from '../assets/options/mobile-development.png';

// Timeline images
import AnalysisIcon from '../assets/timeline/analiza-si-planificare.png';
import StructureIcon from '../assets/timeline/structura-si-arhitectura.png';
import WireframeIcon from '../assets/timeline/realizare-wireframe.png';
import WebdesignIcon from '../assets/timeline/webdesign.png';
import ContentIcon from '../assets/timeline/content-copywriting.png';
import ImplementationIcon from '../assets/timeline/implementare-site.png';
import DeploymentIcon from '../assets/timeline/website-deployment.png';

// Mock data for the service page
const serviceData = {
  web_mobile_development: {
    title: "Web & Mobile development",
    heroBackgroundColor: "#EB7127",
    whySection: {
      title: "Why do you need a customized website?",
      description: [
        "În lumea digitală de astăzi, un site web personalizat este esențial pentru a vă diferenția afacerea și pentru a oferi o experiență unică utilizatorilor dumneavoastră.",
        "Un site web personalizat vă permite să vă prezentați identitatea brandului, să vă conectați cu publicul țintă și să oferiți funcționalități specifice nevoilor afacerii dumneavoastră."
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
    },
    importanceSection: {
      title: "The importance of a website",
      benefits: [
        {
          id: 1,
          icon: <img src={OnlinePresenceIcon} alt="24/7 Online Presence" className="h-16 w-16" />,
          title: "24/7 Online Presence",
          description: "A website allows your business to be accessible to customers anytime, achieving visibility and potential sales."
        },
        {
          id: 2,
          icon: <img src={CredibilityIcon} alt="Credibility and Professionalism" className="h-16 w-16" />,
          title: "Credibility and Professionalism",
          description: "A well-designed website establishes trust and showcases your professionalism."
        },
        {
          id: 3,
          icon: <img src={MarketingIcon} alt="Cost-Effective Marketing" className="h-16 w-16" />,
          title: "Cost-Effective Marketing",
          description: "Websites are a cost-effective marketing tool, providing your services/products without expensive advertising."
        },
        {
          id: 4,
          icon: <img src={ConvenienceIcon} alt="Customer Convenience" className="h-16 w-16" />,
          title: "Customer Convenience",
          description: "Provides easy access to information, services, and support, enhancing the user experience."
        },
        {
          id: 5,
          icon: <img src={AudienceReachIcon} alt="Wider Audience Reach" className="h-16 w-16" />,
          title: "Wider Audience Reach",
          description: "A website helps you reach a global audience, expanding your customer base beyond local limits."
        }
      ]
    },
    optionsSection: {
      title: "Multiple options for your needs",
      services: [
        {
          id: 1,
          title: "Web development",
          icon: "/assets/web_development_icon.svg",
          image: WebDevImg,
          features: [
            "Implementing modern visual solutions for experiences that convert visitors into customers",
            "Integrating accessibility principles for all users",
            "A/B testing to optimize visual and functional elements",
            "Post-launch behavior monitoring and adjustments for continuous UX"
          ]
        },
        {
          id: 2,
          title: "Mobile development",
          icon: "/assets/mobile_development_icon.svg",
          image: MobileDevImg,
          features: [
            "Crearea de aplicații native pentru iOS și Android",
            "Dezvoltarea de aplicații cross-platform pentru a reduce costurile",
            "Integrarea cu sisteme și API-uri existente",
            "Testare extensivă pe multiple dispozitive"
          ]
        },
        {
          id: 3,
          title: "E-commerce development",
          icon: "/assets/ecommerce_development_icon.svg",
          image: EcommerceDevImg,
          features: [
            "Crearea de magazine online personalizate și scalabile",
            "Integrarea cu sisteme de plată și gestiune a stocurilor",
            "Optimizarea experienței de cumpărare pentru conversii mai bune",
            "Implementarea de funcționalități avansate de căutare și filtrare"
          ]
        }
      ]
    },
    processSection: {
      title: "What can we do for you?",
      steps: [
        {
          id: 1,
          title: "Analiză și planificare",
          description: "Analizăm nevoile afacerii dumneavoastră și planificăm arhitectura și funcționalitățile site-ului.",
          icon: AnalysisIcon
        },
        {
          id: 2,
          title: "Structură și arhitectură",
          description: "Definim structura site-ului, navigarea și organizarea conținutului pentru o experiență optimă a utilizatorului.",
          icon: StructureIcon
        },
        {
          id: 3,
          title: "Realizare Wireframe",
          description: "Creăm schițe detaliate ale paginilor care vor servi ca bază pentru designul final al site-ului.",
          icon: WireframeIcon
        },
        {
          id: 4,
          title: "Webdesign",
          description: "Realizăm un design modern și atrăgător care reflectă identitatea brandului dumneavoastră.",
          icon: WebdesignIcon
        },
        {
          id: 5,
          title: "Content & copywriting",
          description: "Creăm conținut de calitate care comunică eficient mesajul brandului dumneavoastră.",
          icon: ContentIcon
        },
        {
          id: 6,
          title: "Implementare site",
          description: "Transformăm designul în cod funcțional, asigurând compatibilitatea cu toate dispozitivele și browserele.",
          icon: ImplementationIcon
        },
        {
          id: 7,
          title: "Website deployment",
          description: "Lansăm site-ul în mediul de producție și efectuăm teste finale pentru a asigura funcționalitatea corectă.",
          icon: DeploymentIcon
        }
      ]
    },
    portfolioSection: {
      title: "Take a look at our projects",
      subtitle: "A collection of our most well-executed client projects",
      projects: [
        {
          id: 1,
          name: "Pulse Welding",
          logo: "/assets/client_pulse_welding_home_carousel.png",
          domain: "pulsewelding.com",
          type: "Corporate Website",
          image: "/assets/client_pulse_welding_home_carousel.png"
        },
        {
          id: 2,
          name: "Climatic",
          logo: "/assets/client_climatic_gps_home_carousel.png",
          domain: "climaticgps.com",
          type: "Product Website",
          image: "/assets/client_climatic_gps_home_carousel.png"
        }
      ]
    },
    ctaSection: {
      title: "Envision Your Brand's Future With Tailored Digital Marketing",
      description: "Share the vision for your brand, and we'll create an awesome digital marketing strategy that not only fits your budget but also amplifies your message. Write to us!",
      buttonText: "Get your Free Proposal"
    }
  }
};

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const { t, i18n } = useTranslation();
  const [progressHeight, setProgressHeight] = useState(10);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Handle scroll effect for timeline progress bar that stays visible in the viewport
  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const timelineRect = timelineRef.current.getBoundingClientRect();
        const timelineTop = timelineRect.top;
        const timelineBottom = timelineRect.bottom;
        const viewportHeight = window.innerHeight;
        
        // Calculate visible progress based on how far user has scrolled through the timeline
        if (timelineBottom < 0) {
          // Timeline has been scrolled past completely
          setProgressHeight(100);
        } else if (timelineTop > viewportHeight) {
          // Timeline hasn't been reached yet
          setProgressHeight(0);
        } else {
          // Timeline is partially visible - calculate percentage scrolled through
          const totalTimelineHeight = timelineRef.current.offsetHeight;
          const scrolledDistance = Math.abs(Math.min(0, timelineTop));
          const scrollPercentage = Math.min(100, Math.max(0, (scrolledDistance / totalTimelineHeight) * 100));
          
          setProgressHeight(scrollPercentage);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial calculation
    setTimeout(handleScroll, 500);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Default to web_mobile_development if no serviceId is provided or if it doesn't exist
  const currentServiceId = serviceId || 'web_mobile_development';
  const service = serviceData.web_mobile_development; // For now, always use web_mobile_development
  
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section with Orange Background */}
      <div className="bg-[#EB7127] py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
            <div className="flex justify-center items-center space-x-2 text-sm md:text-base">
              <Link href="/services" className="hover:underline">
                {t('services.title')}
              </Link>
              <span>&#62;</span>
              <span>{service.title}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Why do you need section with image */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{service.whySection.title}</h2>
              {service.whySection.description.map((paragraph, idx) => (
                <p key={idx} className="text-gray-600 mb-4">{paragraph}</p>
              ))}
            </div>
            <div className="order-1 md:order-2">
              <img 
                src={service.whySection.image} 
                alt="Team working on website design" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* The importance of a website section with icons */}
      <section className="py-20 md:py-24 bg-[#F2F3F2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-[42px] font-bold text-[#454545] mb-12 text-center font-play">{service.importanceSection.title}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-between">
              {service.importanceSection.benefits.map((benefit) => (
                <div key={benefit.id} className="flex flex-col justify-center items-center">
                  <div className="mb-4">
                    <div className="relative mx-auto h-[100px] w-[100px] flex items-center justify-center">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="flex flex-col items-center max-w-[190px]">
                    <h3 className="text-base font-semibold text-[#EB7127] mb-2.5 text-center">{benefit.title}</h3>
                    <p className="text-[#454545] text-base text-center leading-[110%]">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Multiple options section with services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-[42px] font-bold text-[#454545] mb-12 font-play">{service.optionsSection.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.optionsSection.services.map((item) => (
                <div key={item.id} className="bg-[#FFF9F6] p-6 rounded-lg border border-[rgba(235,113,39,0.2)] hover:shadow-lg transition-shadow">
                  <div className="mb-6 flex justify-center">
                    <img src={item.image} alt={item.title} className="w-40 h-32 object-contain" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#EB7127] mb-4">{item.title}</h3>
                  <ul className="space-y-3 mb-6">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#EB7127] mr-2 flex-shrink-0">★</span>
                        <span className="text-[#454545] text-base leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-[#333] hover:scale-[1.02] transition-all w-full text-center">
                      Get your Free Proposal
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Process timeline section - exactly as in mockup */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-[42px] font-bold text-[#454545] mb-20 font-play">{service.processSection.title}</h2>
            
            <div className="relative" ref={timelineRef}>
              {/* Vertical Timeline Line */}
              {/* Fixed gray line for the whole timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-gray-200 z-10"></div>
              
              {/* Orange progress overlay - grows as user scrolls */}
              <div 
                className="absolute left-1/2 transform -translate-x-1/2 w-1.5 bg-[#EB7127] z-20"
                style={{ 
                  height: `${progressHeight}%`, 
                  maxHeight: '100%',
                  transition: 'height 0.3s ease-out'
                }}
              ></div>
              
              {/* Circle at the bottom of timeline - starts gray, becomes orange at 100% */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-6 h-6 rounded-full border-2 border-gray-200 bg-white z-30"></div>
              
              {/* Orange circle overlay - only visible when progress is at 100% */}
              <div 
                className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-6 h-6 rounded-full bg-[#EB7127] z-40"
                style={{ 
                  opacity: progressHeight >= 100 ? 1 : 0,
                  transition: 'opacity 0.3s ease-out'
                }}
              ></div>
              
              <div className="space-y-32">
                {service.processSection.steps.map((step, index) => (
                  <div key={step.id} className="relative">
                    {/* Icon and content positioning based on even/odd */}
                    <div className="flex items-center">
                      {/* Left side - always icon for odd, text for even */}
                      <div className="w-5/12 flex justify-end pr-8">
                        {index % 2 === 0 ? (
                          <div className="bg-[#EB7127] rounded-full p-4 w-24 h-24 flex items-center justify-center">
                            <img src={step.icon} alt={step.title} className="w-12 h-12" />
                          </div>
                        ) : (
                          <div className="text-right">
                            <h3 className="text-lg font-semibold text-[#454545] mb-3 flex justify-end items-center">
                              {step.title}
                              <span className="bg-[#EB7127] text-white w-8 h-8 flex items-center justify-center ml-3 rounded-sm">
                                {step.id}
                              </span>
                            </h3>
                            <p className="text-[#454545] text-base max-w-md">{step.description}</p>
                          </div>
                        )}
                      </div>
                      
                      {/* Center spacing for timeline */}
                      <div className="w-2/12"></div>
                      
                      {/* Right side - always text for odd, icon for even */}
                      <div className="w-5/12 flex justify-start pl-8">
                        {index % 2 === 0 ? (
                          <div className="text-left">
                            <h3 className="text-lg font-semibold text-[#454545] mb-3 flex items-center">
                              <span className="bg-[#EB7127] text-white w-8 h-8 flex items-center justify-center mr-3 rounded-sm">
                                {step.id}
                              </span>
                              {step.title}
                            </h3>
                            <p className="text-[#454545] text-base max-w-md">{step.description}</p>
                          </div>
                        ) : (
                          <div className="bg-[#EB7127] rounded-full p-4 w-24 h-24 flex items-center justify-center">
                            <img src={step.icon} alt={step.title} className="w-12 h-12" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio section with orange background */}
      <section className="py-16 md:py-24 bg-[#EB7127] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full border-4 border-white"></div>
          <div className="absolute -left-40 -bottom-40 w-96 h-96 rounded-full border-4 border-white"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-[42px] font-bold text-white mb-2 font-play">{service.portfolioSection.title}</h2>
            <p className="text-white opacity-80 mb-12 max-w-xl mx-auto">{service.portfolioSection.subtitle}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {service.portfolioSection.projects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg p-8 flex flex-col items-center hover:shadow-lg transition-shadow">
                  <img src={project.logo} alt={project.name} className="h-16 mb-6" />
                  <p className="text-[#454545] mb-3 font-medium">{project.domain}</p>
                  <div className="bg-[rgba(235,113,39,0.1)] text-[#EB7127] px-4 py-1.5 rounded-full text-sm font-medium">
                    {project.type}
                  </div>
                </div>
              ))}
            </div>
            
            <a href="/portfolio" className="text-white hover:underline inline-flex items-center text-lg mt-6 font-medium">
              All projects <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-[32px] font-bold text-[#454545] mb-6 font-play leading-tight">{service.ctaSection.title}</h2>
                <p className="text-[#454545] mb-8 text-base leading-relaxed">{service.ctaSection.description}</p>
                <button className="bg-black text-white px-8 py-4 rounded-md font-medium hover:bg-[#333] hover:scale-[1.02] transition-all">
                  {service.ctaSection.buttonText}
                </button>
              </div>
              <div className="md:w-1/3 grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-md h-48">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                       alt="Team collaboration" 
                       className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md h-48 mt-6">
                  <img src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                       alt="Digital marketing" 
                       className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}