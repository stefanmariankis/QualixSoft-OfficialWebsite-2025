import logoColoredImg from "../assets/logo.png";
import logoWhiteImg from "../assets/logo_white.png";
import { useLocation } from "wouter";

interface LogoProps {
  color?: string;
  forceWhite?: boolean;
}

export default function Logo({ color = 'dark', forceWhite = false }: LogoProps) {
  const [location] = useLocation();
  const isHomePage = location === "/";
  const shouldUseColoredLogo = isHomePage && !forceWhite;
  
  return (
    <div className="h-10 mr-0">
      <img 
        src={shouldUseColoredLogo ? logoColoredImg : logoWhiteImg} 
        alt="QualixSoft" 
        className="h-full" 
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}
