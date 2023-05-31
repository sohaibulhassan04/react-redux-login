import './App.css';
import React from 'react'
import { Routes } from 'react-router-dom';
import WelcomeComponent from './Components/WelcomeComponent.js';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import SignIn from './Components/SignIn';
import HomeComponent from './Components/HomeComponent';
import PrivateRoutes from './Components/PrivateRoutes';

function App() {
  return (
      <div className='App'>

     

    <Router>
        <Routes>
          <Route element={<PrivateRoutes/>}>
          <Route path='/home' element={<HomeComponent exact/>}/>
          <Route path='/welcome' element={<WelcomeComponent />} />
          </Route>
          <Route path='*' element={<SignIn/>}/>
        </Routes>
    </Router>
      </div>
    
  );
}

export default App;
