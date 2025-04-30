import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import hexBackgroundLight from "../assets/hex_background_light.jpg";

// Import custom icons
import tailoredSolutionsIcon from "../assets/icon_tailored_solutions.png";
import expertTeamIcon from "../assets/icon_expert_team.png";
import fullServiceSupportIcon from "../assets/icon_full_service_support.png";
import provenResultsIcon from "../assets/icon_proven_results.png";

// Create feature cards data
const features = [
  {
    id: 1,
    icon: tailoredSolutionsIcon,
    title: "Soluții Personalizate",
    description: "Personalizăm strategii pentru a îndeplini obiectivele unice ale afacerii tale."
  },
  {
    id: 2,
    icon: expertTeamIcon,
    title: "Echipă de Experți",
    description: "Profesioniștii noștri cu experiență livrează rezultate de top."
  },
  {
    id: 3,
    icon: fullServiceSupportIcon,
    title: "Suport Complet",
    description: "Oferim asistență continuă de la dezvoltare până la creștere."
  },
  {
    id: 4,
    icon: provenResultsIcon,
    title: "Rezultate Dovedite",
    description: "Abordarea noastră bazată pe date asigură realizări măsurabile."
  }
];

// Feature Card Component
const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  return (
    <div className="flex flex-col items-center text-center animate-fadeIn bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow" style={{ animationDelay: `${feature.id * 0.1}s` }}>
      <div className="mb-4">
        <img
          src={feature.icon}
          alt={feature.title}
          className="w-16 h-16"
        />
      </div>
      <h3 className="text-primary font-semibold text-lg mb-2">
        {feature.title}
      </h3>
      <p className="text-gray-600 max-w-[250px]">
        {feature.description}
      </p>
    </div>
  );
};

export default function WhyWorkAndEnvision() {
  const { t } = useTranslation();
  
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
        <div className="mb-20">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              De ce să lucrezi cu noi
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ne concentrăm pe aducerea obiectivelor tale în prim plan și pe realizarea lor.
              Cu noi, alegi un partener dedicat succesului tău.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {features.map(feature => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
        
        {/* Second part: We are ready for a new business idea */}
        <div className="mt-24 pt-16 border-t border-gray-200/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
            {/* Left Side with Images */}
            <div className="relative flex flex-col sm:flex-row gap-4">
              {/* Top-left image */}
              <div className="sm:w-1/2 h-[250px] rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
                  alt="Team planning session" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Middle orange square */}
              <div className="absolute sm:static left-1/2 top-1/2 -translate-x-1/2 w-20 h-20 bg-primary rounded-md mt-4"></div>
              
              {/* Bottom-right image */}
              <div className="sm:w-1/2 h-[250px] sm:mt-10 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Right Side with Content */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-lg bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  We are ready for a new <br/>business idea!
                </h2>
                
                <p className="text-gray-700 mb-2 font-medium">
                  Got a fresh business idea? We're all ears and <span className="text-primary font-semibold">ready to roll!</span>
                </p>
                
                <p className="text-gray-600 mb-6">
                  Our team loves a good brainstorm and we're here to help make your idea shine. 
                  We're not just about talk; we get things done. From the first sketch to the final product, 
                  we've got the tools, the know how, and the drive to bring your vision to life.
                </p>
                
                <a 
                  href="#" 
                  className="inline-block bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  Get your Free Proposal
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}