import React from 'react'
import Navbar from '../../components/Navbar'
import TitleCards from '../../components/TitleCards'
import Footer from '../../components/Footer'
import "./home.css"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <TitleCards title="Now playing"/>
      <TitleCards title="New Release"/>
      <TitleCards title="Block busters"/>
      <TitleCards title="Tv Shows"/>
      <TitleCards title="Popular"/>
      <TitleCards title="Most watched"/>
      <Footer/>
    </div>
  )
}

export default Home