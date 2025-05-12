import { useEffect, useState, useRef } from "react";
import { Github, Code2 } from "lucide-react";
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
  
  // We don't need to get current items now as we display all items with CSS transform
  // This function is no longer used
  
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
          {/* Removed navigation buttons as requested to match Partners section */}
          
          {/* Carousel container - simple left sliding animation similar to Partners section */}
          <div className="overflow-hidden px-6 py-6">
            <div 
              className="flex gap-8 md:gap-12 lg:gap-16 items-center transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentPage * 100}px)`,
                display: 'flex',
                flexWrap: 'nowrap'
              }}
            >
              {techItems.map((item) => (
                <div 
                  key={item.id} 
                  className="flex-shrink-0 flex flex-col items-center justify-center"
                  style={{ width: '120px' }}
                >
                  <div
                    className="mb-4 h-20 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    {item.icon}
                  </div>
                  <span className="text-gray-700 font-medium text-center">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Removed carousel indicators as requested to match Partners section */}
        </div>
      </div>
    </section>
  );
}