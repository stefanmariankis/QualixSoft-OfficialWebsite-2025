import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Import client logos
import unicoolLogo from "../assets/client_unicool.png";
import pulseWeldingLogo from "../assets/client_pulse_welding.png";
import thdPlastLogo from "../assets/client_thd_plast.png";
import climaticLogo from "../assets/client_climatic.png";
import zahariasLogo from "../assets/client_zaharias.png";
import optimarLogo from "../assets/client_optimar.png";
import universulCopiilorLogo from "../assets/client_universul_copiilor.png";
import { CheckCircle } from "lucide-react";

// Clients with their logos
const partners = [
  { name: "unicool", logo: unicoolLogo, href: "#" },
  { name: "thd_plast", logo: thdPlastLogo, href: "#" },
  { name: "climatic", logo: climaticLogo, href: "#" },
  { name: "zaharias", logo: zahariasLogo, href: "#" },
  { name: "optimar", logo: optimarLogo, href: "#" },
  { name: "universul_copiilor", logo: universulCopiilorLogo, href: "#" }
];

export default function Partners() {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="py-6 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top text */}
        <div className="text-center text-white text-sm mb-4">
          <div className="flex items-center justify-center">
            <span>30+ partners have put their trust in us</span>
            <CheckCircle className="h-4 w-4 ml-1.5 text-white" />
          </div>
        </div>
        
        {/* Client logos in a row */}
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 lg:gap-16">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="partner-logo flex items-center justify-center"
            >
              <a href={partner.href} className="flex items-center justify-center h-full w-full">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-10 sm:h-12 w-auto object-contain filter brightness-0 invert"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
