import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css'
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import Home from './Components/Home/Home'
import Particles from 'react-particles-js';
function App() {
  return(
    <>
    <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
    <Home/>
    </>
  )
}

// console.log(typeof(<GoogleLogin/>))

export default App;