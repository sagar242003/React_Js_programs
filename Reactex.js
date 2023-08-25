import React, { useState } from 'react';
import axios from 'axios';
import './mycss.css'
function App() {
  const [userArray, setData] = useState([]);
  const buttonClick = () => {
    console.log('Button Clicked');
    axios.get('http://localhost:3010/students')
      .then((sdata) => {
        console.log(sdata.data);
        setData(sdata.data);
      })
      .catch((error) => {
        console.log('Error Occurred');
      });
  };
  return (
    <>
      <div>
        <button onClick={buttonClick}>Get All Data</button>
      </div>
      <div>
        {userArray.map((student) => (
          <table border={1}>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PHONE</th>
              </tr>
            </thead>
            <tr>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.Phone}</td>
            </tr>
          </table>
        ))}
      </div>
    </>
  );
}
export default App;
