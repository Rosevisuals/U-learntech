import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

  return (
    <HelmetProvider>
      <header className="header">
        <Helmet>
        <title>U-Learn Tech - Master Technology Skills with Expert-Led Online Courses</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Enhance your tech skills with U-Learn Tech's comprehensive online courses. From programming to UI/UX design, web development, data science" />
        <meta name="keywords" content="online learning, technology courses, programming, UI/UX design, web development, data science" />
        <meta name="author" content="U-Learn Tech" />
        
        
        {/* Schema.org for Google */}
        <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "EducationalOrganization",
            "name": "U-Learn Tech",
            "description": "U-Learn Tech offers comprehensive online courses in various technology fields, helping students master skills from programming to UI/UX design.",
            "url": "https://www.u-learntech.com",
            "logo": "https://www.u-learntech.com/images/u-learntech-logo.png",
            "sameAs": [
              "https://www.facebook.com/u-learntech",
              "https://www.twitter.com/u-learntech",
              "https://www.linkedin.com/company/u-learntech"
            ],
            "offers": {
              "@type": "Offer",
              "category": "Online Courses"
            }
          }
        `}
        </script>
        </Helmet>
        <div className="header-container">
  <h1 className='tech'>U-Learn Tech</h1>
  <button className="mobile-menu-button" onClick={toggleMenu} aria-label="Toggle menu">
    <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}></div>
  </button>
  <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
    <ul>
      <li><Link to="/courses">Courses</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
</div>

      </header>
    </HelmetProvider>
  );
};

export default Header;
