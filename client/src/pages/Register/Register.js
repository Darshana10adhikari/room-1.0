import React, {useState} from "react";
import './Register.css';
import ReactDOM from 'react-dom';


import Axios from 'axios';
import { useHistory } from "react-router";

function Register() {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const register = () => {
    let history = useHistory()
      Axios.post("http://localhost:3001/user/register", {
          username: username,
          password: password, 
        }).then((response) => {
          console.log(response);
      });
    };

    return(
        <div className="Register">
         <h1> Registration</h1>   
         <div className="RegisterForm">
          <input type="text"placeholder = "username..." 
           onChange={(event) => {
               setUsername(event.target.value);
           }}
            />
          <input type="password"placeholder = "password..." 
           onChange={(event) => {
               setPassword(event.target.value);
           }} />

          <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/Home")}>Home</div>
        </div>

        </div>
        
      
          
    );
}

export default Register