import React from 'react'
import './player.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import MusicCard from '../../components/MusicCard/musicCard'
import albumCover from '../../assets/albumCover.png'
import { useLocation } from 'react-router-dom'
import { mockTracks } from '../../data/mockTracks'

function Player() {
  const location = useLocation()
  const { trackData } = location.state

  return (
    <div>
        <Navbar />
      <div className="player-container">
        <img src={albumCover} alt={trackData.name} />
        <h1>{trackData.name}</h1>
        <h2>{trackData.artists[0].name}</h2>
        <p>{trackData.album.name}</p>
      </div>
      
      <div className="more-results">
        <MusicCard/>
        <MusicCard/>
        <MusicCard/>
        <MusicCard/>
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

