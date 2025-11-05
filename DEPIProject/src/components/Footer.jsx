

import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact-section">
      <div className="footer-top-line"></div>

      <div className="footer-container">
        
        {/* Left Section */}
        <div className="footer-about">
          <h2 className="footer-logo">
          <img src="/imges/egypt/logo.png"></img> 
          </h2>

          <p>
            Enhancing tourism experiences through innovative digital services that connect travelers with top destinations, accommodations, and cultural adventures worldwide.
          </p>

          <div className="footer-icons">
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
{/* <a href="navv">BACK TO TOP</a></ */}
          {/* <button className="back-btn" > <Link to="/Navbar"> BACK TO TOP</Link></button> */}

          <button 
  className="back-btn" 
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  BACK TO TOP
</button>

        </div>

        {/* Links */}
        <div className="footer-links">
          <div>
            <h3>Site Map</h3>
            <ul>
              <li>Homepage</li>
              <li>Technology</li>
              <li>Clinical Impact</li>
              <li>Research & Resources</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Portal</li>
            </ul>
          </div>

          <div>
            <h3>Legal</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Legal & Careers</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="footer-copy">
        © 2025 Ataraxis. All rights reserved.
      </p>
    </footer>
  );
}
