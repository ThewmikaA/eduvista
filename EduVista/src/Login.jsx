
import React from "react";
import { Helmet } from 'react-helmet';
import Loginform from "./Loginform";
import './Login.css'
import HeaderLog from "./HeaderLog";
import { Link } from "react-router-dom";


function Login(){

    return(
        <>
            <HeaderLog/>
            <div className="lognew-cont">
                <div className="logbackground-image"/>
                <div className="logcontainer">
                    <h1 style={{color: "#4dc9e8"}}>EDUVISTA</h1>
                    <br />
                    <Loginform/>
                    <p style={{color:"rgb(100, 100, 100)"}}>Don't have an account? <Link id="logsignup-link" style={{color:"#4dc9e8"}} to = '/signup'>Sign-up</Link></p>
                </div>
            </div>
        </>

    
    );
}

export default Login