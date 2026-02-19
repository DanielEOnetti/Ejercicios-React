import { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', margin: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <h3>Contador: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Sumar</button>
      <button onClick={() => setCount(count - 1)}>Restar</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Contador;