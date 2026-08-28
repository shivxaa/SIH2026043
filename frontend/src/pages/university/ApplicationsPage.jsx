import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Tabs from '../../components/common/Tabs';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import './ApplicationsPage.css';

const ApplicationsPage = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const applications = [
    { id: 1, teamName: 'TechTitans', challenge: 'Water Logging in Sector 4', skills: ['IoT', 'React', 'Civil Eng'], appliedDate: '2026-08-25', status: 'pending', members: 4 },
    { id: 2, teamName: 'EcoWarriors', challenge: 'Waste Management Optimization', skills: ['Python', 'Data Analysis'], appliedDate: '2026-08-26', status: 'pending', members: 3 },
    { id: 3, teamName: 'SmartBuilders', challenge: 'Pothole Detection System', skills: ['AI/ML', 'Computer Vision'], appliedDate: '2026-08-20', status: 'approved', members: 5 },
    { id: 4, teamName: 'GovTech Innovators', challenge: 'Digital Public Services', skills: ['Blockchain', 'Web3'], appliedDate: '2026-08-15', status: 'rejected', members: 4 },
  ];

  const filteredApps = applications.filter(app => app.status === activeTab);

  const tabs = [
    { id: 'pending', label: 'Pending Review' },
    { id: 'approved', label: 'Approved' },
    { id: 'rejected', label: 'Rejected' }
  ];

  return (
    <DashboardLayout>
      <div className="applications-page">
        <div className="page-header">
          <h1>Student Team Applications</h1>
          <p>Review and approve teams applying to work on JanSetu challenges.</p>
        </div>

        <div className="applications-content">
          <div className="tabs-container">
            <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
          </div>

          <div className="table-container">
            {filteredApps.length > 0 ? (
              <table className="applications-table">
                <thead>
                  <tr>
                    <th>Team Name</th>
                    <th>Target Challenge</th>
                    <th>Core Skills</th>
                    <th>Date Applied</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApps.map(app => (
                    <tr key={app.id}>
                      <td>
                        <strong>{app.teamName}</strong>
                        <div className="members-count">{app.members} Members</div>
                      </td>
                      <td className="challenge-col">{app.challenge}</td>
                      <td>
                        <div className="skills-tags">
                          {app.skills.map((skill, idx) => (
                            <span key={idx} className="skill-tag">{skill}</span>
                          ))}
                        </div>
                      </td>
                      <td>{app.appliedDate}</td>
                      <td>
                        <Badge variant={app.status === 'approved' ? 'success' : app.status === 'rejected' ? 'danger' : 'warning'}>
                          {app.status.toUpperCase()}
                        </Badge>
                      </td>
                      <td className="actions-col">
                        <Button variant="outline" size="sm">View Proposal</Button>
                        {app.status === 'pending' && (
                          <div className="action-buttons mt-2">
                            <button className="btn-icon approve" title="Approve">✓</button>
                            <button className="btn-icon reject" title="Reject">✕</button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="empty-state">
                <p>No applications found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ApplicationsPage;
