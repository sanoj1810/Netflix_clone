import React,{ useEffect, useRef, useState }from 'react'
import './Title.css'
import card_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'


const Title = ({title,category}) => {
  
  const[apiData,setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWJiZDdjMWEyOWEyZDI3NzhhYjY2MTNkYmY1YjNlOSIsIm5iZiI6MTczNzk1MDA1My45MDcsInN1YiI6IjY3OTcwMzY1MjVkMjk4MGZiMDI0MDY5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZpyEBSHno2K_ZLODKlH86jUSYRLR-lcLznktsGpDCrA'
    }
  };
  

  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
    }
    useEffect (() => {

      fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));

      cardsRef.current.addEventListener('wheel', handleWheel);
      }, [])
  return (
    <div className= "title-card">
      <h2>{title?title:"popular on netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index) =>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default Title
