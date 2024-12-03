import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="FB"/>
        <img src={instagram_icon} alt="Instagram"/>
        <img src={twitter_icon} alt="Twitter"/>
        <img src={youtube_icon} alt="Youtube"/>
      </div>
      <ul>
        <li>Artist resources</li>
        <li>Help Center</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Legal Notices</li>
        <li>Privacy</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>© 1997 - 2025 Spotify Inc. </p>
    </div>
  )
}

export default Footer