import logo from './logo.svg';
import './App.css';
import {useState} from  'react'

const App=()=> {

  const [counter,setcounter]=useState(0)

  setInterval(()=>{
    setcounter(counter+1)
  },2000)
  return (
    <div>
     <p>Greetings!!!</p>
     <p>Counter is {counter}</p>
    </div>
  );
}

export default App;