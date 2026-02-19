import { useState } from 'react';

function CambiadorColor() {
  // Definimos el estado 'color' y la función para cambiarlo
  const [color, setColor] = useState('#ffffff');

  const generarColor = () => {
    const nuevoColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColor(nuevoColor);
  };

  return (
    <div style={{ backgroundColor: color, height: '100vh', textAlign: 'center', padding: '20px' }}>
      <h2>Color actual: {color.toUpperCase()}</h2>
      <button onClick={generarColor} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Cambiar Fondo
      </button>
    </div>
  );
}

export default CambiadorColor;