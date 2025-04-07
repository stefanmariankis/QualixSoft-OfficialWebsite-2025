import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const [autoplay, setAutoplay] = useState(true);
  
  // Compute which projects to show (current and next)
  const projectsToShow = [
    projects[activeIndex % projects.length],
    projects[(activeIndex + 1) % projects.length]
  ];
  
  // Auto slider effect
  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setTimeout(() => {
      setActiveIndex(prev => [prev[0] + 1, 1]); // Direction 1 means right to left
    }, 5000); // Change slide every 5 seconds
    
    return () => clearTimeout(timer);
  }, [activeIndex, autoplay]);
  
  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 400 : -400,
      scale: direction > 0 ? 0.8 : 1.2,
      opacity: 0,
      zIndex: 0,
    }),
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
      zIndex: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 400 : -400,
      scale: direction < 0 ? 0.8 : 0.9,
      opacity: 0,
      zIndex: 0,
      transition: {
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="py-16 relative overflow-hidden" style={{ background: "#f2f2f2" }}>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-200 rounded-[60px] max-w-6xl mx-auto my-8"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 pt-12">
          <p className="text-sm uppercase font-semibold tracking-wider text-primary mb-2">PORTFOLIO</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">We'll create your idea</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A Collection of Our Finest Work and Successful Client Projects
          </p>
        </div>
        
        <div className="relative min-h-[400px] mb-12">
          <div className="flex justify-center">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              {projectsToShow.map((project, index) => (
                <motion.div
                  key={project.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    scale: { duration: 0.5 },
                    opacity: { duration: 0.3 },
                  }}
                  className={`w-[95%] md:w-[45%] absolute ${index === 0 ? 'left-0 md:left-[5%]' : 'right-0 md:right-[5%]'}`}
                  onClick={() => setAutoplay(false)}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    {/* Black square placeholder for project image */}
                    <div className="relative">
                      <div className="w-full h-64 bg-black flex items-center justify-center">
                        {/* This will be replaced with an actual image */}
                        <div className="text-white font-bold text-xl">
                          {project.title}
                        </div>
                      </div>
                      
                      {/* Project info */}
                      <div className="p-4 bg-white">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold text-gray-800">{project.title}</p>
                            <p className="text-sm text-gray-600">{project.category}</p>
                          </div>
                          <div className="bg-black p-1.5 rounded-md">
                            <ArrowRight className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        
        {/* View all projects link */}
        <div className="text-center pb-10">
          <a href="#" className="inline-flex items-center text-gray-700 hover:text-primary transition-colors">
            All projects <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}