import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import LocalizedLink from './LocalizedLink';
import { useIsMobile } from "../hooks/use-mobile";

// Import client images
import clientClimatic from "../assets/client_climatic.png";
import clientOptimar from "../assets/client_optimar.png";
import clientPulse from "../assets/client_pulse_welding.png";
import clientThd from "../assets/client_thd_plast.png";
import clientUnicool from "../assets/client_unicool.png";
import clientGradinita from "../assets/client_universul_copiilor.png";
import clientZaharias from "../assets/client_zaharias.png";
import portfolioBackground from "../assets/portfolio_background.png";

// Project data
const projects = [
  {
    id: 1,
    title: "pulsewelding.com",
    category: "Equipment website",
    image: clientPulse,
  },
  {
    id: 2,
    title: "climaticgps.ro",
    category: "Presentation Website",
    image: clientClimatic,
  },
  {
    id: 3,
    title: "universulcopiilor.ro",
    category: "Educational Platform",
    image: clientGradinita,
  },
  {
    id: 4,
    title: "optimar.ro",
    category: "Corporate Website",
    image: clientOptimar,
  },
  {
    id: 5,
    title: "thdplast.ro",
    category: "Portfolio Website",
    image: clientThd,
  },
  {
    id: 6,
    title: "unicool.ro",
    category: "E-commerce",
    image: clientUnicool,
  },
  {
    id: 7,
    title: "zaharias.ro",
    category: "Business Website",
    image: clientZaharias,
  }
];

// Project card component 
function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md group h-full relative">
      <div className="h-full flex flex-col">
        {/* Project Image Container */}
        <div className="w-full h-60 overflow-hidden relative">
          {/* Actual image */}
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          
          {/* Blue overlay that appears on hover - only over the image */}
          <div className="absolute inset-0 bg-[#2B5F93] opacity-0 group-hover:opacity-100 transition-all duration-300">
            {/* Content that shows on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
              <p className="text-sm font-medium text-white/90">{project.category}</p>
              <div className="flex justify-between items-center mt-1">
                <p className="font-semibold text-lg">{project.title}</p>
                <div className="bg-black p-1.5 rounded-md cursor-pointer">
                  <ArrowRight className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Information below image - always visible */}
        <div className="p-4 bg-white flex-grow">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500 mb-1">{project.category}</p>
              <p className="font-semibold text-gray-800">{project.title}</p>
            </div>
            <div 
              className="bg-black p-1.5 rounded-md cursor-pointer transition-all duration-300
              hover:scale-110 hover:shadow-md active:scale-95"
            >
              <ArrowRight className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsCarousel() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  
  // State for current slide index and animation
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  
  // Function to move to the next slide with fade transition
  const nextSlide = () => {
    // Start fade out
    setFadeOut(true);
    
    // After fade out completes, change slide and fade in
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
      setFadeOut(false);
    }, 500);
  };
  
  // Auto-rotate slides when not paused
  useEffect(() => {
    if (isPaused) return;
    
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [currentIndex, isPaused]);
  
  // Get visible projects based on current index and screen size
  const getVisibleProjects = () => {
    if (isMobile) {
      return [projects[currentIndex % projects.length]];
    } else {
      return [
        projects[currentIndex % projects.length],
        projects[(currentIndex + 1) % projects.length]
      ];
    }
  };
  
  const visibleProjects = getVisibleProjects();
  
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with pattern - using directly the image as background */}
      <div className="absolute inset-0 w-full h-full" style={{ 
        backgroundImage: `url(${portfolioBackground})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>
      
      {/* Rounded light gray container - matching the design */}
      <div className="relative z-10 max-w-6xl mx-auto rounded-[40px] px-4 py-16 overflow-hidden bg-[#f0f0f0]">
        <div className="text-center mb-12">
          <p className="text-sm uppercase font-semibold tracking-wider text-primary mb-2">PORTFOLIO</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">We'll create your idea</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A Collection of Our Finest Work and Successful Client Projects
          </p>
        </div>
        
        <div 
          className="relative min-h-[400px] mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex justify-center overflow-hidden">
            <div className={`flex w-full max-w-5xl justify-between relative pb-8 gap-8 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
              {visibleProjects.map((project, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className={`${isMobile ? 'w-full' : 'w-[45%]'}`}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Carousel indicators */}
        <div className="flex justify-center mt-2 mb-8 space-x-2">
          {projects.slice(0, Math.ceil(projects.length / (isMobile ? 1 : 2))).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setFadeOut(true);
                setTimeout(() => {
                  setCurrentIndex(index * (isMobile ? 1 : 2));
                  setFadeOut(false);
                }, 500);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / (isMobile ? 1 : 2)) === index ? 'w-6 bg-primary' : 'bg-primary/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
        
        {/* View all projects link */}
        <div className="text-center pb-10">
          <LocalizedLink 
            to="/portfolio" 
            className="inline-flex items-center text-foreground group transition-all duration-300 
            hover:text-primary hover:scale-105 active:scale-95"
          >
            {t('All projects')}
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRight className="h-4 w-4" />
            </span>
          </LocalizedLink>
        </div>
      </div>
    </section>
  );
}