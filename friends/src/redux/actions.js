import axios from 'axios'

export const GET_FRIENDS = 'GET_FRIENDS';
export const UPDATE_FRIENDS = 'UPDATE_FRIENDS';
export const SET_ERROR = 'SET_ERROR';
export const POST_NEW_FRIEND = 'POST_NEW_FRIEND';

export const getFriends = () => dispatch => {
   dispatch({ type: GET_FRIENDS })
   axios
      .get('http://localhost:5000/api/friends')
      .then(res => {
         console.log(res)
         dispatch({ type: UPDATE_FRIENDS, payload: res })
      })
      .catch(err => {
         console.log('error', err)
         dispatch( {type: SET_ERROR, payload: 'error fetching data' })
      })
}

export const postNewFriend = friendToPost => dispatch => {
   dispatch({ type: POST_NEW_FRIEND })
   axios
      .get('http://localhost:5000/api/friends', friendToPost)
      .then(res => {
         console.log(res)
         dispatch({ type: UPDATE_FRIENDS, payload: res })
      })
      .catch(err => {
         console.log('error', err);
         dispatch({ type: SET_ERROR, payload: 'error fetching data'})
      })
}