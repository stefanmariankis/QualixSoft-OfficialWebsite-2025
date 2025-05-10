import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Code2, ChevronLeft, ChevronRight } from "lucide-react";
import { SiWordpress, SiShopify, SiHeroku, SiBootstrap, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb, SiDocker } from "react-icons/si";

// Tech stack data
const techItems = [
  {
    id: 1,
    name: "Github",
    icon: <Github className="h-14 w-14 text-gray-700" />
  },
  {
    id: 2,
    name: "Wordpress",
    icon: <SiWordpress className="h-14 w-14 text-gray-700" />
  },
  {
    id: 3,
    name: "Shopify",
    icon: <SiShopify className="h-14 w-14 text-gray-700" />
  },
  {
    id: 4,
    name: "Heroku",
    icon: <SiHeroku className="h-14 w-14 text-gray-700" />
  },
  {
    id: 5,
    name: "Bootstrap",
    icon: <SiBootstrap className="h-14 w-14 text-gray-700" />
  },
  {
    id: 6,
    name: "React",
    icon: <SiReact className="h-14 w-14 text-gray-700" />
  },
  {
    id: 7,
    name: "Next.js",
    icon: <SiNextdotjs className="h-14 w-14 text-gray-700" />
  },
  {
    id: 8,
    name: "Tailwind",
    icon: <SiTailwindcss className="h-14 w-14 text-gray-700" />
  },
  {
    id: 9,
    name: "Node.js",
    icon: <SiNodedotjs className="h-14 w-14 text-gray-700" />
  },
  {
    id: 10,
    name: "MongoDB",
    icon: <SiMongodb className="h-14 w-14 text-gray-700" />
  },
  {
    id: 11,
    name: "Docker",
    icon: <SiDocker className="h-14 w-14 text-gray-700" />
  },
  {
    id: 12,
    name: "Custom",
    icon: <Code2 className="h-14 w-14 text-gray-700" />
  }
];

export default function TechSlider() {
  const [isPaused, setIsPaused] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Calculate items per page based on screen size
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const totalPages = Math.ceil(techItems.length / itemsPerPage);
  
  // Update items per page based on window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(6);
      }
    };
    
    // Initial calculation
    handleResize();
    
    // Listen for window resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Handle automatic slider
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        changeSlide('next');
      }
    }, 3000);
  };
  
  // Slide change function with animation
  const changeSlide = (direction: 'next' | 'prev') => {
    setIsChanging(true);
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
      } else {
        setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
      }
      setTimeout(() => {
        setIsChanging(false);
      }, 300);
    }, 300);
  };
  
  useEffect(() => {
    startAutoSlide();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, totalPages, itemsPerPage]);
  
  const handleMouseEnter = () => {
    setIsPaused(true);
  };
  
  const handleMouseLeave = () => {
    setIsPaused(false);
  };
  
  // Get current items to display
  const getCurrentItems = () => {
    const startIndex = currentPage * itemsPerPage;
    return techItems.slice(startIndex, startIndex + itemsPerPage);
  };
  
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-12">
          <h3 className="text-primary uppercase font-semibold mb-2 tracking-wider text-sm">TEHNOLOGII</h3>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Some tools that fit your needs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Folosim cele mai moderne tehnologii pentru a dezvolta aplicații web performante și scalabile</p>
        </div>
        
        {/* Tech carousel */}
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Carousel navigation buttons */}
          <button 
            onClick={() => {
              setIsPaused(true);
              changeSlide('prev');
              setTimeout(() => setIsPaused(false), 500);
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-5 z-10 bg-white rounded-full shadow-md p-2 text-primary hover:text-primary-dark hover:scale-110 transition-transform"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => {
              setIsPaused(true);
              changeSlide('next');
              setTimeout(() => setIsPaused(false), 500);
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-5 z-10 bg-white rounded-full shadow-md p-2 text-primary hover:text-primary-dark hover:scale-110 transition-transform"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Carousel container */}
          <div className="overflow-hidden px-4">
            <div 
              className={`flex justify-evenly items-center transition-all duration-500 ${isChanging ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}
            >
              {getCurrentItems().map((item) => (
                <div key={item.id} className="flex flex-col items-center px-2 sm:px-4 flex-1">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="mb-3"
                  >
                    {item.icon}
                  </motion.div>
                  <span className="text-gray-700 font-medium text-center text-sm sm:text-base">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsPaused(true);
                  setCurrentPage(index);
                  setTimeout(() => setIsPaused(false), 500);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentPage === index ? 'w-6 bg-primary' : 'bg-primary/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}