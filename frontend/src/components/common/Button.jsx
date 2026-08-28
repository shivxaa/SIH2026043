import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', size = 'md', fullWidth, disabled, onClick, type = 'button', icon, className = '' }) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
