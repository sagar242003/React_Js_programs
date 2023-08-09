import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  const[gender,setgender]=useState("male")
  const handleevent1=()=>{
    setgender('male')
  }
  const handleevent2=()=>{
    setgender('female')
  }
  return (
    <div>
      <form>
        Male: <input type='radio' onChange={handleevent1} name='g' checked={gender=='male'}></input>
        <br></br>
        Female: <input type='radio' onChange={handleevent2} name='g' checked={gender=='female'}></input>
      </form>
      <br></br>
      you selected {gender}

    </div>
  );
}

export default App;