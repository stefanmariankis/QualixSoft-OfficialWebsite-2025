// Fișier i18n simplificat, care nu face nicio operație reală
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Configurație minimală pentru i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      ro: {
        translation: {}
      },
      en: {
        translation: {}
      }
    },
    lng: 'ro',
    fallbackLng: 'ro',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;

// Export gol pentru compatibilitate
export const languages = {};