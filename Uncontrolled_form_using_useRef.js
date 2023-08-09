import logo from './logo.svg';
import './App.css';
import { useRef } from 'react'

//THe value of the user reference component is not controlled by the useState thus we use the useRef()
//This hook is used to refer userInterface component in the home page we use the uncontrolled form
//This unconrolled form is use to send the data to the server without displaying to the server side 
//useref does not required to re-render while useState is required to re-render 
function App() {

  const fname = useRef(null)
  const lname = useRef(null)
  const lang = useRef(null)
  const g1 = useRef(null)
  const g2 = useRef(null)

  const submitform = (event) => {
    event.preventDefault()

    const fn = fname.current.value
    const ln = lname.current.value
    const lng = lang.current.value
    let gender = " "

    if (g1.current.checked == true) {
      gender = 'male'
    }
    if (g2.current.checked == true) {
      gender = 'female'
    }

    console.log('First name : ' + fn)
    console.log('Last name : ' + ln)
    console.log('Selected Lang : ' + lng)
    console.log('Gender : ' + gender)
    console.log('Submitted to the server')
  }

  return (
    <div>
      <form onSubmit={submitform}>
        First Name: <input type='text' name='b1' ref={fname}></input>
        <br></br>
        Lastt Name: <input type='text' name='b2' ref={lname}></input>
        <br></br>

        Select Language
        <select ref={lang}>
          <option value='C'>C</option>
          <option value='CPP'>CPP</option>
          <option value='JAVA'>JAVA</option>
        </select>
        <br></br>

        Male : <input type='radio' ref={g1} name='g'></input>

        Female : <input type='radio' ref={g2} name='g'></input>

        <br></br>
        <button type='submit'>Send to the server</button>

      </form>
      <br></br>


    </div>
  );
}

export default App;