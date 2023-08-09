import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

const App = () => {

  const[counter,setcounter]=useState(0)
  const handleevent1 = () => {
    setcounter(counter+1)
    console.log('Incremented')
  }
  const handleevent2 = () => {
    setcounter(counter-1)
    console.log('Decremented')
  }
  const handleevent3 = () => {
    setcounter(0)
    console.log('zero')
  }

  return (
    <div>
      <button onClick={handleevent1}>Increment</button>
      <br></br>
      <br></br>
      <button onClick={handleevent2}>Decrement</button>
      <br></br>
      <br></br>
      <button onClick={handleevent3}>zero</button>
      <br></br>
      <br></br>
      <p>Counter is: {counter}</p>
    </div>
  );
}

export default App;