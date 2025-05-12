import React, { useRef, useEffect } from 'react';
import useTranslate from '../hooks/useTranslate';
import { ChevronDown } from 'lucide-react';

type LanguageSwitcherProps = {
  className?: string;
};

// Define language type
type Language = 'ro' | 'en';

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { getCurrentLanguage, changeLanguage } = useTranslate();
  const currentLang = getCurrentLanguage();
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (lang: Language) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  // Map language codes to their full names
  const languageNames: Record<Language, string> = {
    'ro': 'Română',
    'en': 'English'
  };
  
  // Available languages
  const availableLanguages: Language[] = ['ro', 'en'];

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`flex items-center text-sm font-medium px-3 py-2 rounded border border-gray-200 
                    hover:border-primary/20 hover:bg-primary/5 transition-colors`}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="mr-2">{languageNames[currentLang]}</span>
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-1 w-40 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100"
        >
          {availableLanguages.map((code) => (
            <button
              key={code}
              onClick={() => selectLanguage(code)}
              className={`flex items-center w-full text-left px-4 py-2 text-sm 
                        hover:bg-primary/5 hover:text-primary transition-colors
                        ${currentLang === code ? 'font-medium text-primary' : 'text-gray-700'}`}
            >
              {languageNames[code]}
              {currentLang === code && (
                <span className="ml-auto">
                  <svg className="w-4 h-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;