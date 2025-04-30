import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SiCodeigniter } from 'react-icons/si';
import webMobileIcon from '../assets/web_mobile_dev.png';
import consultingIcon from '../assets/consulting_strategy.png';
import designIcon from '../assets/website_design.png';
import seoIcon from '../assets/seo.png';
import marketingIcon from '../assets/digital_marketing.png';
import optimizationIcon from '../assets/optimization_conversion.png';

interface Service {
  id: number;
  title: string;
  icon: string;
}

export default function ServicesSlider() {
  const services: Service[] = [
    { id: 1, title: 'Web & Mobile Development', icon: webMobileIcon },
    { id: 2, title: 'Consulting and Strategy', icon: consultingIcon },
    { id: 3, title: 'Website Design', icon: designIcon },
    { id: 4, title: 'Search Engine Optimization', icon: seoIcon },
    { id: 5, title: 'Digital Marketing', icon: marketingIcon },
    { id: 6, title: 'Conversion Optimization', icon: optimizationIcon },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto slide function
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        changeSlide('next');
      }
    }, 3000);
  };

  // Slide change function with animation
  const changeSlide = (direction: 'next' | 'prev') => {
    if (isChanging) return;
    
    setIsChanging(true);
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentIndex((prev) => (prev + 1) % services.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
      }
      setTimeout(() => {
        setIsChanging(false);
      }, 500);
    }, 500);
  };

  useEffect(() => {
    startAutoSlide();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Get services to show (current + 3 more)
  const getVisibleServices = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % services.length;
      visible.push(services[index]);
    }
    return visible;
  };

  return (
    <section className="py-8 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Services carousel */}
          <div className="overflow-hidden relative">
            <div 
              className={`flex transition-all duration-500 ${isChanging ? 'opacity-0' : 'opacity-100'}`}
            >
              {getVisibleServices().map((service, index) => (
                <motion.div 
                  key={`${service.id}-${index}`}
                  className="flex-shrink-0 px-4 flex items-center whitespace-nowrap"
                  initial={{ x: index === 0 ? 0 : 100, opacity: index === 0 ? 1 : 0.5 }}
                  animate={{ 
                    x: 0,
                    opacity: 1,
                    transition: { delay: index * 0.1 }
                  }}
                >
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-8 h-8 mr-3 flex-shrink-0" 
                  />
                  <span className="text-gray-800 font-medium">{service.title}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={() => {
              setIsPaused(true);
              changeSlide('prev');
              setTimeout(() => setIsPaused(false), 2000);
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 text-primary opacity-75 hover:opacity-100 z-10"
            aria-label="Previous service"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => {
              setIsPaused(true);
              changeSlide('next');
              setTimeout(() => setIsPaused(false), 2000);
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 text-primary opacity-75 hover:opacity-100 z-10"
            aria-label="Next service"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Indicator dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsPaused(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsPaused(false), 2000);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-5 bg-primary' : 'bg-primary/30'
                }`}
                aria-label={`Go to service ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}