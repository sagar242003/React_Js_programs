import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react'


function App() {

  const [values, setvalues] = useState([])
  const fname = useRef(null)
  const lname = useRef(null)
  const address = useRef(null)

  const handleevent = (event) => {
    event.preventDefault()
    const a = fname.current.value
    const b = lname.current.value
    const c = address.current.value

    const newrow = { fname: a, lname: b, address: c }
    setvalues([...values, newrow])
  }
  return (
    <div>
      <form onSubmit={handleevent}>
        NAME : <input type='text' name='fname' ref={fname}></input>
        <br></br>
        LAST NAME: <input type='text' name='lname' ref={lname}></input>
        <br></br>
        ADDRESS: <input type='text' name='address' ref={address}></input>
        <br></br>
        <button type='submit'>Click here</button>
        <br></br>
        <table border={1}>
          <tr>
            <td>fname</td>
            <td>lname</td>
            <td>address</td>
          </tr>
          {values.map((row) => {
            return (
              <tr>
                <td>{row.fname}</td>
                <td>{row.lname}</td>
                <td>{row.address}</td>
              </tr>
            )
          })}
        </table>
        <br></br>
      </form>

      
    </div>
  );
}

export default App;