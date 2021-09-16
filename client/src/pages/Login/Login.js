import React, {useState} from "react";
import './Login.css';
import Axios from 'axios';

import {useHistory} from 'react-router-dom';

function Login() {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    
    const [errorMessage, setErrorMessage] = useState("");

    let history = useHistory();
    
    const login = () => {
    
      Axios.post("http://localhost:3001/user/login", {
          username: username,
          password: password, 
        }).then((response) => {
          if(response.data.logedIn){
            localStorage.setItem("loggedIn", true);
            localStorage.setItem("username",response.data.username);
            history.push("/");
          } else{
               setErrorMessage(response.data.message);
          }
          
      });
    };
    
return (
        
  <div class="Login">
    <h1> LOGIN</h1>
    <div className ="LoginForm">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required 
      onChange={(event) => {
        setUsername(event.target.value);
    }}
    />
    

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required
      onChange={(event) => {
        setPassword(event.target.value);
    }}/>
        
      <button type="submit"onClick={login}>Login</button><br></br>
     <h1 style={{color: "red"}}>{errorMessage}</h1>
     </div>
     </div>

    
   
);
}

export default Login;