import React, { useState } from "react";
import SHA256 from 'crypto-js/sha256';
import axios from "axios";

function Login() {
    const [emailText, setEmailText] = useState("");
    const [passText, setPassText] = useState("");

    async function loginUser(fullname, email,pass) {
        
        //await axios.post('http://localhost:5000/registeruser',{params:{newuseremail:email,newuserpass:pass,fullname:fullname}},{headers:{'Access-Control-Allow-Origin': '*'}})
        await axios.post('http://localhost:5000/registeruser?newuseremail='+email+'&newuserpass='+pass+'&fullname='+fullname)
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

    function handleLoginSubmitButton() {
        //Check if this user exist in db
        //AuthenticateUser(emailText,passText);
        //Hit python backend server here to check if this user exist
        //user axios to get this detail
        loginUser('Naseem Ahmad',emailText,SHA256(passText));

    }

    return (<main className="form-signin w-100 m-auto">
        <div>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
                <input onChange={handleEmailChange} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input onChange={handlePassChange} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
            <button onClick={handleLoginSubmitButton} className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </div>
    </main>);
}

export default Login
