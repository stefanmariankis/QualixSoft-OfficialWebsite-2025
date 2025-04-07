import { motion } from "framer-motion";
import { Link } from "wouter";
import leftArrowImg from "../assets/hero_section_left_arrow.png";

export default function AboutHero() {
  return (
    <section className="bg-primary pt-32 pb-8 md:pt-36 md:pb-12 relative overflow-hidden">
      {/* Left Arrow (Original) */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-40 md:block z-0">
        <img src={leftArrowImg} alt="Left arrow" className="w-72 h-auto" />
      </div>
      
      {/* Right Arrow (Flipped) */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 scale-x-[-1] opacity-40 md:block z-0">
        <img src={leftArrowImg} alt="Right arrow" className="w-72 h-auto" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
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
            Cine suntem noi
          </motion.h1>
          
          <motion.p 
            className="text-white text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Ne concentrăm pe aducerea obiectivelor tale în prim plan și pe realizarea lor.
            Cu noi, alegi un partener dedicat succesului tău.
          </motion.p>
          
          <motion.div
            className="flex items-center justify-center text-sm space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Link href="/about">
              <a className="text-white hover:text-white/80 transition-colors">
                Despre Noi
              </a>
            </Link>
            <span className="text-white/70 pointer-events-none">›</span>
            <span className="text-white/90 pointer-events-none">
              Despre QualixSoft
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