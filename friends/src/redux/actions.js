import axios from 'axios'
import { axiosWithAuth } from '../axiosWithAuth'

export const LOGIN = 'LOGIN';
export const GET_FRIENDS = 'GET_FRIENDS';
export const UPDATE_FRIENDS = 'UPDATE_FRIENDS';
export const SET_ERROR = 'SET_ERROR';
export const POST_NEW_FRIEND = 'POST_NEW_FRIEND';

export const login = (credentials) => dispatch => {
   dispatch({ type: LOGIN })
   axios
      .post('http://localhost:5000/api/login', credentials)
      .then(res => {
         console.log(res)
         localStorage.setItem('token', res.data.payload)
         // props.history.push('/friends')
      })
      .catch(err => {
         console.log('error', err);
         dispatch({ type: SET_ERROR, payload: 'error loging in'})
      })
}

export const getFriends = () => dispatch => {
   dispatch({ type: GET_FRIENDS })
   axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => {
         console.log(res)
         dispatch({ type: UPDATE_FRIENDS, payload: res.data })
      })
      .catch(err => {
         console.log('error', err)
         dispatch( {type: SET_ERROR, payload: 'error fetching friends' })
      })
}

export const postNewFriend = friendToPost => dispatch => {
   dispatch({ type: POST_NEW_FRIEND })
   axiosWithAuth()
      .post('http://localhost:5000/api/friends', friendToPost)
      .then(res => {
         console.log(res)
         dispatch({ type: UPDATE_FRIENDS, payload: res })
      })
      .catch(err => {
         console.log('error', err);
         dispatch({ type: SET_ERROR, payload: 'error posting friend'})
      })
}