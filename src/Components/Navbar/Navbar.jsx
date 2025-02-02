import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import profile from '../../assets/profile_img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { logout } from '../../firebase';




const Navbar = () => {

  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }
      else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-right">
        <img src={logo} alt="" className='logo' />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browser by Language</li>
        </ul>
      </div>
      <div className="navbar-left">
        <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
        <p>Children</p>
        <FontAwesomeIcon icon={faBell} className='icon' />
        <div className="nav-profile">
          <img src={profile} alt="" className='profile-img' />
          <FontAwesomeIcon icon={faSortDown} />
          <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign Out Of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
