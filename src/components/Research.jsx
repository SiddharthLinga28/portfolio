// ✅ src/components/Research.jsx
import React, { useState } from 'react';
import './Research.css';

function Research() {
  const [hoveredURL, setHoveredURL] = useState('');

  const projects = [
    {
      name: 'How You Split Matters: Custom Image Partitioning and Label Inference Attack Dynamics',
      date: '2025-04-01',
      skills: ['Information Assurance', 'CS'],
      url: 'https://github.com/SiddharthLinga28/Projects/tree/main/How%20you%20split%20matters',
      description: `
        Developed a custom feature distribution technique to enhance vertical federated learning, improving upon existing vertical, random, and imbalanced distributions.
        Executed four types of attacks on the CIFAR-10 dataset with 2, 3, and 4 passive parties, achieving 5–6% higher model accuracy and reducing attack accuracy by 0.5–1% compared to baseline methods.
        Enabled user-driven customization for feature distribution patterns, offering greater flexibility and improved control.
      `
    },
    {
      name: 'Face2Feel: Emotion-Aware User Interface',
      date: '2024-11-01',
      skills: ['Emotion Detection', 'AI', 'Video Processing', 'DIP'],
      url: 'https://github.com/SiddharthLinga28/face2feel/blob/main/README.md',
      description: `
        A dynamic UI implementation using emotion detection, Frontend designing, video processing building a dynamic UI that changes based on user emotion.
        Helps in creating recommendation systems, user feedback analyzing, enhance User interaction.
      `
    },
    {
      name: 'Fishing the Phishing Data using GANs',
      date: '2025-02-01',
      skills: ['Python', 'Cyber Security'],
      url: '',
      description: `
        Analyzed various ML algorithms to compare accuracy, execution time, and precision, identifying an efficient, robust, and cost-effective solution.
        Repeated the experiment using GANs to generate realistic phishing data, enabling the model to handle complex scenarios and train better.
        Achieved 98.4% accuracy, a significant improvement over 94.3% without GANs.
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
              <p className="skills">
                <i>Skills: {item.skills.join(', ')}</i>
              </p>
              <ul className="description">{formatDescription(item.description)}</ul>
            </div>
          );
        })}
      </div>
      {hoveredURL && <div className="fixed-url-preview">{hoveredURL}</div>}
    </>
  );
}

export default Research;
