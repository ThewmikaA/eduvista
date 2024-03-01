import { useState } from "react"
import './Loginform.css'

function Loginform(){
    const [inputs,setinputs]= useState({});
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setinputs(values => ({...values, [name]: value}))
    }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
      }


      return (
        <form id="Login-form" onSubmit={handleSubmit}>
          <label id="login-label" >Enter your Email:</label>
            <input id="login-input" type="text" name="email" value={inputs.email || ""} onChange={handleChange} placeholder="Enter your Email"/>
          <br />
          <label id="login-label" >Enter your Password:</label>
            <input id="login-input" type="text" name="password" value={inputs.password || ""} onChange={handleChange} placeholder="Enter your Password"/>
          <br />
          <button id="login-button" type="submit">Log in</button>
        </form>
      )

}

export default Loginform