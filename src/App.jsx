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
  const [modelDetailToEdit, setModelDetailToEdit] = useState(null);
  let screenToShow = <About />;
  
  if(selectedHeaderButton==="about" && userLoginFlag===false && modelDetailToEdit===null){
    screenToShow = <About />;
  }
  else if(selectedHeaderButton==="registerorlogin" && userLoginFlag===false && modelDetailToEdit===null){
    // ask user to either login or register
    screenToShow = <LoginAndRegister userLoginStatusFlag={whetherUserLogin}/>;
  }
  else if((selectedHeaderButton==="registerorlogin" || selectedHeaderButton==="about" ) && userLoginFlag===true && modelDetailToEdit===null){
    screenToShow = <UserWorkspace returnModelDetailToEditifAny={callbackGetDetailOfTheModel}/>
  }
  else if ((selectedHeaderButton==="registerorlogin" || selectedHeaderButton==="about" ) && userLoginFlag===true && modelDetailToEdit.modeltype==='Inovoice processing'){
    screenToShow = <ModelTrainingWorkspace handleSaveAndCloseButton={handleSaveAndCloseOfCurrentModel} detailOfTheModelToTrain={modelDetailToEdit}/>
  }

  function handleSaveAndCloseOfCurrentModel(){
    setModelDetailToEdit(null);
  }
  

  function callbackGetDetailOfTheModel(modelDetail){
    if (modelDetail.modeltype===undefined || modelDetail.modeltype===null){
      // follow the normal path to login or register
    }
    else if(modelDetail.modeltype==='Inovoice processing'){
      setModelDetailToEdit(modelDetail)
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
        {screenToShow}
      </div>
      <div className='footer'>
      </div>
    </div>
  );
}

export default App;
