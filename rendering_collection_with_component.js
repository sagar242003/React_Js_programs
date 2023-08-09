import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

const Display=(props)=>{

  return(
    <li key={props.id}>{props.name}</li>
  )
}
function App() {

  const student = [{ id: 100, name: "sagar", address: "pune" },
  { id: 100, name: "rohit", address: "amravati" },
  { id: 100, name: "atharv", address: "buldhana" }]

  return (
    <div>
      <ul>
       {student.map((stud)=><Display id={stud.id} name={stud.name}></Display>)}
      </ul>
    </div>
  );
}

export default App;