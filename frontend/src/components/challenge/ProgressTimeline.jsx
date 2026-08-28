import React from 'react';
import './ProgressTimeline.css';

const ProgressTimeline = ({ stages }) => {
  return (
    <div className="progress-timeline">
      {stages.map((stage, index) => (
        <div key={stage.id} className={`timeline-item ${stage.status}`}>
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

export default ProgressTimeline;
