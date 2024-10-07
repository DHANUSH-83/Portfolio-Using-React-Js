
import React from 'react';
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='Footer'>
      <h1>Contact Us</h1>
      <div className='container'>
        <a href="#" target="_blank" rel="noopener noreferrer"  >
          <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" >
          <img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="Twitter" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" >
          <img src="https://img.icons8.com/ios-filled/50/000000/facebook.png" alt="Facebook" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" >
          <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" />
        </a>
      </div>
      <p>© 2024 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
