import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Badge from '../../components/common/Badge';
import './MilestoneFeedbackPage.css';

const MilestoneFeedbackPage = () => {
  const [expandedId, setExpandedId] = useState(null);

  const reviews = [
    { id: 1, title: 'Core Implementation', project: 'Smart City Traffic', team: 'TechTitans', due: '2026-08-25', submitted: '2026-08-26', status: 'Pending Review', notes: 'We have implemented the core routing algorithm. Please check the API performance.' },
    { id: 2, title: 'Database Design', project: 'Rural Healthcare', team: 'HealthHacks', due: '2026-08-20', submitted: '2026-08-19', status: 'Needs Revision', notes: 'Updated the schema based on previous feedback.' },
    { id: 3, title: 'UI Mockups', project: 'Agri Predictor', team: 'AgriInnovators', due: '2026-08-15', submitted: '2026-08-14', status: 'Approved', notes: 'Figma link attached.' }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getStatusVariant = (status) => {
    switch(status) {
      case 'Approved': return 'success';
      case 'Pending Review': return 'warning';
      case 'Needs Revision': return 'danger';
      default: return 'primary';
    }
  };

  return (
    <DashboardLayout>
      <div className="milestone-feedback-page">
        <header className="page-header">
          <h1>Milestone Reviews</h1>
          <p>Review team submissions and provide feedback</p>
        </header>

        <div className="filters-container">
          <select className="filter-select">
            <option>All Projects</option>
            <option>Smart City Traffic</option>
            <option>Rural Healthcare</option>
            <option>Agri Predictor</option>
          </select>
          <select className="filter-select">
            <option>All Statuses</option>
            <option>Pending Review</option>
            <option>Needs Revision</option>
            <option>Approved</option>
          </select>
        </div>

        <div className="reviews-list-container">
          {reviews.map(review => (
            <div key={review.id} className={`review-accordion-card ${expandedId === review.id ? 'expanded' : ''}`}>
              <div className="accordion-header" onClick={() => toggleExpand(review.id)}>
                <div className="header-main">
                  <h3>{review.title}</h3>
                  <div className="sub-info">
                    <span>{review.project}</span> • <span>{review.team}</span>
                  </div>
                </div>
                <div className="header-meta">
                  <div className="dates">
                    <span className="due-date">Due: {review.due}</span>
                    <span className="submit-date">Submitted: {review.submitted}</span>
                  </div>
                  <Badge text={review.status} variant={getStatusVariant(review.status)} />
                  <span className="expand-icon">{expandedId === review.id ? '▲' : '▼'}</span>
                </div>
              </div>

              {expandedId === review.id && (
                <div className="accordion-body">
                  <div className="submission-details">
                    <div className="team-notes">
                      <h4>Team Notes:</h4>
                      <p>{review.notes}</p>
                    </div>
                    <div className="deliverables-list-mini">
                      <h4>Attached Deliverables:</h4>
                      <ul>
                        <li>📄 source_code_v1.zip</li>
                        <li>📄 api_documentation.pdf</li>
                      </ul>
                    </div>
                  </div>

                  <div className="feedback-section-inline">
                    <h4>Mentor Feedback</h4>
                    <textarea 
                      placeholder="Enter your feedback here..." 
                      rows="4"
                    ></textarea>
                    <div className="action-row">
                      <button className="btn-req-revision">Request Revision</button>
                      <button className="btn-approve-ms">Approve Milestone</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MilestoneFeedbackPage;
