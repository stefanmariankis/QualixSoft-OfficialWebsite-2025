import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { defaultTranslations } from './translations';

// Inițializarea resurselor din fișierul de traduceri
const resources = {
  ro: {
    translation: defaultTranslations.languages.ro
  },
  en: {
    translation: defaultTranslations.languages.en
  }
};

i18n
  // Detector de limbă pentru a determina automat limba
  .use(LanguageDetector)
  // Integrarea cu React
  .use(initReactI18next)
  // Inițializarea i18next
  .init({
    // Resursele de traducere
    resources,
    
    // Detectarea limbii
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
    },
    
    // Limba implicită
    fallbackLng: 'ro',
    
    // Dezactivăm debug în producție
    debug: process.env.NODE_ENV === 'development',
    
    // Funcții pentru interpolări
    interpolation: {
      escapeValue: false, // React face escape automat
    },
  });

export default i18n;