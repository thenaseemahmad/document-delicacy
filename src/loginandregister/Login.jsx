import React, { useState } from "react";
import SHA256 from 'crypto-js/sha256';
import axios from "axios";
import "./style.css";

function Login(props) {
    const [emailText, setEmailText] = useState("");
    const [passText, setPassText] = useState("");

    async function loginUser(email, password){
        await axios.get('http://localhost:5000/loginuser?useremail='+email+'userpassword'+password)
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        })
    }
    

    function handleEmailChange(event) {
        setEmailText(event.target.value);
    }

    function handlePassChange(event) {
        setPassText(event.target.value);
    }

    function handleLoginSubmitButtonClick() {
        loginUser(emailText,SHA256(passText));
    }

    return (
        <div>
            <div className="form-floating">
                <input onChange={handleEmailChange} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input onChange={handlePassChange} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
            <button onClick={handleLoginSubmitButtonClick} className="btn btn-primary w-100 py-2 mt-3" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </div>
    );
}

export default Login
