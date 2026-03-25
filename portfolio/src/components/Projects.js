//Projects.js
import "../index.css";
import PROJECTS from "../data/projects";

function Projects() {
  return (
    <div>
      <h2>My Projects</h2>
      <div>
        {
          PROJECTS.map(PROJECT=>{
            return <Project project={PROJECT} />
          })
        }
      </div>
    </div>
  );
}

function Project(props) {
  const {title, description, image, link}= props.project;
  return (
    <div className="project">
      <img src={image} alt="project" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={()=>{  window.location.href = link }}> Enroll</button>
    </div>
  );
}

export default Projects;
