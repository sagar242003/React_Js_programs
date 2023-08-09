import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


function App() {

  const [selectedvalue,setselectedvalue]=useState('Plaese select the option')
  
  const handleevent=(event)=>{
    setselectedvalue(event.target.value)
  }

  return (
    <div>
      <form>

        <select value={selectedvalue} onChange={handleevent}>
         {/* firstly the initial value is present which is the select the option  */}
          <option value="c">C</option>
          <option value="cpp">CPP</option>
          <option value="java">JAVA</option>
        </select>
      </form>
      <br></br>
      Your selected value : {selectedvalue}
    </div>
  );
}

export default App;