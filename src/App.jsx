import React, { useEffect } from 'react';
import './DaycareWebsite.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import { Route, Routes, useNavigate } from 'react-router-dom'; 
import logo from './images/logo.png';
import ScrollToTop from './components/scrolltotop';
import Pictures from './pages/Pictures';

function DaycareWebsite() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home');
  }, []);

  return (
    <div className="daycare-website">
      <div className="top-bar">
        <p className="call-us-text">
          <span className="text-content">Call Us Now For Inquiries</span>
          <span className="phone-number">+1 (408) 262 1264</span>
        </p>
      </div>
      <img className="logo" src={logo} alt="Logo" />
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/pictures" element={<Pictures />} />
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
