import React from 'react'
import './Navbar.css'
import logo from '../../assets/spotify_green.png'
import user from '../../assets/circle-user-regular.svg'
import cloud from '../../assets/cloud-solid.svg'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="LOGO" />
        <ul>
            <li>Music</li>
            <li>Podcasts</li>
            <li>Comedy</li>
        </ul>
      </div>
      <div className="navbar-right">
            <img src={user} alt="Profile" />
            <img src={cloud} alt="Cloud" />
      </div>
    </div>
  )
}

export default Navbar