import "./FooterStyles.css"
import React from 'react'
import {FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk} from "react-icons/fa"
import {FaPhone} from "react-icons/fa"
// import {FaMailBulk} from "react-icons/fa"

const linkdinprofileURL = "https://www.linkedin.com/in/sachin-sharma-145546254/";
const githubprofileURL = "https://github.com/sachinxsharma";
const InstagramURL = "https://www.instagram.com/sachinnn_72?igsh=Z3FrenoydnY0M2Nt";
const handleLinkedInClick = () =>{
    window.location.href = linkdinprofileURL;
};
const handlegithubInClick = () =>{
    window.location.href = githubprofileURL;
}
const handleInstaClick = () =>{
    window.location.href = InstagramURL;
}


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
                +91-8528491287</h4>
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
                <a href={linkdinprofileURL} target="_blank" rel="noopener noreferrer" onClick={handleLinkedInClick}>
                <FaLinkedin size ={20} style = {{ color:"#fff", marginRight:"2rem" }}/> 
                </a>

                <a href={githubprofileURL} target="_blank" rel="noopener noreferrer" onClick={handlegithubInClick}>
                <FaGithub size ={20} style = {{ color:"#fff", marginRight:"2rem" }}/>
                </a>
                <a href={InstagramURL} target="_blank" rel="noopener noreferrer" onClick={handleInstaClick}>
                <FaInstagram size ={20} style = {{ color:"#fff", marginRight:"2rem" }}/>
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer