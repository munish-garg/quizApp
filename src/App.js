import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css'
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import Home from './Components/Home/Home'

function App() {
  return(
    <Home/>
  )
}

// console.log(typeof(<GoogleLogin/>))

export default App;