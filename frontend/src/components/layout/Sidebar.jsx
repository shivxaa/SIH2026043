import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const { role } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  const menuMap = {
    citizen: [
      { path: '/citizen/dashboard', label: 'Dashboard', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
      { path: '/submit-challenge', label: 'Submit Challenge', icon: 'M12 5v14M5 12h14' },
      { path: '/citizen/challenges', label: 'My Challenges', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' },
    ],
    university: [
      { path: '/university/dashboard', label: 'Dashboard', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
      { path: '/university/recommended', label: 'Recommended', icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14' },
      { path: '/university/marketplace', label: 'Marketplace', icon: 'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z' },
      { path: '/university/applications', label: 'Applications', icon: 'M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' },
      { path: '/university/projects', label: 'Projects', icon: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' },
    ],
    student: [
      { path: '/student/dashboard', label: 'Dashboard', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
      { path: '/student/recommended', label: 'AI Recommended', icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14' },
      { path: '/student/applications', label: 'My Applications', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' },
      { path: '/student/projects', label: 'My Projects', icon: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' },
      { path: '/student/tasks', label: 'Tasks & Milestones', icon: 'M9 11l3 3L22 4' },
    ],
    mentor: [
      { path: '/mentor/dashboard', label: 'Dashboard', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
      { path: '/mentor/projects', label: 'Assigned Projects', icon: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' },
      { path: '/mentor/milestones', label: 'Milestone Feedback', icon: 'M9 11l3 3L22 4' },
    ],
    industry: [
      { path: '/industry/dashboard', label: 'Dashboard', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
      { path: '/industry/opportunities', label: 'Opportunities', icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14' },
      { path: '/industry/requests', label: 'Requests', icon: 'M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' },
      { path: '/industry/supported', label: 'Supported Projects', icon: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' },
    ],
    admin: [
      { path: '/admin/dashboard', label: 'Dashboard', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
      { path: '/admin/challenges', label: 'Challenges', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' },
      { path: '/admin/projects', label: 'Projects', icon: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' },
      { path: '/admin/analytics', label: 'Analytics', icon: 'M18 20V10M12 20V4M6 20v-6' },
      { path: '/admin/users', label: 'Users', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' },
    ],
  };

  const menu = menuMap[role] || menuMap.citizen;

  return (
    <aside className={`sidebar ${collapsed ? 'sidebar-collapsed' : ''}`}>
      <button className="sidebar-toggle" onClick={() => setCollapsed(!collapsed)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {collapsed ? <path d="M9 18l6-6-6-6" /> : <path d="M15 18l-6-6 6-6" />}
        </svg>
      </button>
      <nav className="sidebar-menu">
        {menu.map(item => {
          const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');
          return (
            <Link key={item.path} to={item.path} className={`sidebar-item ${isActive ? 'active' : ''}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sidebar-icon">
                <path d={item.icon} />
              </svg>
              {!collapsed && <span className="sidebar-label">{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
