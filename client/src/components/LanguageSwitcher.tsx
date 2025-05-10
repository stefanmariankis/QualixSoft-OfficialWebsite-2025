import React from 'react';
import useTranslate from '../hooks/useTranslate';

type LanguageSwitcherProps = {
  className?: string;
};

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { getCurrentLanguage, changeLanguage } = useTranslate();
  const currentLang = getCurrentLanguage();

  const toggleLanguage = () => {
    const newLang = currentLang === 'ro' ? 'en' : 'ro';
    changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center text-sm font-medium px-2 py-1 rounded hover:bg-gray-100 transition-colors ${className}`}
    >
      <span className="mr-1">{currentLang.toUpperCase()}</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v4m1.042 9.278l2.222-6.83L15 16.222m-5.236.247l-1.541-4.736L6 16.468" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.153 12.292L21 16.142m0 0l-3.85 3.85m3.85-3.85h-9.193" />
      </svg>
    </button>
  );
};

export default LanguageSwitcher;