import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import heroImage from '../../assets/hero-image.jpg'


const Home = () => {
    return (
      <div className='home'>
            <Navbar/>
            <div className="hero-container">
                <div className="hero-caption">
                    <h1>What do you want to listen to?</h1>
                    <img src={heroImage} alt="hero banner" className='banner-img'/>
                    <input type="text" placeholder='Search for a song, album, or artist' />
                    <button className="btn">Search</button>
                </div>
                    {/* <div className="hero-btns">
                        <button className='btn'><img src= {play_icon} alt= "" />Watch Now</button>
                        <button className='btn dark-btn'><img src= {info_icon} alt= "" />More Info</button>
                        </div> */}
                    {/* <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
                    <TitleCards title={"Recently Added"} category={"now_playing"}/>
                    <TitleCards title={"Top Picks for You"} category={"popular"}/>
                    <TitleCards title={"Coming Soon"} category={"upcoming"}/> */}
                </div>
                {/* <Footer/> */}
        </div>
    )
  }
  
  export default Home