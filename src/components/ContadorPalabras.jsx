import { useState } from 'react';

function ContadorPalabras() {
  const [texto, setTexto] = useState('');

  // Lógica de conteo (Estado derivado)
  const numCaracteres = texto.length;
  const numPalabras = texto.trim() === '' 
    ? 0 
    : texto.trim().split(/\s+/).length;

  return (
    <div style={{ width: '100%', maxWidth: '600px' }}>
      <h2 style={{ color: '#1e293b', textAlign: 'center' }}>📝 Analizador de Texto</h2>
      
      <textarea
        placeholder="Escribe o pega tu texto aquí..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        style={{
          width: '100%',
          height: '200px',
          padding: '20px',
          borderRadius: '12px',
          border: '2px solid #e2e8f0',
          fontSize: '1.1rem',
          fontFamily: 'inherit',
          outline: 'none',
          boxSizing: 'border-box',
          transition: 'border-color 0.2s'
        }}
        onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
        onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
      />

      <div style={{ 
        display: 'flex', 
        gap: '20px', 
        marginTop: '25px',
        justifyContent: 'center' 
      }}>
        <div style={statBoxStyle}>
          <span style={statNumberStyle}>{numPalabras}</span>
          <span style={statLabelStyle}>Palabras</span>
        </div>
        
        <div style={statBoxStyle}>
          <span style={statNumberStyle}>{numCaracteres}</span>
          <span style={statLabelStyle}>Caracteres</span>
        </div>
      </div>
    </div>
  );
}

// Estilos rápidos en objetos para mantener el componente limpio
const statBoxStyle = {
  flex: 1,
  backgroundColor: '#f8fafc',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
  border: '1px solid #e2e8f0'
};

const statNumberStyle = {
  display: 'block',
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#3b82f6'
};

const statLabelStyle = {
  fontSize: '0.9rem',
  color: '#64748b',
  textTransform: 'uppercase',
  letterSpacing: '1px'
};

export default ContadorPalabras;