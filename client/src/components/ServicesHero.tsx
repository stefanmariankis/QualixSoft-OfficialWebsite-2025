import { motion } from "framer-motion";
import { Link } from "wouter";
import { useIsMobile } from "../hooks/use-mobile";
import { ArrowLeft, ArrowRight } from "lucide-react";
import aboutHeroDesktopBg from "../assets/about_hero_desktop_bg.png";
import aboutHeroMobileBg from "../assets/about_hero_mobile_bg.png";

export default function ServicesHero() {
  const isMobile = useIsMobile();
  const backgroundImage = isMobile ? aboutHeroMobileBg : aboutHeroDesktopBg;
  
  return (
    <section className="bg-primary pt-32 md:pt-36 pb-16 md:pb-24 relative overflow-hidden">
      {/* Background image - identical to About page */}
      <div 
        className="absolute inset-0 w-full h-full z-0 bg-center bg-cover bg-no-repeat" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      
      {/* Decorative arrows */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-20 z-10">
        <ArrowLeft size={240} color="white" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 z-10">
        <ArrowRight size={240} color="white" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div 
          className="text-center max-w-3xl mx-auto py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            How we can help you
          </motion.h1>
          
          <motion.p 
            className="text-white text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Lorem ipsum dolor sit amet consectetur. Proin ut ultricies eget eget diam. Sed 
            pellentesque vel elementum augue lacus diam feugiat libero dolor. Velit gravidas.
          </motion.p>
          
          <motion.div
            className="flex items-center justify-center text-sm space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Link href="/" className="text-white hover:text-white/80 transition-colors">
              Homepage
            </Link>
            <span className="text-white/70 pointer-events-none">›</span>
            <span className="text-white/90 pointer-events-none">
              Services
            </span>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Straight line separator at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="bg-white h-6 w-full"></div>
      </div>
    </section>
  );
}