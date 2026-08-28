import React from 'react';
import './NotificationPanel.css';

const NotificationPanel = ({ notifications = [], limit = 5 }) => {
  const displayNotifs = notifications.slice(0, limit);
  return (
    <div className="notification-panel">
      <div className="panel-header">
        <h3>Notifications</h3>
      </div>
      <div className="panel-list">
        {displayNotifs.length === 0 ? <p className="empty">No new notifications</p> : null}
        {displayNotifs.map(n => (
          <div key={n.id} className={`notif-item ${!n.read ? 'unread' : ''}`}>
            <div className="notif-content">
              <p className="notif-title">{n.title}</p>
              <span className="notif-time">{n.time}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="panel-footer">
        <button className="btn-view-all">View All</button>
      </div>
    </div>
  );
};

export default NotificationPanel;
