import React from 'react';
import { Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import FriendsList from './components/FriendsList'
import NewFriendForm from './components/NewFriendForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LoginForm} />
      <ProtectedRoute path='/friends' component={FriendsList} />
      <ProtectedRoute path='/add-new-friend' component={NewFriendForm} />
    </div>
  );
}

export default App;
