import logoImg from "../assets/logo.png";

interface LogoProps {
  color?: string;
}

export default function Logo({ color = 'dark' }: LogoProps) {
  return (
    <div className="h-10 mr-0">
      <img 
        src={logoImg} 
        alt="QualixSoft" 
        className="h-full" 
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}
