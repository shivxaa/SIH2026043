import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import './CollaborationRequestsPage.css';

const MOCK_REQUESTS = [
  { id: 1, from: 'NIT Jamshedpur', team: 'Innovators', project: 'Smart Water Grid', support: 'IoT Sensor Funding', date: '2026-08-20', status: 'pending' },
  { id: 2, from: 'BIT Mesra', team: 'Techies', project: 'Rural Telemedicine', support: 'Cloud Infrastructure', date: '2026-08-18', status: 'pending' },
  { id: 3, from: 'Ranchi College', team: 'EcoWarriors', project: 'Waste Management UI', support: 'UI/UX Mentorship', date: '2026-08-15', status: 'accepted' },
  { id: 4, from: 'ISM Dhanbad', team: 'Miners', project: 'Safety Drones', support: 'Drone Hardware Testing', date: '2026-08-10', status: 'declined' },
  { id: 5, from: 'Vinoba Bhave', team: 'AgriTech', project: 'Crop Disease Predictor', support: 'Machine Learning Mentorship', date: '2026-08-22', status: 'pending' },
  { id: 6, from: 'Jadavpur Univ', team: 'Solaris', project: 'Solar Pump Optimization', support: 'Funding (₹5L)', date: '2026-08-25', status: 'active' },
];

const CollaborationRequestsPage = () => {
  const [activeTab, setActiveTab] = useState('Incoming');
  const tabs = ['Incoming', 'Sent', 'Active'];

  const getFilteredRequests = () => {
    if (activeTab === 'Incoming') return MOCK_REQUESTS.filter(r => r.status === 'pending');
    if (activeTab === 'Active') return MOCK_REQUESTS.filter(r => r.status === 'accepted' || r.status === 'active');
    return MOCK_REQUESTS.filter(r => r.status === 'declined'); // Mocking 'Sent' as declined for now
  };

  return (
    <DashboardLayout>
      <div className="collab-req-page">
        <header className="page-header">
          <h1>Collaboration Requests</h1>
          <p>Manage incoming requests from university teams and your outgoing offers.</p>
        </header>

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

        <div className="requests-list">
          {getFilteredRequests().map(req => (
            <div key={req.id} className="request-card">
              <div className="req-header">
                <div className="req-title">
                  <h3>{req.project}</h3>
                  <span className="req-date">{req.date}</span>
                </div>
                <Badge variant={
                  req.status === 'pending' ? 'warning' : 
                  req.status === 'declined' ? 'danger' : 'success'
                }>{req.status}</Badge>
              </div>
              
              <div className="req-details">
                <p><strong>From:</strong> {req.from} ({req.team})</p>
                <p><strong>Support Requested:</strong> {req.support}</p>
              </div>

              {req.status === 'pending' && (
                <div className="req-actions">
                  <Button variant="success">Accept</Button>
                  <Button variant="danger">Decline</Button>
                  <Button variant="outline">Message</Button>
                </div>
              )}
            </div>
          ))}
          {getFilteredRequests().length === 0 && (
            <div className="no-requests">
              <p>No {activeTab.toLowerCase()} requests found.</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CollaborationRequestsPage;
