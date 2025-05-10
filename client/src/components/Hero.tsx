import { CheckCircle } from "lucide-react";
import hexBackground from "../assets/hex_background.jpg";
import openTagImg from "../assets/open_tag.png";
import closeTagImg from "../assets/close_tag.png";
import slashImg from "../assets/slash.png";
import { satisfied_clients } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="pt-16 pb-10 md:pt-24 md:pb-28 relative overflow-hidden min-h-[80vh] md:min-h-[100vh] flex items-center">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0" 
        style={{ backgroundImage: `url(${hexBackground})` }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 items-center">
          <div className="animate-fadeIn w-full lg:w-[45%]">
            <div className="block md:hidden mb-6">
              <h1 className="text-[2.5rem] font-bold text-gray-600 leading-[1.15]">
                Soluții digitale personalizate
              </h1>
              <h1 className="text-[2.5rem] font-bold text-gray-600 leading-[1.15]">
                pentru afacerea ta
              </h1>
            </div>
            
            <div className="hidden md:block">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-titles leading-tight mb-6">
                Soluții digitale personalizate
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-titles leading-tight mb-6">
                pentru afacerea ta
              </h1>
            </div>
            
            <p className="text-sm md:text-lg text-gray-500 font-normal md:font-bold mb-6 md:mb-8 max-w-md">
              <span className="block md:hidden">
                Transformăm ideile tale în experiențe digitale de impact care aduc rezultate reale pentru business-ul tău.
              </span>
              
              <span className="hidden md:block">
                Transformăm ideile tale în experiențe digitale de impact care aduc rezultate reale pentru business-ul tău.
              </span>
            </p>
            
            <div className="flex">
              <a 
                href="#" 
                className="bg-primary hover:bg-primary/90 text-white text-center w-full md:w-auto px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                Discută cu noi
              </a>
            </div>
            
            <div className="mt-4 md:mt-8 flex items-center">
              <div className="flex -space-x-2">
                {satisfied_clients.map((client, index) => (
                  <div 
                    key={index} 
                    className="w-6 h-6 md:w-10 md:h-10 rounded-full border"
                    style={{ backgroundColor: '#f28321' }}
                  >
                    <img 
                      src={client.logo} 
                      alt="Open tag" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-2 md:ml-3 flex items-center text-gray-600 text-[10px] md:text-sm">
                <span>Peste 100 de clienți mulțumiți</span>
                <div>
                  <CheckCircle className="h-3 w-3 md:h-4 md:w-4 ml-1 text-gray-600" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fadeIn w-full lg:w-[55%] hidden md:block" style={{ animationDelay: '0.2s' }}>
            <div className="relative flex justify-center items-center h-[250px] md:h-[400px]">
              <div className="flex items-center justify-between w-full gap-5 mx-auto">
                <div className="w-full transition-transform duration-300 hover:-translate-x-2">
                  <img 
                    src={openTagImg} 
                    alt="Open tag" 
                    className="w-full h-auto object-contain"
                  />
                </div>
                
                <div className="w-full z-10 transition-transform duration-300 hover:scale-110">
                  <img 
                    src={slashImg} 
                    alt="Code slash" 
                    className="w-full h-auto object-contain"
                  />
                </div>
                
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