import { useState } from 'react';

function GeneradorContrasenas() {
  const [password, setPassword] = useState('');
  const [longitud, setLongitud] = useState(12); // Valor por defecto
  const [error, setError] = useState('');

  const generarPassword = () => {
    // 1. VALIDACIÓN
    if (longitud < 4 || longitud === '') {
      setError('La longitud debe ser mayor o igual a 4.');
      setPassword(''); // Limpiamos la contraseña si hay error
      return;
    }

    // 2. LÓGICA DE GENERACIÓN
    setError(''); // Limpiamos errores previos si todo está bien
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let resultado = '';
    
    for (let i = 0; i < longitud; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      resultado += caracteres.charAt(indice);
    }
    
    setPassword(resultado);
  };

  return (
    <div style={{ maxWidth: '400px', width: '100%' }}>
      <h2 style={{ textAlign: 'center', color: '#1e293b' }}>🔐 Generador Seguro</h2>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
          Longitud de la contraseña:
        </label>
        <input 
          type="number" 
          value={longitud}
          onChange={(e) => setLongitud(e.target.value)}
          placeholder="Ej: 12"
          style={{ 
            width: '100%', 
            padding: '10px', 
            borderRadius: '5px', 
            border: `2px solid ${error ? '#ef4444' : '#e2e8f0'}`,
            outline: 'none',
            boxSizing: 'border-box'
          }}
        />
        
        {/* MENSAJE DE ERROR CONDICIONAL */}
        {error && (
          <p style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '5px', fontWeight: 'bold' }}>
            ⚠️ {error}
          </p>
        )}
      </div>

      <button 
        onClick={generarPassword}
        style={{ 
          width: '100%', 
          padding: '12px', 
          backgroundColor: '#3b82f6', 
          color: 'white', 
          border: 'none', 
          borderRadius: '8px', 
          cursor: 'pointer',
          fontWeight: 'bold',
          marginBottom: '20px'
        }}
      >
        Generar Contraseña
      </button>

      {/* RESULTADO (Solo se muestra si hay contraseña y no hay error) */}
      {password && !error && (
        <div style={{ 
          background: '#f1f5f9', 
          padding: '15px', 
          borderRadius: '8px', 
          textAlign: 'center',
          border: '1px solid #cbd5e1'
        }}>
          <span style={{ fontFamily: 'monospace', fontSize: '1.2rem', wordBreak: 'break-all' }}>
            {password}
          </span>
        </div>
      )}
    </div>
  );
}

export default GeneradorContrasenas;