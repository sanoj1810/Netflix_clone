import React from 'react'
import './Home.css' 
import Navbar from '../../Components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import Title from '../../Components/TitleCard/Title'
import Footer from '../../Components/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Discovering his ties to a secret ancident order,a young
            man living in modern Istanbul embarks on a quest to
            save the city from an immortal enemy.
          </p>
          <div className="hero-button">
            <button className='btn'>
            <FontAwesomeIcon icon={faCirclePlay} className='play' />
            play
            </button>
            <button className='btn-dark'>
            <FontAwesomeIcon icon={faCircleInfo} className='play' />
            More info
            </button>
          </div>
          <Title/>
        </div>
      </div>
      <div className="more-card">
            <Title title={"Blockbuster Movie"} category={"top_rated"}/>
            <Title title={"Only On Netflix"} category={"popular"}/>
            <Title title={"Upcoming"} category={"upcoming"}/>
            <Title title={"Top Pics For You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
