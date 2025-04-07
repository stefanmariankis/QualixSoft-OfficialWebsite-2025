import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Logo place-holders
const partners = [
  { name: "unicool", logo: "UNICOOL" },
  { name: "the_art", logo: "THE ART" },
  { name: "open_mind", logo: "OPEN MIND" },
  { name: "climatic", logo: "CLIMATIC" },
  { name: "zakanas", logo: "ZAKANAS" },
  { name: "optimar", logo: "OPTIMAR" },
  { name: "universul_copiilor", logo: "UNIVERSUL COPIILOR" }
];

export default function Partners() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current && hoveredIndex === null) {
        const slidesPerView = window.innerWidth < 768 ? 2 : 
                              window.innerWidth < 1024 ? 3 : 6;
        
        const nextIndex = (activeIndex + 1) % (partners.length - slidesPerView + 1);
        setActiveIndex(nextIndex);
        
        const slideWidth = sliderRef.current.scrollWidth / partners.length;
        sliderRef.current.scrollTo({
          left: nextIndex * slideWidth,
          behavior: 'smooth'
        });
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [activeIndex, hoveredIndex]);
  
  // Animation variants for text and logos
  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  return (
    <section className="py-6 bg-primary relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 30 + 10,
              height: Math.random() * 30 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <p className="text-center text-white text-sm mb-4">
          30+ partners have put their trust in us
        </p>
        
        <div className="relative overflow-hidden">
          <motion.div 
            ref={sliderRef} 
            className="flex space-x-8 md:space-x-12 lg:space-x-16 overflow-x-auto scrollbar-hide py-4 px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {partners.map((partner, index) => (
              <motion.div 
                key={index} 
                className="flex-shrink-0 partner-logo flex items-center justify-center h-14 min-w-[140px] lg:min-w-[160px] relative cursor-pointer"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ 
                  scale: 1.1,
                  textShadow: "0 0 12px rgba(255,255,255,0.8)",
                  color: "#ffffff",
                }}
                animate={{
                  y: hoveredIndex === index ? -5 : 0,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="text-white font-semibold text-lg">
                  {partner.logo}
                </div>
                
                {/* Nu mai afișăm tooltip la hover */}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
