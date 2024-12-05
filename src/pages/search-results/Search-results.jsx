import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import MusicCard from '../../components/MusicCard/musicCard'
import './Search-results.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

function SearchResults() {
  const { searchResults } = useContext(Context)

  return (
    <div className="page-wrapper">
            <Navbar />
        <main className="search-results">
            <div className="results-container">
                <h2>Search Results:</h2>
                <div className="results">
                {searchResults?.map((track) => (
                    <MusicCard key={track.id} track={track} />
                ))}
                </div>
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default SearchResults
