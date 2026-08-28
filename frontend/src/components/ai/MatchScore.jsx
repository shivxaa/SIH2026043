import React from 'react';
import './MatchScore.css';

const MatchScore = ({ score, size = 'md', label }) => {
  const radius = size === 'lg' ? 40 : size === 'md' ? 24 : 16;
  const stroke = size === 'lg' ? 8 : 4;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (score / 100) * circumference;
  
  let color = 'var(--color-danger)';
  if (score >= 80) color = 'var(--color-success)';
  else if (score >= 60) color = 'var(--color-accent)';
  else if (score >= 40) color = 'var(--color-warning)';

  return (
    <div className={`match-score-wrapper size-${size}`}>
      <svg height={radius * 2} width={radius * 2}>
        <circle stroke="var(--color-border-light)" fill="transparent" strokeWidth={stroke} r={normalizedRadius} cx={radius} cy={radius} />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="score-circle-progress"
        />
      </svg>
      <div className="score-text">
        <span className="score-value">{score}%</span>
      </div>
      {label && <span className="score-label">{label}</span>}
    </div>
  );
};

export default MatchScore;
