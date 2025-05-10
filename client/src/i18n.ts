import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  // Utilizăm backend pentru a încărca traducerile
  .use(Backend)
  // Detector de limbă pentru a determina automat limba
  .use(LanguageDetector)
  // Integrarea cu React
  .use(initReactI18next)
  // Inițializarea i18next
  .init({
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
    
    // Locația fișierelor de traducere
    backend: {
      loadPath: '/locales/translation.json',
    },
    
    // Funcții pentru interpolări
    interpolation: {
      escapeValue: false, // React face escape automat
    },
    
    // Spațiul de nume implicit
    defaultNS: 'translation',
  });

// Exportăm i18n pentru utilizare în aplicație
export default i18n;

// Funcție pentru a încărca traducerile direct din fișier
export const loadTranslations = async () => {
  try {
    // Încercăm mai multe căi posibile pentru a găsi fișierul de traduceri
    const paths = [
      '/locales/translation.json',
      './locales/translation.json',
      '../public/locales/translation.json',
      '/public/locales/translation.json'
    ];
    
    let data = null;
    
    // Încercăm fiecare cale pe rând
    for (const path of paths) {
      try {
        const response = await fetch(path);
        if (response.ok) {
          data = await response.json();
          console.log(`Traduceri încărcate cu succes din: ${path}`);
          break;
        }
      } catch (e) {
        console.log(`Nu s-au putut încărca traducerile din: ${path}`);
      }
    }
    
    // Dacă nu am reușit să încărcăm din nicio cale, folosim datele hardcodate
    if (!data) {
      console.log('Folosim traducerile hardcodate');
      data = {
        "languages": {
          "ro": {
            "hero": {
              "title": "Soluții digitale personalizate pentru afacerea ta",
              "subtitle": "Transformăm ideile tale în experiențe digitale de impact",
              "description": "Echipa noastră de experți oferă servicii complete de dezvoltare web și mobile, având în vedere obiectivele tale de business.",
              "cta": "Discută cu noi"
            },
            "services": {
              "title": "Serviciile noastre",
              "subtitle": "Soluții complete pentru prezența ta digitală",
              "web_dev": {
                "title": "Dezvoltare web și mobilă",
                "description": "Creăm site-uri și aplicații personalizate care se adaptează perfect nevoilor afacerii tale."
              },
              "design": {
                "title": "Design UI/UX",
                "description": "Transformăm experiența utilizatorilor tăi prin design modern și intuitiv care maximizează conversiile."
              },
              "marketing": {
                "title": "Marketing digital",
                "description": "Strategii complete de marketing digital care îți aduc clienți și cresc vizibilitatea online."
              },
              "seo": {
                "title": "Optimizare SEO",
                "description": "Îmbunătățim poziția ta în motoarele de căutare pentru a atrage mai mult trafic organic și potențiali clienți."
              }
            },
            "footer": {
              "copyright": "© 2025 Numele companiei. Toate drepturile rezervate."
            }
          },
          "en": {
            "hero": {
              "title": "Custom Digital Solutions for Your Business",
              "subtitle": "We transform your ideas into impactful digital experiences",
              "description": "Our team of experts provides comprehensive web and mobile development services, keeping your business objectives in mind.",
              "cta": "Talk to us"
            },
            "services": {
              "title": "Our Services",
              "subtitle": "Complete solutions for your digital presence",
              "web_dev": {
                "title": "Web & Mobile Development",
                "description": "We create custom websites and applications that perfectly adapt to your business needs."
              },
              "design": {
                "title": "UI/UX Design",
                "description": "We transform your users' experience through modern and intuitive design that maximizes conversions."
              },
              "marketing": {
                "title": "Digital Marketing",
                "description": "Comprehensive digital marketing strategies that bring you customers and increase online visibility."
              },
              "seo": {
                "title": "SEO Optimization",
                "description": "We improve your position in search engines to attract more organic traffic and potential customers."
              }
            },
            "footer": {
              "copyright": "© 2025 Company name. All rights reserved."
            }
          }
        }
      };
    }
    
    return data;
  } catch (error) {
    console.error('Eroare la încărcarea traducerilor:', error);
    return null;
  }
};