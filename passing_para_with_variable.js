import logo from './logo.svg';
import './App.css';

const Hello=({name,age})=>{
  return(
    <div>
    <p>
      Hello {name} your age is {age}.
    </p>
  </div>
  );
}
function App() {

  let name="sagar"
  let age="20"
  return (
    <div>
      <p>Pasing parameter through the component with variables using props</p>
      <Hello name1={name} age1={age}></Hello>
    </div>
  );
}

export default App;
