import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import SearchResults from './pages/search-results/Search-results'
import Player from './pages/player/player'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Search-results" element={<SearchResults />} />
        <Route path="player" element={<Player />} />
      </Routes>
    </div>
  )
}

export default App


