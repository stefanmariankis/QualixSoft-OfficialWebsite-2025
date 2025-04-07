import { motion } from "framer-motion";
import { Settings, Users, Wrench, PieChart } from "lucide-react";

// Create feature cards data
const features = [
  {
    id: 1,
    icon: <Settings className="w-8 h-8 text-white" />,
    title: "Tailored Solutions",
    description: "We customize strategies to meet your unique business goals."
  },
  {
    id: 2,
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Expert Team",
    description: "Our experienced professionals deliver top-tier results."
  },
  {
    id: 3,
    icon: <Wrench className="w-8 h-8 text-white" />,
    title: "Full-Service Support",
    description: "We offer continuous support from development to growth."
  },
  {
    id: 4,
    icon: <PieChart className="w-8 h-8 text-white" />,
    title: "Proven Results",
    description: "Our data-driven approach ensures measurable achievements."
  }
];

// Feature Card Component
const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: feature.id * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center"
      whileHover={{ 
        y: -10,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
    >
      <motion.div 
        className="bg-primary p-4 mb-4 hex-shape"
        whileHover={{ 
          scale: 1.1, 
          boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.5)",
          transition: { type: "spring", stiffness: 300, damping: 8 }
        }}
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {feature.icon}
        </motion.div>
      </motion.div>
      <motion.h3 
        className="text-primary font-semibold text-lg mb-2"
        whileHover={{ scale: 1.03, color: "#ff9800" }}
      >
        {feature.title}
      </motion.h3>
      <motion.p 
        className="text-gray-600 max-w-[250px]"
        initial={{ opacity: 0.9 }}
        whileHover={{ opacity: 1 }}
      >
        {feature.description}
      </motion.p>
    </motion.div>
  );
};

export default function WhyWorkWithUs() {
  return (
    <section className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Decorative hexagons */}
      <motion.div 
        className="absolute right-0 top-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div 
          className="w-16 h-16 bg-gray-300 hex-shape transform rotate-45 translate-x-8"
          animate={{ 
            rotate: [45, 60, 45],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="w-24 h-24 bg-gray-300 hex-shape transform -translate-y-6 translate-x-16"
          animate={{ 
            rotate: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div 
          className="w-20 h-20 bg-gray-300 hex-shape transform translate-y-12 translate-x-4"
          animate={{ 
            rotate: [0, 15, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Why Work With Us
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            We're all about bringing your goals to the forefront and making them happen. 
            With us, you're picking a partner that's committed to your success.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {features.map(feature => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </motion.div>
      </div>
      
      {/* Hexagon shape is defined in CSS */}
    </section>
  );
}