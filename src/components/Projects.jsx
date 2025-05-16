// ✅ src/components/Projects.jsx
import React, { useEffect, useState } from 'react';
import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3001/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Error fetching projects:', err));
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const formatDescription = (text) => {
    return text
      .replace(/\\n/g, '\n')
      .split(/\n|\. /)
      .filter(line => line.trim() !== '')
      .map((line, index) => <li key={index}>{line.trim().endsWith('.') ? line.trim() : line.trim() + '.'}</li>);
  };

  const getPositionClass = (index) => {
    if (index === currentIndex) return 'project-card center';
    if ((index + 1) % projects.length === currentIndex) return 'project-card left';
    if ((index - 1 + projects.length) % projects.length === currentIndex) return 'project-card right';
    return 'project-card hidden';
  };

  return (
    <div className="projects-wrapper">
      <button className="nav-arrow left-arrow" onClick={handlePrev}>&lt;</button>
      <div className="projects-container">
        {projects.map((item, index) => (
          <div
            key={index}
            className={getPositionClass(index)}
            onClick={() => item.url && window.open(item.url, '_blank')}
          >
            <div className="card-header">
              <h2 className="project-name">{item.name}</h2>
              <span className="project-dates">{item.from_date.slice(0, 7)} – {item.to_date.slice(0, 7)}</span>
            </div>
            <p className="skills"><i>Skills: {item.skills}</i></p>
            <ul className="description">
              {formatDescription(item.description)}
            </ul>
          </div>
        ))}
      </div>
      <button className="nav-arrow right-arrow" onClick={handleNext}>&gt;</button>
    </div>
  );
}

export default Projects;
