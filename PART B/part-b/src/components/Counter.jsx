import { useState } from 'react';
import './Components.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <button 
        className="counter-button" 
        onClick={() => setCount(count - 1)}
        aria-label="Decrease count"
      >
        −
      </button>
      <span className="counter-display">{count}</span>
      <button 
        className="counter-button" 
        onClick={() => setCount(count + 1)}
        aria-label="Increase count"
      >
        +
      </button>
    </div>
  );
}