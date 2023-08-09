import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


function App() {

  const handleEvent=(event)=>{
    event.preventDefault()
    //It is like the dummy server if we didnt take this function page gets refresh again and again
    console.log("Request Submitted to server")
  }

  return (
    <div>
      <form onSubmit={handleEvent}>
        <button type='submit'>Click Here</button>
        <button>Ok</button>
      </form>
    </div>
  );
}

export default App;