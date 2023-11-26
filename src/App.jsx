import React, { useState } from 'react';
import './App.css';
import Header from './header/Header';
import About from './about/About';
import LoginAndRegister from './loginandregister/LoginAndRegister';
import UserWorkspace from './userworkspace/UserWorkspace';


function App() {

  const [selectedHeaderButton, setSelectedHeaderButton] = useState('about');
  const [userLoginFlag, setUserLoginflag] = useState(false);
  let aVariable = <LoginAndRegister userLoginStatusFlag={whetherUserLogin}/>;
  if(userLoginFlag===true){
    aVariable = <UserWorkspace />
  }
  
  function handleABtnOnHeader(btnClicked){
    setSelectedHeaderButton(btnClicked);
  }

  function whetherUserLogin(loginFlag){
    setUserLoginflag(loginFlag)
  }

  return (
    <div className="app">
      <div className='header'>
        <Header handleAboutBtnClick={()=>{handleABtnOnHeader("about")}} handleSigninBtnClick={()=>{handleABtnOnHeader("registerorlogin")}}/>
        <hr />
      </div>
      <div className='mid-body'>
        {/* If this user is not loggedin then execute this */}
        {/* {selectedHeaderButton === 'about' ? <About /> : <LoginAndRegister userLoginStatusFlag={whetherUserLogin}/>} */}
        {selectedHeaderButton === 'about' ? <About /> : aVariable}
        {/* Else excute this */}
        {/* Show workspace with left pane and right workspace here */}
      </div>
      <div className='footer'>
      </div>
    </div>
  );
}

export default App;
