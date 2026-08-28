import React from 'react';
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
        className={`select-field ${error ? 'has-error' : ''}`}
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

export default Select;
