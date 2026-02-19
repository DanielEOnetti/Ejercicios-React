import { useState, useEffect } from 'react';

function Temporizador() {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);

  // useEffect se encarga de manejar el intervalo de tiempo
  useEffect(() => {
    let intervalo = null;

    if (activo) {
      intervalo = setInterval(() => {
        setSegundos((s) => s + 1);
      }, 1000);
    } else {
      // Si no está activo, limpiamos el intervalo
      clearInterval(intervalo);
    }

    // Esta función de retorno limpia el intervalo si el componente se desmonta
    return () => clearInterval(intervalo);
  }, [activo]); // Se ejecuta cada vez que cambia el estado 'activo'

  const formatearTiempo = (s) => {
    const horas = Math.floor(s / 3600).toString().padStart(2, '0');
    const minutos = Math.floor((s % 3600) / 60).toString().padStart(2, '0');
    const segs = (s % 60).toString().padStart(2, '0');
    return `${horas}:${minutos}:${segs}`;
  };

  const reiniciar = () => {
    setActivo(false);
    setSegundos(0);
  };

  return (
    <div style={{ textAlign: 'center', width: '100%', maxWidth: '400px' }}>
      <h2 style={{ color: '#1e293b' }}>⏱️ Temporizador</h2>
      
      <div style={{ 
        fontSize: '4.5rem', 
        fontWeight: 'bold', 
        margin: '30px 0', 
        fontFamily: 'monospace',
        color: '#3b82f6',
        backgroundColor: '#f1f5f9',
        padding: '20px',
        borderRadius: '15px'
      }}>
        {formatearTiempo(segundos)}
      </div>

      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
        <button 
          onClick={() => setActivo(!activo)}
          style={{
            padding: '12px 25px',
            fontSize: '1rem',
            cursor: 'pointer',
            backgroundColor: activo ? '#f59e0b' : '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold'
          }}
        >
          {activo ? 'Pausar' : 'Iniciar'}
        </button>

        <button 
          onClick={reiniciar}
          style={{
            padding: '12px 25px',
            fontSize: '1rem',
            cursor: 'pointer',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold'
          }}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}

export default Temporizador;