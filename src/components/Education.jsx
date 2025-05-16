// src/components/Education.jsx
import React, { useEffect, useState } from 'react';
import './Education.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';

const Education = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/education') // Local backend endpoint
      .then((res) => res.json())
      .then((data) => setEducationData(data))
      .catch((err) => console.error('Error fetching education data:', err));
  }, []);

  return (
    <div>
      
      {educationData.map((edu) => (
        <div key={edu.id} className="education-card">
        <img
  src={edu.id === 1 ? img1 : img2}
  alt="Logo"
  className="education-logo"
/>

        <div className="education-content">
          <div className="completion-date">{edu.completion}</div>
          <h3>{edu.degree}</h3>
          <p className="majors">{edu.majors}</p>
          <p>{edu.institution}</p>
          <p className="location">{edu.location}</p>
          <p><strong>CGPA:</strong> {edu.cgpa}</p>
          {edu.description && <p><strong>Description:</strong> {edu.description}</p>}
        </div>
        </div>

      ))}
    </div>
  );
};

export default Education;
