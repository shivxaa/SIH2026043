import React from 'react';
import './AIInsightCard.css';

const AIInsightCard = ({ title, children, type = 'analysis' }) => {
  return (
    <div className={`ai-insight-card insight-${type}`}>
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

export default AIInsightCard;
