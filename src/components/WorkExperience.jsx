// ✅ src/components/WorkExperience.jsx
import React, { useEffect, useState } from 'react';
import './WorkExperience.css';

function WorkExperience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/work_experience')
      .then((res) => res.json())
      .then((data) => setExperiences(data))
      .catch((err) => console.error('Error fetching work experience:', err));
  }, []);

  const formatDescription = (text) => {
    return text
      .replace(/\\n/g, '\n')
      .split(/\n|\. /)
      .filter(line => line.trim() !== '')
      .map((line, index) => <li key={index}>{line.trim().endsWith('.') ? line.trim() : line.trim() + '.'}</li>);
  };

  const formatDateRange = (from, to, isCurrent) => {
    if (isCurrent) return 'Current Job';
    return `${from.slice(0, 7)} - ${to.slice(0, 7)}`;
  };

  return (
    <div className="work-container">
      {experiences.map((item, index) => (
        <div key={index} className="work-card">
          <div className="card-date">
            {item.is_current ? <strong className="current-label">Current Job</strong> : formatDateRange(item.from_date, item.to_date, item.is_current)}
          </div>
          <h2>{item.company_name}</h2>
          <h3>Job Role: {item.job_role}</h3>
          <ul className="description">
            {formatDescription(item.description)}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default WorkExperience;
