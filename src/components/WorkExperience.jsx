// ✅ src/components/WorkExperience.jsx
import React from 'react';
import './WorkExperience.css';

function WorkExperience() {
  const experiences = [
    {
      company_name: 'Conduira',
      job_role: '',
      from_date: '2022-01',
      to_date: '2023-01',
      location: 'Hyderabad, Telangana, India',
      description: `
        Extracted, cleaned, and validated large-scale datasets (~10K+ records) using MySQL for internal reporting and customer insight generation.
        Optimized SQL queries, improving data retrieval time by 30% and increasing accuracy in customer trend analysis.
        Collaborated across teams to identify data inconsistencies and implemented solutions that reduced anomalies by 18%.
        Utilized Git and prompt engineering to automate version tracking and standardize dataset updates, cutting manual overhead by 20%.
      `
    },
    {
      company_name: 'Aadhyay',
      job_role: 'Educational Data Instructor & Curriculum Developer',
      from_date: '2021-08',
      to_date: '2022-08',
      location: 'Hyderabad, Telangana, India',
      description: `
        Delivered structured programming instruction in Python, C, SQL, and data structures to over 50 students, achieving an 80% A-grade success rate.
        Designed data-centric learning modules and assessment dashboards, increasing student engagement and retention of technical content.
        Conducted regular feedback analysis using Google Forms to iterate on course quality and student performance metrics.
        Promoted data discipline and troubleshooting mindset in students through scenario-based assignments and error log evaluations.
      `
    }
  ];

  const formatDescription = (text) =>
    text
      .split(/\n|\. /)
      .filter((line) => line.trim() !== '')
      .map((line, index) => (
        <li key={index}>
          {line.trim().endsWith('.') ? line.trim() : line.trim() + '.'}
        </li>
      ));

  const formatDateRange = (from, to) => {
    return `${from.slice(0, 7)} – ${to.slice(0, 7)}`;
  };

  return (
    <div className="work-container">
      {experiences.map((item, index) => (
        <div key={index} className="work-card">
          <div className="card-date">{formatDateRange(item.from_date, item.to_date)}</div>
          <h2>{item.company_name}</h2>
          {item.job_role && <h3><i>{item.job_role}</i></h3>}
          <p className="location">{item.location}</p>
          <ul className="description">
            {formatDescription(item.description)}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default WorkExperience;
