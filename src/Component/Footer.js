import "./FooterStyles.css"
import React from 'react'
import {FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk} from "react-icons/fa"
import {FaPhone} from "react-icons/fa"
// import {FaMailBulk} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size ={20} style = {{ color:"#fff", marginRight:"2rem" }}/>
                    <div>
                        <p>Mumbai ,Maharastra</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size ={20} style = {{ color:"#fff", marginRight:"2rem" }}/>
                +91-123456789</h4>
                </div>
                <div className="gmail">
                    <h4><FaMailBulk size ={20} style = {{ color:"#fff", marginRight:"2rem" }}/>
                sachin72tech@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me </h4>
                <p>professional with a strong foundation in  HTML, CSS, React.js and Java(frontend development). Proficient in data structures and algorithms, and pursuing a BSC/IT Degree from Somaiya VidyaVihar University to further enhance my technical skills and knowledge. Committed to continuously improving and staying up-to-date with emerging technologies.</p>
                <div className="social">
                        <a href="https://www.linkedin.com/in/sachin-sharma-145546254/" target="_blank" rel="noopener noreferrer">
                          <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        </a>
                        <a href="https://github.com/sachinxsharma" target="_blank" rel="noopener noreferrer">
                          <FaGithub size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        </a>
                        <a href="https://www.instagram.com/sachinnn_72?igsh=Z3FrenoydnY0M2Nt" target="_blank" rel="noopener noreferrer">
                          <FaInstagram size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
