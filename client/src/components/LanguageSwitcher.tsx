import React from 'react';
import { useLocalization } from '../hooks/useLocalization';

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { currentLanguage, changeLanguage } = useLocalization();

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'ro' ? 'en' : 'ro';
    changeLanguage(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center text-sm font-medium hover:text-primary transition-colors px-2 py-1 rounded ${
        className || ''
      }`}
      aria-label="Schimbă limba"
    >
      <span className={`mr-1 ${currentLanguage === 'ro' ? 'text-primary font-bold' : ''}`}>
        RO
      </span>
      <span className="mx-1 text-gray-400">|</span>
      <span className={`ml-1 ${currentLanguage === 'en' ? 'text-primary font-bold' : ''}`}>
        EN
      </span>
    </button>
  );
}