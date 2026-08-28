import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import SearchBar from '../../components/common/SearchBar';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import './UserManagementPage.css';

import { citizens, students, mentors, faculty, admins } from '../../data/users';

const UserManagementPage = () => {
  const [activeTab, setActiveTab] = useState('All Users');
  const tabs = ['All Users', 'Citizens', 'Students', 'Mentors', 'Faculty', 'Admins'];

  const allUsers = [
    ...(citizens || []).map(u => ({ ...u, role: 'Citizen' })),
    ...(students || []).map(u => ({ ...u, role: 'Student' })),
    ...(mentors || []).map(u => ({ ...u, role: 'Mentor' })),
    ...(faculty || []).map(u => ({ ...u, role: 'Faculty' })),
    ...(admins || []).map(u => ({ ...u, role: 'Admin' }))
  ];

  const getFilteredUsers = () => {
    if (activeTab === 'All Users') return allUsers;
    return allUsers.filter(u => u.role === activeTab.replace(/s$/, ''));
  };

  return (
    <DashboardLayout>
      <div className="user-management">
        <header className="page-header">
          <h1>User Management</h1>
          <p>Manage platform accounts and roles.</p>
        </header>

        <section className="user-stats">
          <div className="stat-box"><span className="val">{allUsers.length}</span><span className="lbl">Total Users</span></div>
          <div className="stat-box"><span className="val">{citizens?.length || 0}</span><span className="lbl">Citizens</span></div>
          <div className="stat-box"><span className="val">{students?.length || 0}</span><span className="lbl">Students</span></div>
          <div className="stat-box"><span className="val">{mentors?.length || 0}</span><span className="lbl">Mentors</span></div>
        </section>

        <div className="toolbar">
          <SearchBar placeholder="Search users by name, email, or role..." />
          <Button variant="primary">Invite User</Button>
        </div>

        <div className="filter-tabs">
          {tabs.map(tab => (
            <button 
              key={tab} 
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Organization / Location</th>
                <th>Joined</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {getFilteredUsers().map((u, i) => (
                <tr key={i}>
                  <td>
                    <div className="user-cell">
                      <div className="avatar">{u.name?.charAt(0) || 'U'}</div>
                      <div className="user-info">
                        <strong>{u.name}</strong>
                        <span>{u.email}</span>
                      </div>
                    </div>
                  </td>
                  <td><Badge variant="outline">{u.role}</Badge></td>
                  <td>{u.university || u.district || u.industry || 'N/A'}</td>
                  <td>2026-01-10</td>
                  <td><Badge variant="success">Active</Badge></td>
                  <td>
                    <div className="action-buttons">
                      <Button variant="outline" size="small">Edit</Button>
                      <Button variant="danger" size="small">Suspend</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserManagementPage;
