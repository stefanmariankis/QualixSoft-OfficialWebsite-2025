import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
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

// Create a card component for projects
const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full">
      <div className="relative">
        <div className="w-full h-64 bg-black flex items-center justify-center">
          <div className="text-white font-bold text-xl">
            {project.title}
          </div>
        </div>
        
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
  );
};

export default function ProjectsCarousel() {
  // Position states for each slide position
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(1);
  const [newIndex, setNewIndex] = useState(2);
  
  // Animation states
  const [animationPhase, setAnimationPhase] = useState(0); // 0: idle, 1: left exits, 2: right moves, 3: new enters
  const animationInProgress = useRef(false);
  const [autoplay, setAutoplay] = useState(true);
  
  // Progress animation through phases
  const advanceAnimation = () => {
    if (animationInProgress.current) return;
    animationInProgress.current = true;
    
    // Start animation sequence
    setAnimationPhase(1); // Start left exit
    
    // After left exits, move right to left
    setTimeout(() => {
      setAnimationPhase(2);
    }, 400);
    
    // After right moves, bring in new slide
    setTimeout(() => {
      setAnimationPhase(3);
    }, 700);
    
    // Reset animation and update indices
    setTimeout(() => {
      // Update indices
      setLeftIndex(rightIndex);
      setRightIndex(newIndex);
      setNewIndex((newIndex + 1) % projects.length);
      
      // Reset animation state
      setAnimationPhase(0);
      animationInProgress.current = false;
    }, 1200);
  };
  
  // Auto slider effect
  useEffect(() => {
    if (!autoplay || animationPhase !== 0) return;
    
    const timer = setTimeout(() => {
      advanceAnimation();
    }, 5000); // Change slide every 5 seconds
    
    return () => clearTimeout(timer);
  }, [autoplay, animationPhase]);

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
          {/* Carousel container */}
          <div className="relative h-[380px] overflow-hidden">
            {/* Left slide (exits with zoom out) */}
            <motion.div
              className="absolute w-[95%] md:w-[45%] h-full left-0 md:left-[5%]"
              initial={{ x: 0, opacity: 1, scale: 1 }}
              animate={{ 
                x: animationPhase >= 1 ? "-30%" : 0,
                opacity: animationPhase >= 1 ? 0 : 1,
                scale: animationPhase >= 1 ? 0.9 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <ProjectCard project={projects[leftIndex]} />
            </motion.div>
            
            {/* Right slide (moves to left position) */}
            <motion.div
              className="absolute w-[95%] md:w-[45%] h-full right-0 md:right-[5%]"
              initial={{ x: 0 }}
              animate={{ 
                x: animationPhase >= 2 ? "-110%" : 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            >
              <ProjectCard project={projects[rightIndex]} />
            </motion.div>
            
            {/* New slide (enters from right with zoom in) */}
            <motion.div
              className="absolute w-[95%] md:w-[45%] h-full right-[-100%] md:right-[-50%]"
              initial={{ x: 0, opacity: 0, scale: 0.8 }}
              animate={{ 
                x: animationPhase >= 3 ? "-106%" : 0,
                opacity: animationPhase >= 3 ? 1 : 0,
                scale: animationPhase >= 3 ? 1 : 0.8,
              }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            >
              <ProjectCard project={projects[newIndex]} />
            </motion.div>
          </div>
          
          {/* Navigation controls */}
          <div className="absolute top-1/2 transform -translate-y-1/2 left-4 right-4 flex justify-between z-20">
            <button 
              className="bg-black bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors text-white"
              onClick={() => {
                if (animationPhase === 0) {
                  setAutoplay(false);
                  advanceAnimation();
                }
              }}
              disabled={animationPhase !== 0}
            >
              <ArrowRight className="h-6 w-6 rotate-180" />
            </button>
            <button 
              className="bg-black bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors text-white"
              onClick={() => {
                if (animationPhase === 0) {
                  setAutoplay(false);
                  advanceAnimation();
                }
              }}
              disabled={animationPhase !== 0}
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