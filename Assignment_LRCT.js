import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
function App() {
    let [counter, setcounter] = useState(0)
    let [total, settotal] = useState(0)
    let [disp, setdisp] = useState(0)



    const clickbutton = () => {
        //counter+=1
        setcounter(counter + 1)
        settotal(total + 1)
        setdisp(disp + 'L')

        console.log("button click")

    }

    const decrement = () => {


        settotal(total + 1)
        setcounter(counter - 1)
        setdisp(disp + 'R')
        console.log("dcr click")

    }


    return (
        <div>
            <p>hello world</p>
            <button onClick={clickbutton}>Left</button>
            <button onClick={decrement}>Right</button>
            <br></br>
            count is :{counter}
            <br></br>
            total is :{total}
            <br></br>
            display is :{disp}
        </div>
    );
}

export default App;