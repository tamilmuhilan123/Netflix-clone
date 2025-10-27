import React from 'react'
import logo from "/logo.png"
import searchIcon from '../assets/search_icon.svg'
import bell_symbol from '../assets/bell_icon.svg'
import profile_img from "../assets/profile_img.png"
import dropDown from '../assets/caret_icon.svg'
import squidgame from '../assets/squidgamefont.png'
import play from '../assets/play_icon.png'
import plus from '../assets/plus-sign.png'


const Navbar = () => {
  return (
    <div className="main">
      <div className='navbar'>
      <div className="navbar-left">
        <div className="netflix-logo">
          <div className="netflix-logo-image">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-list">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">TV Shows</a></li>
            <li><a href="">Movies</a></li>
            <li><a href="">New & Popular</a></li>
            <li><a href="">My List</a></li>
            {/* <li><a href="">Browse by Languages</a></li> */}
          </ul>
        </div>
      </div>
      <div className="navbar-right">
          <img src={searchIcon} alt="" />
          <p>Kids</p>
          <img src={bell_symbol} alt="" />
          <img src={profile_img} alt="" />
          <img src={dropDown} alt="" />
      </div>
    </div>
    <div className="main-movie-title-description">
      <div className="main-movie-title-description-left">
        <div className="movie-title">
        {/* <img src={squidgame} alt="" /> */}
        <h2>Squid Game</h2>
        <p>Life is like a game.There are many players. If you don't <br /> play with them , they'll play with you.</p>
      </div>
      <div className="play-pause-more-info">
        <div className="play-pause">
        <img src={play} alt="" /><p>Play</p>
        </div>
      <div className="more-info">
        <img src={plus} alt="" /><p>My List</p>
      </div>
      </div>
      </div>
      <div className="main-movie-title-description-right">

      </div>
    </div>
    </div>
  )
}

export default Navbar