import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postNewFriend } from '../redux/actions'
import { formStyle, inputStyle, btnStyle } from '../styles/addFriendFormStyles'

const NewFriendForm = () => {
   const dispatch = useDispatch()

   const [friendToPost, setFriendToPost] = useState({
      name: '',
      age: '',
      email: ''
   })

   const handleChange = e => {
      setFriendToPost({ ...friendToPost, [e.target.name]: e.target.value })
   }

   const handleSubmit = e => {
      e.preventDefault();
      dispatch(postNewFriend(friendToPost))
      setFriendToPost({
         id: Date.now(),
         name: '',
         age: '',
         email: ''
      })
   }

   return (
      <form onSubmit={handleSubmit} style={formStyle}>
         <input onChange={handleChange} type='text' name='name'  placeholder='Name' value={friendToPost.name} style={inputStyle}/>
         <input onChange={handleChange} type='number' name='age'  placeholder='Age' value={friendToPost.age} style={inputStyle}/>
         <input onChange={handleChange} type='email' name='email'  placeholder='Email' value={friendToPost.email} style={inputStyle}/>
         <button style={btnStyle}>Add Friend</button>
      </form>
   )
}

export default NewFriendForm