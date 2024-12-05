import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        {/*<h2>U-LEARN TECH</h2>*/}
        <nav>
          <a href="/faq">FAQs</a>
          <span>|</span>
          <a href="/privacy">Privacy Policy</a>
          <span>|</span>
          <a href="/help">Help</a>
          <span>|</span>
          <a href="/about">About Us</a>
          <span>|</span>
          <a href="/contact">Contact Us</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 U-LEARN TECH. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
