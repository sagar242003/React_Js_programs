import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react'
import { useEffect } from 'react'

// In the previous example BG component is render every time When there is a change in the count variable
// or BG color variable we need to render the content of BG component only when the value of BG color
// changes for this purpose we have to use "useEffect" hook

function App() {

  const bg=useRef(null)
  const [count,setcount]=useState(0)
  const [bgcolor,setbgcolor]=useState('red')


  const inr=()=>{
    setcount(count+1)
  }
  const changbg=()=>{
    setbgcolor(bg.current.value)
  }
  const Bg = () => {
    document.body.style.background = bgcolor
    console.log("change background color")
  }
  useEffect(()=>{

    // Here the parameter is the callback function and the dependency which is the Array
    document.body.style.background=bgcolor
    console.log('changed background color')
  },[bgcolor] 
                    //This is the dependency
    )

  return (
    <div>
      <Bg></Bg>     
      {/* {This value only changes when the value of the Bg component changes} */}
      <input type='text' ref={bg}></input>
      <br></br>
      <button onClick={changbg}>change BG</button>
      <br></br>
      <button onClick={inr}>Increment</button>
      <br></br>
      count : {count}
    </div>
  );
}

export default App;