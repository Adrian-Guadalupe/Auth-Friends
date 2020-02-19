import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/actions'
import { formStyle, inputStyle, btnStyle } from '../styles/loginFormStyles'

const LoginForm = (props) => {
   const dispatch = useDispatch()

   const [credentials, setCredentials] = useState({
      username: '',
      password: ''
   })

   const handleSubmit = e => {
      e.preventDefault()
      dispatch(login(credentials, props))
      setCredentials({
         username: '',
         password: ''
      })
   }

   const handleChange = e => {
      setCredentials({
         ...credentials,
         [e.target.name]: e.target.value
      })
   }

   return (
      <form onSubmit={handleSubmit} style={formStyle}>
         <input
            type='text'
            name='username'
            placeholder='Username'
            value={credentials.username}
            onChange={handleChange}
            style={inputStyle}
         />
         <input
            type='password'
            name='password'
            placeholder='Password'
            value={credentials.password}
            onChange={handleChange}
            style={inputStyle}
         />
         <button style={btnStyle}>Submit</button>
      </form>
   )
}

export default LoginForm