import { useParams, Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { Globe, Check, Calendar, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';

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
          icon: <Globe className="h-8 w-8 text-white" />,
          title: "24/7 Online Presence",
          description: "A website allows your business to be accessible to customers anytime, achieving visibility and potential sales."
        },
        {
          id: 2,
          icon: <Check className="h-8 w-8 text-white" />,
          title: "Credibility and Professionalism",
          description: "A well-designed website establishes trust and showcases your professionalism."
        },
        {
          id: 3,
          icon: <Calendar className="h-8 w-8 text-white" />,
          title: "Cost-Effective Marketing",
          description: "Websites are a cost-effective marketing tool, providing your services/products without expensive advertising."
        },
        {
          id: 4,
          icon: <Users className="h-8 w-8 text-white" />,
          title: "Customer Convenience",
          description: "Provides easy access to information, services, and support, enhancing the user experience."
        },
        {
          id: 5,
          icon: <Target className="h-8 w-8 text-white" />,
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
          icon: "/assets/analyze_icon.svg"
        },
        {
          id: 2,
          title: "Structură și arhitectură",
          description: "Definim structura site-ului, navigarea și organizarea conținutului pentru o experiență optimă a utilizatorului.",
          icon: "/assets/structure_icon.svg"
        },
        {
          id: 3,
          title: "Database Structure",
          description: "Proiectăm structura bazei de date pentru a asigura performanța și scalabilitatea site-ului.",
          icon: "/assets/database_icon.svg"
        },
        {
          id: 4,
          title: "Content & copywriting",
          description: "Creăm conținut de calitate care comunică eficient mesajul brandului dumneavoastră.",
          icon: "/assets/content_icon.svg"
        },
        {
          id: 5,
          title: "Webdesign",
          description: "Realizăm un design modern și atrăgător care reflectă identitatea brandului dumneavoastră.",
          icon: "/assets/webdesign_icon.svg"
        },
        {
          id: 6,
          title: "Implementare site",
          description: "Transformăm designul în cod funcțional, asigurând compatibilitatea cu toate dispozitivele și browserele.",
          icon: "/assets/implementation_icon.svg"
        },
        {
          id: 7,
          title: "Website deployment",
          description: "Lansăm site-ul în mediul de producție și efectuăm teste finale pentru a asigura funcționalitatea corectă.",
          icon: "/assets/deployment_icon.svg"
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
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">{service.importanceSection.title}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {service.importanceSection.benefits.map((benefit) => (
                <div key={benefit.id} className="text-center">
                  <div className="mx-auto bg-[#EB7127] p-4 rounded-lg h-20 w-20 flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-12">{service.optionsSection.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.optionsSection.services.map((item) => (
                <div key={item.id} className="bg-[#FFF9F6] p-6 rounded-lg">
                  <div className="mb-4">
                    <img src={item.icon} alt={item.title} className="w-32 h-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#EB7127] mr-2">★</span>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors w-full text-center">
                      Get your Free Proposal
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Process timeline section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">{service.processSection.title}</h2>
            
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
              
              <div className="space-y-16">
                {service.processSection.steps.map((step, index) => (
                  <div key={step.id} className="relative">
                    <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      {/* Left Side (even index) */}
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                        {index % 2 === 0 ? (
                          <>
                            <div>
                              <p className="text-gray-600">{step.description}</p>
                            </div>
                          </>
                        ) : (
                          <div className="flex justify-center">
                            <div className="bg-[#EB7127] rounded-full p-4 w-20 h-20 flex items-center justify-center text-white">
                              <img src={step.icon} alt={step.title} className="w-10 h-10" />
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Center Circle with Number */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#EB7127] text-white flex items-center justify-center">
                        {step.id}
                      </div>
                      
                      {/* Right Side (odd index) */}
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12 text-right'}`}>
                        {index % 2 === 0 ? (
                          <div className="flex justify-center">
                            <div className="bg-[#EB7127] rounded-full p-4 w-20 h-20 flex items-center justify-center text-white">
                              <img src={step.icon} alt={step.title} className="w-10 h-10" />
                            </div>
                          </div>
                        ) : (
                          <>
                            <div>
                              <p className="text-gray-600">{step.description}</p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    
                    {/* Title in the middle */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 text-center w-full">
                      <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio section with orange background */}
      <section className="py-16 md:py-24 bg-[#EB7127]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-2">{service.portfolioSection.title}</h2>
            <p className="text-white opacity-80 mb-12">{service.portfolioSection.subtitle}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {service.portfolioSection.projects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg p-6 flex flex-col items-center">
                  <img src={project.logo} alt={project.name} className="h-12 mb-4" />
                  <p className="text-gray-600 mb-2">{project.domain}</p>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    {project.type}
                  </div>
                </div>
              ))}
            </div>
            
            <a href="/portfolio" className="text-white hover:underline inline-flex items-center">
              All projects <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{service.ctaSection.title}</h2>
                <p className="text-gray-600 mb-6">{service.ctaSection.description}</p>
                <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                  {service.ctaSection.buttonText}
                </button>
              </div>
              <div className="md:w-1/3 grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                       alt="Team collaboration" 
                       className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
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