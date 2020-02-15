import React from 'react';
import { Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import FriendsList from './components/FriendsList'
import NewFriendForm from './components/NewFriendForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path='/' component={LoginForm} />
      <Route path='/friends' component={FriendsList} />
      <Route path='/add-new-friend' component={NewFriendForm} />
    </div>
  );
}

export default App;
