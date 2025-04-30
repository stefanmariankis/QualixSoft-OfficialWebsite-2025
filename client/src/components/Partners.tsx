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
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";

// Clients with their logos
const partners = [
  { name: "unicool", logo: unicoolLogo, href: "#" },
  { name: "thd_plast", logo: thdPlastLogo, href: "#" },
  { name: "climatic", logo: climaticLogo, href: "#" },
  { name: "zaharias", logo: zahariasLogo, href: "#" },
  { name: "optimar", logo: optimarLogo, href: "#" },
  { name: "universul_copiilor", logo: universulCopiilorLogo, href: "#" },
  { name: "pulse_welding", logo: pulseWeldingLogo, href: "#" }
];

export default function Partners() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        // Calculate visible logos based on screen width
        const slidesPerView = window.innerWidth < 768 ? 2 : 
                              window.innerWidth < 1024 ? 3 : 5;
        
        const nextIndex = (activeIndex + 1) % (partners.length - slidesPerView + 1);
        setActiveIndex(nextIndex);
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);
  
  // Handle manual navigation
  const handlePrev = () => {
    const slidesPerView = window.innerWidth < 768 ? 2 : 
                         window.innerWidth < 1024 ? 3 : 5;
    const newIndex = Math.max(0, activeIndex - 1);
    setActiveIndex(newIndex);
  };
  
  const handleNext = () => {
    const slidesPerView = window.innerWidth < 768 ? 2 : 
                         window.innerWidth < 1024 ? 3 : 5;
    const newIndex = Math.min(partners.length - slidesPerView, activeIndex + 1);
    setActiveIndex(newIndex);
  };
  
  return (
    <section className="py-4 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top text */}
        <div className="text-center text-white text-sm mb-3">
          <div className="flex items-center justify-center">
            <span>30+ partners have put their trust in us</span>
            <CheckCircle className="h-4 w-4 ml-1.5 text-white" />
          </div>
        </div>
        
        {/* Carousel container with navigation arrows */}
        <div className="relative max-w-5xl mx-auto">
          {/* Previous button */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-1 text-white transition-all"
            disabled={activeIndex === 0}
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          
          {/* Client logos carousel */}
          <div className="overflow-hidden mx-10">
            <motion.div 
              ref={sliderRef}
              className="flex gap-8 md:gap-12 lg:gap-16 items-center py-2"
              animate={{ x: `-${activeIndex * (window.innerWidth < 768 ? 120 : window.innerWidth < 1024 ? 160 : 200)}px` }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              {partners.map((partner, index) => (
                <div 
                  key={index} 
                  className="partner-logo flex-shrink-0 w-20 md:w-28 lg:w-32 flex items-center justify-center"
                >
                  <a href={partner.href} className="flex items-center justify-center h-full w-full">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="h-8 sm:h-10 w-auto object-contain filter brightness-0 invert"
                    />
                  </a>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Next button */}
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-1 text-white transition-all"
            disabled={activeIndex >= partners.length - (window.innerWidth < 768 ? 2 : window.innerWidth < 1024 ? 3 : 5)}
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
