import React from 'react';
import './App.css';
import ganeshBg from './assets/ganesh.png';

function App() {
  return (
        <div
          style={{
            backgroundImage: `url(${ganeshBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '100vw',         // Full screen width
            position: 'relative',
          }}
        >


      {/* Transparent white overlay */}
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      />

      {/* Hero Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          top: '10%',
        }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Siddharth Linga</h1>

        <div style={{ marginTop: '20px' }}>
          {['About', 'Skills', 'Research', 'Projects', 'Work Experience', 'Extra-curricular', 'Contact'].map((label) => (
            <button
              key={label}
              style={{
                margin: '5px',
                padding: '10px 20px',
                fontSize: '1rem',
                cursor: 'pointer',
              }}
              onClick={() => console.log(`${label} clicked`)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

