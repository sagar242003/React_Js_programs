import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


function App() {

  const [ischecked,setischecked]=useState(false) 
  //initially it is the boolean variable
  
  const handleevent=(event)=>{
    setischecked(event.target.checked)
  }

  return (
    <div>
      <form>
        <input type='checkbox' checked={ischecked} onChange={handleevent}></input>

        {ischecked && <div>Box is selected</div>}  
        {/* {boolean value checked} */}
        {!ischecked && <div>Box is deselected</div>}
        {/* {boolean value not checked} */}
      </form>
      <br></br>
    </div>
  );
}

export default App;