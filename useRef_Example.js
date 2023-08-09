import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react'


function App() {
    const fname = useRef(null);

    const handleButtonClick = (event) => {
        event.preventDefault()
        //it is not compulsory
        // Focus the input field when the button is clicked
        let fn = fname.current.value

        console.log(fn)
    };

    return (
        <div>
            <input type="text" ref={fname} />
            <br></br>
            <button onClick={handleButtonClick}>click here</button>
        </div>
    );
}
export default App;