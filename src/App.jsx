import React from 'react';
import './App.css';
import {aboutBtnClick, Header} from './header/Header';
import About from './about/About';
import Login from './login/Login';

var isLogin = true;

function App() {
  return (
    <div className="app">
      <div className='header'>
        <Header />  
      </div>
      <div className='mid-body'>
        {false ? <About /> : <Login />}
      </div>
      <div className='footer'>

      </div>
    </div>
  );
}

export default App;
