import "./WorkCardStyles.css";
import React from "react";


const Work = (props) => {
  console.log(props)
  return (
  <div className="work-container">
  <div className="project-img">
  <img src="https://polish.evergreenpodcasts.com/blog/_1500xAUTO_crop_center-center_none/DSC_0678.jpg" alt="project" />
  </div>
  <div className="project-conent">
  <div className="details">
  <h2>{props.project.name}</h2>
  <h3>{props.project.skills}</h3>
  <p>{props.project.details}</p>
  </div>
  <div className="buttons">
  <a href="https://github.com/" className="btn" target="_blank" rel="noreferrer">DEMO</a>
  <a href="https://github.com/" className="btn btn-light" target="_blank" rel="noreferrer">Source</a>
  </div>
  </div>
  </div>
  );
};
export default Work;
