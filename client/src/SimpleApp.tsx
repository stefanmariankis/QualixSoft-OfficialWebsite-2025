import { useState, useEffect } from 'react';
import { loadTranslations } from './i18n';

function SimpleApp() {
  const [currentLang, setCurrentLang] = useState<'ro' | 'en'>('ro');
  const [translations, setTranslations] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTranslations() {
      try {
        setIsLoading(true);
        const data = await loadTranslations();
        setTranslations(data);
      } catch (error) {
        console.error('Eroare la încărcarea traducerilor:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTranslations();
  }, []);

  const t = (path: string) => {
    if (!translations) return path;
    
    try {
      // Split the path by dots (e.g., "hero.title" becomes ["hero", "title"])
      const keys = path.split('.');
      let result = translations.languages[currentLang];
      
      // Verificăm dacă translations.languages[currentLang] există
      if (!result) {
        console.warn(`Translation object for ${currentLang} not found`);
        return path;
      }
      
      // Navigate through the nested properties
      for (const key of keys) {
        if (result && result[key] !== undefined) {
          result = result[key];
        } else {
          console.warn(`Translation key not found: ${path} (stopped at ${key})`);
          return path; // If the path doesn't exist, return the path itself
        }
      }
      
      return result;
    } catch (error) {
      console.error('Error in translation function:', error);
      return path;
    }
  };

  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'ro' ? 'en' : 'ro');
  };

  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh'
      }}>
        <p>Se încarcă traducerile...</p>
      </div>
    );
  }

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif',
      padding: '2rem'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginBottom: '2rem'
      }}>
        <button 
          onClick={toggleLanguage}
          style={{
            backgroundColor: '#EB7127',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            cursor: 'pointer'
          }}
        >
          {currentLang === 'ro' ? 'Switch to English' : 'Schimbă în Română'}
        </button>
      </div>

      <h1 style={{ color: '#EB7127', fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>
        {t('hero.title')}
      </h1>
      
      <p style={{ color: '#333', marginBottom: '1rem', textAlign: 'center', maxWidth: '600px' }}>
        {t('hero.subtitle')}
      </p>
      
      <p style={{ color: '#555', marginBottom: '2rem', textAlign: 'center', maxWidth: '600px' }}>
        {t('hero.description')}
      </p>
      
      <button style={{ 
        backgroundColor: '#EB7127',
        color: 'white',
        border: 'none',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.375rem',
        fontSize: '1rem',
        cursor: 'pointer',
        marginBottom: '2rem'
      }}>
        {t('hero.cta')}
      </button>

      <div style={{ marginTop: '1rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', maxWidth: '800px' }}>
        <h2 style={{ color: '#EB7127', fontSize: '1.5rem', marginBottom: '1rem' }}>
          {t('services.title')}
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          {t('services.subtitle')}
        </p>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ padding: '0.75rem 0', borderBottom: '1px solid #eee' }}>
            <strong>{t('services.web_dev.title')}</strong>: {t('services.web_dev.description')}
          </li>
          <li style={{ padding: '0.75rem 0', borderBottom: '1px solid #eee' }}>
            <strong>{t('services.design.title')}</strong>: {t('services.design.description')}
          </li>
          <li style={{ padding: '0.75rem 0', borderBottom: '1px solid #eee' }}>
            <strong>{t('services.marketing.title')}</strong>: {t('services.marketing.description')}
          </li>
          <li style={{ padding: '0.75rem 0' }}>
            <strong>{t('services.seo.title')}</strong>: {t('services.seo.description')}
          </li>
        </ul>
      </div>
      
      <div style={{ marginTop: '2rem', fontSize: '0.875rem', color: '#666' }}>
        <p>{t('footer.copyright')}</p>
      </div>
    </div>
  );
}

export default SimpleApp;