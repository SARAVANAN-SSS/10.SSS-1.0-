import "./WorkCardStyles.css";
import React from "react";


const Work = (props) => {

  const { netlifyUrl,githubUrl,img,name,skills,details } = props.project;

  return (
  <div className="work-container">
  <div className="project-img">
  <a href={netlifyUrl} target="_blank" rel="noreferrer">
  <img src={img} alt="project" />
  </a>
  {/* "https://polish.evergreenpodcasts.com/blog/_1500xAUTO_crop_center-center_none/DSC_0678.jpg" */}
  </div>
  <div className="project-conent">
  <div className="details">
  <h2>{name}</h2>
  <h3>{skills}</h3>
  <p>{details}</p>
  </div>
  <div className="buttons">
  <a href={netlifyUrl} className="btn" target="_blank" rel="noreferrer">DEMO</a>
  <a href={githubUrl} className="btn btn-light" target="_blank" rel="noreferrer">Source</a>
  </div>
  </div>
  </div>
  );
};
export default Work;
