import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

const App = () => {

  const[counter,setcounter]=useState(0)
  const handleevent = () => {
    setcounter(counter+1)
    console.log('Button Clicked')
  }

  return (
    <div>
      <button onClick={handleevent}>Click Here</button>
      <p>Counter is: {counter}</p>
    </div>
  );
}

export default App;