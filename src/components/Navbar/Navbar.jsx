import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/spotify_green.png'
import user from '../../assets/circle-user-regular.svg'
import cloud from '../../assets/cloud-solid.svg'
import Login from '../../pages/Log-in/Log-in'
import { Link } from 'react-router-dom'



function Navbar() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className='navbar'>
      <div className="navbar-left">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
        <ul>
            <li>Music</li>
            <li>Podcasts</li>
            <li>Comedy</li>
        </ul>
      </div>
      <div className="navbar-right"
      onClick={() => setShowLogin(true)}>
            <img src={user} alt="Profile" />
            <img src={cloud} alt="Cloud" />
      </div>
      <Login 
        isOpen={showLogin} 
        onClose={() => setShowLogin(false)} 
      />
    </div>
  )
}

export default Navbar