import React from 'react';
import "./ProjectCardStyle.css";
import { FaArrowRight } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Tilt from 'react-parallax-tilt';

export default function ProjectCard(props) {

  const handleOnClick = (projectLink) => {
    window.open(`${projectLink}`);
  }

  return (
    <div className='project-list' id="projects">
      {props.projects.map((project, index) => (
        <div key={index} className='project-window' id={project.id}>
          <div className={`project-wrapper ${project.className}`}>
            <div className="about-project">
              <div className="project-title">{project.projectTitle}</div>
              <div className="desc">{project.projectDesc}</div>
              <button className='btn' onClick={() => handleOnClick(project.projectLink)}>
                <span>View on <FiGithub className="social" size={20} style={{ marginLeft: "8px", position: "relative", top: "2px", strokeWidth: "3" }} /></span>
                <FaArrowRight className='btn-arrow' size={22} style={{ marginLeft: "1rem" }} />
              </button>
            </div>
            <Tilt className="project-img" gyroscope={true}>
              <a href={project.deployedProjectLink || "#"} target="_blank" rel="noopener noreferrer">
                <img src={project.projectImg} alt={`Displaying project ${project.projectTitle}`} />
              </a>
            </Tilt>
          </div>
        </div>
      ))}
    </div>
  );
}
