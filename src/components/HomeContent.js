import "./HomeContent.css";
import React from "react";



const HomeContent = () => {
  return (
  <div className="home">
    <div className="content">
      <p>SARAVANAN S</p>
      <h1>Full Stack Developer</h1>
      <a href="https://www.linkedin.com/in/saravanan-s-full-stack-developer/" className="btn" target="_blank" rel="noreferrer">Linkedin</a>
      <a href="https://drive.google.com/file/d/1sms6ZCvWdMnG8HWuhG1i1k7dQ_fjjT3S/view?usp=sharing" className="btn btn-light" target="_blank" rel="noreferrer">Resume</a>
      <a href="https://github.com/SARAVANAN-SSS" className="btn" target="_blank" rel="noreferrer">Github</a>
    </div>
  </div>
  );
};


export default HomeContent;
