// src/components/Education.jsx
import React from 'react';
import './Education.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';

const Education = () => {
  return (
    <div>
      {/* B.Tech */}
      <div className="education-card">
        <img src={img1} alt="CVR College Logo" className="education-logo" />
        <div className="education-content">
          <div className="completion-date">May, 2023</div>
          <h3>B.Tech</h3>
          <p className="majors">Computer Science and Information Technology</p>
          <p>CVR College Of Engineering</p>
          <p className="location">TS, India</p>
          <p><strong>CGPA:</strong> 8</p>
          <p><strong>Description:</strong> Honors and Activities: President of Literature and Debate club. Chairperson of Computer Science Club</p>
        </div>
      </div>

      {/* Master of Science */}
      <div className="education-card">
        <img src={img2} alt="TAMU Logo" className="education-logo" />
        <div className="education-content">
          <div className="completion-date">May, 2025</div>
          <h3>Master of Science</h3>
          <p className="majors">Computer Science</p>
          <p>Texas A&M University</p>
          <p className="location">TX, USA</p>
          <p><strong>CGPA:</strong> 3.5</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
