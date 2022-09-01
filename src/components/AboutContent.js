import "./AboutContent.css";
import React from "react";
import { Link } from "react-router-dom";


const AboutContent = () => {
  return (
  <div className="about">
  <h1>WHO AM I?</h1>
  <p>I am a Fullstack Developer who Graduated in Electrical and Electronics Engineering On May 2018. 
  I Build Applications to Solve Business Problems. 
  I am Skilled in MERN Stack. 
  I Believe in the Principle of KISS ( Keep It Simple Stupid ), so that users can have a Great Experience. 
  </p>
  <p>
  I am Good at Communicating with Clients or others within a Team and getting things done from myself as well as others.
  Here's how, After My Graduation, I worked for more than 2 years  ( July 2018 - Jan 2021 ) as an Electrical Engineer to help Civil Engineers in building Constructions at SOBHA Ltd.
  There I Led a team of 17+ Technicians in 2 Different Projects.
  Then I worked as a Senior Engineer for 9 Months ( Jan 2021 - Oct 2021 ) in Solving On-Site Clients Problems at ZOOMLION Ltd. 
  Then I started Learning Web Development in a BootCamp and Building Projects.
  Check Out My Projects <Link className="links" to="/projects">Here</Link> and 
  Lemme Know How I can help you <Link className="links" to="/contact">Here</Link>.
  {/* In 2022," My Typical Day starts with a Podcast and Ends with a Book ". */}
  </p>
  </div>
  );
};

export default AboutContent;
