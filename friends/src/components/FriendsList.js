import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFriends } from '../redux/actions'
import NewFriendForm from './NewFriendForm'

const FriendsList = () => {
   const friends = useSelector(state => state.friends)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getFriends())
   }, [dispatch])

   const friendsPageContainer = {
      // border: '1px solid blue',
      width: '70%',
      margin: 'auto',
      marginTop: '90px',
      display: 'flex',
      justifyContent: 'space-around'
   }

   return (
      <div style={friendsPageContainer}>
         <div>
            {friends.length > 0 ? (
               friends.map(friend => {
                  return (
                  <h3 key={friend.id}>{friend.name}</h3>
                  )
               })
            ) : (
               <h3>Loading...</h3>
            )}
         </div>
         <NewFriendForm />
      </div>
   )
}

export default FriendsList