import "./HeroImgStyles.css";
// import IntroImg from "../assets/intro-bg.jpg"
import React from "react";
// import { NavLink } from "react-router-dom";
// import {FaLinkedin,FaGithub} from "react-icons/fa"


const HeroImg = () => {
  return <div className="hero">
    {/* <div className="mask">
      <img className="intro-img" src={IntroImg} alt="IntroImg" />
    </div> */}
    <div className="content">
      <p>SARAVANAN S</p>
      <h1>FullStack Developer</h1>
      <div>
      <a href="https://www.linkedin.com/in/saravanan-s-325ab7236/" className="btn" target="_blank" rel="noreferrer">Linkedin</a>
      <a href="https://drive.google.com/file/d/1WZ5HxEc8CThpuvFcI_6XlZOI1MpO8kKA/view?usp=sharing" className="btn btn-light" target="_blank" rel="noreferrer">Resume</a>
      <a href="https://github.com/SARAVANAN-SSS" className="btn" target="_blank" rel="noreferrer">Github</a>
      </div>
      {/* <div className="social">
      <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}} />
      <FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}} />
    </div> */}
    </div>
  </div>;
};

export default HeroImg;
