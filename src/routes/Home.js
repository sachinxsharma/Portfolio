import React from 'react'
import Navbar from "../Component/Navbar";
import HeroImg2 from "../Component/HeroImg2";
import Footer from "../Component/Footer";
import Heroimg from "../Component/Heroimg"
import Work from '../Component/Work';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg/>
      <Work/>
      <HeroImg2/>
      <Footer/>
     
    </div>
  )
}

export default Home