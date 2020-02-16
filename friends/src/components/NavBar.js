import React from 'react'
import { Link } from 'react-router-dom'
import lambdaLogo from '../images/acastro_200212_1777_Lambda_0001.0.jpg'
import friendsLogo from '../images/friends-logo-cover-678x381.png.webp'

const NavBar = () => {
   const navContainer = {
      // border: '1px solid green',
      width: '75%',
      margin: 'auto',
      height: '120px',
      backgroundColor: 'black',
      display: 'flex',
      justifyContent: 'space-between'
   }

   const navItems = {
      // border: '1px solid orange',
      width: '19%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
   }

   const imgStyle = {
      // border: '1px solid red',
      objectFit: 'contain',
      width: '100%',
      height: '100%'
   }

   return (
      <div style={{ width: '100%', height: '120px', backgroundColor: 'black',}}>
         <div style={navContainer}>
            <div style={navItems}>
               <img style={imgStyle} src={lambdaLogo} alt='Lambda School Logo' />
               <img style={imgStyle} src={friendsLogo} alt='Lambda School Logo' />
            </div>
            <div style={navItems}>
               <Link to='/friends' style={{ fontSize: '1.2rem', textDecoration: 'none', color: 'white' }}>List of Friends</Link>
               <Link to='/' style={{ fontSize: '1.2rem', textDecoration: 'none', color: 'white' }}>Login</Link>
            </div>
         </div>
      </div>
   )
}

export default NavBar