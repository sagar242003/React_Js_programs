import logo from './logo.svg';
import './App.css';

const Hello=()=>{
  return(
    <div>
    <p>
      Hello World!!!
    </p>
  </div>
  )
}
function App() {

  return (
    <div>
      <p>Creating the component in React</p>
      <Hello></Hello>
      <Hello></Hello>
      <Hello></Hello>
      <Hello></Hello>
      <Hello></Hello>
    </div>
  );
}

export default App;
