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
    >
      <div className="bg-primary p-4 rounded-lg mb-4 hex-shape">
        {feature.icon}
      </div>
      <h3 className="text-primary font-semibold text-lg mb-2">{feature.title}</h3>
      <p className="text-gray-600 max-w-[250px]">{feature.description}</p>
    </motion.div>
  );
};

export default function WhyWorkWithUs() {
  return (
    <section className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Decorative hexagons */}
      <div className="absolute right-0 top-10 opacity-20">
        <div className="w-16 h-16 bg-gray-300 hex-shape transform rotate-45 translate-x-8"></div>
        <div className="w-24 h-24 bg-gray-300 hex-shape transform -translate-y-6 translate-x-16"></div>
        <div className="w-20 h-20 bg-gray-300 hex-shape transform translate-y-12 translate-x-4"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Work With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're all about bringing your goals to the forefront and making them happen. 
            With us, you're picking a partner that's committed to your success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map(feature => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
      
      {/* Hexagon shape is defined in CSS */}
    </section>
  );
}