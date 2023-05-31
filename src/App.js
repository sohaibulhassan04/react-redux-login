import './App.css';
import React from 'react'
import { Routes } from 'react-router-dom';
import WelcomeComponent from './Components/WelcomeComponent.js';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import SignIn from './Components/SignIn';
import Signup from './Components/Signup';
import HomeComponent from './Components/HomeComponent';
import PrivateRoutes from './Components/PrivateRoutes';

function App() {
  return (
      <div className='App'>

      {/* <Router>
        <Routes>
        <Route path='/' element={<WelcomeComponent />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<HomeComponent />} />
        </Routes>
      </Router> */}

    <Router>
        <Routes>
          <Route element={<PrivateRoutes/>}>
          <Route path='/' element={<HomeComponent />}/>
          </Route>
          <Route path='*' element={<SignIn/>}/>
        </Routes>
    </Router>
      </div>
    
  );
}

export default App;
