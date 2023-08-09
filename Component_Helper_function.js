import logo from './logo.svg';
import './App.css';

const Hello = (props) => {

  function getyear(age) {
    let d1 = new Date()
    let current_year = d1.getFullYear()
    
    return (
      current_year - age
    )

  }
  return (
    <div>
      <p>
        Hello {props.fname} your Birth Year is {getyear(props.age)}.
      </p>
    </div>
  );
}
function App() {

  let fname="sagar"
  let age="20"

  return (
    <div>
      <p>Pasing parameter through the component with variables using props</p>
      <Hello fname={fname} age={age}></Hello>
    </div>
  );
}

export default App;




// import logo from './logo.svg';
// import './App.css';

// const Hello = ({fname,age}) => {

//   function getyear(age) {
//     let d1 = new Date()
//     let current_year = d1.getFullYear()
    
//     return (
//       current_year -age
//     )

//   }
//   return (
//     <div>
//       <p>
//         Hello {fname} your Birth Year is {getyear(age)}.
//       </p>
//     </div>
//   );
// }
// function App() {

//   let fname="sagar"
//   let age="20"

//   return (
//     <div>
//       <p>Pasing parameter through the component with variables using props</p>
//       <Hello fname={fname} age={age}></Hello>
//     </div>
//   );
// }

// export default App;

