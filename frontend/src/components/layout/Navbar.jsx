import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import UserAvatar from '../common/UserAvatar';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="logo-icon">
            <path d="M4 12h16M4 18h16M4 6h16" />
          </svg>
          <div className="logo-text">
            <span className="logo-title">JanSetu</span>
            <span className="logo-subtitle">जनसेतु</span>
          </div>
        </Link>

        <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          {!auth.isAuthenticated ? (
            <>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/challenges" className="nav-link">Challenges</Link>
              <Link to="/how-it-works" className="nav-link">How It Works</Link>
              <Link to="/impact" className="nav-link">Impact</Link>
              <Link to="/about" className="nav-link">About</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
              <Link to="/challenges" className="nav-link">Challenges</Link>
            </>
          )}
        </div>

        <div className="navbar-actions">
          {!auth.isAuthenticated ? (
            <>
              <Link to="/login" className="nav-btn-login">Login</Link>
              <button onClick={() => navigate('/submit-challenge')} className="nav-btn-primary">Report a Challenge</button>
            </>
          ) : (
            <>
              <button className="nav-bell">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                <span className="bell-badge">3</span>
              </button>
              <UserAvatar name={auth.user?.name || 'User'} size="md" />
            </>
          )}
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
