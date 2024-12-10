import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeServices = () => {
    setIsServicesOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1 className="logo-text">SDDA</h1>
      </div>

      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>

         
          <li 
            className="services"
            onMouseEnter={toggleServices} 
            onMouseLeave={closeServices}
          >
            <span className="nav-btn">Services</span>

            {isServicesOpen && (
              <div className="services-dropdown">
                <Link to="/services/personalized-recommendations" className="dropdown-link">
                  Personalized Recommendations
                </Link>
                <Link to="/services/symptoms-checker" className="dropdown-link">
                  Symptoms Checker
                </Link>
                <Link to="/services/health-records" className="dropdown-link">
                  Health Record Management
                </Link>
                <Link to="/services/emergency-assessment" className="dropdown-link">
                  Emergency Assessment
                </Link>
              </div>
            )}
          </li>

          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
