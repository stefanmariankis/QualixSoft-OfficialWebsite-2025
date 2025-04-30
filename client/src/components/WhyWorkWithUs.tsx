// Import custom icons
import tailoredSolutionsIcon from "../assets/icon_tailored_solutions.png";
import expertTeamIcon from "../assets/icon_expert_team.png";
import fullServiceSupportIcon from "../assets/icon_full_service_support.png";
import provenResultsIcon from "../assets/icon_proven_results.png";
import hexBackgroundLight from "../assets/hex_background_light.jpg";
import { useTranslation } from "react-i18next";

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
    <div className="flex flex-col items-center text-center animate-fadeIn bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow" style={{ animationDelay: `${feature.id * 0.1}s` }}>
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

export default function WhyWorkWithUs() {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Split background - White left, Hex pattern right */}
      <div className="absolute inset-0 w-full h-full flex">
        {/* Left side - white background */}
        <div className="w-1/2 bg-white"></div>
        
        {/* Right side - hex pattern background */}
        <div 
          className="w-1/2 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url(${hexBackgroundLight})` }}
        ></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
    </section>
  );
}