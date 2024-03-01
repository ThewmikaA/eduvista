import { useState } from "react";
import './Signupform.css';


function ParentSignupform() {
    const [parentName, setParentName] = useState('');
    const [parentEmail, setParentEmail] = useState('');
    const [parentPassword, setParentPassword] = useState('');
    const [childName, setChildName] = useState('');
    const [childEmail, setChildEmail] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form fields
        if (!parentName || !parentEmail || !parentPassword || !childName || !childEmail) {
            setStatusMessage('Please fill in all the fields.');
        } else {

            setStatusMessage(`Account Created for Parent: ${parentName}, Child: ${childName}`);
            setParentName('');
            setParentEmail('');
            setParentPassword('');
            setChildName('');
            setChildEmail('');
        }
    };

    return (
        <form onSubmit={handleSubmit} id='signup-form'>

            <label id='signup-label' htmlFor="parentName">Enter Parent's Name:</label>
            <input type="text" id="signup-input" value={parentName} placeholder="Enter Parent's Name" onChange={(e) => setParentName(e.target.value)} required />
            <br />

            <label id='signup-label' htmlFor="parentEmail"> Enter Parent's Email:</label>
            <input type="email" id="signup-input" value={parentEmail} placeholder="Enter Parent's Email" onChange={(e) => setParentEmail(e.target.value)} required />
            <br />


            <label id='signup-label' htmlFor="parentPassword">Enter Parent's Password:</label>
            <input type="password" id="signup-input" value={parentPassword} placeholder="Enter Parent's Password" onChange={(e) => setParentPassword(e.target.value)} required />
            <br />


            <label id='signup-label' htmlFor="childName">Enter Child's Name:</label>
            <input type="text" id="signup-input" value={childName} placeholder="Enter Child's Name" onChange={(e) => setChildName(e.target.value)} required />
            <br />


            <label id='signup-label' htmlFor="childEmail">Enter Child's Email:</label>
            <input type="email" id="signup-input" value={childEmail} placeholder="Enter Child's Email" onChange={(e) => setChildEmail(e.target.value)} required />
            <br />


            {statusMessage && <p style={{ color: 'red' }}>{statusMessage}</p>}
            

            <button id="signup-button" type="submit">Sign Up</button>
        </form>
    );
}

export default ParentSignupform;