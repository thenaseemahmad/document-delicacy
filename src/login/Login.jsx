import "dotenv/config";
import React, { useState } from "react";
import mongoose from 'mongoose';
import md5 from 'md5';

function Login() {
    const [emailText, setEmailText] = useState("");
    const [passText, setPassText] = useState("");

    mongoose.connect("mongodb+srv://"+process.env.MONGODB_USER+":"+process.env.MONGODB_USER_PASS+"@cluster0.c9xlloe.mongodb.net/userDB?retryWrites=true&w=majority",{useNewUrlParser:true});
    const userSchema = new mongoose.Schema({username:String, password:String});
    const User = new mongoose.model('users',userSchema);

    function handleEmailChange(event) {
        setEmailText(event.target.value);
    }

    function handlePassChange(event) {
        setPassText(event.target.value);
    }

    function handleLoginSubmitButton() {
        //Check if this user exist in db
        
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
