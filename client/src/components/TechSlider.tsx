import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  
  // Fixed at 7 columns like the PARTNERS section, with responsive adjustment for smaller screens
  const [columns, setColumns] = useState(7);
  // Show multiple items per row, but slide one column at a time
  const itemsPerPage = columns;
  const totalPages = techItems.length;
  
  // Update columns based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(3);
      } else if (window.innerWidth < 1024) {
        setColumns(5);
      } else {
        setColumns(7); // Desktop shows 7 columns as requested
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Removed duplicate resize effect
  
  // Handle automatic slider
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        changeSlide('next');
      }
    }, 3000);
  };
  
  // Slide change function with smooth direction-based animation
  const changeSlide = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      // Move forward by just one column
      setCurrentPage((prevPage) => {
        const nextPage = prevPage + 1;
        // If we reach the end of the items, loop back to the start
        return nextPage >= totalPages ? 0 : nextPage;
      });
    } else {
      // Move backward by just one column
      setCurrentPage((prevPage) => {
        const prevPageCalculated = prevPage - 1;
        // If we reach the start, loop to the end
        return prevPageCalculated < 0 ? totalPages - 1 : prevPageCalculated;
      });
    }
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
  
  // Get current items to display - show one column at a time but keep multiple items in a row
  const getCurrentItems = () => {
    const startIndex = currentPage;
    // Create a rotated array of items by shifting the items based on the current page
    const rotatedItems = [...techItems.slice(startIndex), ...techItems.slice(0, startIndex)];
    // Return the first N items from the rotated array
    return rotatedItems.slice(0, itemsPerPage);
  };
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-16">
          <h3 className="text-primary uppercase font-semibold mb-2 tracking-wider text-sm">TEHNOLOGII</h3>
          <h2 className="text-3xl md:text-4xl font-play font-bold text-gray-800 mb-4">Some tools that fit your needs</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">Folosim cele mai moderne tehnologii pentru a dezvolta aplicații web performante și scalabile</p>
        </div>
        
        {/* Tech carousel - with more spacing like PARTNERS section */}
        <div 
          className="relative px-6 md:px-10"
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
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-3 text-primary hover:text-primary-dark hover:scale-110 transition-transform"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-3 text-primary hover:text-primary-dark hover:scale-110 transition-transform"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Carousel container with more spacing and smooth slide animation */}
          <div className="overflow-hidden px-6 py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage} // Key changes force re-render for clean animation
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6 lg:gap-10"
              >
                {getCurrentItems().map((item) => (
                  <div key={item.id} className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="mb-4 h-20 flex items-center justify-center"
                    >
                      {item.icon}
                    </motion.div>
                    <span className="text-gray-700 font-medium text-center">{item.name}</span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Carousel indicators - more subtle and modern */}
          <div className="flex justify-center mt-10 space-x-2">
            {Array.from({ length: Math.min(7, totalPages) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsPaused(true);
                  setCurrentPage(index);
                  setTimeout(() => setIsPaused(false), 500);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentPage / columns) === Math.floor(index / columns) ? 'w-6 bg-primary' : 'bg-primary/30'
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