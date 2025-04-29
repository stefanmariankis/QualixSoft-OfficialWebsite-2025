import React from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { currentLanguage, changeLanguage } = useLocalization();

  const toggleLanguage = () => {
    changeLanguage(currentLanguage === 'ro' ? 'en' : 'ro');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${className}`}
      aria-label={currentLanguage === 'ro' ? 'Switch to English' : 'Schimbă în Română'}
    >
      <Globe className="h-4 w-4" />
      <span className="ml-1">{currentLanguage === 'ro' ? 'EN' : 'RO'}</span>
    </button>
  );
}