import React from 'react'
import manimg from '../../assets/main-page.png'
import './Home.css'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div><div className="main">
    <img src={manimg} alt="" />
    <div className="game">
      <h1>DICE GAME</h1>
      <NavLink className="btn" to="/game">
        Play Now
      </NavLink>
    </div>
  </div></div>
  )
}

export default Home