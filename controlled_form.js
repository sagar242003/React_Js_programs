import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


function App() {

  const [fname,setfname]=useState('') //Initiall the empty string is present 
  const handleevent=(event)=>{
    
    setfname(event.target.value)
  }
  
  return (
    <div>
      <form>
       <p>
       Name:
       <input type='text' name='b1' value={fname} onChange={handleevent}></input>
       {/* here the input value is stored in the fname and onclick the event the value is send 
       in the function and the value is updated by the setfanme function   */}
       </p>
      </form>
      THis is new name : {fname}
    </div>
  );
}

export default App;