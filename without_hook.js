import logo from './logo.svg';
import './App.css';

const App=()=> {

  let counter = 0
  const setcounter =()=>{
    counter++
  }
  setInterval(()=>{
    setcounter()
  },2000)
  return (
    <div>
     <p>Greetings!!!</p>
     <p>Counter is {counter}</p>
    </div>
  );
}

export default App;


//The component again gets reloaded and the counter value becomes the zero means the value of the 
//counter variable is not stored in the state of the counter variable to solve this problem we use
//the react hook that is called useState.