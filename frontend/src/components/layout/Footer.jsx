import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="footer-icon">
              <path d="M4 12h16M4 18h16M4 6h16" />
            </svg>
            <h2>JanSetu</h2>
          </div>
          <p className="footer-tagline">Powered by collaborative innovation</p>
          <p className="footer-disclaimer">SIH 2026 Prototype — Not an official Government platform</p>
        </div>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/challenges">Challenges</Link>
          <Link to="/impact">Impact</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 JanSetu. Built for Smart India Hackathon.</p>
      </div>
    </footer>
  );
};

export default Footer;
