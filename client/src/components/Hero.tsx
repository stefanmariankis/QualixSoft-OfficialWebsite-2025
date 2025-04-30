import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import hexBackground from "../assets/hex_background.jpg";

export default function Hero() {
  const { t } = useTranslation();
  
  return (
    <section className="pt-24 pb-20 md:pb-28 relative overflow-hidden min-h-[650px] flex items-center">
      {/* Background with hexagons */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0" 
        style={{ backgroundImage: `url(${hexBackground})` }}
      ></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left side - Content */}
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 leading-tight mb-6">
              Building Your<br />
              <span className="text-primary">Digital Future</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Tailored Web Development, E-commerce, and SEO
              Services to Boost Your Online Presence
            </p>
            
            <a 
              href="#" 
              className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get a free proposal
            </a>
            
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div 
                    key={index} 
                    className="w-8 h-8 rounded-full border-2 border-white overflow-hidden transition-all duration-300 hover:scale-110 hover:z-10 hover:shadow-md"
                  >
                    <div className="bg-gray-300 w-full h-full flex items-center justify-center text-xs text-gray-600">
                      <span>U</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="ml-3 flex items-center text-gray-600 text-sm transition-transform duration-300 hover:scale-[1.03]">
                <span>Over 30 clients satisfied</span>
                <div className="transition-all duration-300 hover:rotate-[360deg]">
                  <CheckCircle className="h-4 w-4 ml-1 text-primary" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Chevron/Brackets Design */}
          <div className="animate-fadeIn relative" style={{ animationDelay: '0.2s' }}>
            <div className="relative flex justify-center items-center h-[300px] lg:h-[350px]">
              {/* Overlay symbols with orange color scheme */}
              <div className="relative w-full max-w-xl h-full flex items-center">
                {/* Container for all three brackets */}
                <div className="w-full h-full relative overflow-hidden">
                  {/* Left angle bracket */}
                  <div 
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 max-w-[140px] h-[150px] lg:h-[220px]"
                    style={{
                      clipPath: 'polygon(0 50%, 100% 0, 100% 100%)',
                      background: 'linear-gradient(90deg, #EB7127 0%, #F08A4B 100%)'
                    }}
                  >
                    {/* Image inside left bracket - people collaborating */}
                    <div 
                      className="absolute inset-0 opacity-30 bg-center bg-cover mix-blend-overlay"
                      style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop)'
                      }}
                    ></div>
                  </div>
                  
                  {/* Middle bar */}
                  <div 
                    className="absolute left-1/3 top-1/2 -translate-y-1/2 w-1/3 max-w-[140px] h-[150px] lg:h-[220px]"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                      background: 'linear-gradient(90deg, #C35214 0%, #A83E00 100%)'
                    }}
                  >
                    {/* Image inside middle bracket - code/development */}
                    <div 
                      className="absolute inset-0 opacity-30 bg-center bg-cover mix-blend-overlay"
                      style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop)'
                      }}
                    ></div>
                  </div>
                  
                  {/* Right angle bracket */}
                  <div 
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 max-w-[140px] h-[150px] lg:h-[220px]"
                    style={{
                      clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                      background: 'linear-gradient(90deg, #FFCBAD 0%, #FFA98A 100%)'
                    }}
                  >
                    {/* Image inside right bracket - result/website */}
                    <div 
                      className="absolute inset-0 opacity-30 bg-center bg-cover mix-blend-overlay"
                      style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop)'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
