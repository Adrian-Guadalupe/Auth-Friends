import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFriends } from '../redux/actions'
import NewFriendForm from './NewFriendForm'

const FriendsList = props => {
   const friends = useSelector(state => state.friends)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getFriends())
   }, [dispatch])

   return (
      <div>
         {friends.map(friend => <div key={friend.id}>{friend.name}</div>)}
         <NewFriendForm />
      </div>
   )
}

export default FriendsList