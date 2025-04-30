import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Settings, BarChart2, Smartphone, Database } from "lucide-react";
import laptopImage from "../assets/laptop_display.png";
import arrowLeft from "../assets/arrow_left.png";
import arrowRight from "../assets/arrow_right.png";

// Feature items with their icons and descriptions
const analysisFeatures = [
  {
    id: 1,
    icon: <Monitor className="h-6 w-6" />,
    title: "User Experience (UX) Optimization",
    position: "top-left"
  },
  {
    id: 2,
    icon: <Settings className="h-6 w-6" />,
    title: "Ongoing Maintenance and Support",
    position: "top-right"
  },
  {
    id: 3,
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile App Development",
    position: "bottom-left"
  },
  {
    id: 4,
    icon: <BarChart2 className="h-6 w-6" />,
    title: "Search Engine Optimization",
    position: "middle-right"
  },
  {
    id: 5,
    icon: <Database className="h-6 w-6" />,
    title: "Scalable Backend Solutions",
    position: "bottom-right"
  }
];

// Feature box component for each analysis item
function FeatureBox({ 
  icon, 
  title, 
  position
}: { 
  icon: React.ReactNode, 
  title: string, 
  position: string 
}) {
  // Position classes based on where the box should appear
  const positionClasses = {
    'top-left': 'left-0 top-0 md:top-10 connector-right',
    'top-right': 'right-0 top-0 md:top-10 connector-left',
    'middle-right': 'right-0 top-1/2 -translate-y-1/2 connector-left',
    'bottom-left': 'left-0 bottom-0 md:bottom-10 connector-right',
    'bottom-right': 'right-0 bottom-0 md:bottom-10 connector-left'
  };
  
  const getPositionClass = () => {
    return positionClasses[position as keyof typeof positionClasses] || '';
  };
  
  return (
    <div 
      className={`absolute ${getPositionClass()} flex items-center max-w-[280px] bg-white/90 backdrop-blur-sm border border-dashed border-white/50 rounded-lg p-3 shadow-sm relative`}
    >
      <div className="bg-white/20 rounded-full p-2.5 mr-3 text-white">
        {icon}
      </div>
      <div className="text-sm text-white font-medium">
        {title}
      </div>
    </div>
  );
}

export default function AnalysisSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-primary">
      {/* Background arrow shapes */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
        {/* Left arrow */}
        <img 
          src={arrowLeft} 
          alt="Left arrow shape" 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[300px] md:h-[400px] lg:h-[500px]"
        />
        
        {/* Right arrow */}
        <img 
          src={arrowRight} 
          alt="Right arrow shape" 
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[300px] md:h-[400px] lg:h-[500px]"
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We analyze your needs
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            In-depth Assessments to Craft Customized Digital Solutions for
            Your Business.
          </p>
        </div>
        
        <div ref={ref} className="relative mt-12 max-w-4xl mx-auto min-h-[500px]">
          {/* Laptop in the center */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-10">
            <motion.img 
              src={laptopImage} 
              alt="Laptop displaying website" 
              className="w-full h-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>
          
          {/* Feature boxes positioned around the laptop */}
          <div className="absolute inset-0">
            {analysisFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: feature.position.includes('left') ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: feature.position.includes('left') ? -20 : 20 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              >
                <FeatureBox
                  icon={feature.icon}
                  title={feature.title}
                  position={feature.position}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}