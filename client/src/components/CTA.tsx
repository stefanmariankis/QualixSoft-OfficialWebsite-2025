import { motion } from "framer-motion";
import teamImage1 from "@assets/image_1745924567265.png";
import teamImage2 from "@assets/image_1745924950559.png";

export default function CTA() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/2 flex space-x-4">
            <div className="relative">
              <motion.img 
                src={teamImage1}
                alt="Business planning" 
                className="w-full h-auto rounded-lg object-cover md:max-w-[240px]"
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)" 
                }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
            <div className="relative mt-10">
              <motion.img 
                src={teamImage2}
                alt="Team collaboration" 
                className="w-full h-auto rounded-lg object-cover md:max-w-[240px]"
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)" 
                }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Let's take your business to the next level!
            </h2>
            
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">✦</span>
                <span className="text-gray-700">If you find yourself in one of the situations we've mentioned</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">✦</span>
                <span className="text-gray-700">If you know your business deserve more</span>
              </li>
            </ul>
            
            <motion.a 
              href="#" 
              className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors text-sm"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.15)"
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
