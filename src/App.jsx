import React, { useState } from 'react';
import './App.css';
import Header from './header/Header';
import About from './about/About';
import LoginAndRegister from './loginandregister/LoginAndRegister';


function App() {

  const [aboutBtnPressed, setAboutBtnPressed] = useState(false);
  const handleAboutBtnCallback = (aboutBtn)=> {
    setAboutBtnPressed(aboutBtn);
  }

  const [loginBtnPressed, setLoginBtnPressed] = useState(false);
  const handleLoginBtnCallback = (loginBtn) =>{
    setLoginBtnPressed(loginBtn)
  }

  function AboutPageorLoginPage(){
    if (aboutBtnPressed===true && loginBtnPressed===false){
      return "about";
    }
    else if(aboutBtnPressed===false && loginBtnPressed===true){
      return "login";
    }
    else{
      return "about"
    }
  }

  return (
    <div className="app">
      <div className='header'>
        <Header aboutBtnCallback={handleAboutBtnCallback} 
        loginBtnCallback={handleLoginBtnCallback}/>  
      </div>
      <div className='mid-body'>
        {AboutPageorLoginPage()==='about' ? <About /> : <LoginAndRegister />}
      </div>
      <div className='footer'>

      </div>
    </div>
  );
}

export default App;
