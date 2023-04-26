import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import Home1 from './pages/Home1';
import Dashboard from './pages/Dashboard';
import JoinRide from './pages/JoinRide';
import Myprofile from './pages/Myprofile';
import CreateRide from './pages/CreateRide';
import CreatedProfile from './pages/CreatedProfile';
import SingleRidePage from './pages/SingleRidePage';

function App() {
  

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]);
  

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/joinride" element={<JoinRide />} />
        <Route path="/myprofile1" element={<Myprofile/>} />
        <Route path="/createride" element={<CreateRide/>} />
        <Route path="/createdprofile" element={<CreatedProfile/>} />
        <Route path="/sride" element={<SingleRidePage/>} />
        
      </Routes> 
    </>
  );
}

export default App;
