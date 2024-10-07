import React, { useState } from 'react';
import './Navbar.scss';
import logo from '../../assets/logo.jpg';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav>
      <div className='Navbar'>
        <div className='logo'>
          <img src={logo} alt="Company Logo" />
        </div>
        <div className={`Links ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <a onClick={() => scrollToSection('home')}>Home</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('about')}>About</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('projects')}>Projects</a>
            </li>
          </ul>
        </div>
        <div className='Name'><h1>P<span>RAKASH C</span></h1> </div>

        <div className={`Toggle ${isMenuOpen ? 'close' : ''}`} onClick={toggleMenu}>
          {isMenuOpen ? 
            <span className="close-btn" style={{ color: "red", fontWeight: "bolder" }}>X</span> : 
            <span className="menu-btn" style={{ color: "black", fontSize: "23px" }}>☰</span> 
          }
        </div>
      </div>
    </nav>
  );
}
