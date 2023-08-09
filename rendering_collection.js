import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


function App() {

  const student = [{ id: 100, name: "sagar", address: "pune" },
  { id: 100, name: "rohit", address: "amravati" },
  { id: 100, name: "atharv", address: "buldhana" }]

  return (
    <div>
      <ul>
       {student.map((stud)=><li>{stud.name}</li>)}
      </ul>
    </div>
  );
}

export default App;


//=======================================================================================

/*below written is not the correct methos for the rendering the collection of the object
  individually rendering is not easy so we use the map function in above eample */

  
/*
function App() {

  const student = [{ id: 100, name: "sagar", address: "pune" },
  { id: 100, name: "rohit", address: "amravati" },
  { id: 100, name: "atharv", address: "buldhana" }]

  return (
    <div>
      <ul>
        <li>{student[0].name}</li>
        <li>{student[1].name}</li>
        <li>{student[2].name}</li>
      </ul>
    </div>
  );
}

export default App;
*/


//if we get the error of the each chile should have the unique key then mentioned the key
//as follows
/*

import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


function App() {

  const student = [{ id: 100, name: "sagar", address: "pune" },
  { id: 100, name: "rohit", address: "amravati" },
  { id: 100, name: "atharv", address: "buldhana" }]

  return (
    <div>
      <ul>
       {student.map((stud)=><li key={stud.id}>{stud.name}</li>)}
      </ul>
    </div>
  );
}

export default App;

*/