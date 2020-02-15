import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFriends } from '../redux/actions'

const FriendsList = props => {
   const friends = useSelector(state => state.friends)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getFriends())
   }, [dispatch])

   return (
      <div>
         {props.error ? (
            <div classname='error'>{props.error}</div>
         ) : (
            friends.map(friend => <div key={friend.id}>{friend.name}</div>)
         )}
      </div>
   )
}

export default FriendsList