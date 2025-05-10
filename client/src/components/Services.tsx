import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

// Import service images
import webMobileDev from "../assets/web_mobile_dev.png";
import consultingStrategy from "../assets/consulting_strategy.png";
import websiteDesign from "../assets/website_design.png";
import seo from "../assets/seo.png";
import digitalMarketing from "../assets/digital_marketing.png";
import optimizationConversion from "../assets/optimization_conversion.png";

// Our Services items
const ourServices = [
  {
    title: "Web & Mobile developement",
    description: "Creative designs that captivate and convert your audience.",
    image: webMobileDev
  },
  {
    title: "Consulting and strategy",
    description: "Creative designs that captivate and convert your audience.",
    image: consultingStrategy
  },
  {
    title: "Website Design",
    description: "Creative designs that captivate and convert your audience.",
    image: websiteDesign
  },
  {
    title: "Search Engine Optimization",
    description: "Creative designs that captivate and convert your audience.",
    image: seo
  },
  {
    title: "Digital Marketing",
    description: "Creative designs that captivate and convert your audience.",
    image: digitalMarketing
  },
  {
    title: "Optimization and Conversion",
    description: "Creative designs that captivate and convert your audience.",
    image: optimizationConversion
  }
];

export default function Services() {
  // Animation variants for staggered animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <motion.section 
      className="py-20 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h4 
            className="text-sm uppercase font-semibold tracking-wider text-primary mb-2"
          >
            OUR SERVICES
          </h4>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            We'll solve your problems
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Our services are designed to propel your business forward. From the ground up, we offer 
            comprehensive solutions that cover all your digital needs.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {ourServices.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-[#faf7f2] rounded-xl overflow-hidden relative p-6 border border-[#eee9e1] cursor-pointer"
              variants={item}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 15px -5px rgba(0, 0, 0, 0.08)",
                backgroundColor: "#fcf9f5",
                borderColor: "#e8e2d9"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {/* Service image */}
              <div className="w-full flex items-center justify-start mb-4">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="h-[100px] w-[120px] object-contain object-left"
                />
              </div>
              
              {/* Arrow icon in top-right corner */}
              <div className="absolute top-4 right-4">
                <div className="bg-black p-1.5 rounded-md">
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </div>
              </div>
              
              {/* Service title and description */}
              <p className="text-lg font-medium text-gray-700 mb-2">
                {service.title}
              </p>
              
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
