import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Badge from '../../components/common/Badge';
import './ProjectReviewPage.css';

const ProjectReviewPage = () => {
  const { id } = useParams();
  const [rating, setRating] = useState(0);

  const deliverables = [
    { id: 1, name: 'Project Proposal Document', submitted: '2026-08-10', status: 'Approved' },
    { id: 2, name: 'UI/UX Mockups', submitted: '2026-08-15', status: 'Approved' },
    { id: 3, name: 'Database Architecture', submitted: '2026-08-20', status: 'Revision Needed' },
    { id: 4, name: 'Core API Implementation', submitted: '2026-08-26', status: 'Pending Review' }
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Approved': return 'success';
      case 'Pending Review': return 'warning';
      case 'Revision Needed': return 'danger';
      default: return 'primary';
    }
  };

  return (
    <DashboardLayout>
      <div className="project-review-page">
        <div className="review-header-section card">
          <div className="header-top">
            <div>
              <h1>Smart City Traffic Management</h1>
              <p className="team-subtext">Team TechTitans • IIT Delhi</p>
            </div>
            <Badge text="In Progress" variant="primary" />
          </div>
          
          <div className="lifecycle-timeline">
            <div className="step completed">1. Ideation</div>
            <div className="step completed">2. Design</div>
            <div className="step active">3. Implementation</div>
            <div className="step">4. Testing</div>
            <div className="step">5. Final</div>
          </div>
        </div>

        <div className="review-grid">
          <div className="main-content">
            <section className="deliverables-section card">
              <h2>Project Deliverables</h2>
              <div className="table-responsive">
                <table className="deliverables-table">
                  <thead>
                    <tr>
                      <th>Deliverable Name</th>
                      <th>Submitted Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deliverables.map(item => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.submitted}</td>
                        <td><Badge text={item.status} variant={getStatusBadge(item.status)} /></td>
                        <td>
                          <button className="btn-inline-review">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="preview-section card">
              <h2>Document / Code Preview</h2>
              <div className="mock-preview-area">
                <div className="mock-code-header">
                  <span>src/api/routes.js</span>
                </div>
                <pre className="mock-code-content">
{`const express = require('express');
const router = express.Router();
const trafficController = require('../controllers/traffic');

// Get real-time traffic data
router.get('/data', trafficController.getTrafficData);

// Predict congestion
router.post('/predict', trafficController.predictCongestion);

module.exports = router;`}
                </pre>
              </div>
            </section>
          </div>

          <div className="side-content">
            <section className="feedback-section card">
              <h2>Leave Feedback</h2>
              
              <div className="rating-area">
                <label>Overall Quality Rating</label>
                <div className="stars">
                  {[1, 2, 3, 4, 5].map(star => (
                    <span 
                      key={star} 
                      className={`star ${rating >= star ? 'active' : ''}`}
                      onClick={() => setRating(star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <div className="feedback-form">
                <label>Detailed Feedback</label>
                <textarea 
                  placeholder="Provide constructive feedback for the team..."
                  rows="8"
                ></textarea>

                <div className="action-buttons">
                  <button className="btn-approve">Approve Deliverable</button>
                  <button className="btn-revision">Request Revision</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProjectReviewPage;
