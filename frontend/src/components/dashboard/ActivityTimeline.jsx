import React from 'react';
import './ActivityTimeline.css';

const ActivityTimeline = ({ activities = [] }) => {
  return (
    <div className="activity-timeline">
      {activities.map((act, index) => (
        <div key={act.id} className="act-item">
          <div className="act-indicator">
            <div className={`act-dot ${act.type || 'default'}`}></div>
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

export default ActivityTimeline;
