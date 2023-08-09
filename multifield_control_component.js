import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  const [values,setvalues]=useState({fname:'abc',addr:'xyz'})
  
  const handleevent=(event)=>{
    const name=event.target.value
    const ad=event.target.value

    const newvalues={...ad,name}

    setvalues(newvalues)

  }
  return (
    <div>
      <form>
        user name:<input type='text' name='fname' value={values.fname} onChange={handleevent}></input>
        <br></br>
        Address:<input type='text' name='address' value={values.addr} onChange={handleevent}></input>

      </form>
      <br></br>

      User name={values.fname}
      <br></br>
      Address={values.addr}
    </div>
  );
}

export default App;