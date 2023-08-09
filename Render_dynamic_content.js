import logo from './logo.svg';
import './App.css';

function App() {

  let a = 100
  let b = 200
  let d1 = new Date()
  return (
    <div>
      <p>
        Todays date is {d1.toString()}
        {/* toString method id used to convert the given information into the String  */}
      </p>

      <p>
        {a}+{b}={a + b}<br>
        </br>
        The addition is {a + b}
      </p>
    </div>
  );
}

export default App;
