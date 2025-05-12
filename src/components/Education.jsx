// src/components/Education.jsx
import React, { useEffect, useState } from 'react';

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
      <h2>Education</h2>
      {educationData.map((edu) => (
        <div key={edu.id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
          <h3>{edu.degree}</h3>
          <p> {edu.institution}</p>
          <p><strong>Completion:</strong> {edu.completion}</p>
          <p><strong></strong> {edu.location}</p>
          <p><strong>Majors:</strong> {edu.majors}</p>
          <p><strong>CGPA:</strong> {edu.cgpa}</p>
          {edu.description && <p><strong>Description:</strong> {edu.description}</p>}
        </div>
      ))}
    </div>
  );
};

export default Education;
