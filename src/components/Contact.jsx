// src/components/Contact.jsx
import React from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-card">
      <h1 className="text-center text-4xl font-bold mb-6">Contact Me</h1>

      <div className="icon-row">
        <a href="mailto:siddharthlinga2808@gmail.com" className="icon-link" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="icon email" />
        </a>
        <a href="https://www.linkedin.com/in/siddharthlinga2808" className="icon-link" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin" />
        </a>
        <a href="https://github.com/SiddharthLinga28" className="icon-link" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon github" />
        </a>
      </div>


      <div className="text-left text-lg font-semibold mt-6">Name: Siddharth Linga</div>
      <div className="text-left text-lg font-semibold">Email: siddharthlinga2808@gmail.com</div>
    </div>
  );
}

export default Contact;
