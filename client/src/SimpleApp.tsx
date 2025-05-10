function SimpleApp() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#EB7127', fontSize: '2rem', marginBottom: '1rem' }}>
        Aplicație de test
      </h1>
      <p style={{ color: '#333', marginBottom: '2rem', textAlign: 'center', maxWidth: '600px' }}>
        Aceasta este o aplicație simplificată pentru a verifica că mediul de rulare funcționează corect.
      </p>
      <button style={{ 
        backgroundColor: '#EB7127',
        color: 'white',
        border: 'none',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.375rem',
        fontSize: '1rem',
        cursor: 'pointer'
      }}>
        Buton de test
      </button>
    </div>
  );
}

export default SimpleApp;