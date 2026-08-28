import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import SearchBar from '../../components/common/SearchBar';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import './ChallengeManagementPage.css';

import { challenges } from '../../data/challenges';

const ChallengeManagementPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Pending Verification', 'Verified', 'Assigned', 'In Progress', 'Completed'];

  return (
    <DashboardLayout>
      <div className="challenge-management">
        <header className="page-header">
          <h1>Challenge Management</h1>
          <p>Review, verify, and assign community challenges.</p>
        </header>

        <div className="toolbar">
          <SearchBar placeholder="Search challenges by ID, title, or district..." />
          <div className="filters">
            <select className="filter-select"><option>All Categories</option></select>
            <select className="filter-select"><option>All Districts</option></select>
            <select className="filter-select"><option>All Priorities</option></select>
            <Button variant="outline">Bulk Actions</Button>
          </div>
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
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>District</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Submitted</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {(challenges || []).map(c => (
                <tr key={c.id}>
                  <td>#{c.id.substring(0, 6)}</td>
                  <td className="title-cell">{c.title}</td>
                  <td><Badge variant="outline">{c.category}</Badge></td>
                  <td>{c.district}</td>
                  <td><Badge variant={c.priority === 'High' ? 'danger' : 'warning'}>{c.priority}</Badge></td>
                  <td><Badge variant="success">{c.status}</Badge></td>
                  <td>{c.datePosted}</td>
                  <td>
                    <div className="action-buttons">
                      <Button variant="primary" size="small">Verify</Button>
                      <Button variant="outline" size="small">Assign</Button>
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

export default ChallengeManagementPage;
