import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import hexBackground from "../assets/hex_background.jpg";
import openTagImg from "../assets/open_tag.png";
import closeTagImg from "../assets/close_tag.png";
import slashImg from "../assets/slash.png";

export default function Hero() {
  const { t } = useTranslation();
  
  return (
    <section className="pt-16 pb-10 md:pt-24 md:pb-28 relative overflow-hidden min-h-[80vh] md:min-h-[100vh] flex items-center">
      {/* Background with hexagons */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0" 
        style={{ backgroundImage: `url(${hexBackground})` }}
      ></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 items-center">
          {/* Left side - Content (mobile: full width, desktop: 45%) */}
          <div className="animate-fadeIn w-full lg:w-[40%]">
            {/* Mobile-optimized title and subtitle */}
            <div className="block md:hidden mb-6">
              <h1 className="text-[2.5rem] font-bold text-gray-600 leading-[1.15]">
                {t('hero.title').split(' ').slice(0, 2).join(' ')}
              </h1>
              <h1 className="text-[2.5rem] font-bold text-gray-600 leading-[1.15]">
                {t('hero.title').split(' ').slice(2).join(' ')}
              </h1>
            </div>
            
            {/* Desktop headings */}
            <div className="hidden md:block">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-titles leading-tight mb-6">
                {t('hero.title')}
              </h1>
            </div>
            
            {/* Mobile-optimized description */}
            <p className="text-sm md:text-lg text-gray-500 font-normal md:font-bold mb-6 md:mb-8 max-w-md">
              {/* Customized text for mobile screen */}
              <span className="block md:hidden">
                {t('hero.description')}
              </span>
              
              {/* Original description for desktop */}
              <span className="hidden md:block">
                {t('hero.description')}
              </span>
            </p>
            
            <div className="flex">
              <a 
                href="#" 
                className="bg-primary hover:bg-primary/90 text-white text-center w-full md:w-auto px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                {t('hero.cta')}
              </a>
            </div>
            
            {/* Client avatars optimized for mobile */}
            <div className="mt-4 md:mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div 
                    key={index} 
                    className="w-5 h-5 md:w-8 md:h-8 rounded-full border border-white overflow-hidden"
                  >
                    <div className="bg-gray-400 w-full h-full flex items-center justify-center text-[10px] md:text-xs text-white">
                      <span>U</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="ml-2 md:ml-3 flex items-center text-gray-600 text-[10px] md:text-sm">
                <span>{t('hero.satisfied_clients')}</span>
                <div>
                  <CheckCircle className="h-3 w-3 md:h-4 md:w-4 ml-1 text-gray-600" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Chevron/Brackets Design (55%) - Hidden on mobile */}
          <div className="animate-fadeIn w-full lg:w-[60%] hidden md:block" style={{ animationDelay: '0.2s' }}>
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
          
          {/* Mobile-only code brackets at bottom */}
          <div className="w-full animate-fadeIn relative md:hidden mt-8">
            <div className="relative flex justify-center items-center">
              <div className="flex items-center justify-between w-full">
                <img 
                  src={openTagImg} 
                  alt="Open tag" 
                  className="w-1/3 h-auto object-contain opacity-75"
                />
                <img 
                  src={slashImg} 
                  alt="Code slash" 
                  className="w-1/3 h-auto object-contain opacity-75"
                />
                <img 
                  src={closeTagImg} 
                  alt="Close tag" 
                  className="w-1/3 h-auto object-contain opacity-75"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
