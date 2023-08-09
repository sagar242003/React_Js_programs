import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useForm } from 'react-hook-form'


function App() {

  const { handleSubmit, register } = useForm()
  const senddata = (data) => {
    console.log(data)
  }

  return (

    <div>
      <form onSubmit={handleSubmit(senddata)}>
        <input type='text' {...register('fname')} placeholder='Enter first name'></input>
        <br></br>
        <input type='text' {...register('lname')} placeholder='Enter Last name'></input>
        <br></br>
        <input type='submit'></input>
      </form>
    </div>


  )
}

export default App
