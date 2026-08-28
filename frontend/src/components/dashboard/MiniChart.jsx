import React from 'react';
import './MiniChart.css';

const MiniChart = ({ type = 'bar', data = [], height = 200 }) => {
  if (type === 'bar') {
    const max = Math.max(...data.map(d => d.value), 1);
    return (
      <div className="mini-chart bar-chart" style={{ height }}>
        <div className="bar-area">
          {data.map((d, i) => (
            <div key={i} className="bar-col">
              <div 
                className="bar-fill" 
                style={{ height: `${(d.value / max) * 100}%`, backgroundColor: d.color || 'var(--color-accent)' }}
                title={`${d.label}: ${d.value}`}
              ></div>
              <div className="bar-label">{d.label}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return <div className="mini-chart empty-chart">Chart type not supported</div>;
};

export default MiniChart;
