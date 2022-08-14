import React from 'react'
import { useState } from 'react'
import {FaSignInAlt, FaUser} from 'react-icons/fa'

function Register() {
  const [formData, setFormData] = useState({
    name:'',
    email:" ",
    password:"",
    password2:""
  })

  const {name, email, password, password2} = formData

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
        <FaUser/>Register
      </h1> 
      <p>Please Create an account</p>
      </section>

      <section className='form'>
        <from onSubmit={onSubmit}>
        <div className='form-group'>
          <input type="text" classname='form-control' id="name" name='name' value={name} placeholder="Enter your name" onChange={onChange}/>
          </div>
        <div className='form-group'>
          <input type="email" classname='form-control' id="email" name='email' value={email} placeholder="Enter your email" onChange={onChange}/>
          </div>
        <div className='form-group'>
          <input type="password" classname='form-control' id="password" name='password' value={password} placeholder="Enter your name" onChange={onChange}/>
          </div>
        <div className='form-group'>
          <input type="password2" classname='form-control' id="password2" name='password2' value={password} placeholder="Enter your name" onChange={onChange}/>
          </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-block'>Submit</button>
          </div>
        </from>
      </section>
    </>
  )
}

export default Register