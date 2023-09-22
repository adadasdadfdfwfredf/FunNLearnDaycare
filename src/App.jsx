import React from 'react';
import './DaycareWebsite.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import { Route, Routes } from 'react-router-dom'; // Remove the BrowserRouter import here
import logo from './images/logo.png';
import ScrollToTop from './components/scrolltotop';
import Pictures from './pages/Pictures';

function DaycareWebsite() {
  return (
    <div className="daycare-website">
      <div className="top-bar"></div> 
      <img className="logo" src={logo} alt="Logo" /> 
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path= "/Pictures" element={<Pictures />} />
        </Routes>
      </main>
      <footer className="footer-section">
        <p>&copy; 2023 ABC Daycare. All rights reserved.</p>
      </footer>
      <ScrollToTop /> 
    </div>
  );
}

export default DaycareWebsite;

