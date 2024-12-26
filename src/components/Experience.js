import React from 'react';
import './Experience.css'; 


const Experience = ({ experiences,id }) => {
  return (
    <div className="experience-section" id={id}>
      <h2 className="section-title">Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-header">
              <h3 className="experience-job-title">{exp.jobTitle}</h3>
              <span className="experience-duration">{exp.duration}</span>
            </div>
            <p className="experience-company">{exp.company}</p>
            <ul className="experience-responsibilities">
              {exp.responsibilities.map((task, idx) => (
                <li key={idx} className="experience-task">{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
