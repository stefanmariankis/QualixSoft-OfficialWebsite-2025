import { CheckCircle } from "lucide-react";
import openTagImg from "../assets/open_tag.png";
import closeTagImg from "../assets/close_tag.png";
import slashImg from "../assets/slash.png";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  
  return (
    <section className="pt-32 pb-20 md:pb-28 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left side - Content */}
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Building Your<br />
              <span className="text-primary">Digital Future</span>
            </h1>
            
            <p className="text-lg text-foreground mb-8 max-w-lg">
              Tailored Web Development, E-commerce, and SEO
              Services to Boost Your Online Presence
            </p>
            
            <a 
              href="#" 
              className="btn-primary transition-all duration-300 hover:scale-105 active:scale-95"
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
              <div className="ml-3 flex items-center text-foreground text-sm transition-transform duration-300 hover:scale-[1.03]">
                <span>Over 30 clients satisfied</span>
                <div className="transition-all duration-300 hover:rotate-[360deg]">
                  <CheckCircle className="h-4 w-4 ml-1 text-primary" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Design Elements */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            {/* New container for holding all three elements horizontally */}
            <div className="relative flex justify-center items-center h-[250px] md:h-[300px]">
              {/* All three elements in a row */}
              <div className="flex items-center justify-between w-full max-w-md mx-auto">
                {/* Open tag (left bracket) */}
                <div className="w-[28%] transition-transform duration-300 hover:-translate-x-2">
                  <img 
                    src={openTagImg} 
                    alt="Open tag" 
                    className="w-full h-auto object-contain"
                  />
                </div>
                
                {/* Slash in the middle */}
                <div className="w-[28%] z-10 transition-transform duration-300 hover:scale-110">
                  <img 
                    src={slashImg} 
                    alt="Code slash" 
                    className="w-full h-auto object-contain"
                  />
                </div>
                
                {/* Close tag (right bracket) */}
                <div className="w-[28%] transition-transform duration-300 hover:translate-x-2">
                  <img 
                    src={closeTagImg} 
                    alt="Close tag" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              
              {/* Orange gradient overlay */}
              <div className="absolute inset-0 bg-orange-gradient opacity-20 rounded-full filter blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
