import logoColoredImg from "../assets/logo.png";
import logoWhiteImg from "../assets/logo_white.png";
import { useLocation } from "wouter";
import { useScrollHeader } from '@/hooks/useScrollHeader';
import { useLocalization } from '@/hooks/useLocalization';

interface LogoProps {
  color?: string;
  forceWhite?: boolean;
}

export default function Logo({ color = 'dark', forceWhite = false }: LogoProps) {
  const [location] = useLocation();
  const { getLocalizedPath } = useLocalization();
  const isScrolled = useScrollHeader(50);
  
  // Determine if we're on the homepage
  const isHomePage = location === getLocalizedPath("/");
  
  // Use colored logo on homepage when not scrolled OR on any page when scrolled
  // Use white logo only on non-homepage when not scrolled or when forceWhite=true
  const shouldUseColoredLogo = (isHomePage && !isScrolled && !forceWhite) || isScrolled;
  
  return (
    <div className="h-10 mr-0 transition-all duration-300">
      <img 
        src={shouldUseColoredLogo ? logoColoredImg : logoWhiteImg} 
        alt="QualixSoft" 
        className="h-full" 
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}
