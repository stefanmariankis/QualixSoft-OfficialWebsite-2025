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

type ProjectCardProps = {
  project: typeof projects[0];
  position: 'left' | 'right';
  animationState: 'enter' | 'exit' | 'static';
};

// Separated component for project card to improve animation control
function ProjectCard({ project, position, animationState }: ProjectCardProps) {
  const getAnimationClass = () => {
    if (animationState === 'static') return '';
    
    if (position === 'left') {
      return animationState === 'exit' ? 'animate-fadeOutLeft' : '';
    } else { // position === 'right'
      if (animationState === 'exit') {
        return 'animate-slideLeftToCenter';
      } else { // animationState === 'enter'
        return 'animate-fadeInRight';
      }
    }
  };
  
  return (
    <div className={`h-full w-full ${getAnimationClass()}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group h-full">
        <div className="relative h-full">
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
  );
}

export default function ProjectsCarousel() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  
  // Animation and state management
  const [isPaused, setIsPaused] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'exit' | 'change' | 'enter'>('idle');
  
  // Index tracking
  const [leftProjectIndex, setLeftProjectIndex] = useState(0);
  const [rightProjectIndex, setRightProjectIndex] = useState(1);
  
  // Carousel container ref for potential direct DOM manipulation
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Function to advance to next slide with animation sequence
  const nextSlide = () => {
    if (animating) return;
    
    setAnimating(true);
    
    // Phase 1: Exit animations
    setAnimationPhase('exit');
    
    // Phase 2: Change data
    setTimeout(() => {
      setAnimationPhase('change');
      // Calculate new indices
      setLeftProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setRightProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
      
      // Phase 3: Enter animations
      setTimeout(() => {
        setAnimationPhase('enter');
        
        // Phase 4: Reset to idle
        setTimeout(() => {
          setAnimationPhase('idle');
          setAnimating(false);
        }, 600);
      }, 50);
    }, 600);
  };
  
  // Handle auto-rotation
  useEffect(() => {
    if (isPaused || animating) return;
    
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [leftProjectIndex, isPaused, animating]);
  
  // Get current projects based on indices and device
  const leftProject = projects[leftProjectIndex % projects.length];
  const rightProject = projects[rightProjectIndex % projects.length];
  
  // Handle manual navigation
  const goToSlide = (index: number) => {
    if (animating) return;
    
    setIsPaused(true);
    setLeftProjectIndex(index);
    setRightProjectIndex((index + 1) % projects.length);
    
    // Resume auto-rotation after a delay
    setTimeout(() => {
      setIsPaused(false);
    }, 1000);
  };
  
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
        
        <div 
          className="relative min-h-[400px] mb-12" 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex justify-center overflow-hidden">
            <div 
              ref={carouselRef}
              className="flex w-full max-w-5xl justify-between relative pb-8 gap-8"
            >
              {/* Left project slot */}
              <div className={`${isMobile ? 'w-full' : 'w-[45%]'}`}>
                <ProjectCard 
                  project={leftProject}
                  position="left"
                  animationState={
                    animationPhase === 'exit' ? 'exit' : 
                    animationPhase === 'enter' ? 'enter' : 'static'
                  }
                />
              </div>
              
              {/* Right project slot - only show on non-mobile */}
              {!isMobile && (
                <div className="w-[45%]">
                  <ProjectCard 
                    project={rightProject}
                    position="right"
                    animationState={
                      animationPhase === 'exit' ? 'exit' : 
                      animationPhase === 'enter' ? 'enter' : 'static'
                    }
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Carousel indicators */}
        <div className="flex justify-center mt-2 mb-8 space-x-2">
          {projects.slice(0, Math.ceil(projects.length / (isMobile ? 1 : 2))).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * (isMobile ? 1 : 2))}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                Math.floor(leftProjectIndex / (isMobile ? 1 : 2)) === index ? 'w-6 bg-primary' : 'bg-primary/30'
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