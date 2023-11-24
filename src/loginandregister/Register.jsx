import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import SHA256 from 'crypto-js/sha256';
import CustomButton from "../button/CustomButton";
import InputField from "../inputfield/InputField";

function Register({userRegisteredSuccessfully}) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [registerApiResponse, setRegisterApiResponse] = useState(null);

    //Handling side effect of registerApiResponse state change here
    useEffect(() => {
        if (registerApiResponse != null && registerApiResponse.status === 200) {
            if (registerApiResponse.data.register_status === 'success') {
                //user registered successfully
                userRegisteredSuccessfully(true);
                //let user redirect to workspace
            }
            else if (registerApiResponse.data.register_status === 'failed') {
                //inform user that this user alredy exist
                //and redirect user to login form
            }
            console.log(registerApiResponse)
        }
        else {
            //inform user that something is not working, and ask user to check back later
        }

    }, [registerApiResponse]);

    function handleFullnameChange(event) {
        setFullName(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePassChange(event) {
        setPassword(event.target.value);
    }

    function handleConfirmPassChange(event) {
        setConfirmPass(event.target.value);

    }

    function handleRegisterSubmitBtn() {
        //registerUser backend method here
        if ((password == null || password === '') || (confirmPass == null || confirmPass === '') || (password !== confirmPass)) {
            alert('Password, and confirm password should match, and cant be empty!')

        }
        else {
            registerUser(fullName, email, password, function (response) {
                setRegisterApiResponse(response)
            });
        }
    }

    async function registerUser(fullname, email, pass, fn) {
        //axios.post supports params, and headers objects as well but due to some reason that is not working here
        //await axios.post('http://localhost:5000/registeruser',{params:{newuseremail:email,newuserpass:pass,fullname:fullname}},{headers:{'Access-Control-Allow-Origin': '*'}})
        await axios.post('http://localhost:5000/registeruser?newuseremail=' + email + '&newuserpass=' + SHA256(pass) + '&fullname=' + fullname)
            .then(function (response) {
                fn(response);
            })
            .catch(function (error) {
                fn(error);
            })
    }

    return (
        <div>
            <InputField againstUserInsertAnyValue={handleFullnameChange} fieldType="fullname" classToApply="form-control" idToApply="floatingInput" placeholderToShow="Full Name" labelToApply="Full name" />
            <InputField againstUserInsertAnyValue={handleEmailChange} fieldType="email" classToApply="form-control" idToApply="floatingInput" placeholderToShow="name@example.com" labelToApply="Email address" />
            <InputField againstUserInsertAnyValue={handlePassChange} fieldType="password" classToApply="form-control" idToApply="floatingPassword" placeholderToShow="Password" labelToApply="Password" />
            <InputField againstUserInsertAnyValue={handleConfirmPassChange} fieldType="password" classToApply="form-control" idToApply="floatingConfirmPassword" placeholderToShow="Confirm password" labelToApply="Confirm password" />
            <CustomButton onClick={handleRegisterSubmitBtn} title="Register" className="btn btn-primary w-100 py-2 mt-3" type="submit" />
            <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
        </div>
    );
}

export default Register