// ✅ src/components/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [question, setQuestion] = useState('');
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!question || !email) {
    alert('Please fill out the required fields.');
    return;
  }

  const formData = new FormData();
  formData.append('question', question);
  formData.append('email', email);

  try {
    await fetch('http://localhost:3001/submit-question', {
      method: 'POST',
      body: formData,
    });

    setShowPopup(true);

    // Delay clearing so popup can still access email value
    setTimeout(() => {
      setQuestion('');
      setEmail('');
    }, 200); 
  } catch (err) {
    console.error('Error submitting question:', err);
  }
};


  return (
    <div className="contact-card">
      <h1 className="text-center text-4xl font-bold mb-6">Contact Me</h1>

      <div className="text-left text-lg font-semibold mb-2">My Name: Siddharth Linga</div>
      <div className="text-left text-lg font-semibold mb-4">My Email: siddharthlinga2808@gmail.com</div>
      <hr className="mb-6" />

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <label className="font-medium block mb-2">Want to Ask a Question?</label><br></br>
          <textarea
            required
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
            className="w-full border border-gray-300 rounded px-6 py-4 min-h-[180px] text-base"
          />

        </div>

        <div>
          <label className="font-medium block mb-2">Your Email</label><br></br>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-fit bg-blue-600 text-white font-bold py-2 px-6 rounded hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 hover:shadow-md transition-all duration-300"
        >
          Submit
        </button>

        {question && (
          <div className="text-red-800 bg-yellow-100 border border-yellow-300 rounded px-4 py-3 text-sm">
            Note: If you need to send any files, please email them to siddharthlinga2808@gmail.com
          </div>
        )}
      </form>

      {showPopup && (
        <div className="popup centered-popup">
          <button className="close-btn" onClick={() => setShowPopup(false)}>×</button>
          <p className="text-sm">
            📬 Your question is received by me! ✨<br />
            I’ll get back to you as soon as possible.<br />
            A reply will be sent to <strong>{email}</strong>.<br />
            Thank you 🙏 and have a great day! 🌟
          </p>
        </div>
      )}
    </div>
  );
}

export default Contact;
