import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Tabs from '../../components/common/Tabs';
import Badge from '../../components/common/Badge';
import './MyApplicationsPage.css';

const MyApplicationsPage = () => {
  const [activeTab, setActiveTab] = useState('All');

  const mockApplications = [
    { id: 1, title: 'Smart City Traffic Management', university: 'IIT Delhi', appliedDate: '2026-08-10', status: 'Accepted', teamName: 'TechTitans' },
    { id: 2, title: 'Rural Healthcare Portal', university: 'NIT Trichy', appliedDate: '2026-08-12', status: 'Pending', teamName: 'HealthHacks' },
    { id: 3, title: 'Agricultural Yield Predictor', university: 'BITS Pilani', appliedDate: '2026-08-15', status: 'Pending', teamName: 'AgriInnovators' },
    { id: 4, title: 'Public Transport Tracker', university: 'IIIT Hyderabad', appliedDate: '2026-07-20', status: 'Rejected', teamName: 'TransitTech' },
    { id: 5, title: 'E-Waste Management System', university: 'VIT Vellore', appliedDate: '2026-08-01', status: 'Accepted', teamName: 'EcoWarriors' },
    { id: 6, title: 'Women Safety App', university: 'Delhi University', appliedDate: '2026-08-25', status: 'Pending', teamName: 'SafeGuard' }
  ];

  const getStatusVariant = (status) => {
    switch(status) {
      case 'Accepted': return 'success';
      case 'Pending': return 'warning';
      case 'Rejected': return 'danger';
      default: return 'primary';
    }
  };

  const filteredApps = activeTab === 'All' 
    ? mockApplications 
    : mockApplications.filter(app => app.status === activeTab);

  return (
    <DashboardLayout>
      <div className="applications-page">
        <header className="page-header">
          <h1>My Applications</h1>
          <p>Track the status of your challenge applications</p>
        </header>

        <div className="tabs-container">
          <Tabs 
            tabs={['All', 'Pending', 'Accepted', 'Rejected']} 
            activeTab={activeTab} 
            onChange={setActiveTab} 
          />
        </div>

        <div className="applications-table-wrapper">
          <table className="applications-table">
            <thead>
              <tr>
                <th>Challenge Title</th>
                <th>University / Org</th>
                <th>Team Name</th>
                <th>Applied Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredApps.map(app => (
                <tr key={app.id}>
                  <td><strong>{app.title}</strong></td>
                  <td>{app.university}</td>
                  <td>{app.teamName}</td>
                  <td>{new Date(app.appliedDate).toLocaleDateString()}</td>
                  <td>
                    <Badge text={app.status} variant={getStatusVariant(app.status)} />
                  </td>
                  <td>
                    {app.status === 'Accepted' ? (
                      <Link to={`/student/projects/${app.id}`} className="btn-action primary">Go to Project</Link>
                    ) : (
                      <button className="btn-action secondary">View Details</button>
                    )}
                  </td>
                </tr>
              ))}
              {filteredApps.length === 0 && (
                <tr>
                  <td colSpan="6" className="empty-state">No applications found for this status.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyApplicationsPage;
