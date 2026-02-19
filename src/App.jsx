import { useState } from 'react';
import CambiadorColor from './components/CambiadorColor';
import Contador from './components/Contador';
import ListaDinamica from './components/ListaDinamica';
import FiltroBusqueda from './components/FiltroBusqueda';
import Calculadora from './components/Calculadora';
import Temporizador from './components/Temporizador';
import GeneradorContrasenas from './components/GeneradorContrasenas';
import ContadorPalabras from './components/ContadorPalabras';
import ListaTareasPro from './components/ListaTareasPro';

function App() {
  const [ejercicioActivo, setEjercicioActivo] = useState(1);

  const menu = [
    { id: 1, titulo: '1. Color de Fondo' },
    { id: 2, titulo: '2. Contador de Clics' },
    { id: 3, titulo: '3. Lista Dinámica' },
    { id: 4, titulo: '4. Filtro de Búsqueda' },
    { id: 5, titulo: '5. Calculadora' },
    { id: 6, titulo: '6. Temporizador' },
    { id: 7, titulo: '7. Generador de Pass' },
    { id: 8, titulo: '8. Contador de Palabras' },
    { id: 9, titulo: '9. Lista Tareas Pro' },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', fontFamily: 'sans-serif', overflow: 'hidden' }}>
      
      
      <nav style={{ 
        width: '280px', 
        backgroundColor: '#1e293b', 
        color: 'white', 
        padding: '20px',
        flexShrink: 0, 
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h2 style={{ fontSize: '1.1rem', marginBottom: '30px', textAlign: 'center' }}>🚀 Workshop React</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {menu.map((item) => (
            <li 
              key={item.id}
              onClick={() => setEjercicioActivo(item.id)}
              style={{
                padding: '15px',
                cursor: 'pointer',
                borderRadius: '8px',
                marginBottom: '10px',
                backgroundColor: ejercicioActivo === item.id ? '#3b82f6' : 'transparent',
                transition: '0.2s',
                fontWeight: ejercicioActivo === item.id ? 'bold' : 'normal'
              }}
            >
              {item.titulo}
            </li>
          ))}
        </ul>
      </nav>

     
      <main style={{ 
        flex: 1, 
        backgroundColor: 'white', 
        height: '100vh', 
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '60px 20px' 
      }}>
        
        <div style={{ width: '100%', maxWidth: '800px' }}>
          {ejercicioActivo === 1 && <CambiadorColor />}
          {ejercicioActivo === 2 && <Contador />}
          {ejercicioActivo === 3 && <ListaDinamica />}
          {ejercicioActivo === 4 && <FiltroBusqueda />}
          {ejercicioActivo === 5 && <Calculadora />}
          {ejercicioActivo === 6 && <Temporizador />}
          {ejercicioActivo === 7 && <GeneradorContrasenas />}
          {ejercicioActivo === 8 && <ContadorPalabras />}
          {ejercicioActivo === 9 && <ListaTareasPro />}
          
          
        </div>
      </main>

    </div>
  );
}

export default App;