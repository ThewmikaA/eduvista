import React, { useState } from 'react';
import './Signupform.css';

function StudentSignupform() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setStatusMessage('Please fill in all the fields.');
    } else {
      setStatusMessage(`Accont Created! Name: ${name},|  Email: ${email}`);
    }
  };

  return (
      <form id='signup-form' onSubmit={handleSubmit}>
        <label id='signup-label' htmlFor="name">Enter your Name:</label>
        <input type="text" id="signup-input" value={name} placeholder='Enter your Name' onChange={(e) => setName(e.target.value)} required />
        <br />

        <label id='signup-label' htmlFor="email">Enter your Email:</label>
        <input type="email" id="signup-input" value={email} placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)} required />
        <br />
        
        <label id='signup-label' htmlFor="password">Enter your Password:</label>
        <input type="password" id="signup-input" value={password} placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)} required />
        <br />

        {statusMessage && <p style={{ color: 'grey' }}>{statusMessage}</p>}

      </form>
  );
}

export default StudentSignupform;