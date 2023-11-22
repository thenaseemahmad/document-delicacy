import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import SHA256 from 'crypto-js/sha256';

function Register(props) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [registerApiResponse, setRegisterApiResponse] = useState(null);
    
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

    //Handling side effect of registerApiResponse state change here
    useEffect(()=>{
        if(registerApiResponse!=null && registerApiResponse.status===200){
            if(registerApiResponse.data.register_status==='success'){
                //user registered successfully
                //let user redirect to workspace
            }
            else if(registerApiResponse.data.register_status==='failed'){
                //inform user that this user alredy exist
                //and redirect user to login form
            }            
            console.log(registerApiResponse)
        }
        else{
            //inform user that something is not working, and ask user to check back later
        }
        
    },[registerApiResponse])

    function handleRegisterSubmitBtn() {
        //registerUser backend method here
        if ((password == null || password === '') || (confirmPass == null || confirmPass === '') || (password !== confirmPass)) {
            alert('Password, and confirm password should match, and cant be empty!')

        }
        else {
            registerUser(fullName, email, password,function(response){
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
            <div className="form-floating">
                <input onChange={handleFullnameChange} type="fullname" className="form-control" id="floatingInput" placeholder="Full Name" />
                <label for="floatingInput">Full name</label>
            </div>

            <div className="form-floating">
                <input onChange={handleEmailChange} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
            </div>

            <div className="form-floating">
                <input onChange={handlePassChange} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>

            <div className="form-floating">
                <input onChange={handleConfirmPassChange} type="password" className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password" />
                <label for="floatingPassword">Confirm Password</label>
            </div>
            <button onClick={handleRegisterSubmitBtn} className="btn btn-primary w-100 py-2 mt-3" type="submit">Register</button>
            <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
        </div>
    );
}

export default Register