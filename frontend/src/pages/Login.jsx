import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async (e) => {
    // Whenever we submit form preventDefault prevents reloading of web page
    e.preventDefault()

  }

  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up' ? "Sign Up" : "Login"} to book appointment</p>
      {
        state==='Sign Up' &&   
        <div className='w-full'>
          <p>Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' value={name} type="text" onChange={(e) => { setName(e.target.value) }} />
        </div>
      }
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' value={password} type="password" onChange={(e) => { setPassword(e.target.value) }} />
        </div>
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' value={email} type="text" onChange={(e) => { setEmail(e.target.value) }} />
        </div>
        <button className='bg-[#5f6fff] rounded-lg w-full py-1 text-lg text-white'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
        {
        state === 'Sign Up' ? 
        <p>Already have an account ? <span className='text-[#5f6fff] cursor-pointer' onClick={()=>{setState('Login')}}>Login Here</span></p>:
        <p>Don't have an account ? <span className='text-[#5f6fff] cursor-pointer' onClick={()=>{setState('Sign Up')}}>Click here</span></p>  
      }
      </div>

    </form>
  )
}

export default Login