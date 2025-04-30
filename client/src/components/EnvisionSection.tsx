import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import hexBackgroundLight from "../assets/hex_background_light.jpg";

export default function EnvisionSection() {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Split background - White left, Hex pattern right */}
      <div className="absolute inset-0 w-full h-full flex">
        {/* Left side - white background */}
        <div className="w-1/2 bg-white"></div>
        
        {/* Right side - hex pattern background */}
        <div 
          className="w-1/2 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url(${hexBackgroundLight})` }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Left Side with Images */}
          <div className="relative flex flex-col sm:flex-row gap-4">
            {/* Top-left image */}
            <div className="sm:w-1/2 h-[250px] rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
                alt="Team planning session" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Middle orange square */}
            <div className="absolute sm:static left-1/2 top-1/2 -translate-x-1/2 w-20 h-20 bg-primary rounded-md mt-4"></div>
            
            {/* Bottom-right image */}
            <div className="sm:w-1/2 h-[250px] sm:mt-10 rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right Side with Content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-lg"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                We are ready for a new <br/>business idea!
              </h2>
              
              <p className="text-gray-700 mb-2 font-medium">
                Got a fresh business idea? We're all ears and <span className="text-primary font-semibold">ready to roll!</span>
              </p>
              
              <p className="text-gray-600 mb-6">
                Our team loves a good brainstorm and we're here to help make your idea shine. 
                We're not just about talk; we get things done. From the first sketch to the final product, 
                we've got the tools, the know how, and the drive to bring your vision to life.
              </p>
              
              <a 
                href="#" 
                className="inline-block bg-gray-900 hover:bg-black text-white font-medium px-6 py-3 rounded-md shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                Get your Free Proposal
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}