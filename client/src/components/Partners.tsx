import { useEffect, useRef, useState } from "react";

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
  
  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
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
  }, [activeIndex]);
  
  return (
    <section className="py-6 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-white text-sm mb-4">30+ partners have put their trust in us</p>
        
        <div className="relative overflow-hidden">
          <div 
            ref={sliderRef} 
            className="flex space-x-8 md:space-x-12 lg:space-x-16 overflow-x-auto scrollbar-hide py-4 px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 partner-logo flex items-center justify-center h-14 min-w-[140px] lg:min-w-[160px]"
              >
                <div className="text-white font-semibold text-lg">{partner.logo}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
