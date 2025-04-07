import { useEffect, useState, useRef } from "react";
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
          <div className="flex justify-center overflow-hidden">
            <div className="flex w-full max-w-5xl justify-between relative pb-8">
              <AnimatePresence mode="popLayout">
                {visibleProjects.map((project, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    className={`w-[95%] md:w-[45%] ${index === 0 ? "mr-auto" : "ml-auto"}`}
                    initial={{ x: index === 0 ? -100 : 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div 
                      className="bg-white rounded-xl overflow-hidden shadow-lg"
                      whileHover={{ 
                        y: -5, 
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      onHoverStart={() => setIsPaused(true)}
                      onHoverEnd={() => setIsPaused(false)}
                    >
                      <div className="relative">
                        <motion.div 
                          className="w-full h-64 bg-black flex items-center justify-center"
                          whileHover={{ filter: "brightness(1.2)" }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="text-white font-bold text-xl">
                            {project.title}
                          </div>
                        </motion.div>
                        
                        <div className="p-4 bg-white">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-semibold text-gray-800">{project.title}</p>
                              <p className="text-sm text-gray-600">{project.category}</p>
                            </div>
                            <motion.div 
                              className="bg-black p-1.5 rounded-md cursor-pointer"
                              whileHover={{ 
                                scale: 1.1, 
                                backgroundColor: "#333",
                                boxShadow: "0 5px 15px rgba(0,0,0,0.1)" 
                              }}
                              whileTap={{ scale: 0.95 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <ArrowRight className="h-4 w-4 text-white" />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        {/* View all projects link */}
        <div className="text-center pb-10">
          <motion.a 
            href="#" 
            className="inline-flex items-center text-gray-700 group"
            whileHover={{ 
              scale: 1.05, 
              color: "#f97316" 
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 8 }}
          >
            All projects <motion.span
              className="ml-2 group-hover:translate-x-1"
              animate={{ x: [0, 4, 0] }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "mirror", 
                duration: 1.5, 
                ease: "easeInOut" 
              }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}