import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { GET_FRIENDS, UPDATE_FRIENDS, SET_ERROR, POST_NEW_FRIEND } from './actions';

const initialState = {
   friends: [],
   isLoading: false,
   error: ''
}

const reducer = (state = initialState, action) => {
   switch(action.type) {
      case GET_FRIENDS:
         return {
            ...state,
            isLoading: true
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
            friends: action.payload
         }
      default: return state
   }
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))
export default store