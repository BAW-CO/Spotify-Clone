import React from 'react'
import './player.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import MusicCard from '../../components/MusicCard/musicCard'
import albumCover from '../../assets/albumCover.png'
import play from '../../assets/circle-play-solid.svg'

// import { useLocation } from 'react-router-dom'
// import { mockTracks } from '../../data/mockTracks'

const Player = () => {
//   const location = useLocation()
//   const { trackData } = location.state

  return (
    <div>
        <Navbar />
      <div className="player-container">
        <img src={albumCover} alt="album art" />
        <img src={play} className="play-icon" alt="play" />
        <h1>Track Name</h1>
        <h2>Artist Name</h2>
        <p>Lyrics</p>
      </div>
      
      <div className="more-results">
        <MusicCard/>
        <MusicCard/>
        <MusicCard/>
        <MusicCard/>
      </div>

      <Footer/>
    </div>
  )
}

export default Player

