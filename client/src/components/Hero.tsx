import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pb-28 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 leading-tight mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Building Your<br />
              <motion.span
                className="relative inline-block text-primary"
                whileHover={{ 
                  scale: 1.05,
                  color: "#ff9800"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Digital Future
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Tailored Web Development, E-commerce, and SEO
              Services to Boost Your Online Presence
            </motion.p>
            
            <motion.a 
              href="#" 
              className="bg-primary text-white px-7 py-4 rounded-lg text-sm font-medium inline-block shadow-lg"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#ff9800",
                boxShadow: "0 10px 25px -5px rgba(255, 152, 0, 0.4)"
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 8 }}
            >
              Get a free proposal
            </motion.a>
            
            <motion.div 
              className="mt-8 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <motion.div 
                    key={index} 
                    className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                    whileHover={{ 
                      scale: 1.2, 
                      zIndex: 10, 
                      boxShadow: "0 5px 15px rgba(0,0,0,0.1)" 
                    }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <div className="bg-gray-300 w-full h-full flex items-center justify-center text-xs text-gray-600">
                      <span>U</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                className="ml-3 flex items-center text-gray-600 text-sm"
                whileHover={{ scale: 1.03 }}
              >
                <span>Over 30 clients satisfied</span>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="h-4 w-4 ml-1 text-primary" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {/* Left bracket */}
              <motion.div 
                className="absolute -left-10 md:-left-20 top-1/2 -translate-y-1/2 w-1/3 h-full z-10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ x: -5 }}
              >
                <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <motion.path 
                    d="M80 20 C40 20 20 50 20 100 C20 150 40 180 80 180" 
                    stroke="#F97316" 
                    strokeWidth="40" 
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                </svg>
              </motion.div>
              
              {/* Right bracket */}
              <motion.div 
                className="absolute -right-10 md:-right-20 top-1/2 -translate-y-1/2 w-1/3 h-full z-10"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ x: 5 }}
              >
                <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <motion.path 
                    d="M20 20 C60 20 80 50 80 100 C80 150 60 180 20 180" 
                    stroke="#F97316" 
                    strokeWidth="40" 
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                </svg>
              </motion.div>
              
              {/* Orange overlay with semi-transparent images */}
              <motion.div 
                className="absolute inset-0 bg-primary z-20 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ opacity: 0.7 }}
              >
                {/* We'd typically use real images here, but using a placeholder for now */}
              </motion.div>
              
              {/* This would be replaced with actual image content */}
              <motion.div 
                className="w-full aspect-[4/3] bg-gray-200"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
