import "./HomeContent.css";
import React from "react";



const HomeContent = () => {
  return (
  <div className="home">
    <div className="content">
      <p>SARAVANAN S</p>
      <h1>FullStack Developer</h1>
      <a href="https://www.linkedin.com/in/saravanan-s-325ab7236/" className="btn" target="_blank" rel="noreferrer">Linkedin</a>
      <a href="https://drive.google.com/file/d/1WZ5HxEc8CThpuvFcI_6XlZOI1MpO8kKA/view?usp=sharing" className="btn btn-light" target="_blank" rel="noreferrer">Resume</a>
      <a href="https://github.com/SARAVANAN-SSS" className="btn" target="_blank" rel="noreferrer">Github</a>
    </div>
  </div>
  );
};

export default HomeContent;
