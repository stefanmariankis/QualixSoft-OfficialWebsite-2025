import { useTranslation } from 'react-i18next';
import { useLocation, useRoute } from 'wouter';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Type definitions
type SupportedLanguage = 'ro' | 'en';
type LocalizationContextType = {
  currentLanguage: SupportedLanguage;
  changeLanguage: (lang: SupportedLanguage) => void;
  getLocalizedPath: (path: string) => string;
  getTranslatedRoute: (routeKey: string) => string;
};

// Create the context
const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

// Provider component
export const LocalizationProvider = ({ children }: { children: ReactNode }) => {
  const { i18n, t } = useTranslation();
  const [location, setLocation] = useLocation();
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(
    (i18n.language?.startsWith('ro') ? 'ro' : 'en') as SupportedLanguage
  );

  // Change language and update URL
  const changeLanguage = (lang: SupportedLanguage) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
    
    // Update URL language prefix if needed
    const currentPath = location.split('/').filter(Boolean);
    let newPath = '';
    
    if (currentPath.length > 0 && (currentPath[0] === 'en' || currentPath[0] === 'ro')) {
      // Current URL has language prefix
      currentPath[0] = lang === 'ro' ? '' : lang;
      newPath = currentPath.filter(Boolean).join('/');
    } else {
      // Current URL has no language prefix
      if (lang === 'en') {
        newPath = 'en/' + currentPath.join('/');
      } else {
        newPath = currentPath.join('/');
      }
    }
    
    setLocation('/' + newPath);
  };

  // Get localized path for the current route
  const getLocalizedPath = (path: string): string => {
    // Split path by segments
    const segments = path.split('/').filter(Boolean);
    
    // Check if the path already has a language prefix
    if (segments.length > 0 && (segments[0] === 'ro' || segments[0] === 'en')) {
      segments.shift();
    }
    
    // Check for route translation
    if (segments.length > 0) {
      const routeKey = segments[0];
      // Try to find a translation for this route
      const routes = i18n.getResource(currentLanguage, 'translation', 'routes') as Record<string, string>;
      
      // Get available route keys (from values)
      const routeValues = Object.values(routes);
      
      // Check if this segment matches any translated route value
      let foundKey = '';
      Object.entries(routes).forEach(([key, value]) => {
        if (value === routeKey) {
          foundKey = key;
        }
      });
      
      if (foundKey) {
        // Replace the route segment with the translated version for target language
        segments[0] = routes[foundKey] || segments[0];
      }
    }
    
    // Construct the new path with language prefix if needed
    let newPath = segments.join('/');
    if (currentLanguage === 'en') {
      newPath = 'en/' + newPath;
    }
    
    return '/' + newPath;
  };

  // Get translated route for a specific route key
  const getTranslatedRoute = (routeKey: string): string => {
    const routes = i18n.getResource(currentLanguage, 'translation', 'routes') as Record<string, string>;
    return routes?.[routeKey] || routeKey;
  };

  // Set up language based on URL
  useEffect(() => {
    const pathSegments = location.split('/').filter(Boolean);
    const langFromUrl = pathSegments[0] === 'en' ? 'en' : 'ro';
    
    if (langFromUrl !== currentLanguage) {
      i18n.changeLanguage(langFromUrl);
      setCurrentLanguage(langFromUrl as SupportedLanguage);
    }
  }, [location, i18n, currentLanguage]);

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

// Hook to use localization
export const useLocalization = (): LocalizationContextType => {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};

// Hook for creating localized routes
export const useLocalizedRoute = (routeKey: string) => {
  const { getTranslatedRoute } = useLocalization();
  const translatedPath = getTranslatedRoute(routeKey);
  
  return translatedPath;
};