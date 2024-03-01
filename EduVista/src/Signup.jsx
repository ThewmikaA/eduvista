import HeaderLog from './HeaderLog';
import { useState } from 'react';
import ParentSignupform from './ParentSignupform';
import './Signup.css';
import StudentSignupform from './StudentSignupform';
import TutorSignupform from './TutorSignupForm';

function Signup(){
    const [activeForm, setActiveForm] = useState('student');

    return(
        <>
            <HeaderLog/>
            <div className="signnew-cont">
                <div className="signbackground-image"/>
                <h1 style={{color:'#ff0046'}}>EDUVISTA</h1>
                <div className="signcontainer">
                    <div className="signuppage-button-group">
                        <button id='Signuppage-buttons' className={`Signuppage-buttons ${activeForm === 'student' ? 'active' : ''}`} onClick={() => setActiveForm('student')}>Student</button>
                        <button id='Signuppage-buttons' className={`Signuppage-buttons ${activeForm === 'tutor' ? 'active' : ''}`} onClick={() => setActiveForm('tutor')}>Tutor</button>
                    </div>

                    {activeForm === 'student' && <StudentSignupform />}
                    {activeForm === 'tutor' && <TutorSignupform />}

                    <button id="signup-button" type="submit">Create Account</button>
                </div>
            </div>
        </>
    );
}

export default Signup;