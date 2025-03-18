import React from 'react';
import './footer.css';
import logo2 from '../images/logo.png';
import apple from '../images/apple.png'
import google from '../images/google.png'

import { faFacebookF,faPinterestP,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className='foot'>
            <div>
                <img className='logopng' src={logo2} alt='logo2'/>
            </div>
            <div>
                <p className='footer-para'>69 Selous Ave, Harare, Zimbabwe Abo Support(+263) 03 0000052</p>
            </div>
            <div>
                <a href="mailto:info@demo.com" className='footer-a'>info@demo.com</a>
            </div>
        </div>
        <div className="footer-section">
          <h3>Help Center</h3>
          <ul>
            <li>FAQ</li>
            <li>About E-Commerce</li>
            <li>Support Tickets</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Become A Supplier</li>
            <li>Track Order</li>
            <li>Services & Membership</li>
            <li>Help & Community</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Buy On E-Commerce</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy & Rules</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Download App</h3>
          <div className="download-app">
            <div className='download-div'>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="download-link"
              >
                <img src={google} alt="Google Play" className="download-icon" />
                <div className="download-text">
                  <span className='down-text'>GET IT ON</span>
                  <strong className='down-store'> Google Play</strong>
                </div>
              </a>
            </div>
            <div className='download-div'>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="download-link"
              >
                <img src={apple} alt="App Store" className="download-icons" />
                <div className="download-text">
                  <span className='down-text'>Download on the</span>
                  <strong className='down-store'> App Store</strong>
                </div>
              </a>
            </div>
          </div>
      </div>
      </div>

      <div className="footer-bottom">
        <p>©2021 E-Commerce All Rights Reserved</p>
        <div className="social-icons">
          <div>
            <h4 className='social-icon-h4'>Stay Connected: </h4>
          </div>
          <div className='social-icon-div'>
            <a className='s-icon icon1' href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} style={{color: '#5a5656'}}/>
            </a>
            <a className='s-icon icon2' href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} style={{color: '#5a5656'}}/>
            </a>
            <a className='s-icon icon3' href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} style={{color: '#5a5656'}}/>
            </a>
            <a className='s-icon icon4' href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faPinterestP} style={{color: '#5a5656'}}/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;