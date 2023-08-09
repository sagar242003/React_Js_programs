import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


function App() {

  const [clicks, setclicks] = useState({ left: 0, right: 0 })
  const [Allclicks, setAllclicks] = useState([])
  const inrleft = () => {

    const newclicks = { ...clicks, left: clicks.left + 1 }
    setclicks(newclicks)
    setAllclicks(Allclicks.concat('L'))
  }

  const inrright = () => {

    const newclicks = { ...clicks, right: clicks.right + 1 }
    setclicks(newclicks)
    setAllclicks(Allclicks.concat('R'))
  }
  const Display = ({ text, value }) => {

    return (
      <p>
        {text} {value}
      </p>
    )
  }
  return (
    <div>
      <p>Event Handling Demo!!!</p>

      <button onClick={inrleft} text="left">left</button>
      <br></br>
      <button onClick={inrright} text="right">right</button>
      <br></br>
      <Display text="left count : " value={clicks.left}></Display>
      <br></br>
      <Display text="right count : " value={clicks.right}></Display>
      <br></br>
      <Display text="Total count : " value={Allclicks.join('')}></Display>

    </div>
  );
}

export default App;