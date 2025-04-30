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
import projectCardNormal from "../assets/project_card_normal.png";
import projectCardHover from "../assets/project_card_hover.png";

// Project data
const projects = [
  {
    id: 1,
    title: "pulsewelding.com",
    domain: "pulsewelding.com",
    category: "Multilingual website",
    categoryColor: "#4CAF50", // Green for multilingual
    image: clientPulse,
    logo: clientPulse,
    bgColor: "#2B5F93", // Blue background when hover
  },
  {
    id: 2,
    title: "climaticgps.ro",
    domain: "climaticgps.ro",
    category: "Presentation Website",
    categoryColor: "#3F51B5", // Blue for presentation
    image: clientClimatic,
    logo: clientClimatic,
    bgColor: "#2B5F93", // Blue background when hover
  },
  {
    id: 3,
    title: "universulcopiilor.ro",
    domain: "universulcopiilor.ro",
    category: "Educational Platform",
    categoryColor: "#E91E63", // Pink for educational
    image: clientGradinita,
    logo: clientGradinita,
    bgColor: "#2B5F93", // Blue background when hover
  },
  {
    id: 4,
    title: "optimar.ro",
    domain: "optimar.ro",
    category: "Corporate Website",
    categoryColor: "#2196F3", // Blue for corporate
    image: clientOptimar,
    logo: clientOptimar,
    bgColor: "#2B5F93", // Blue background when hover
  },
  {
    id: 5,
    title: "thdplast.ro",
    domain: "thdplast.ro",
    category: "Portfolio Website",
    categoryColor: "#9C27B0", // Purple for portfolio
    image: clientThd,
    logo: clientThd,
    bgColor: "#2B5F93", // Blue background when hover
  },
  {
    id: 6,
    title: "unicool.ro",
    domain: "unicool.ro",
    category: "E-commerce",
    categoryColor: "#F44336", // Red for e-commerce
    image: clientUnicool,
    logo: clientUnicool,
    bgColor: "#2B5F93", // Blue background when hover
  },
  {
    id: 7,
    title: "zaharias.ro",
    domain: "zaharias.ro",
    category: "Business Website",
    categoryColor: "#FF9800", // Orange for business
    image: clientZaharias,
    logo: clientZaharias,
    bgColor: "#2B5F93", // Blue background when hover
  }
];

// Project card component 
function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md group h-full relative transition-all duration-300">
      {/* Full card overlay that appears on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-all duration-300 z-10"
        style={{ backgroundColor: project.bgColor }}
      ></div>
      
      <div className="h-full flex flex-col relative z-20">
        {/* Project Image Container */}
        <div className="w-full h-52 overflow-hidden relative bg-white">
          {/* Image container with screen/monitor style */}
          <div className="w-full h-full flex items-center justify-center py-2">
            {/* Logo centered in the image area */}
            <img 
              src={project.logo} 
              alt={project.title} 
              className="h-3/5 object-contain z-10 max-w-[70%] transition-all duration-300 group-hover:brightness-1"
            />
            
            {/* Background image that shows the screenshot/monitor */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
          </div>

          {/* Blue overlay that appears on hover */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-all duration-300"
            style={{ backgroundColor: project.bgColor }}
          ></div>
        </div>
        
        {/* Information below image - always visible */}
        <div className="p-4 bg-transparent flex-grow relative shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] rounded-tl-xl rounded-tr-xl">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <p className="text-base font-medium text-[#2B5F93] mb-1 group-hover:text-white transition-colors duration-300">{project.domain}</p>
              <div className="inline-block rounded-full py-1 px-3 text-xs font-medium transition-colors duration-300" 
                style={{ backgroundColor: project.categoryColor, color: 'white' }}>
                {project.category}
              </div>
            </div>
            <div 
              className="bg-black group-hover:bg-white p-1.5 rounded-md cursor-pointer transition-all duration-300
              group-hover:scale-110 group-hover:shadow-md active:scale-95"
            >
              <ArrowRight className="h-4 w-4 text-white group-hover:text-[#2B5F93]" />
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
    <section className="py-20 relative overflow-hidden bg-white" style={{ 
      backgroundImage: `url(${portfolioBackground})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Rounded light gray container - matching the design */}
      <div className="relative z-10 max-w-6xl mx-auto rounded-[40px] px-4 py-16 overflow-hidden">
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
        
        {/* View all projects link */}
        <div className="text-center pb-10">
          <LocalizedLink 
            to="/portfolio" 
            className="inline-flex items-center font-bold text-foreground group transition-all duration-300 
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