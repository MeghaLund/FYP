import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-list">
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/about-us" className="footer-link">About Us</a></li>
            <li><a href="/contact" className="footer-link">Contact</a></li>
            <li><a href="/services" className="footer-link">Services</a></li>
            {/* <li><a href="/login" className="footer-link">Login</a></li> */}
          </ul>
        </div>

        
        <div className="footer-section">
          <h4 className="footer-heading">Our Services</h4>
          <ul className="footer-list">
            <li><a href="/services/personalized-recommendations" className="footer-link">Personalized Recommendations</a></li>
            <li><a href="/services/symptoms-checker" className="footer-link">Symptoms Checker</a></li>
            <li><a href="/services/health-records" className="footer-link">Health Record Management</a></li>
            <li><a href="/services/emergency-assessment" className="footer-link">Emergency Assessment</a></li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h4 className="footer-heading">About Project</h4>
          <p className="footer-text">
            Skin Disease Diagnosis Assistant © 2024 | All Rights Reserved.
          </p>
          <p className="footer-text">
            Empowering health with cutting-edge technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
