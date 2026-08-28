import React from 'react';
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

export default AISuggestions;
