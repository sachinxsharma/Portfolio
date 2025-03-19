import React from 'react'
import "./HeroImageStyles.css";
import introImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="into-img"
          src={introImg} alt="introImg"/>
        </div>
        <div className="content">
            <p>HI, I'M SACHIN .</p>
            <h1>A passionate Developer.</h1>
            <div>
              <Link to="/project" className="btn">Projects</Link>
              <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage