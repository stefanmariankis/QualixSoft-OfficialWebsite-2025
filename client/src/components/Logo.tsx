import logoImg from "../assets/logo.png";

interface LogoProps {
  color?: string;
}

export default function Logo({ color = 'dark' }: LogoProps) {
  return (
    <div className="h-8 mr-2">
      <img 
        src={logoImg} 
        alt="QualixSoft" 
        className="h-full" 
      />
    </div>
  );
}
