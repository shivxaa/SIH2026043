import React from 'react';
import './StatsCard.css';

const StatsCard = ({ title, value, icon, trend, color = 'accent' }) => {
  return (
    <div className={`stats-card color-${color}`}>
      <div className="stats-header">
        <h3 className="stats-title">{title}</h3>
        <div className="stats-icon">{icon}</div>
      </div>
      <div className="stats-body">
        <div className="stats-value">{value}</div>
        {trend && (
          <div className={`stats-trend ${trend.direction}`}>
            {trend.direction === 'up' ? '↑' : '↓'} {trend.value}%
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
