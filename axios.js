import axios from 'axios'
import { useState } from 'react'

function App(){

  const [userArray,setData]=useState([])
  const buttonclick=()=>{
    console.log("Button Clicked")
  }

  const result=axios.get('https://jsonplaceholder.typicode.com/posts')

  result.then((sdata)=>{
    console.log(sdata.data)
    setData(sdata.data)
  })

  result.catch((error)=>{
    console.log("Error occurred")
  })


return(
  <>
  <button onClick={buttonclick}>Get Data</button>
  <br></br>
  <table border={1}>
    <thead>
      <tr>
        <th>userID</th>
        <th>ID</th>
        <th>Title</th>
      </tr>
    </thead>
  </table>
  </>
)
}

export default App;