import React, { useState } from "react";
// import "./style.css";
import Login from "./Login";
import Register from "./Register";

function LoginAndRegister() {

    const [signInBtn, setSignInBtn] = useState(true);

    function handleSigninBtnClk() {
        setSignInBtn(true)
    }

    function handleRegisterBtnClk() {
        setSignInBtn(false)
    }

    return (
    <main className="form-signin w-100 m-auto">
        <div className="d-flex flex-row justify-content-center">
            <button onClick={handleSigninBtnClk} type="button" className="btn w-100">Sign in</button>
            <button onClick={handleRegisterBtnClk} type="button" className="btn w-100">Register</button>
        </div>
        {/* Conditional Login or Register window here */}
        {signInBtn ? <Login /> : <Register /> }

    </main>);
}

export default LoginAndRegister
