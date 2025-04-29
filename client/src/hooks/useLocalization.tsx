import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useLocation } from 'wouter';

type SupportedLanguage = 'ro' | 'en';
type LocalizationContextType = {
  currentLanguage: SupportedLanguage;
  changeLanguage: (lang: SupportedLanguage) => void;
  getLocalizedPath: (path: string) => string;
  getTranslatedRoute: (routeKey: string) => string;
};

const LocalizationContext = createContext<LocalizationContextType | null>(null);

export const LocalizationProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>('ro');
  const { t } = useTranslation();
  const [location, setLocation] = useLocation();

  // Initialize language from localStorage or browser setting
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'ro' || savedLanguage === 'en')) {
      setCurrentLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    } else {
      // Try to detect from URL path
      const pathLang = detectLanguageFromPath(location);
      if (pathLang) {
        setCurrentLanguage(pathLang);
        i18n.changeLanguage(pathLang);
      }
    }
  }, []);

  // Detect language from URL path
  const detectLanguageFromPath = (path: string): SupportedLanguage | null => {
    if (path.startsWith('/en/') || path === '/en') {
      return 'en';
    } else if (path.startsWith('/ro/') || path === '/ro') {
      return 'ro';
    }
    
    // Check for English route patterns
    const enRoutes = ['about-us', 'services', 'portfolio', 'solutions', 'contact'];
    for (const route of enRoutes) {
      if (path.includes(`/${route}`)) {
        return 'en';
      }
    }
    
    // Check for Romanian route patterns
    const roRoutes = ['despre-noi', 'servicii', 'portofoliu', 'solutii', 'contact'];
    for (const route of roRoutes) {
      if (path.includes(`/${route}`)) {
        return 'ro';
      }
    }
    
    return null;
  };

  const changeLanguage = (lang: SupportedLanguage) => {
    setCurrentLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    
    // Update the URL to reflect the language change
    const newPath = getLocalizedPath(location);
    setLocation(newPath);
  };

  // Get localized path for a route
  const getLocalizedPath = (path: string): string => {
    // Remove language prefix if present
    let cleanPath = path;
    if (path.startsWith('/en/') || path.startsWith('/ro/')) {
      cleanPath = path.substring(3);
    } else if (path === '/en' || path === '/ro') {
      cleanPath = '/';
    }
    
    // For home page
    if (cleanPath === '/') {
      return cleanPath;
    }
    
    // Remove the leading slash for route translation
    const routeKey = cleanPath.substring(1);
    
    // Handle special cases for specific routes
    const routeMappings: Record<string, string> = {
      // Routes mapping to their canonical keys
      'about-us': 'about',
      'despre-noi': 'about',
      'services': 'services',
      'servicii': 'services',
      'portfolio': 'portfolio',
      'portofoliu': 'portfolio',
      'solutions': 'solutions',
      'solutii': 'solutions',
      'contact': 'contact'
    };
    
    // Find the route key
    const normalizedRouteKey = routeMappings[routeKey] || routeKey;
    
    // Get translated route
    const translatedRoute = t(`routes.${normalizedRouteKey}`);
    return `/${translatedRoute}`;
  };
  
  // Get translated route based on route key
  const getTranslatedRoute = (routeKey: string): string => {
    return t(`routes.${routeKey}`);
  };

  const contextValue: LocalizationContextType = {
    currentLanguage,
    changeLanguage,
    getLocalizedPath,
    getTranslatedRoute
  };

  return (
    <LocalizationContext.Provider value={contextValue}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = (): LocalizationContextType => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};

export const useLocalizedRoute = (routeKey: string) => {
  const { getTranslatedRoute } = useLocalization();
  return `/${getTranslatedRoute(routeKey)}`;
};