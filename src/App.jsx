import React, { useState } from 'react';
import './App.css';
import Header from './header/Header';
import About from './about/About';
import LoginAndRegister from './loginandregister/LoginAndRegister';
import UserWorkspace from './userworkspace/UserWorkspace';
import ModelTrainingWorkspace from './modeltrainer/ModelTrainingWorkspace';


function App() {

  const [selectedHeaderButton, setSelectedHeaderButton] = useState('about');
  const [userLoginFlag, setUserLoginflag] = useState(true);
  const [editModelScreen, setEditModelScreen] = useState(null);
  let screenToShow = <About />;
  // let loginorworkspace = <LoginAndRegister userLoginStatusFlag={whetherUserLogin}/>;
  // if(userLoginFlag===true){
  //   loginorworkspace = <UserWorkspace returnModelNameToEditifAny={callbackGetNameOfTheModel}/>
  // }
  if(selectedHeaderButton==="about" && userLoginFlag===false && editModelScreen===null){
    screenToShow = <About />;
  }
  else if(selectedHeaderButton==="registerorlogin" && userLoginFlag===false && editModelScreen===null){
    // ask user to either login or register
    screenToShow = <LoginAndRegister userLoginStatusFlag={whetherUserLogin}/>;
  }
  else if((selectedHeaderButton==="registerorlogin" || selectedHeaderButton==="about" ) && userLoginFlag===true && editModelScreen===null){
    screenToShow = <UserWorkspace returnModelNameToEditifAny={callbackGetNameOfTheModel}/>
  }
  else if ((selectedHeaderButton==="registerorlogin" || selectedHeaderButton==="about" ) && userLoginFlag===true && editModelScreen==="invoiceprocess"){
    screenToShow = <ModelTrainingWorkspace handleSaveAndCloseButton={handleSaveAndCloseOfCurrentModel}/>
  }

  function handleSaveAndCloseOfCurrentModel(){
    setEditModelScreen(null);
  }
  

  function callbackGetNameOfTheModel(modelName){
    console.log(modelName)
    if (modelName===undefined || modelName===null){
      // follow the normal path to login or register
    }
    else if(modelName==="invoiceprocess"){
      setEditModelScreen("invoiceprocess")
    }
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
        {/* Show this screen until user did not select create a model */}
        {/* {selectedHeaderButton === 'about' ? <About /> : loginorworkspace}*/}
        {screenToShow}
      </div>
      <div className='footer'>
      </div>
    </div>
  );
}

export default App;
