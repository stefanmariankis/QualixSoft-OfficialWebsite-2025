import { useEffect, useRef, useState } from "react";
import { partners } from "@/lib/constants";
import { useTranslation } from "react-i18next";

export default function Partners() {
  const { t } = useTranslation();
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
    <section className="py-8 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white text-sm mb-3">
          <div className="flex items-center justify-center">
            {t('home.partners.title')}
          </div>
        </div>
        
        <div className="flex mx-auto justify-center">
          <div className="mx-10">
            <div 
              ref={sliderRef}
              className="flex gap-8 md:gap-12 lg:gap-16 items-center py-2 justify-center"
            >
              {partners.map((partner, index) => (
                <div 
                  key={index} 
                  className="partner-logo flex-shrink-0 w-30 md:w-30 lg:w-40 flex items-center justify-center hover:scale-110"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
