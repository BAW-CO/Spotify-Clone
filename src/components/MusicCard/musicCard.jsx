import './musicCard.css'
import { Link } from 'react-router-dom'

function MusicCard({ track }) {
  if (!track) return null

  return (
    <Link to={`/Player`} state={{ trackData: track }}>
      <div className="music-card">
        <img 
          src={track.album?.images[0]?.url || track.images?.[0]?.url} 
          alt={track.name} 
        />
        <h3>{track.name}</h3>
        <p>{track.artists?.[0]?.name}</p>
      </div>
    </Link>
  )
}

export default MusicCard

