import logo from './logo.svg';
import './App.css';

const Hello=({name,age})=>{
  return(
    <div>
    <p>Hello {name} your age is {age}.</p>
  </div>
  );
}
function App() {

  return (
    <div>
      <p>Pasing parameter through the component without using props</p>
      <Hello name="Sagar" age="20"></Hello>
      <Hello name="Rohit" age="21"></Hello>
      <Hello name="Atharv" age="22"></Hello>
    </div>
  );
}

export default App;
