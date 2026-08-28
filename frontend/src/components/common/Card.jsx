import React from 'react';
import './Card.css';

const Card = ({ children, className = '', padding = 'md', hover = false }) => {
  return (
    <div className={`card card-p-${padding} ${hover ? 'card-hover' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
