// ✅ src/components/Research.jsx
import React, { useEffect, useState } from 'react';
import './Research.css';

function Research() {
  const [projects, setProjects] = useState([]);
  const [hoveredURL, setHoveredURL] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/research')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Error fetching research data:', err));
  }, []);

  const formatDescription = (text) => {
    return text
      .replace(/\\n/g, '\n')
      .split(/\n|\. /)
      .filter(line => line.trim() !== '')
      .map((line, index) => <li key={index}>{line.trim().endsWith('.') ? line.trim() : line.trim() + '.'}</li>);
  };

  const splitTitle = (title) => {
    const splitIndex = Math.max(title.indexOf(':'), title.indexOf(','));
    if (splitIndex === -1) return [title, ''];
    return [title.slice(0, splitIndex + 1), title.slice(splitIndex + 1).trim()];
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const month = d.toLocaleString('default', { month: 'short' });
    const year = d.getFullYear();
    return (
      <div className="project-date">
        <div>{month}</div>
        <div>{year}</div>
      </div>
    );
  };

  return (
    <>
      <div className="research-container">
        {projects.map((item, index) => {
          const [titleLine1, titleLine2] = splitTitle(item.name);
          const cardProps = item.url
            ? {
                onClick: () => window.open(item.url, '_blank'),
                onMouseEnter: () => setHoveredURL(item.url),
                onMouseLeave: () => setHoveredURL(''),
                className: 'research-card clickable'
              }
            : { className: 'research-card' };

          return (
            <div key={index} {...cardProps}>
              <div className="card-header">
                <div>
                  <h2>{titleLine1}</h2>
                  {titleLine2 && <h3 className="subtitle">{titleLine2}</h3>}
                </div>
                {formatDate(item.date)}
              </div>
              <p className="skills"><i>Skills: {item.skills.join(', ')}</i></p>
              <ul className="description">
                {formatDescription(item.description)}
              </ul>
            </div>
          );
        })}
      </div>
      {hoveredURL && <div className="fixed-url-preview">{hoveredURL}</div>}
    </>
  );
}

export default Research;
