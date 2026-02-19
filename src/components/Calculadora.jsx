import { useState } from 'react';

function Calculadora() {
  const [valor, setValor] = useState('');

  const botones = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', 'C', '+'];

  const clickBoton = (b) => {
    if (b === 'C') {
      setValor('');
    } else {
      setValor(valor + b);
    }
  };

  const calcular = () => {
    try {
      // eval() evalúa el string matemático
      setValor(eval(valor).toString());
    } catch {
      setValor('Error');
      setTimeout(() => setValor(''), 1000);
    }
  };

  return (
    <div style={{ width: '300px' }}>
      <h2 style={{ textAlign: 'center', color: '#1e293b' }}>🧮 Calculadora</h2>
      
      {/* Pantalla */}
      <div style={{
        backgroundColor: '#1e293b',
        color: 'white',
        padding: '20px',
        fontSize: '1.8rem',
        textAlign: 'right',
        borderRadius: '10px',
        marginBottom: '15px',
        minHeight: '40px',
        fontFamily: 'monospace'
      }}>
        {valor || '0'}
      </div>

      {/* Botones */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '10px'
      }}>
        {botones.map((b) => (
          <button
            key={b}
            onClick={() => clickBoton(b)}
            style={{
              padding: '15px',
              fontSize: '1.2rem',
              cursor: 'pointer',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              backgroundColor: isNaN(b) && b !== '.' ? '#f8fafc' : 'white'
            }}
          >
            {b}
          </button>
        ))}
        <button
          onClick={calcular}
          style={{
            gridColumn: 'span 4',
            padding: '15px',
            fontSize: '1.2rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculadora;