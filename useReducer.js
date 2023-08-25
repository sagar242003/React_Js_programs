import React, { useReducer } from 'react'; // Import React and useReducer
import {reducerMethod} from './reducer_method'; // Make sure the path to your reducer is correct

function App() {
  const [counter, dispatch] = useReducer(reducerMethod, 0);

  const handleIncrement = () => {
    dispatch({
      type: 'inr',
      newcounter: 1,
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: 'dcr',
      newcounter: 1,
    });
  };

  const handleZero = () => {
    dispatch({
      type: 'zero',
      newcounter: 0,
    });
  };

  return (
    <div>
      <h1>This is a React app using Vite</h1>
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <button onClick={handleZero}>Zero</button>
      <br />
      Counter: {counter}
      <br />
    </div>
  );
}

export default App;
