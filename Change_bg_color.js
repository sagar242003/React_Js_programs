import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react'


function App() {

  const bg = useRef(null)
  const [count, setcount] = useState(0)
  const [bgcolor, setbgcolor] = useState(0)

  const inr = () => {
    setcount(count + 1)
  }
  const changbg = () => {
    setbgcolor(bg.current.value)
  }
  const Bg = () => {
    document.body.style.background = bgcolor
    console.log("change background color")
  }

  return (
    <div>
      <Bg></Bg>
      {/* Every time the Bg component is render/called to solve this issue and render only when the 
      the value of the Bg component changes we have to use the useEffect hook */}
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