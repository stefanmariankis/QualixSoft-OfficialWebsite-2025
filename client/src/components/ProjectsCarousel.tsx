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

export default function ProjectsCarousel() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const isMobile = useIsMobile();
  
  // Compute which projects to show based on screen size
  const getVisibleProjects = () => {
    if (isMobile) {
      // Only show 1 project on mobile
      return [projects[currentIndex % projects.length]];
    } else {
      // Show 2 projects on tablet/desktop
      return [
        projects[currentIndex % projects.length],
        projects[(currentIndex + 1) % projects.length]
      ];
    }
  };
  
  const visibleProjects = getVisibleProjects();
  
  // Refs for tracking slide direction
  const slideDirection = useRef('right-to-left');
  const slideContainerRef = useRef<HTMLDivElement>(null);
  
  // Track animation states for each position
  const [leftProjectAnimating, setLeftProjectAnimating] = useState(false);
  const [rightProjectAnimating, setRightProjectAnimating] = useState(false);
  const [newProjectAnimating, setNewProjectAnimating] = useState(false);
  
  // Handle slide change with animation
  const changeSlide = () => {
    // Start the slide animation sequence
    setIsChanging(true);
    
    // Step 1: Fade out left project
    setLeftProjectAnimating(true);
    
    setTimeout(() => {
      // Step 2: Move right project to left
      setRightProjectAnimating(true);
      
      // Step 3: After initial animations, change data
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % projects.length);
        
        // Step 4: Fade in new project from right
        setNewProjectAnimating(true);
        
        // Step 5: Reset all animations when complete
        setTimeout(() => {
          setLeftProjectAnimating(false);
          setRightProjectAnimating(false);
          setNewProjectAnimating(false);
          setIsChanging(false);
        }, 300);
      }, 300);
    }, 300);
  };
  
  // Auto slider effect with pause on hover
  useEffect(() => {
    if (isPaused) return; // Don't set a timer if paused
    
    const timer = setTimeout(() => {
      changeSlide();
    }, 5000); // Change slide every 5 seconds
    
    return () => clearTimeout(timer);
  }, [currentIndex, isPaused]);

  return (
    <section className="py-16 relative overflow-hidden bg-light-orange-gradient">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/70 rounded-[60px] max-w-6xl mx-auto my-8"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 pt-12 animate-fadeIn">
          <p className="text-sm uppercase font-semibold tracking-wider text-primary mb-2">PORTFOLIO</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">We'll create your idea</h2>
          <p className="text-foreground max-w-2xl mx-auto">
            A Collection of Our Finest Work and Successful Client Projects
          </p>
        </div>
        
        <div className="relative min-h-[400px] mb-12">
          <div className="flex justify-center overflow-hidden">
            <div 
              ref={slideContainerRef}
              className="flex w-full max-w-5xl justify-between relative pb-8 gap-8"
            >
              {visibleProjects.map((project, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className={`${isMobile ? 'w-full' : 'w-[45%]'} transition-all duration-500 ease-out
                    ${isMobile ? 
                      (leftProjectAnimating ? 'fade-out-left' : '') :
                      (index === 0 && leftProjectAnimating ? 'fade-out-left' : 
                       index === 1 && rightProjectAnimating ? 'slide-right-to-left' : 
                       index === 1 && newProjectAnimating ? 'fade-in-from-right' : '')
                    }
                  `}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <div 
                    className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                  >
                    <div className="relative">
                      <div className="w-full h-64 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                        />
                      </div>
                      
                      <div className="p-4 bg-white">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold text-foreground">{project.title}</p>
                            <p className="text-sm text-foreground/70">{project.category}</p>
                          </div>
                          <div 
                            className="bg-primary p-1.5 rounded-md cursor-pointer transition-all duration-300
                            hover:scale-110 hover:shadow-md active:scale-95"
                          >
                            <ArrowRight className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                setIsPaused(true);
                setTimeout(() => {
                  setCurrentIndex(index * (isMobile ? 1 : 2));
                  setIsPaused(false);
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
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 arrow-animation">
              <ArrowRight className="h-4 w-4" />
            </span>
          </LocalizedLink>
        </div>
      </div>
    </section>
  );
}