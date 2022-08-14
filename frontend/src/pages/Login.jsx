import React from 'react'
import { useState } from 'react'
import {FaSignInAlt} from 'react-icons/fa'

function Login() {
  const [formData, setFormData] = useState({
    
    email:" ",
    password:"",
   
  })

  const { email, password} = formData

  const onChange =(e) => {
    setFormData((prestate) => ({
      ...prestate,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit=(e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className="heading">
       <h1>
        <FaSignInAlt/>Login
      </h1> 
      <p>Login and Start Setting Goal</p>
      </section>

      <section className='form'>
        <from onSubmit={onSubmit}>
       
        <div className='form-group'>
          <input type="email" classname='form-control' id="email" name='email' value={email} placeholder="Enter your email" onChange={onChange}/>
          </div>
        <div className='form-group'>
          <input type="password" classname='form-control' id="password" name='password' value={password} placeholder="Enter your name" onChange={onChange}/>
          </div>
       
        <div className='form-group'>
          <button type='submit' className='btn btn-block'>Login</button>
          </div>
        </from>
      </section>
    </>
  )
}

export default Login