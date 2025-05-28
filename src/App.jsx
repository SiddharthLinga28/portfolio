// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import ganeshBg from './assets/ganesh.png';
import About from './components/About';
import Research from './components/research';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('About');

  const renderSection = () => {
    switch (activeSection) {
      case 'About':
        return <About />;
      case 'Research':
        return <Research/>;
      case 'Projects':
        return <Projects/>;
      case 'Work Experience':
        return <WorkExperience/>;

      case 'Contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${ganeshBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100%', // <-- change this
        width: '100vw',
        position: 'relative',
      }}

    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          minHeight: '100%',  // <-- change this
          zIndex: 1,
        }}

      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '30px 0 20px',
        }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Siddharth Linga</h1>
        <div style={{ marginTop: '20px' }}>
          {['About', 'Research', 'Projects', 'Work Experience', 'Extra-curricular', 'Contact'].map((label) => (
            <button
              key={label}
              style={{
                margin: '5px',
                padding: '10px 20px',
                fontSize: '1rem',
                cursor: 'pointer',
              }}
              onClick={() => setActiveSection(label)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '20px 40px',
        }}
      >
        {renderSection()}
      </div>
    </div>
  );
}

export default App;
