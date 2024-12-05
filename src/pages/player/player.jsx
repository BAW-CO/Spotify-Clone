import React from 'react'
import './player.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import MusicCard from '../../components/MusicCard/musicCard'
import play from '../../assets/circle-play-solid.svg'
import { useLocation } from 'react-router-dom'

function Player() {
  const location = useLocation()
  const track = location.state.trackData

  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="player-container">
        <img className="album-art"
          src={track.album?.images[0]?.url || track.images?.[0]?.url} 
          alt={track.name} 
        />
        <img className="play-icon" src={play} alt="" />
        <h1>{track.name}</h1>
        <h2>{track.artists[0].name}</h2>
        <p>{track.album?.name}</p>
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

