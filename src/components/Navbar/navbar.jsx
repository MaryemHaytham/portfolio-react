import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './navbar.css';
import profileImage from '../../assets/images/me.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`sidebar  ${!isOpen ? 'collapsed' : ''}`}>
        <div className="position-relative w-100">
          {!isMobile && (
            <button 
              className="toggle-btn" 
              onClick={toggleSidebar}
            >
              <i className={`fas fa-chevron-${isOpen ? 'left' : 'right'}`}></i>
            </button>
          )}
          <div className="profile-section text-center">
            <div className="profile-img-container">
              <img src={profileImage} alt="Profile" className="rounded-circle" />
            </div>
            <div className="profile-info">
              <h2 className="fs-4 mb-1">Maryem Haytham</h2>
              <p className="small mb-0">Frontend Developer</p>
              <p className="smaller mb-0 text-muted">In Egypt</p>
            </div>
          </div>
        </div>
      
      <div className="nav-links">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
          <i className="fas fa-home"></i>
          <span>HOME</span>
        </Link>
        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
          <i className="fas fa-user"></i>
          <span>ABOUT</span>
        </Link>
         <Link to="/education" className={`nav-link ${location.pathname === '/education' ? 'active' : ''}`}>
          <i className="fas fa-graduation-cap"></i>
          <span>EDUCATION</span>
        </Link>
        <Link to="/skills" className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`}>
          <i className="fas fa-cog"></i>
          <span>SKILLS</span>
        </Link>
        <Link to="/experience" className={`nav-link ${location.pathname === '/experience' ? 'active' : ''}`}>
          <i className="fas fa-briefcase"></i>
          <span>EXPERIENCE</span>
        </Link>
      </div>
    </nav>
    </>
  );
}
