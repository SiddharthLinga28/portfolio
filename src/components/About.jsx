// src/components/About.jsx
import React from 'react';
import Education from './Education';
import myPic from '../assets/mypic.png';
import './About.css';
import ganeshBg from '../assets/ganesh.png';

const About = () => {
  return (
     
    <div className="about-container">
      <div className="header-section">
        <div className="pic-block">
          <img src={myPic} alt="Siddharth" className="profile-pic" />
        </div>

        <div className="about-research-block">
          <div className="section compact">
            <h2>About Me</h2>
            <p>
              I am a passionate computer science graduate student with strong interests in AI and human-centered technologies.
              With a blend of technical and interpersonal skills, I aim to solve real-world problems through adaptive and intelligent systems.
            </p>
          </div>

          <div className="section compact">
            <h2>Research Interests</h2>
            <p>
              Exploring AI and machine learning to create intelligent, human-aware adaptive user interfaces. My focus is on
              developing emotion-driven and language-based dynamic UIs that enhance user interaction. Aiming to integrate NLP
              and LLMs to build more efficient, context-aware adaptive UI models, optimizing both system performance and user
              experience.
            </p>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <div >
          <h2>Education</h2>
          <Education />
        </div>

        <div className="section compact">
          <h2>Skills</h2>
          <ul>
            <li><strong>Programming:</strong> Python, C++, JavaScript, Java, R, SQL (MySQL), NoSQL, NodeJS</li>
            <li><strong>Machine Learning:</strong> scikit-learn, TensorFlow, XGBoost, LightGBM, CNNs, PyTorch</li>
            <li><strong>AI:</strong> LLMs, LSTMs, NLP, CV, Video Processing, Modal Training</li>
            <li><strong>Front-end:</strong> HTML/CSS, React, Bootstrap, AngularJS</li>
            <li><strong>Visualization:</strong> Tableau, Power BI, matplotlib, seaborn, Dashboards, Pandas, NumPy</li>
            <li><strong>Product/Team:</strong> Cross-Functional Collaboration, Product Analysis, Communication, Leadership</li>
            <li><strong>Data Science:</strong> A/B Testing, Hypothesis Testing, Causal Inference, Time-Series, Regression</li>
          </ul>
        </div>
      </div>
    </div>
    
  );
};

export default About;