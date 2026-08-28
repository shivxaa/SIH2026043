import React from 'react';
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

export default ChartCard;
