import React from 'react';
import './UserAvatar.css';

const UserAvatar = ({ name = 'User', size = 'md', src }) => {
  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  const colors = ['#2563eb', '#16a34a', '#ea580c', '#dc2626', '#8b5cf6'];
  const bgColor = colors[name.length % colors.length];

  return (
    <div 
      className={`user-avatar avatar-${size}`} 
      style={{ backgroundColor: src ? 'transparent' : bgColor }}
    >
      {src ? (
        <img src={src} alt={name} className="avatar-img" />
      ) : (
        <span className="avatar-initials">{initials}</span>
      )}
    </div>
  );
};

export default UserAvatar;
