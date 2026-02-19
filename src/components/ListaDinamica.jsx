import { useState } from 'react';

function ListaDinamica() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim()) {
      // Importante: En React no usamos .push(), creamos un nuevo array
      setItems([...items, inputValue]); 
      setInputValue(''); // Limpiamos el input
    }
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Mi Lista Dinámica</h3>
      <input 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Escribe algo..."
      />
      <button onClick={addItem}>Añadir</button>

      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => removeItem(index)} style={{ cursor: 'pointer' }}>
            {item} 🗑️
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDinamica;