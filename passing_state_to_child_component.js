import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  let [counter,setcounter]=useState(0)
  let [total,settotal]=useState(0)
  let [disp,setdisp]=useState(0)

  const increment=()=>{
    //counter+=1
    setcounter(counter+1)
    settotal(total+1)
    setdisp(disp+'L')

    console.log("button click")
    
  }
  const decrement=()=>{
    
    settotal(total+1)
    setcounter(counter-1)
    setdisp(disp+'R')
    console.log("dcr click")
    
  }
const Display=({text,value})=>{

  return(
    <p>{text} {value}</p>
  )
}

  return (
    <div>
      <p>hello world</p>
       <button  onClick={increment}>Left</button>
       <br></br>
       <button onClick={decrement}>Right</button>
       <br></br>
       <Display text="count is" value={counter}></Display>
       <br></br>
       <Display text="total is" value={total}></Display> 
       <br></br>
       <Display text="display is" value={disp}></Display>
    </div>
  );
}

export default App;