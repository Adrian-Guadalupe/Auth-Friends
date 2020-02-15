import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postNewFriend } from '../redux/actions';

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
      <form onSubmit={handleSubmit}>
         <input onChange={handleChange} type='text' name='name'  placeholder='Name' value={friendToPost.name} />
         <input onChange={handleChange} type='number' name='age'  placeholder='Age' value={friendToPost.age}/>
         <input onChange={handleChange} type='email' name='email'  placeholder='Email' value={friendToPost.email}/>
         <button>Add Friend</button>
      </form>
   )
}

export default NewFriendForm