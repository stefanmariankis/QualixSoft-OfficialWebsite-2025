import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Import client logos
import unicoolLogo from "../assets/client_unicool.png";
import pulseWeldingLogo from "../assets/client_pulse_welding.png";
import thdPlastLogo from "../assets/client_thd_plast.png";
import climaticLogo from "../assets/client_climatic.png";
import zahariasLogo from "../assets/client_zaharias.png";
import optimarLogo from "../assets/client_optimar.png";
import universulCopiilorLogo from "../assets/client_universul_copiilor.png";

// Clients with their logos
const partners = [
  { name: "unicool", logo: unicoolLogo, href: "#" },
  { name: "pulse_welding", logo: pulseWeldingLogo, href: "#" },
  { name: "thd_plast", logo: thdPlastLogo, href: "#" },
  { name: "climatic", logo: climaticLogo, href: "#" },
  { name: "zaharias", logo: zahariasLogo, href: "#" },
  { name: "optimar", logo: optimarLogo, href: "#" },
  { name: "universul_copiilor", logo: universulCopiilorLogo, href: "#" }
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
    <section className="py-12 bg-primary relative overflow-hidden">
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
        <h3 className="text-center text-white text-xl font-medium mb-8">
          Clienții noștri
        </h3>
        
        <div className="relative overflow-hidden">
          <motion.div 
            ref={sliderRef} 
            className="flex space-x-10 md:space-x-14 lg:space-x-20 overflow-x-auto scrollbar-hide py-6 px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {partners.map((partner, index) => (
              <motion.div 
                key={index} 
                className="flex-shrink-0 partner-logo flex items-center justify-center h-16 min-w-[140px] lg:min-w-[160px] relative cursor-pointer"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ 
                  scale: 1.05,
                  filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))"
                }}
                animate={{
                  y: hoveredIndex === index ? -5 : 0,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <a href={partner.href} className="flex items-center justify-center h-full w-full">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-12 max-h-16 w-auto object-contain filter brightness-0 invert"
                  />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
