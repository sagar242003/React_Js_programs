import logo from './logo.svg';
import './App.css';
import { createContext, useContext, useRef, useState } from 'react'
import { useEffect } from 'react'

// Using useContext is provide the global state

function App() {

  const fn=useRef(null)
  const [fname,setfname]=useState('')
  const context=createContext('')

  const buttonclick=(event)=>{
    setfname(fn.current.value)
  }
  const Header=()=>{
    const firstname=useContext(context)
    return(
      <header>
        <h1>Hello {firstname}</h1>
      </header>
    )
  }
  const Footer=()=>{
    const firstname=useContext(context)
    return(
      <footer>
        <h3>Bye {firstname}</h3>
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
      <context.Provider value={fname}>
      <Header ></Header>
      <Main></Main>
      <Footer></Footer>
      </context.Provider>
      
    </div>
  );
}

export default App;