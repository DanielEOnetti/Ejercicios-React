import { useState } from 'react';

function FiltroBusqueda() {
  const [busqueda, setBusqueda] = useState('');
  
  // Lista de ejemplo
  const lenguajes = ['JavaScript', 'Python', 'React', 'Node.js', 'Swift', 'Kotlin', 'TypeScript', 'PHP', 'Java', 'C++'];

  // Filtramos la lista cada vez que el componente se renderiza
  const resultados = lenguajes.filter((lenguaje) =>
    lenguaje.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <h2 style={{ color: '#1e293b', marginBottom: '20px' }}>🔍 Filtro en Tiempo Real</h2>
      <input
        type="text"
        placeholder="Escribe para buscar un lenguaje..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          width: '100%',
          padding: '15px',
          borderRadius: '10px',
          border: '2px solid #e2e8f0',
          fontSize: '1rem',
          outline: 'none',
          boxSizing: 'border-box'
        }}
      />
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {resultados.map((item, index) => (
          <li key={index} style={{
            padding: '12px',
            borderBottom: '1px solid #f1f5f9',
            color: '#475569'
          }}>
            {item}
          </li>
        ))}
        {resultados.length === 0 && (
          <p style={{ color: '#ef4444', textAlign: 'center' }}>No se encontraron resultados.</p>
        )}
      </ul>
    </div>
  );
}

export default FiltroBusqueda;