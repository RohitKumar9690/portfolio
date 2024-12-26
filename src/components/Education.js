import React from 'react';
import './Education.css';

const Education = ({ educationData }) => {
  return (
    <div className="education-section" id="education">
      <div className="education-title">Education</div>
      <div className="education-list">
        {educationData.map((item, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <div className="education-degree">{item.degree}</div>
              <div className="education-duration">{item.duration}</div>
            </div>
            <div className="education-university">{item.university}</div>
            <ul className="education-courses">
              {item.courses.map((course, idx) => (
                <li key={idx} className="education-course">{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
