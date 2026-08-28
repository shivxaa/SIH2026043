const fs = require('fs');
const path = require('path');

const basePath = path.join('c:', 'Users', 'shiva', 'OneDrive', 'Desktop', 'SIH26', 'SIH2026043', 'frontend', 'src', 'components');

const files = {
  'common/Button.jsx': `import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', size = 'md', fullWidth, disabled, onClick, type = 'button', icon, className = '' }) => {
  return (
    <button
      type={type}
      className={\`btn btn-\${variant} btn-\${size} \${fullWidth ? 'btn-full' : ''} \${className}\`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;`,
  'common/Button.css': `.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: var(--radius-sm);
  font-family: var(--font-sans);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
}
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.btn-icon {
  margin-right: 8px;
  display: inline-flex;
}
.btn-sm { padding: 6px 12px; font-size: 0.875rem; }
.btn-md { padding: 10px 16px; font-size: 1rem; }
.btn-lg { padding: 12px 24px; font-size: 1.125rem; }
.btn-full { width: 100%; }

.btn-primary { background: var(--color-accent); color: white; }
.btn-primary:hover:not(:disabled) { background: var(--color-accent-light); }

.btn-secondary { background: var(--color-primary); color: white; }
.btn-secondary:hover:not(:disabled) { background: var(--color-primary-light); }

.btn-outline { background: transparent; border: 1px solid var(--color-border); color: var(--color-text); }
.btn-outline:hover:not(:disabled) { border-color: var(--color-text-secondary); }

.btn-ghost { background: transparent; color: var(--color-text); }
.btn-ghost:hover:not(:disabled) { background: var(--color-background); }

.btn-danger { background: var(--color-danger); color: white; }
.btn-danger:hover:not(:disabled) { opacity: 0.9; }`,

  'common/Card.jsx': `import React from 'react';
import './Card.css';

const Card = ({ children, className = '', padding = 'md', hover = false }) => {
  return (
    <div className={\`card card-p-\${padding} \${hover ? 'card-hover' : ''} \${className}\`}>
      {children}
    </div>
  );
};

export default Card;`,
  'common/Card.css': `.card {
  background: var(--color-surface);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border-light);
  transition: transform 0.2s, box-shadow 0.2s;
}
.card-hover:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
.card-p-sm { padding: 12px; }
.card-p-md { padding: 20px; }
.card-p-lg { padding: 32px; }`,

  'common/Badge.jsx': `import React from 'react';
import './Badge.css';

const Badge = ({ children, variant = 'default', size = 'sm' }) => {
  return (
    <span className={\`badge badge-\${variant} badge-\${size}\`}>
      {children}
    </span>
  );
};

export default Badge;`,
  'common/Badge.css': `.badge {
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  font-weight: 500;
}
.badge-sm { padding: 2px 8px; font-size: 0.75rem; }
.badge-md { padding: 4px 12px; font-size: 0.875rem; }

.badge-default { background: var(--color-background); color: var(--color-text-secondary); }
.badge-primary { background: var(--color-accent-50); color: var(--color-accent); }
.badge-success { background: var(--color-success-50); color: var(--color-success); }
.badge-warning { background: var(--color-warning-50); color: var(--color-warning); }
.badge-danger { background: var(--color-danger-50); color: var(--color-danger); }
.badge-info { background: var(--color-border-light); color: var(--color-primary); }`,

  'common/Modal.jsx': `import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, title, children, size = 'md' }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={\`modal-content modal-\${size}\`} onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;`,
  'common/Modal.css': `.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-content {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
}
.modal-sm { width: 400px; }
.modal-md { width: 600px; }
.modal-lg { width: 800px; }
.modal-header {
  padding: 16px 20px;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-header h3 { margin: 0; font-size: 1.25rem; }
.modal-close {
  background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--color-text-secondary);
}
.modal-body {
  padding: 20px;
  overflow-y: auto;
}`,

  'common/Input.jsx': `import React from 'react';
import './Input.css';

const Input = ({ label, type = 'text', value, onChange, placeholder, error, icon, required, disabled, name }) => {
  return (
    <div className="input-group">
      {label && <label className="input-label">{label} {required && <span className="req">*</span>}</label>}
      <div className="input-wrapper">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={\`input-field \${icon ? 'has-icon' : ''} \${error ? 'has-error' : ''}\`}
        />
      </div>
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

export default Input;`,
  'common/Input.css': `.input-group { display: flex; flex-direction: column; margin-bottom: 16px; }
.input-label { margin-bottom: 6px; font-weight: 500; font-size: 0.875rem; color: var(--color-text); }
.req { color: var(--color-danger); }
.input-wrapper { position: relative; display: flex; align-items: center; }
.input-icon { position: absolute; left: 12px; color: var(--color-text-secondary); display: flex; }
.input-field {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-family: var(--font-sans);
  font-size: 1rem;
  transition: border-color 0.2s;
  outline: none;
}
.input-field.has-icon { padding-left: 36px; }
.input-field:focus { border-color: var(--color-accent); }
.input-field.has-error { border-color: var(--color-danger); }
.input-field:disabled { background: var(--color-background); cursor: not-allowed; }
.input-error { font-size: 0.75rem; color: var(--color-danger); margin-top: 4px; }`,

  'common/Select.jsx': `import React from 'react';
import './Select.css';

const Select = ({ label, value, onChange, options, placeholder, error, required, name }) => {
  return (
    <div className="select-group">
      {label && <label className="select-label">{label} {required && <span className="req">*</span>}</label>}
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={\`select-field \${error ? 'has-error' : ''}\`}
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && <span className="select-error">{error}</span>}
    </div>
  );
};

export default Select;`,
  'common/Select.css': `.select-group { display: flex; flex-direction: column; margin-bottom: 16px; }
.select-label { margin-bottom: 6px; font-weight: 500; font-size: 0.875rem; color: var(--color-text); }
.req { color: var(--color-danger); }
.select-field {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-family: var(--font-sans);
  font-size: 1rem;
  background: var(--color-surface);
  outline: none;
}
.select-field:focus { border-color: var(--color-accent); }
.select-field.has-error { border-color: var(--color-danger); }
.select-error { font-size: 0.75rem; color: var(--color-danger); margin-top: 4px; }`,

  'common/UserAvatar.jsx': `import React from 'react';
import './UserAvatar.css';

const UserAvatar = ({ name = 'User', size = 'md', src }) => {
  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  const colors = ['#2563eb', '#16a34a', '#ea580c', '#dc2626', '#8b5cf6'];
  const bgColor = colors[name.length % colors.length];

  return (
    <div 
      className={\`user-avatar avatar-\${size}\`} 
      style={{ backgroundColor: src ? 'transparent' : bgColor }}
    >
      {src ? (
        <img src={src} alt={name} className="avatar-img" />
      ) : (
        <span className="avatar-initials">{initials}</span>
      )}
    </div>
  );
};

export default UserAvatar;`,
  'common/UserAvatar.css': `.user-avatar {
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  overflow: hidden;
  flex-shrink: 0;
}
.avatar-sm { width: 32px; height: 32px; font-size: 0.75rem; }
.avatar-md { width: 40px; height: 40px; font-size: 1rem; }
.avatar-lg { width: 64px; height: 64px; font-size: 1.5rem; }
.avatar-img { width: 100%; height: 100%; object-fit: cover; }`,

  'common/Tabs.jsx': `import React from 'react';
import './Tabs.css';

const Tabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="tabs-container">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={\`tab-button \${activeTab === tab.id ? 'active' : ''}\`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;`,
  'common/Tabs.css': `.tabs-container {
  display: flex;
  border-bottom: 1px solid var(--color-border);
  gap: 24px;
  overflow-x: auto;
}
.tab-button {
  background: none;
  border: none;
  padding: 12px 0;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  cursor: pointer;
  position: relative;
  white-space: nowrap;
}
.tab-button:hover { color: var(--color-text); }
.tab-button.active { color: var(--color-accent); }
.tab-button.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--color-accent);
}`,

  'common/SearchBar.jsx': `import React from 'react';
import './SearchBar.css';

const SearchBar = ({ value, onChange, placeholder = 'Search...', onSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && onSearch) onSearch();
  };
  return (
    <div className="search-bar">
      <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input
        type="text"
        className="search-input"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;`,
  'common/SearchBar.css': `.search-bar {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}
.search-icon {
  position: absolute;
  left: 12px;
  width: 18px;
  height: 18px;
  color: var(--color-text-secondary);
}
.search-input {
  width: 100%;
  padding: 10px 12px 10px 36px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  font-size: 0.875rem;
  outline: none;
  transition: border-color 0.2s;
}
.search-input:focus { border-color: var(--color-accent); }`,

  'common/ProgressBar.jsx': `import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ value = 0, color = 'accent', size = 'md', showLabel = false }) => {
  const clampedValue = Math.min(100, Math.max(0, value));
  return (
    <div className="progress-wrapper">
      <div className={\`progress-track progress-\${size}\`}>
        <div 
          className={\`progress-fill fill-\${color}\`} 
          style={{ width: \`\${clampedValue}%\` }}
        />
      </div>
      {showLabel && <span className="progress-label">{clampedValue}%</span>}
    </div>
  );
};

export default ProgressBar;`,
  'common/ProgressBar.css': `.progress-wrapper { display: flex; align-items: center; width: 100%; gap: 12px; }
.progress-track {
  width: 100%;
  background: var(--color-border-light);
  border-radius: 999px;
  overflow: hidden;
}
.progress-sm { height: 4px; }
.progress-md { height: 8px; }
.progress-fill {
  height: 100%;
  border-radius: 999px;
  transition: width 0.4s ease;
}
.fill-accent { background: var(--color-accent); }
.fill-success { background: var(--color-success); }
.fill-warning { background: var(--color-warning); }
.fill-danger { background: var(--color-danger); }
.progress-label { font-size: 0.75rem; font-weight: 500; color: var(--color-text-secondary); }`,

  'layout/Navbar.jsx': `import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserAvatar from '../common/UserAvatar';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  // Mock auth state since useAuth hook isn't available
  const auth = { isAuthenticated: false, user: null }; 

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

        <div className={\`navbar-links \${mobileMenuOpen ? 'active' : ''}\`}>
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

export default Navbar;`,
  'layout/Navbar.css': `.navbar {
  position: sticky; top: 0; z-index: 100;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  height: 64px;
}
.navbar-container {
  display: flex; align-items: center; justify-content: space-between;
  height: 100%; max-width: 1200px; margin: 0 auto; padding: 0 20px;
}
.navbar-logo { display: flex; align-items: center; text-decoration: none; color: var(--color-primary); }
.logo-icon { width: 28px; height: 28px; margin-right: 8px; color: var(--color-accent); }
.logo-text { display: flex; flex-direction: column; line-height: 1; }
.logo-title { font-weight: 700; font-size: 1.2rem; }
.logo-subtitle { font-size: 0.7rem; font-weight: 600; color: var(--color-warning); }
.navbar-links { display: flex; gap: 24px; }
.nav-link { text-decoration: none; color: var(--color-text); font-weight: 500; font-size: 0.9rem; transition: color 0.2s; }
.nav-link:hover { color: var(--color-accent); }
.navbar-actions { display: flex; align-items: center; gap: 16px; }
.nav-btn-login { text-decoration: none; color: var(--color-text); font-weight: 500; }
.nav-btn-primary { background: var(--color-accent); color: white; border: none; padding: 8px 16px; border-radius: var(--radius-sm); font-weight: 500; cursor: pointer; }
.nav-btn-primary:hover { background: var(--color-accent-light); }
.nav-bell { background: none; border: none; cursor: pointer; position: relative; color: var(--color-text-secondary); width: 24px; height: 24px; }
.bell-badge { position: absolute; top: -4px; right: -4px; background: var(--color-danger); color: white; font-size: 0.6rem; padding: 2px 4px; border-radius: 10px; font-weight: bold; }
.mobile-menu-btn { display: none; background: none; border: none; cursor: pointer; width: 24px; height: 24px; color: var(--color-text); }
@media (max-width: 768px) {
  .navbar-links { display: none; position: absolute; top: 64px; left: 0; right: 0; background: white; flex-direction: column; padding: 20px; border-bottom: 1px solid var(--color-border); }
  .navbar-links.active { display: flex; }
  .mobile-menu-btn { display: block; }
  .nav-btn-login, .nav-btn-primary { display: none; }
}`,

  'layout/Sidebar.jsx': `import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  // Mock role
  const role = 'citizen'; 
  
  const menuMap = {
    citizen: [
      { path: '/dashboard', label: 'Dashboard', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
      { path: '/submit-challenge', label: 'Submit Challenge', icon: 'M12 5v14M5 12h14' },
      { path: '/my-challenges', label: 'My Challenges', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' }
    ],
    admin: [
      { path: '/dashboard', label: 'Dashboard', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
      { path: '/challenges', label: 'Challenges', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' }
    ]
  };

  const menu = menuMap[role] || menuMap.citizen;

  return (
    <aside className="sidebar">
      <div className="sidebar-menu">
        {menu.map(item => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.path} to={item.path} className={\`sidebar-item \${isActive ? 'active' : ''}\`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sidebar-icon">
                <path d={item.icon} />
              </svg>
              {item.label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;`,
  'layout/Sidebar.css': `.sidebar {
  width: 260px;
  background: var(--color-surface);
  border-right: 1px solid var(--color-border);
  height: calc(100vh - 64px);
  position: sticky;
  top: 64px;
  overflow-y: auto;
}
.sidebar-menu { padding: 16px 0; display: flex; flex-direction: column; gap: 4px; }
.sidebar-item {
  display: flex; align-items: center; padding: 12px 24px; text-decoration: none;
  color: var(--color-text-secondary); font-weight: 500; font-size: 0.95rem;
  border-left: 3px solid transparent; transition: all 0.2s;
}
.sidebar-item:hover { background: var(--color-background); color: var(--color-text); }
.sidebar-item.active {
  background: var(--color-accent-50);
  color: var(--color-accent);
  border-left-color: var(--color-accent);
}
.sidebar-icon { width: 20px; height: 20px; margin-right: 12px; }
@media (max-width: 768px) {
  .sidebar { display: none; }
}`,

  'layout/Footer.jsx': `import React from 'react';
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

export default Footer;`,
  'layout/Footer.css': `.footer {
  background: var(--color-primary);
  color: white;
  padding: 48px 20px 24px;
}
.footer-content { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 32px; }
.footer-brand { max-width: 400px; }
.footer-logo { display: flex; align-items: center; margin-bottom: 12px; }
.footer-logo h2 { margin: 0; font-size: 1.5rem; margin-left: 8px; }
.footer-icon { width: 32px; height: 32px; color: var(--color-accent-light); }
.footer-tagline { color: var(--color-text-light); margin-bottom: 16px; font-size: 0.95rem; }
.footer-disclaimer { font-size: 0.8rem; color: var(--color-warning-light); font-weight: 500; }
.footer-links { display: flex; flex-direction: column; gap: 12px; }
.footer-links a { color: var(--color-text-light); text-decoration: none; font-size: 0.95rem; transition: color 0.2s; }
.footer-links a:hover { color: white; }
.footer-bottom { max-width: 1200px; margin: 32px auto 0; padding-top: 24px; border-top: 1px solid var(--color-primary-light); text-align: center; color: var(--color-text-light); font-size: 0.85rem; }`,

  'layout/DashboardLayout.jsx': `import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './DashboardLayout.css';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Navbar />
      <div className="dashboard-body">
        <Sidebar />
        <main className="dashboard-main">
          <div className="dashboard-content">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;`,
  'layout/DashboardLayout.css': `.dashboard-layout { display: flex; flex-direction: column; min-height: 100vh; background: var(--color-background); }
.dashboard-body { display: flex; flex: 1; }
.dashboard-main { flex: 1; overflow-y: auto; height: calc(100vh - 64px); }
.dashboard-content { padding: 24px; max-width: 1200px; margin: 0 auto; }`,

  'challenge/ChallengeCard.jsx': `import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../common/Badge';
import './ChallengeCard.css';

const ChallengeCard = ({ challenge }) => {
  const priorityColor = { critical: 'danger', high: 'warning', medium: 'info', low: 'default' }[challenge.priority] || 'default';
  
  return (
    <div className="challenge-card">
      <div className="challenge-card-header">
        <Badge variant="primary">{challenge.category}</Badge>
        <Badge variant={priorityColor}>{challenge.priority}</Badge>
      </div>
      <Link to={\`/challenges/\${challenge.id}\`} className="challenge-card-title">
        {challenge.title}
      </Link>
      <div className="challenge-card-location">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        {challenge.district}
      </div>
      <p className="challenge-card-desc">{challenge.description}</p>
      <div className="challenge-card-tags">
        {challenge.skills?.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
      </div>
      <div className="challenge-card-footer">
        <div className="footer-stat">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          {challenge.beneficiaries}
        </div>
        <div className="footer-stat">Teams: {challenge.teams}</div>
        <div className="footer-stat">{challenge.date}</div>
      </div>
      {challenge.aiAnalysis?.matchedUniversities && (
        <div className="ai-match-indicator">✨ AI Matched Universities</div>
      )}
    </div>
  );
};

export default ChallengeCard;`,
  'challenge/ChallengeCard.css': `.challenge-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 20px;
  box-shadow: var(--shadow-xs);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex; flex-direction: column;
}
.challenge-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); border-color: var(--color-accent-100); }
.challenge-card-header { display: flex; justify-content: space-between; margin-bottom: 12px; }
.challenge-card-title { font-size: 1.1rem; font-weight: 600; color: var(--color-text); text-decoration: none; margin-bottom: 8px; display: block; }
.challenge-card-title:hover { color: var(--color-accent); }
.challenge-card-location { display: flex; align-items: center; color: var(--color-text-secondary); font-size: 0.85rem; margin-bottom: 12px; }
.challenge-card-location svg { width: 14px; height: 14px; margin-right: 4px; }
.challenge-card-desc { color: var(--color-text-secondary); font-size: 0.9rem; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 16px; flex: 1; }
.challenge-card-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
.skill-tag { background: var(--color-background); color: var(--color-text-secondary); font-size: 0.75rem; padding: 2px 8px; border-radius: 4px; }
.challenge-card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--color-border-light); padding-top: 12px; font-size: 0.8rem; color: var(--color-text-secondary); }
.footer-stat { display: flex; align-items: center; }
.footer-stat svg { width: 14px; height: 14px; margin-right: 4px; }
.ai-match-indicator { margin-top: 12px; font-size: 0.8rem; color: var(--color-accent); background: var(--color-accent-50); padding: 4px 8px; border-radius: 4px; display: inline-block; font-weight: 500; }`,

  'challenge/ChallengeFilters.jsx': `import React from 'react';
import './ChallengeFilters.css';

const ChallengeFilters = ({ filters, onFilterChange, onClear }) => {
  return (
    <div className="challenge-filters">
      <div className="filters-header">
        <h3>Filters</h3>
        <button onClick={onClear} className="btn-clear">Clear All</button>
      </div>
      <div className="filter-group">
        <label>Category</label>
        <select onChange={(e) => onFilterChange('category', e.target.value)} value={filters.category || ''}>
          <option value="">All Categories</option>
          <option value="education">Education</option>
          <option value="health">Healthcare</option>
          <option value="agriculture">Agriculture</option>
        </select>
      </div>
      <div className="filter-group">
        <label>District</label>
        <select onChange={(e) => onFilterChange('district', e.target.value)} value={filters.district || ''}>
          <option value="">All Districts</option>
          <option value="ranchi">Ranchi</option>
          <option value="dhanbad">Dhanbad</option>
        </select>
      </div>
    </div>
  );
};

export default ChallengeFilters;`,
  'challenge/ChallengeFilters.css': `.challenge-filters { background: var(--color-surface); padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--color-border); }
.filters-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.filters-header h3 { margin: 0; font-size: 1.1rem; }
.btn-clear { background: none; border: none; color: var(--color-text-secondary); cursor: pointer; font-size: 0.85rem; text-decoration: underline; }
.filter-group { margin-bottom: 16px; }
.filter-group label { display: block; margin-bottom: 6px; font-size: 0.85rem; font-weight: 500; }
.filter-group select { width: 100%; padding: 8px; border: 1px solid var(--color-border); border-radius: var(--radius-sm); outline: none; }
.filter-group select:focus { border-color: var(--color-accent); }`,

  'challenge/ProgressTimeline.jsx': `import React from 'react';
import './ProgressTimeline.css';

const ProgressTimeline = ({ stages }) => {
  return (
    <div className="progress-timeline">
      {stages.map((stage, index) => (
        <div key={stage.id} className={\`timeline-item \${stage.status}\`}>
          <div className="timeline-indicator">
            <div className="timeline-dot">
              {stage.status === 'completed' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>}
            </div>
            {index < stages.length - 1 && <div className="timeline-line" />}
          </div>
          <div className="timeline-content">
            <h4 className="timeline-title">{stage.label}</h4>
            {stage.date && <p className="timeline-date">{stage.date}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressTimeline;`,
  'challenge/ProgressTimeline.css': `.progress-timeline { display: flex; flex-direction: column; }
.timeline-item { display: flex; gap: 16px; min-height: 60px; }
.timeline-indicator { display: flex; flex-direction: column; align-items: center; width: 24px; }
.timeline-dot { width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: var(--color-background); border: 2px solid var(--color-border); z-index: 2; }
.timeline-dot svg { width: 12px; height: 12px; color: white; }
.timeline-line { flex: 1; width: 2px; background: var(--color-border); margin: 4px 0; }
.timeline-content { padding-bottom: 24px; flex: 1; }
.timeline-title { margin: 0 0 4px; font-size: 0.95rem; color: var(--color-text); font-weight: 500; }
.timeline-date { margin: 0; font-size: 0.8rem; color: var(--color-text-secondary); }
.timeline-item.completed .timeline-dot { background: var(--color-success); border-color: var(--color-success); }
.timeline-item.completed .timeline-line { background: var(--color-success); }
.timeline-item.active .timeline-dot { background: white; border-color: var(--color-accent); box-shadow: 0 0 0 4px var(--color-accent-50); }
.timeline-item.active .timeline-title { color: var(--color-accent); font-weight: 600; }`,

  'ai/AIInsightCard.jsx': `import React from 'react';
import './AIInsightCard.css';

const AIInsightCard = ({ title, children, type = 'analysis' }) => {
  return (
    <div className={\`ai-insight-card insight-\${type}\`}>
      <div className="ai-insight-header">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ai-icon">
          <path d="M12 2l3 6 6 3-6 3-3 6-3-6-6-3 6-3z"/>
        </svg>
        <h4>{title}</h4>
      </div>
      <div className="ai-insight-content">
        {children}
      </div>
    </div>
  );
};

export default AIInsightCard;`,
  'ai/AIInsightCard.css': `.ai-insight-card {
  background: linear-gradient(var(--color-surface), var(--color-surface)) padding-box,
              linear-gradient(135deg, var(--color-accent), #8b5cf6) border-box;
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  padding: 20px;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.05);
}
.ai-insight-header { display: flex; align-items: center; margin-bottom: 12px; }
.ai-icon { width: 18px; height: 18px; color: var(--color-accent); margin-right: 8px; }
.ai-insight-header h4 { margin: 0; font-size: 1.05rem; font-weight: 600; background: linear-gradient(135deg, var(--color-accent), #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.ai-insight-content { font-size: 0.95rem; color: var(--color-text); line-height: 1.5; }`,

  'ai/MatchScore.jsx': `import React from 'react';
import './MatchScore.css';

const MatchScore = ({ score, size = 'md', label }) => {
  const radius = size === 'lg' ? 40 : size === 'md' ? 24 : 16;
  const stroke = size === 'lg' ? 8 : 4;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (score / 100) * circumference;
  
  let color = 'var(--color-danger)';
  if (score >= 80) color = 'var(--color-success)';
  else if (score >= 60) color = 'var(--color-accent)';
  else if (score >= 40) color = 'var(--color-warning)';

  return (
    <div className={\`match-score-wrapper size-\${size}\`}>
      <svg height={radius * 2} width={radius * 2}>
        <circle stroke="var(--color-border-light)" fill="transparent" strokeWidth={stroke} r={normalizedRadius} cx={radius} cy={radius} />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="score-circle-progress"
        />
      </svg>
      <div className="score-text">
        <span className="score-value">{score}%</span>
      </div>
      {label && <span className="score-label">{label}</span>}
    </div>
  );
};

export default MatchScore;`,
  'ai/MatchScore.css': `.match-score-wrapper { position: relative; display: inline-flex; flex-direction: column; align-items: center; justify-content: center; }
.score-circle-progress { transition: stroke-dashoffset 1s ease-in-out; transform: rotate(-90deg); transform-origin: 50% 50%; }
.score-text { position: absolute; display: flex; align-items: center; justify-content: center; width: 100%; top: 0; }
.size-lg .score-text { height: 80px; font-size: 1.25rem; font-weight: 700; }
.size-md .score-text { height: 48px; font-size: 0.85rem; font-weight: 600; }
.size-sm .score-text { height: 32px; font-size: 0.65rem; font-weight: 600; }
.score-label { margin-top: 8px; font-size: 0.85rem; color: var(--color-text-secondary); font-weight: 500; }`,

  'ai/AISuggestions.jsx': `import React from 'react';
import './AISuggestions.css';

const AISuggestions = ({ suggestions, title = "AI Suggestions" }) => {
  return (
    <div className="ai-suggestions">
      <h4 className="suggestions-title">{title}</h4>
      <div className="suggestions-list">
        {suggestions.map((suggestion, idx) => (
          <div key={idx} className="suggestion-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="bulb-icon">
              <path d="M9 21h6M12 21v-3M15.59 14.59A2 2 0 0 0 17 13c0-2.76-2.24-5-5-5s-5 2.24-5 5a2 2 0 0 0 1.41 1.59M12 2v2"/>
            </svg>
            <p>{suggestion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AISuggestions;`,
  'ai/AISuggestions.css': `.ai-suggestions { background: var(--color-surface); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--color-border); }
.suggestions-title { margin: 0 0 12px; font-size: 1rem; color: var(--color-text); font-weight: 600; }
.suggestions-list { display: flex; flex-direction: column; gap: 8px; }
.suggestion-item { display: flex; align-items: flex-start; background: var(--color-accent-50); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--color-accent-100); }
.bulb-icon { width: 16px; height: 16px; color: var(--color-accent); margin-right: 12px; margin-top: 2px; flex-shrink: 0; }
.suggestion-item p { margin: 0; font-size: 0.9rem; color: var(--color-text); line-height: 1.4; }`,

  'dashboard/StatsCard.jsx': `import React from 'react';
import './StatsCard.css';

const StatsCard = ({ title, value, icon, trend, color = 'accent' }) => {
  return (
    <div className={\`stats-card color-\${color}\`}>
      <div className="stats-header">
        <h3 className="stats-title">{title}</h3>
        <div className="stats-icon">{icon}</div>
      </div>
      <div className="stats-body">
        <div className="stats-value">{value}</div>
        {trend && (
          <div className={\`stats-trend \${trend.direction}\`}>
            {trend.direction === 'up' ? '↑' : '↓'} {trend.value}%
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;`,
  'dashboard/StatsCard.css': `.stats-card { background: var(--color-surface); border-radius: var(--radius-md); padding: 20px; box-shadow: var(--shadow-xs); border: 1px solid var(--color-border); border-left-width: 4px; }
.stats-card.color-accent { border-left-color: var(--color-accent); }
.stats-card.color-success { border-left-color: var(--color-success); }
.stats-card.color-warning { border-left-color: var(--color-warning); }
.stats-card.color-danger { border-left-color: var(--color-danger); }
.stats-card.color-info { border-left-color: var(--color-primary-light); }
.stats-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.stats-title { margin: 0; font-size: 0.9rem; color: var(--color-text-secondary); font-weight: 500; }
.stats-icon { color: var(--color-text-light); width: 24px; height: 24px; }
.stats-body { display: flex; align-items: baseline; gap: 12px; }
.stats-value { font-size: 1.75rem; font-weight: 700; color: var(--color-text); }
.stats-trend { font-size: 0.85rem; font-weight: 500; }
.stats-trend.up { color: var(--color-success); }
.stats-trend.down { color: var(--color-danger); }`,

  'dashboard/ChartCard.jsx': `import React from 'react';
import './ChartCard.css';

const ChartCard = ({ title, children, action }) => {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3 className="chart-title">{title}</h3>
        {action && <div className="chart-action">{action}</div>}
      </div>
      <div className="chart-body">
        {children}
      </div>
    </div>
  );
};

export default ChartCard;`,
  'dashboard/ChartCard.css': `.chart-card { background: var(--color-surface); border-radius: var(--radius-md); padding: 20px; border: 1px solid var(--color-border); box-shadow: var(--shadow-xs); }
.chart-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.chart-title { margin: 0; font-size: 1.1rem; font-weight: 600; color: var(--color-text); }
.chart-body { width: 100%; position: relative; }`,

  'dashboard/NotificationPanel.jsx': `import React from 'react';
import './NotificationPanel.css';

const NotificationPanel = ({ notifications = [], limit = 5 }) => {
  const displayNotifs = notifications.slice(0, limit);
  return (
    <div className="notification-panel">
      <div className="panel-header">
        <h3>Notifications</h3>
      </div>
      <div className="panel-list">
        {displayNotifs.length === 0 ? <p className="empty">No new notifications</p> : null}
        {displayNotifs.map(n => (
          <div key={n.id} className={\`notif-item \${!n.read ? 'unread' : ''}\`}>
            <div className="notif-content">
              <p className="notif-title">{n.title}</p>
              <span className="notif-time">{n.time}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="panel-footer">
        <button className="btn-view-all">View All</button>
      </div>
    </div>
  );
};

export default NotificationPanel;`,
  'dashboard/NotificationPanel.css': `.notification-panel { background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid var(--color-border); display: flex; flex-direction: column; }
.panel-header { padding: 16px 20px; border-bottom: 1px solid var(--color-border); }
.panel-header h3 { margin: 0; font-size: 1.05rem; }
.panel-list { display: flex; flex-direction: column; }
.notif-item { padding: 12px 20px; border-bottom: 1px solid var(--color-border-light); display: flex; gap: 12px; }
.notif-item.unread { background: var(--color-accent-50); }
.notif-content { flex: 1; }
.notif-title { margin: 0 0 4px; font-size: 0.9rem; color: var(--color-text); }
.notif-item.unread .notif-title { font-weight: 600; }
.notif-time { font-size: 0.75rem; color: var(--color-text-secondary); }
.panel-footer { padding: 12px; text-align: center; }
.btn-view-all { background: none; border: none; color: var(--color-accent); font-size: 0.9rem; font-weight: 500; cursor: pointer; }
.btn-view-all:hover { text-decoration: underline; }
.empty { padding: 20px; text-align: center; color: var(--color-text-secondary); font-size: 0.9rem; }`,

  'dashboard/ActivityTimeline.jsx': `import React from 'react';
import './ActivityTimeline.css';

const ActivityTimeline = ({ activities = [] }) => {
  return (
    <div className="activity-timeline">
      {activities.map((act, index) => (
        <div key={act.id} className="act-item">
          <div className="act-indicator">
            <div className={\`act-dot \${act.type || 'default'}\`}></div>
            {index < activities.length - 1 && <div className="act-line"></div>}
          </div>
          <div className="act-content">
            <p className="act-text">{act.text}</p>
            <span className="act-time">{act.timestamp}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityTimeline;`,
  'dashboard/ActivityTimeline.css': `.activity-timeline { display: flex; flex-direction: column; padding: 12px 0; }
.act-item { display: flex; gap: 16px; }
.act-indicator { display: flex; flex-direction: column; align-items: center; width: 16px; }
.act-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--color-primary); z-index: 2; margin-top: 4px; }
.act-dot.success { background: var(--color-success); }
.act-dot.warning { background: var(--color-warning); }
.act-dot.danger { background: var(--color-danger); }
.act-dot.accent { background: var(--color-accent); }
.act-line { flex: 1; width: 2px; background: var(--color-border-light); margin: 4px 0; min-height: 24px; }
.act-content { padding-bottom: 16px; flex: 1; }
.act-text { margin: 0 0 4px; font-size: 0.9rem; color: var(--color-text); }
.act-time { font-size: 0.75rem; color: var(--color-text-secondary); }`,

  'dashboard/MiniChart.jsx': `import React from 'react';
import './MiniChart.css';

const MiniChart = ({ type = 'bar', data = [], height = 200 }) => {
  if (type === 'bar') {
    const max = Math.max(...data.map(d => d.value), 1);
    return (
      <div className="mini-chart bar-chart" style={{ height }}>
        <div className="bar-area">
          {data.map((d, i) => (
            <div key={i} className="bar-col">
              <div 
                className="bar-fill" 
                style={{ height: \`\${(d.value / max) * 100}%\`, backgroundColor: d.color || 'var(--color-accent)' }}
                title={\`\${d.label}: \${d.value}\`}
              ></div>
              <div className="bar-label">{d.label}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return <div className="mini-chart empty-chart">Chart type not supported</div>;
};

export default MiniChart;`,
  'dashboard/MiniChart.css': `.mini-chart { width: 100%; display: flex; flex-direction: column; }
.bar-chart .bar-area { display: flex; align-items: flex-end; justify-content: space-around; height: 100%; padding-bottom: 24px; position: relative; }
.bar-col { display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 100%; width: 15%; position: relative; }
.bar-fill { width: 100%; border-radius: 4px 4px 0 0; transition: height 0.3s; min-height: 4px; }
.bar-label { position: absolute; bottom: -20px; font-size: 0.7rem; color: var(--color-text-secondary); white-space: nowrap; }
.empty-chart { align-items: center; justify-content: center; color: var(--color-text-secondary); }`
};

Object.entries(files).forEach(([filepath, content]) => {
  const fullPath = path.join(basePath, filepath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(\`Created \${filepath}\`);
});
