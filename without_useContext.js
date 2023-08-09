import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react'
import { useEffect } from 'react'

// Without useContext
//Here we are using the same values i.e fname for all components 
//to avoid this we use useContext hook

function App() {

  const fn=useRef(null)
  const [fname,setfname]=useState('')

  const buttonclick=(event)=>{
    setfname(fn.current.value)
  }
  const Header=({fname})=>{
    return(
      <header>
        <h1>Hello {fname}</h1>
      </header>
    )
  }
  const Footer=({fname})=>{
    return(
      <footer>
        <h3>Bye {fname}</h3>
      </footer>
    )
  }
  const Main=()=>{
     return(
      <div>
      <input ref={fn} placeholder='Enter the username'></input>
      <br></br>
      <button onClick={buttonclick}>OK</button>
      <br></br>
     </div>
     )
  }
  
  return (
    <div>
      <Header fname={fname}></Header>
      <Main></Main>
      <Footer fname={fname}></Footer>
      
    </div>
  );
}

export default App;