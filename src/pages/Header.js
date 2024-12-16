import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
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

          {/* Services Dropdown */}
          <li className="services">
            <span className="nav-btn" onClick={toggleServices}>
              Services
            </span>

            {isServicesOpen && (
              <div className="services-dropdown">
                <Link 
                   to="/services/PersonalizedRecommendation" 
                   className="dropdown-link"
                 >
                    Personalized Recommendations
                 </Link>

                <Link 
                  to="/services/SymptomsChecker" 
                  className="dropdown-link"
                >
                  Symptoms Checker
                </Link>
                <Link 
                  to="/services/health-records" 
                  className="dropdown-link"
                >
                  Health Record Management
                </Link>
                <Link 
                  to="/services/SkinCondition" 
                  className="dropdown-link"
                >
                  Skin Condition
                </Link>
                <Link 
                  to="/services/feedback" 
                  className="dropdown-link"
                >
                  Feedback
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
