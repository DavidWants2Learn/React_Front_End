import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/__layout/Layout'
import SignIn from './components/signIn/SignIn'

const startApp = () => {
     if (localStorage.getItem('auth'))
     {
          ReactDOM.render(
               <div style={{margin: 20}}><Layout/></div>,
               document.getElementById("app")
          )
     }
     else
     {
          ReactDOM.render(
               <div><SignIn/></div>,
               document.getElementById("app")
          )
     }
}

startApp()

export {startApp}

