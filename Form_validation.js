import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { appendErrors, useForm } from 'react-hook-form'


function App() {

  const { handleSubmit, register } = useForm()
  const [fn, setFn] = useState('')
  const [ln, setLn] = useState('')
  const [age, setAge] = useState(0)
  //const senddata=(data)=>('')
  const senddata = (data) => {
    console.log(data)
    setFn(data.fname)
    setLn(data.lname)
    setAge(data.age)
  }

  return (

    <div>
      <form onSubmit={handleSubmit(senddata)}>

        <input type='text' {...register('fname', { required: true })} placeholder='Enter first name'></input>
        {Error.fname && <div style={{ color: "red" }}>This file is required</div>}
        <br></br>

        <input type='text' {...register('lname')} placeholder='Enter Last name'></input>
        {Error.fname && <div style={{ color: "red" }}>This file is required</div>}
        <br></br>

        <input type='number' {...register('age',{min:1,max:100})}></input>
        {Error.fname && <div style={{ color: "red" }}>Please select age between 1 to 100</div>}

        <br></br>

        <input type='submit'></input>

        <br></br>
      </form>

      First name: {fn}
      <br></br>
      Last name: {ln}
      <br></br>
      Age is : {age}
    </div >


  )
}

export default App
