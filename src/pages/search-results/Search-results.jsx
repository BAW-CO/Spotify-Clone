import React from 'react'
import './Search-results.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import MusicCard from '../../components/MusicCard/musicCard'


const SearchResults = () => {
    return (
        <div className='page-wrapper'>
            <Navbar/>
            <main className='search-results'>
                <div className="results-container">
                    <h2>Search Results</h2>
                    <div className="results">
                        <MusicCard/>
                        <MusicCard/>
                        <MusicCard/>
                        <MusicCard/>
                        <MusicCard/>
                        <MusicCard/>
                        <MusicCard/>
                        <MusicCard/>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default SearchResults;
