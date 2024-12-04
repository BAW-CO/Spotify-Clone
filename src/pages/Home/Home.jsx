import React, { useContext } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import heroImage from '../../assets/hero-image.jpg'
import Footer from '../../components/Footer/Footer'
import { Context } from '../../context/Context'
import { useNavigate } from 'react-router-dom'


const Home = () => {

    const navigate = useNavigate()
    const { onSent, input, setInput } = useContext(Context)

    const handleSearch = () => {
        onSent()
        navigate('/search-results')
    }
    return (
      <div className='home'>
            <Navbar/>
            <div className="hero-container">
                <div className="hero-caption">
                    <h1>What do you want to listen to?</h1>
                    <img src={heroImage} alt="hero banner" className='banner-img'/>
                    <input 
                        onChange={(e)=> setInput(e.target.value)}
                        value={input}
                        type="text" 
                        placeholder='Search for a song, album, or artist' 
                        onKeyDown={(e)=> {
                            if (e.key === "Enter") {
                                onSent();
                            }
                        }}
                                />
                    {/* {input?<button 
                    onClick={() => onSent()}
                    className="btn">Search</button>:null} */}

                    <button onClick={handleSearch}
                    className="btn">
                    Search 
                    </button>

                </div>
            </div>
                <Footer/>
        </div>
    )
  }
  
  export default Home