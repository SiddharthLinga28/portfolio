// ✅ src/components/Projects.jsx
import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      name: 'Rainfall detection using machine learning',
      from_date: '2023-10',
      to_date: '2023-12',
      skills: 'Machine learning, Python',
      url: 'https://github.com/SiddharthLinga28/Projects/tree/main/Rainfall_prediction',
      description: `
        Developed a predictive model to forecast rainfall using weather datasets with attributes such as wind direction, gust speed, and morning/evening wind speeds.
        Evaluated multiple machines learning algorithms, including Random Forest and K-Nearest Neighbors, to identify the most accurate model for rainfall prediction.
        The model proposed is 92% accurate, as multiple datasets are used to train the model.
      `
    },
    {
      name: 'Lung-cancer detection using computer vision',
      from_date: '2023-10',
      to_date: '2023-12',
      skills: 'Computer vision, Image processing, Python',
      url: 'https://github.com/SiddharthLinga28/Projects/tree/main/Lung_cancer_detection',
      description: `
        Developed a system to detect lung cancer by analyzing a large dataset of CT scan images categorized into 3 groups: cancerous lungs, symptomatic lungs, and healthy lungs.
        Implemented Convolutional Neural Networks (CNN) to classify new images, predicting whether a patient has lung cancer, symptoms, or no issues based on input scans.
        Achieved 90% accuracy on a dataset of 10,000 CT scan images.
      `
    },
    {
      name: 'Book-Recommendation system',
      from_date: '2024-09',
      to_date: '2024-11',
      skills: 'Human Computer Interaction, HTML/CSS/JS, Python',
      url: 'https://github.com/SiddharthLinga28/face2feel',
      description: `
        Building a dynamic UI that changes its structure, color or lookup based on the emotion on the user.
        Internally uses Deepface and Open CV libraries of Python for face and emotion detection. Once the emotion is detected the UI changes, such as if the user is angry a soft music will be played or an anger management quote is displayed, if user is sad a joke or an encouraging prompt will be displayed.
        Along with these UI changes, the system also recommends books based on user emotion.
      `
    },
    {
      name: 'Smart parking system simulator',
      from_date: '2024-09',
      to_date: '2024-12',
      skills: 'WSN, Python, ML',
      url: 'https://github.com/SiddharthLinga28/Projects/tree/main/Smart_parking_simulation',
      description: `
        Developing a smart parking system simulator that works with wireless sensor network directly connected to a cloud server for optimal parking and finding nearest parking spot. Availability of VIP/handicapped parking features as well.
        The system calculated the in and out time as well as generates, the bill while leaving the parking space.
        Integration of ML helps in optimizing the slots and finding nearest slot most of the time.
      `
    },
    {
      name: 'Infinity POS',
      from_date: '2024-09',
      to_date: '2024-12',
      skills: 'Python, full-stack development, ReactJS',
      url: 'https://twodirection.netlify.app/',
      description: `
        Designed and developed a web-based inventory and POS system featuring real-time inventory updates, billing, sales tracking, and analytics.
        Key highlights include multi-role authentication, employee access control, AI-based inventory prediction using linear regression, and smart alerts for expiry tracking and seasonal demand.
        Helps small to medium businesses own their revenue, identify best-selling products, and optimize performance.
      `
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const formatDescription = (text) =>
    text
      .split(/\n|\. /)
      .filter((line) => line.trim() !== '')
      .map((line, index) => (
        <li key={index}>
          {line.trim().endsWith('.') ? line.trim() : line.trim() + '.'}
        </li>
      ));

  const getPositionClass = (index) => {
    if (index === currentIndex) return 'project-card center';
    if ((index + 1) % projects.length === currentIndex) return 'project-card left';
    if ((index - 1 + projects.length) % projects.length === currentIndex) return 'project-card right';
    return 'project-card hidden';
  };

  return (
    <div className="projects-wrapper">
      <button className="nav-arrow left-arrow" onClick={handlePrev}>
        &lt;
      </button>
      <div className="projects-container">
        {projects.map((item, index) => (
          <div
            key={index}
            className={getPositionClass(index)}
            onClick={() => item.url && window.open(item.url, '_blank')}
          >
            <div className="card-header">
              <h2 className="project-name">{item.name}</h2>
              <span className="project-dates">
                {item.from_date} – {item.to_date}
              </span>
            </div>
            <p className="skills">
              <i>Skills: {item.skills}</i>
            </p>
            <ul className="description">{formatDescription(item.description)}</ul>
          </div>
        ))}
      </div>
      <button className="nav-arrow right-arrow" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
}

export default Projects;
