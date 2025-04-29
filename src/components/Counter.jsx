import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`The number ${count} is divisible by 10!`);
    }
  }, [count]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="text-center p-4">
      <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4 pb-10 transition-all duration-300">{count}</h2>
      <div className="space-x-2">
        <button 
          className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-purple-500 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 w-11 h-11"
          onClick={decrement}
        >
          -
        </button>
        <button 
          className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-2 rounded-lg hover:from-gray-700 hover:to-gray-800 transform hover:scale-105 transition-all duration-300 w-20 h-11"
          onClick={reset}
        >
          Reset
        </button>
        <button 
          className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-cyan-500 transform hover:scale-105 transition-all duration-300 w-11 h-11"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}