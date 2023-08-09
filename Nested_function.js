import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


function App() {
  const hello=(msg)=>{
    const handleevent=()=>{
      console.log(msg)
    }
    return handleevent
  }
  
  return (
    <div>
      <p>
        <button onClick={hello ('Hello')}>Click Here</button>
        <br></br>
        <button onClick={hello ('react')}>Click Here</button>
        <br></br>
        <button onClick={hello ('world')}>Click Here</button>
      </p>
    </div>
  );
}

export default App;











/*
import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


function App() {
  const hello=()=>{
    const handleevent=()=>{
      console.log("This is the nested function")
    }
  }
  
  return (
    <div>
      <p>
        <button onClick={hello}>Click Here</button>
      </p>
    </div>
  );
}

export default App;
*/