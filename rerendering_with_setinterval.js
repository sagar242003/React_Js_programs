//App.js

import logo from './logo.svg';
import './App.css';


function App(props) {

  const {counter}=props
  return (
    <div>
     <p>The rerendering operation !!!</p>
     <p>Counter value is {counter}</p> 
    </div>
  );
}

export default App;



// Index.js  
// Using the set Interval function the vslue of the counter changes dynamically after 2 sec.

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let counter = 1
const refresh = () => {

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(

        <App counter={counter} />

    );

}
setInterval(() => {
    refresh()
    counter = counter + 1
}, 2000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
