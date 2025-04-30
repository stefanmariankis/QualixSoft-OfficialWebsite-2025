import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import hexBackground from "../assets/hex_background.jpg";
import openTagImg from "../assets/open_tag.png";
import closeTagImg from "../assets/close_tag.png";
import slashImg from "../assets/slash.png";

export default function Hero() {
  const { t } = useTranslation();
  
  return (
    <section className="pt-24 pb-20 md:pb-28 relative overflow-hidden min-h-[100vh] flex items-center">
      {/* Background with hexagons */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0" 
        style={{ backgroundImage: `url(${hexBackground})` }}
      ></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* Left side - Content (45%) */}
          <div className="animate-fadeIn w-full lg:w-[40%]">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-titles leading-tight mb-6">
              {t('home.hero.title')}
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-titles leading-tight mb-6">
              {t('home.hero.subtitle')}
            </h1>
            
            <p className="text-lg text-gray-600 font-bold mb-8 max-w-lg">
              {t('home.hero.description')}
            </p>
            
            <div className="flex">
              <a 
                href="#" 
                className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:scale-105"
              >
                Get a free proposal
              </a>
            </div>
            
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
          
          {/* Right side - Chevron/Brackets Design (55%) */}
          <div className="animate-fadeIn w-full lg:w-[60%]" style={{ animationDelay: '0.2s' }}>
            {/* Container for holding all three elements horizontally */}
            <div className="relative flex justify-center items-center h-[250px] md:h-[400px]">
              {/* All three elements in a row */}
              <div className="flex items-center justify-between w-full gap-5 mx-auto">
                {/* Open tag (left bracket) */}
                <div className="w-full transition-transform duration-300 hover:-translate-x-2">
                  <img 
                    src={openTagImg} 
                    alt="Open tag" 
                    className="w-full h-auto object-contain"
                  />
                </div>
                
                {/* Slash in the middle */}
                <div className="w-full z-10 transition-transform duration-300 hover:scale-110">
                  <img 
                    src={slashImg} 
                    alt="Code slash" 
                    className="w-full h-auto object-contain"
                  />
                </div>
                
                {/* Close tag (right bracket) */}
                <div className="w-full transition-transform duration-300 hover:translate-x-2">
                  <img 
                    src={closeTagImg} 
                    alt="Close tag" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
