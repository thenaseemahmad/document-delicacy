import React, { useState } from "react";
import "./style.css";
import Login from "./Login";
import Register from "./Register";
import CustomButton from "../button/CustomButton";

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
            <CustomButton onPressThisBtn={handleSigninBtnClk} title="Sign in" classValue="btn w-100" type="button" />
            <CustomButton onPressThisBtn={handleRegisterBtnClk} title="Register" classValue="btn w-100" type="button" />
        </div>
        {/* Conditional Login or Register window here */}
        {signInBtn ? <Login /> : <Register /> }

    </main>);
}

export default LoginAndRegister
