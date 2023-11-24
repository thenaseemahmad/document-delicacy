import React, { useState } from "react";
import "./style.css";
import Login from "./Login";
import Register from "./Register";
import CustomButton from "../button/CustomButton";

export default function LoginAndRegister({userLoginStatusFlag}) {
    const [signInBtn, setSignInBtn] = useState(true);
    return (
    <main className="form-signin w-100 m-auto">
        <div className="d-flex flex-row justify-content-center">
            <CustomButton onClick={()=>{setSignInBtn(true)}} title="Sign in" className="btn w-100" type="button" />
            <CustomButton onClick={()=>{setSignInBtn(false)}} title="Register" className="btn w-100" type="button" />
        </div>
        {/* Conditional Login or Register window here */}
        {signInBtn ? <Login userLoginSuccessfully={userLoginStatusFlag} /> : <Register userRegisteredSuccessfully={userLoginStatusFlag} /> }
    </main>);
}