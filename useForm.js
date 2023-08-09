import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react'
import { useForm } from 'react'

function App() {

  const {handleSubmit,register}=useForm()
  const senddata=(data)=>{
    console.log(data)
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit(senddata)}>
        <input type='text' {...register('fname')} placeholder='Enter First Name'></input>
        <br></br>
        <input type='text' {...register('lname')} placeholder='Enter Last Name'></input>
        <br></br>
        <input type='submit'></input>
      </form>
    </div>
  );
}

export default App;