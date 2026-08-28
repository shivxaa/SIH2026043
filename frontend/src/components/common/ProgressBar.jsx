import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ value = 0, color = 'accent', size = 'md', showLabel = false }) => {
  const clampedValue = Math.min(100, Math.max(0, value));
  return (
    <div className="progress-wrapper">
      <div className={`progress-track progress-${size}`}>
        <div 
          className={`progress-fill fill-${color}`} 
          style={{ width: `${clampedValue}%` }}
        />
      </div>
      {showLabel && <span className="progress-label">{clampedValue}%</span>}
    </div>
  );
};

export default ProgressBar;
