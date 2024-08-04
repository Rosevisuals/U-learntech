import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCoursesHover = (isOpen) => {
    setIsCoursesOpen(isOpen);
  };

  const handleCategoriesHover = (isOpen) => {
    setIsCategoriesOpen(isOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/*<Link to="/" className="logo">
          <img src="image/u_learn_tech_logo_final.png" alt="U-Learn Tech Logo" />
  </Link>*/}
        <h1>U-Learn Tech</h1>
        
       

        <button className="mobile-menu-button" onClick={toggleMenu} aria-label="Toggle menu">
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}></div>
        </button>

        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li 
              onMouseEnter={() => handleCoursesHover(true)}
              onMouseLeave={() => handleCoursesHover(false)}
            >
              <Link to="/courses">Courses</Link>
              {isCoursesOpen && (
                <ul className="dropdown">
                  <li><Link to="/courses/web-development">Web Development</Link></li>
                  <li><Link to="/courses/data-science">Data Science</Link></li>
                  <li><Link to="/courses/mobile-development">Mobile Development</Link></li>
                  <li><Link to="/courses/machine-learning">Machine Learning</Link></li>
                </ul>
              )}
            </li>
            <li 
              onMouseEnter={() => handleCategoriesHover(true)}
              onMouseLeave={() => handleCategoriesHover(false)}
            >
              <Link to="/categories">Categories</Link>
              {isCategoriesOpen && (
                <ul className="dropdown">
                  <li><Link to="/categories/programming">Programming</Link></li>
                  <li><Link to="/categories/design">Design</Link></li>
                  <li><Link to="/categories/business">Business</Link></li>
                  <li><Link to="/categories/marketing">Marketing</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
