import React from 'react';
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
          className={`input-field ${icon ? 'has-icon' : ''} ${error ? 'has-error' : ''}`}
        />
      </div>
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

export default Input;
