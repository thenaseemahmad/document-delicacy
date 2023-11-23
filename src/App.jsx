import React, { useState } from 'react';
import './App.css';
// import Header from './header/Header';
import About from './about/About';
import LoginAndRegister from './loginandregister/LoginAndRegister';
import comimg from "./assets/companylogo.png";
import CustomButton from './button/CustomButton';
import Logo from './logo/Logo';


function App() {

  const [selectedButton, setSelectedButton] = useState('about');
  function handleThisBtnClick(ClickedButton) {
    setSelectedButton(ClickedButton);
  }

  // const handleAboutBtnCallback = (aboutBtn)=> {
  //   setAboutBtnPressed(aboutBtn);
  // }

  // const handleLoginBtnCallback = (loginBtn) =>{
  //   setLoginBtnPressed(loginBtn)
  // }

  // function AboutPageorLoginPage(){
  //   if (aboutBtnPressed===true && loginBtnPressed===false){
  //     return "about";
  //   }
  //   else if(aboutBtnPressed===false && loginBtnPressed===true){
  //     return "login";
  //   }
  //   else{
  //     return "about"
  //   }
  // }

  return (
    <div className="app">

      <div className='header'>
        {/* Lets not make the subcomponents using the custom componenets instead use all the components on App component itseld */}
        {/* <Header aboutBtnCallback={handleAboutBtnCallback} 
        loginBtnCallback={handleLoginBtnCallback}/>   */}
        {/* logo here */}
        <div className="header-main">
          <div className="logo-area">
            <Logo
              imagelocation={comimg}
              logoheight="30px"
            />
          </div>
          <div className="buttons-area">
            <CustomButton onPressThisBtn={()=>{handleThisBtnClick("about")}} title="About" classValue="btn" type="button" />
            <CustomButton onPressThisBtn={()=>{handleThisBtnClick("signinorregister")}} classValue="btn" title="Sign in/Register" type="button" />
          </div>
        </div>
        <hr />
      </div>

      <div className='mid-body'>
        {/* {AboutPageorLoginPage()==='about' ? <About /> : <LoginAndRegister />} */}
        {selectedButton === 'about' ? <About /> : <LoginAndRegister />}
      </div>
      <div className='footer'>

      </div>
    </div>
  );
}

export default App;
