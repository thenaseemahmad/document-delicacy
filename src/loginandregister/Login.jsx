import React, { useState } from "react";
import SHA256 from 'crypto-js/sha256';
import axios from "axios";
import "./style.css";
import CustomButton from "../button/CustomButton";
import InputTextField from "../inputfield/InputTextField";

export default function Login({userLoginSuccessfully}) {
    const [emailText, setEmailText] = useState("");
    const [passText, setPassText] = useState("");

    async function loginUser(email, password){
        await axios.get('http://localhost:5000/loginuser?useremail='+email+'userpassword'+password)
        .then(function(response){
            console.log(response);
            //set this callback if user login successfully
            userLoginSuccessfully(true);
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
        <>
            <InputTextField againstUserInsertAnyValue={handleEmailChange} fieldType="email" classToApply="form-control" idToApply="floatingInput" placeholderToShow="name@example.com" labelToApply="Email address" />
            <InputTextField againstUserInsertAnyValue={handlePassChange} fieldType="password" classToApply="form-control" idToApply="floatingPassword" placeholderToShow="Password" labelToApply="Password" />
            <CustomButton onClick={handleLoginSubmitButtonClick} title="Sign in" className="btn btn-primary w-100 py-2 mt-3" type="submit">Login</CustomButton>
            
            <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </>
    );
}
