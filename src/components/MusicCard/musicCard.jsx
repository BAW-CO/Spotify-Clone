import './musicCard.css'
import albumCover from '../../assets/albumCover.png'
import { Link } from 'react-router-dom'
import { mockTracks } from '../../data/mockTracks'

function MusicCard({ track = mockTracks[0] }) {
  return (
    <Link to={`/Player/${track.id}`} state={{ trackData: track }}>
      <div className="music-card">
        <img src={albumCover} alt={track.name} />
        <h3>{track.name}</h3>
        <p>{track.artists[0].name}</p>
      </div>
    </Link>
  )
}


export default MusicCard
