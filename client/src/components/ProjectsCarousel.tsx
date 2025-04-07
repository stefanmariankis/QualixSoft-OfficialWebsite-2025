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
  const [currentProjects, setCurrentProjects] = useState([0, 1]);
  const [transitioning, setTransitioning] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  
  // Auto slider effect
  useEffect(() => {
    if (!autoplay || transitioning) return;
    
    const timer = setTimeout(() => {
      moveToNext();
    }, 5000); // Change slide every 5 seconds
    
    return () => clearTimeout(timer);
  }, [currentProjects, autoplay, transitioning]);
  
  const moveToNext = () => {
    if (transitioning) return;
    
    setTransitioning(true);
    
    // After 500ms, update the actual projects that are shown
    setTimeout(() => {
      setCurrentProjects(prev => [
        (prev[1]) % projects.length, 
        (prev[1] + 1) % projects.length
      ]);
      setTransitioning(false);
    }, 800);
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
          <div className="flex justify-center items-center">
            {/* Left slide */}
            <motion.div
              className="w-[95%] md:w-[45%] absolute left-0 md:left-[5%]"
              animate={{
                x: transitioning ? "-30%" : 0,
                scale: transitioning ? 0.9 : 1,
                opacity: transitioning ? 0 : 1,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative">
                  <div className="w-full h-64 bg-black flex items-center justify-center">
                    <div className="text-white font-bold text-xl">
                      {projects[currentProjects[0]].title}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-gray-800">{projects[currentProjects[0]].title}</p>
                        <p className="text-sm text-gray-600">{projects[currentProjects[0]].category}</p>
                      </div>
                      <div className="bg-black p-1.5 rounded-md">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right slide - moves to left */}
            <motion.div
              className="w-[95%] md:w-[45%] absolute right-0 md:right-[5%]"
              animate={{
                x: transitioning ? "-110%" : 0,
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative">
                  <div className="w-full h-64 bg-black flex items-center justify-center">
                    <div className="text-white font-bold text-xl">
                      {projects[currentProjects[1]].title}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-gray-800">{projects[currentProjects[1]].title}</p>
                        <p className="text-sm text-gray-600">{projects[currentProjects[1]].category}</p>
                      </div>
                      <div className="bg-black p-1.5 rounded-md">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* New slide coming from right - only visible during transition */}
            {transitioning && (
              <motion.div
                className="w-[95%] md:w-[45%] absolute right-[-100%] md:right-[-50%]"
                animate={{
                  x: "-105%",
                  scale: [0.8, 1],
                  opacity: [0, 1],
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="relative">
                    <div className="w-full h-64 bg-black flex items-center justify-center">
                      <div className="text-white font-bold text-xl">
                        {projects[(currentProjects[1] + 1) % projects.length].title}
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-gray-800">
                            {projects[(currentProjects[1] + 1) % projects.length].title}
                          </p>
                          <p className="text-sm text-gray-600">
                            {projects[(currentProjects[1] + 1) % projects.length].category}
                          </p>
                        </div>
                        <div className="bg-black p-1.5 rounded-md">
                          <ArrowRight className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          
          {/* Navigation controls */}
          <div className="absolute top-1/2 transform -translate-y-1/2 left-4 right-4 flex justify-between z-20">
            <button 
              className="bg-black bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors text-white"
              onClick={() => {
                setAutoplay(false);
                moveToNext();
              }}
            >
              <ArrowRight className="h-6 w-6 rotate-180" />
            </button>
            <button 
              className="bg-black bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors text-white"
              onClick={() => {
                setAutoplay(false);
                moveToNext();
              }}
            >
              <ArrowRight className="h-6 w-6" />
            </button>
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