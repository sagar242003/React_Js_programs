import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const ID = useRef(null);
  const NAME = useRef(null);
  const ADDRESS = useRef(null);
  const [students, setStudents] = useState([{}]);

  const buttonClick = () => {
    
    setStudents([...students, 
        { 
            id: ID.current.value, 
            name: NAME.current.value, 
            address: ADDRESS.current.value 
        }]);


    // Clear input fields
    ID.current.value = '';
    NAME.current.value = '';
    ADDRESS.current.value = '';
  };

  return (
    <div>
      <label>ID</label>
      <input type='text' id='t1' ref={ID}></input>
      <br></br>
      <label>NAME</label>
      <input type='text' id='t2' ref={NAME}></input>
      <br></br>
      <label>ADDRESS</label>
      <input type='text' id='t3' ref={ADDRESS}></input>
      <br></br>

      <button id='b1' onClick={buttonClick}>Click here</button>

      <br></br>
      <br></br>

      <table border="1" id='table1'>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>ADDRESS</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stud, index) => (
            <tr key={index}>
              <td>{stud.id}</td>
              <td>{stud.name}</td>
              <td>{stud.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
