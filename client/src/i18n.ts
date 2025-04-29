import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Define translations directly here to avoid JSON loading issues
// Romanian translations
const translationRO = {
  nav: {
    home: "Acasă",
    about: "Despre noi",
    services: "Servicii",
    portfolio: "Portofoliu",
    solutions: "Soluții",
    contact: "Contact"
  },
  home: {
    hero: {
      title: "Soluții digitale inovatoare pentru afacerea ta",
      subtitle: "Transformă ideile tale în realitate digitală",
      cta: "Cere o ofertă"
    },
    services: {
      title: "Serviciile noastre",
      subtitle: "Oferim o gamă completă de servicii digitale",
      web_mobile: "Web & Mobile",
      consulting: "Consultanță IT",
      ecommerce: "E-Commerce",
      design: "Design UX/UI",
      view_all: "Vezi toate serviciile"
    }
  },
  routes: {
    home: "",
    about: "despre-noi",
    services: "servicii",
    portfolio: "portofoliu",
    solutions: "solutii",
    contact: "contact"
  }
};

// English translations
const translationEN = {
  nav: {
    home: "Home",
    about: "About Us",
    services: "Services",
    portfolio: "Portfolio",
    solutions: "Solutions",
    contact: "Contact"
  },
  home: {
    hero: {
      title: "Innovative Digital Solutions for Your Business",
      subtitle: "Turn your ideas into digital reality",
      cta: "Request a quote"
    },
    services: {
      title: "Our Services",
      subtitle: "We offer a complete range of digital services",
      web_mobile: "Web & Mobile",
      consulting: "IT Consulting",
      ecommerce: "E-Commerce",
      design: "UX/UI Design",
      view_all: "View all services"
    }
  },
  routes: {
    home: "",
    about: "about-us",
    services: "services",
    portfolio: "portfolio",
    solutions: "solutions",
    contact: "contact"
  }
};

// Resources object with translations
const resources = {
  ro: {
    translation: translationRO
  },
  en: {
    translation: translationEN
  }
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Init i18next
  .init({
    resources,
    fallbackLng: 'ro',
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false, // not needed for React as it escapes by default
    },
    
    // Language detection options
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
    },
  });

export default i18n;