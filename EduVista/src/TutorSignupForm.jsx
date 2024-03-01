import React, { useState } from 'react';
import './Signupform.css';

function TutorSignupform(){
    const [name, setTutorName] = useState('');
    const [email, setTutorEmail] = useState('');
    const [password, setTutorPassword] = useState('');
    const [fieldofstudy, setfieldofstudy] = useState('');
    const [statusMessage, setStatusMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
    
    
        if (!name || !email || !password || !fieldofstudy) {
            setStatusMessage('Please fill in all the fields.');
        } else {
            setStatusMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit} id='signup-form'>
            <label id='signup-label' htmlFor="name">Enter Your Name:</label>
            <input  type="text" id="signup-input" value={name} placeholder='Ener Your Name' onChange={(e) => setTutorName(e.target.value)} required />
            <br />

            <label id='signup-label' htmlFor="email">Enter Your Email:</label>
            <input type="email" id="signup-input" value={email} placeholder='Ener Your Email' onChange={(e) => setTutorEmail(e.target.value)} required />
            <br />

            <label id='signup-label' htmlFor="password">Enter Your Password:</label>
            <input type="password" id="signup-input" value={password} placeholder='Ener Your Password' onChange={(e) => setTutorPassword(e.target.value)} required />
            <br />

            <label id='signup-label' htmlFor='checkbox'>Enter Field of Study: </label>
            <input type="text" id="signup-input" value={fieldofstudy} placeholder='Ener Field of Study' onChange={(e) => setfieldofstudy(e.target.value)} required />
            <br/>

            {statusMessage && <p style={{ color: 'red' }}>{statusMessage}</p>}

            
        </form>
    );
}

export default TutorSignupform;