import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

const App = () => {

  const handleevent = () => {
    console.log('Button Clicked')
  }

  return (
    <div>
      <button onClick={handleevent}>Click Here</button>
    </div>
  );
}

export default App;