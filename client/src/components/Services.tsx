import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

// Our Services items
const ourServices = [
  {
    title: "Web & Mobile development",
    description: "Creative designs that captivate and convert your audience."
  },
  {
    title: "Consulting and strategy",
    description: "Creative designs that captivate and convert your audience."
  },
  {
    title: "Website Design",
    description: "Creative designs that captivate and convert your audience."
  },
  {
    title: "Search Engine Optimization",
    description: "Creative designs that captivate and convert your audience."
  },
  {
    title: "Digital Marketing",
    description: "Creative designs that captivate and convert your audience."
  },
  {
    title: "Optimization and Conversion",
    description: "Creative designs that captivate and convert your audience."
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
      className="py-20 bg-gray-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background decorative elements */}
      <motion.div 
        className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full z-0 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/5 rounded-full z-0 blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.p 
            className="text-sm uppercase font-semibold tracking-wider text-primary mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            OUR SERVICES
          </motion.p>
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
              className="bg-[#faf7f2] rounded-3xl overflow-hidden relative p-6 border border-[#f0ece4] cursor-pointer"
              variants={item}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                backgroundColor: "#fcf9f5",
                borderColor: "#e8e2d9"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {/* Black square placeholder for the image with hover effect */}
              <motion.div 
                className="w-full aspect-video bg-black rounded-xl mb-6 overflow-hidden"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* This is where the image would go */}
                <motion.div 
                  className="w-full h-full bg-black"
                  whileHover={{
                    filter: "brightness(1.2)"
                  }}
                />
              </motion.div>
              
              {/* Arrow icon in top-right corner */}
              <motion.div 
                className="absolute top-6 right-6"
                whileHover={{ rotate: 45, scale: 1.1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 500, 
                  damping: 10 
                }}
              >
                <motion.div 
                  className="bg-black p-2 rounded-lg"
                  whileHover={{ 
                    backgroundColor: "#333333",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
                  }}
                >
                  <ArrowUpRight className="h-5 w-5 text-white" />
                </motion.div>
              </motion.div>
              
              {/* Service title and description */}
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                {service.title}
              </h3>
              
              <p className="text-gray-600">
                {service.description}
              </p>
              
              {/* Hidden 'Learn more' text that appears on hover */}
              <motion.div
                className="absolute bottom-6 left-6 text-primary font-medium"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.2 }
                }}
              >
                Learn more
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
