import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { LOGIN, GET_FRIENDS, UPDATE_FRIENDS, SET_ERROR, POST_NEW_FRIEND } from './actions';

const initialState = {
   isLoggedIn: false,
   friends: [],
   isLoading: false,
   error: ''
}

const reducer = (state = initialState, action) => {
   switch(action.type) {
      case LOGIN:
         return {
            ...state,
            isLoggedIn: true
         }
      case GET_FRIENDS:
         return {
            ...state,
            isLoading: true,
         }
      case UPDATE_FRIENDS:
         return {
            ...state,
            friends: action.payload,
            isLoading: false
         }
      case SET_ERROR:
         return {
            ...state,
            isLoading: false,
            error: action.payload
         }
      case POST_NEW_FRIEND:
         return {
            ...state,
            isLoading: false,
         }
      default: return state
   }
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))
export default store