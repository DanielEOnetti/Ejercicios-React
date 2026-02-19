import { useState, useEffect } from 'react';

function ListaTareasPro() {
  // 1. ESTADO: Cargamos los datos de localStorage al arrancar
  // Usamos una función dentro de useState para que solo se ejecute UNA VEZ
  const [tareas, setTareas] = useState(() => {
    const datosGuardados = localStorage.getItem('workshop_tareas');
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  });

  const [textoNuevaTarea, setTextoNuevaTarea] = useState('');

  // 2. PERSISTENCIA: Cada vez que la lista de tareas cambie, se guarda en el navegador
  useEffect(() => {
    localStorage.setItem('workshop_tareas', JSON.stringify(tareas));
  }, [tareas]);

  // 3. LÓGICA: Añadir, completar y eliminar
  const añadirTarea = (e) => {
    e.preventDefault();
    if (textoNuevaTarea.trim() === '') return;

    const nueva = {
      id: Date.now(),
      texto: textoNuevaTarea,
      completada: false
    };

    setTareas([...tareas, nueva]);
    setTextoNuevaTarea('');
  };

  const marcarCompletada = (id) => {
    setTareas(tareas.map(t => 
      t.id === id ? { ...t, completada: !t.completada } : t
    ));
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
  };

  return (
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <h2 style={{ textAlign: 'center', color: '#1e293b' }}>✅ Lista de Tareas Pro</h2>
      
      {/* FORMULARIO */}
      <form onSubmit={añadirTarea} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input 
          type="text"
          value={textoNuevaTarea}
          onChange={(e) => setTextoNuevaTarea(e.target.value)}
          placeholder="¿Qué tienes pendiente?"
          style={{ 
            flex: 1, padding: '12px', borderRadius: '8px', 
            border: '2px solid #e2e8f0', outline: 'none' 
          }}
        />
        <button type="submit" style={{ 
          padding: '12px 20px', backgroundColor: '#3b82f6', color: 'white', 
          border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' 
        }}>
          Añadir
        </button>
      </form>

      {/* LISTA */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tareas.map(tarea => (
          <li key={tarea.id} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '15px',
            backgroundColor: tarea.completada ? '#f8fafc' : 'white',
            borderRadius: '10px',
            marginBottom: '10px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input 
                type="checkbox" 
                checked={tarea.completada} 
                onChange={() => marcarCompletada(tarea.id)}
                style={{ cursor: 'pointer', width: '18px', height: '18px' }}
              />
              <span style={{ 
                textDecoration: tarea.completada ? 'line-through' : 'none',
                color: tarea.completada ? '#94a3b8' : '#1e293b'
              }}>
                {tarea.texto}
              </span>
            </div>
            <button 
              onClick={() => eliminarTarea(tarea.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>

      {tareas.length === 0 && (
        <p style={{ textAlign: 'center', color: '#94a3b8', fontStyle: 'italic' }}>
          No hay tareas por ahora. ¡Descansa!
        </p>
      )}
    </div>
  );
}

export default ListaTareasPro;