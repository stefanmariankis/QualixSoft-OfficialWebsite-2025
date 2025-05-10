import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

export default function useTranslate() {
  const { t, i18n } = useTranslation();
  
  // Schimbă limba
  const changeLanguage = useCallback((lng: 'ro' | 'en') => {
    i18n.changeLanguage(lng);
    // Salvează alegerea în localStorage
    localStorage.setItem('i18nextLng', lng);
  }, [i18n]);
  
  // Obține limba curentă
  const getCurrentLanguage = useCallback(() => {
    return i18n.language?.substring(0, 2) as 'ro' | 'en';
  }, [i18n.language]);
  
  // Obține ruta localizată (pentru navigare)
  const getLocalizedRoute = useCallback((routeName: string) => {
    const route = t(`routes.${routeName}`);
    return route ? `/${route}` : '/';
  }, [t]);
  
  return {
    t,
    i18n,
    changeLanguage,
    getCurrentLanguage,
    getLocalizedRoute
  };
}