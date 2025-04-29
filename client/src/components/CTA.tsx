import teamImage1 from "@assets/image_1745924567265.png";
import teamImage2 from "@assets/image_1745924950559.png";
import { useTranslation } from "react-i18next";

export default function CTA() {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 md:py-20 bg-light-orange-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/2 flex space-x-4">
            <div className="relative">
              <img 
                src={teamImage1}
                alt="Business planning" 
                className="w-full h-auto rounded-lg object-cover md:max-w-[240px] shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
              />
            </div>
            <div className="relative mt-10">
              <img 
                src={teamImage2}
                alt="Team collaboration" 
                className="w-full h-auto rounded-lg object-cover md:max-w-[240px] shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's take your business to the next level!
            </h2>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3 text-xl">✦</span>
                <span className="text-foreground">If you find yourself in one of the situations we've mentioned</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3 text-xl">✦</span>
                <span className="text-foreground">If you know your business deserves more</span>
              </li>
            </ul>
            
            <a 
              href="#" 
              className="btn-primary inline-flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get your Free Proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
