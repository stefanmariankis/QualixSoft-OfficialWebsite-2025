import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import LocalizedLink from './LocalizedLink';

// Project data
const projects = [
  {
    id: 1,
    title: "pulsewelding.com",
    category: "Equipment website",
    image: "", // Will be replaced with a black square for now
  },
  {
    id: 2,
    title: "climaticgps.ro",
    category: "Presentation Website",
    image: "", // Will be replaced with a black square for now
  },
  {
    id: 3,
    title: "digitalmarketing.io",
    category: "Marketing Platform",
    image: "", // Will be replaced with a black square for now
  },
  {
    id: 4,
    title: "techsolutions.net",
    category: "Corporate Website",
    image: "", // Will be replaced with a black square for now
  },
  {
    id: 5,
    title: "creativestudio.com",
    category: "Portfolio Website",
    image: "", // Will be replaced with a black square for now
  }
];

export default function ProjectsCarousel() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Compute which projects to show
  const visibleProjects = [
    projects[currentIndex % projects.length],
    projects[(currentIndex + 1) % projects.length]
  ];
  
  // Auto slider effect with pause on hover
  useEffect(() => {
    if (isPaused) return; // Don't set a timer if paused
    
    const timer = setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearTimeout(timer);
  }, [currentIndex, isPaused]);

  return (
    <section className="py-16 relative overflow-hidden bg-orange-gradient">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/70 rounded-[60px] max-w-6xl mx-auto my-8"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 pt-12">
          <p className="text-sm uppercase font-semibold tracking-wider text-primary mb-2">PORTFOLIO</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">We'll create your idea</h2>
          <p className="text-foreground max-w-2xl mx-auto">
            A Collection of Our Finest Work and Successful Client Projects
          </p>
        </div>
        
        <div className="relative min-h-[400px] mb-12">
          <div className="flex justify-center overflow-hidden">
            <div className="flex w-full max-w-5xl justify-between relative pb-8 gap-8">
              {visibleProjects.map((project, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className={`w-[95%] md:w-[45%] ${index === 0 ? "mr-auto" : "ml-auto"} transition-all duration-500 ease-out`}
                  style={{
                    opacity: 1,
                    transform: 'translateX(0)'
                  }}
                >
                  <div 
                    className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <div className="relative">
                      <div 
                        className="w-full h-64 bg-primary flex items-center justify-center transition-all duration-300 hover:brightness-110"
                      >
                        <div className="text-white font-bold text-xl">
                          {project.title}
                        </div>
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
        
        {/* View all projects link */}
        <div className="text-center pb-10">
          <LocalizedLink 
            to="/portfolio" 
            className="inline-flex items-center text-foreground group transition-all duration-300 
            hover:text-primary hover:scale-105 active:scale-95"
          >
            All projects 
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 arrow-animation">
              <ArrowRight className="h-4 w-4" />
            </span>
          </LocalizedLink>
        </div>
      </div>
    </section>
  );
}