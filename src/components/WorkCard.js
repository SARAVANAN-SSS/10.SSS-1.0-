import "./WorkCardStyles.css";
import { projectDetails } from "./WorkCardData";
import Work from "./Work"

const WorkCard = () => {
  return (
  <div className="project-card">
  <h1>PROJECTS</h1>
    <div className="projects">
    {projectDetails.map((project,index) => {
      return(
        <Work key={index} project={project} />
      )})}
    </div>
  </div>
  );
};

export default WorkCard;
