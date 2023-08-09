import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


function App() {

  const [clicks, setclicks] = useState({ left: 0, right: 0 })

  const inrleft = () => {
    const newclicks = { ...clicks,left: clicks.left + 1,}   //rest all remain same and only the left is incremented by 1

    setclicks(newclicks)
  }
  const inrright = () => {
    const newclicks = { ...clicks, right: clicks.right + 1 } //rest all remain same and only the right is incremented by 1

    setclicks(newclicks)
  }
  const zero = () => {
    const newclicks = {left:0, right:0}
    setclicks(newclicks)
  }
  return (
    <div>
      <button onClick={inrleft} text="left">left</button>
      <br></br>
      <button onClick={inrright} text="right">right</button>
      <br></br>
      <button onClick={zero} text="zero">zero</button>
      <br></br>

      <p>
        LEFT:{clicks.left}
        <br></br>
        RIGHT:{clicks.right}
        <br></br>
      </p>
    </div>
  );
}

export default App;