import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 flex flex-col space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                {/* First image - larger one */}
                <motion.div 
                  className="bg-gray-200 rounded-lg w-full h-40 md:h-48 overflow-hidden"
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)" 
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                    Image 1
                  </div>
                </motion.div>
              </div>
              <div className="col-span-1">
                {/* Orange square */}
                <motion.div 
                  className="bg-primary w-full h-40 md:h-48 rounded-lg"
                  whileHover={{ 
                    rotate: 5,
                    scale: 1.05
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                ></motion.div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-3">
                {/* Second image - full width */}
                <motion.div 
                  className="bg-gray-200 rounded-lg w-full h-40 overflow-hidden"
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)" 
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                    Image 2
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
              We are ready for a new business idea!
            </h2>
            <div className="text-gray-600 space-y-4 mb-8">
              <p>
                Got a <span className="font-semibold">fresh business idea</span>? We're all ears and ready to roll! Our team loves a good brainstorm and we're here to help make your idea shine.
              </p>
              <p>
                We're not just about talk, we get things done. From the first sketch to the final product, we've got the tools, the know how, and the drive to bring your vision to life.
              </p>
            </div>
            <motion.a 
              href="#" 
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg text-sm font-medium shadow-lg"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#ff9800",
                boxShadow: "0 10px 25px -5px rgba(255, 152, 0, 0.4)"
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 8 }}
            >
              Get your Free Proposal
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
