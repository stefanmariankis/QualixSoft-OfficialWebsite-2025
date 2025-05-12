import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useIsMobile } from "../hooks/use-mobile";
import hexBackgroundLight from "../assets/hex_background_light.jpg";

// Import custom icons
import tailoredSolutionsIcon from "../assets/icon_tailored_solutions.png";
import expertTeamIcon from "../assets/icon_expert_team.png";
import fullServiceSupportIcon from "../assets/icon_full_service_support.png";
import provenResultsIcon from "../assets/icon_proven_results.png";

import readyForNewBusiness from "../assets/home_ready_new_business_image.png"

// Create feature cards data
const features = [
  {
    id: 1,
    icon: tailoredSolutionsIcon,
    key: "solutions"
  },
  {
    id: 2,
    icon: expertTeamIcon,
    key: "expertise"
  },
  {
    id: 3,
    icon: fullServiceSupportIcon,
    key: "support"
  },
  {
    id: 4,
    icon: provenResultsIcon,
    key: "results"
  }
];

// Feature Card Component
const FeatureCard = ({ feature, isMobile }: { feature: typeof features[0], isMobile: boolean }) => {
  const { t } = useTranslation();
  // Desktop version (centered)
  if (!isMobile) {
    return (
      <div className="flex flex-col items-center text-center animate-fadeIn hover:backdrop-blur-sm rounded-lg p-6 hover:shadow-sm hover:bg-white/90 hover:shadow-md transition-shadow" style={{ animationDelay: `${feature.id * 0.1}s` }}>
        <div className="mb-4">
          <img
            src={feature.icon}
            alt={t(`why_us.${feature.key}.title`)}
            className="w-16 h-auto"
          />
        </div>
        <h3 className="text-primary font-semibold text-lg mb-2">
          {t(`why_us.${feature.key}.title`)}
        </h3>
        <p className="text-gray-600 max-w-[250px]">
          {t(`why_us.${feature.key}.description`)}
        </p>
      </div>
    );
  }
  
  // Mobile version (horizontal layout)
  return (
    <div className="flex items-start animate-fadeIn mb-8" style={{ animationDelay: `${feature.id * 0.1}s` }}>
      {/* Left: Hexagon Icon */}
      <div className="flex-shrink-0 mr-4">
        <div className="w-14 h-14 flex-shrink-0">
          <img
            src={feature.icon}
            alt={t(`why_us.${feature.key}.title`)}
            className="w-full h-auto"
          />
        </div>
      </div>
      
      {/* Right: Content */}
      <div className="flex-1">
        <h3 className="text-primary font-semibold text-lg mb-2">
          {t(`why_us.${feature.key}.title`)}
        </h3>
        <p className="text-gray-600 text-sm">
          {t(`why_us.${feature.key}.description`)}
        </p>
      </div>
    </div>
  );
};

export default function WhyWorkAndEnvision() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Full hexagon background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${hexBackgroundLight})` }}
      ></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/40"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* First part: Why work with us */}
        <div className="mb-16 md:mb-20">
          {/* Title and description */}
          <div className={`${isMobile ? 'text-left' : 'text-center'} mb-8 md:mb-12 animate-fadeIn`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
              {t('why_us.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('why_us.subtitle')}
            </p>
          </div>
          
          {/* Feature cards - desktop grid / mobile list */}
          {isMobile ? (
            <div className="space-y-0 mt-4">
              {features.map(feature => (
                <FeatureCard key={feature.id} feature={feature} isMobile={true} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {features.map(feature => (
                <FeatureCard key={feature.id} feature={feature} isMobile={false} />
              ))}
            </div>
          )}
        </div>
        
        {/* Second part: We are ready for a new business idea */}
        <div className="mt-20 md:mt-24 pt-8 md:pt-16">
          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
            {/* Left Side with Images - Desktop */}
            <div className="relative flex flex-col sm:flex-row gap-4">
              <img 
                src={readyForNewBusiness}
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Right Side with Content - Desktop */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-lg"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-play">
                  {t('cta.title')}
                </h2>
                
                <p className="text-gray-700 mb-2 font-medium">
                  {t('cta.subtitle')}
                </p>
                
                <p className="text-gray-600 mb-6">
                  {t('cta.description')}
                </p>
                
                <a 
                  href="#" 
                  className="inline-block bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  {t('cta.button')}
                </a>
              </motion.div>
            </div>
          </div>
          
          {/* Mobile Layout */}
          <div className="md:hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h2 className="text-3xl font-bold text-gray-700 mb-3 leading-tight">
                {t('cta.title')}
              </h2>
              
              <p className="text-gray-600 mb-4 text-sm">
                {t('cta.description')}
              </p>
              
              <a 
                href="#" 
                className="block w-full bg-[#222222] text-white font-medium py-3 px-4 my-5 rounded-md text-center"
              >
                {t('cta.button')}
              </a>
              
              {/* Mobile image grid layout */}
              <div className="grid grid-cols-2 gap-3 mt-8">
                <div className="h-32 overflow-hidden rounded-md">
                  <img 
                    src={readyForNewBusiness}
                    alt={t('cta.image_alt_1')} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-32 bg-primary rounded-md"></div>
                <div className="h-32 bg-primary rounded-md"></div>
                <div className="h-32 overflow-hidden rounded-md">
                  <img 
                    src={readyForNewBusiness}
                    alt={t('cta.image_alt_2')} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}