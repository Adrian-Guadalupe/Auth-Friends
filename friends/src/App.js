import React from 'react';
import { Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import FriendsList from './components/FriendsList'
import NavBar from './components/NavBar'
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' component={LoginForm} />
      <ProtectedRoute path='/friends' component={FriendsList} />
    </div>
  );
}

export default App;
