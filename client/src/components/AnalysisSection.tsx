import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Settings, BarChart2, Smartphone, Database } from "lucide-react";
import laptopImage from "../assets/laptop_display.png";
import hexBackgroundLight from "../assets/hex_background_light.jpg";

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
    'top-left': 'left-0 top-0 lg:top-16',
    'top-right': 'right-0 top-0 lg:top-16',
    'middle-right': 'right-0 top-1/2 -translate-y-1/2',
    'bottom-left': 'left-0 bottom-0 lg:bottom-16',
    'bottom-right': 'right-0 bottom-0 lg:bottom-16'
  };
  
  const getPositionClass = () => {
    return positionClasses[position as keyof typeof positionClasses] || '';
  };
  
  return (
    <div 
      className={`absolute ${getPositionClass()} flex items-center max-w-[280px] bg-white/90 backdrop-blur-sm border border-dashed border-primary/50 rounded-lg p-3 shadow-sm`}
    >
      <div className="bg-primary/10 rounded-full p-2.5 mr-3 text-primary">
        {icon}
      </div>
      <div className="text-sm text-gray-700 font-medium">
        {title}
      </div>
      {/* Connector line to laptop (could be added with pseudo-elements in CSS) */}
    </div>
  );
}

export default function AnalysisSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Split background - Hex pattern left, White right */}
      <div className="absolute inset-0 w-full h-full flex">
        {/* Left side - hex pattern background */}
        <div 
          className="w-1/2 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url(${hexBackgroundLight})` }}
        ></div>
        
        {/* Right side - white background */}
        <div className="w-1/2 bg-white"></div>
      </div>
      
      {/* Orange arrow shapes in background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute left-1/4 top-0 w-[800px] h-[800px] bg-primary/10"
          style={{
            clipPath: 'polygon(0 50%, 100% 0, 100% 100%)',
            transform: 'translateX(-40%) rotate(45deg)'
          }}
        ></div>
        
        <div 
          className="absolute right-1/4 top-0 w-[800px] h-[800px] bg-primary/10"
          style={{
            clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
            transform: 'translateX(40%) rotate(45deg)'
          }}
        ></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We analyze your needs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
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