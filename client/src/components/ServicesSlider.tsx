import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import serviceIconImg from '../assets/services_icon.png';

interface Service {
  id: number;
  title: string;
}

export default function ServicesSlider() {
  const services: Service[] = [
    { id: 1, title: 'Web & Mobile Development' },
    { id: 2, title: 'Consulting and Strategy' },
    { id: 3, title: 'Website Design' },
    { id: 4, title: 'Search Engine Optimization' },
    { id: 5, title: 'Digital Marketing' },
    { id: 6, title: 'E-commerce Solutions' },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  // Auto scroll logic
  useEffect(() => {
    if (!autoScrollEnabled) return;
    
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        
        if (scrollPosition >= maxScroll) {
          // Reset to beginning when we reach the end
          sliderRef.current.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          // Scroll to next item
          sliderRef.current.scrollTo({
            left: scrollPosition + 200,
            behavior: 'smooth'
          });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [scrollPosition, autoScrollEnabled]);

  // Update scroll position state
  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        setScrollPosition(sliderRef.current.scrollLeft);
      }
    };

    const sliderElement = sliderRef.current;
    if (sliderElement) {
      sliderElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // Mouse events for manual scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
    setAutoScrollEnabled(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Re-enable auto-scroll after some delay
    setTimeout(() => setAutoScrollEnabled(true), 5000);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    if (sliderRef.current) {
      const x = e.pageX - (sliderRef.current.offsetLeft || 0);
      const walk = (x - startX) * 2;
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-0">
        <div 
          ref={sliderRef} 
          className="flex overflow-x-auto scrollbar-hide"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ 
            cursor: isDragging ? 'grabbing' : 'grab',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="flex-shrink-0 mx-6 md:mx-8 first:ml-10 last:mr-10 flex items-center whitespace-nowrap"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img 
                src={serviceIconImg} 
                alt="Service icon" 
                className="w-6 h-6 mr-3 flex-shrink-0" 
              />
              <span className="text-gray-800 font-medium">{service.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Custom styles are applied through Tailwind classes */}
    </section>
  );
}