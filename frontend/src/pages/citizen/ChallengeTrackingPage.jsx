import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Badge from '../../components/common/Badge';
import ProgressTimeline from '../../components/challenge/ProgressTimeline';
import ActivityTimeline from '../../components/dashboard/ActivityTimeline';
import { challenges } from '../../data/challenges';
import './ChallengeTrackingPage.css';

const ChallengeTrackingPage = () => {
  const { id } = useParams();
  
  // Find challenge by id or use first one for demo if not found
  const challenge = challenges.find(c => c.id === id) || challenges[0];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'open': return <Badge variant="warning">Open</Badge>;
      case 'in_progress': return <Badge variant="primary">In Progress</Badge>;
      case 'resolved': return <Badge variant="success">Resolved</Badge>;
      default: return <Badge>{status}</Badge>;
    }
  };

  const activities = [
    { id: 1, title: 'Project Update', description: 'Initial prototype for pothole detection app completed.', time: '2 days ago', type: 'update' },
    { id: 2, title: 'Team Assigned', description: 'TechTitans from NIT Jamshedpur took up this challenge.', time: '1 week ago', type: 'success' },
    { id: 3, title: 'Challenge Verified', description: 'Nodal officer approved the challenge.', time: '2 weeks ago', type: 'system' },
    { id: 4, title: 'Challenge Submitted', description: 'You published this challenge.', time: '2 weeks ago', type: 'system' }
  ];

  return (
    <DashboardLayout>
      <div className="challenge-tracking-page">
        <div className="tracking-header">
          <Link to="/citizen/my-challenges" className="back-link">
            &larr; Back to My Challenges
          </Link>
          <div className="title-row">
            <h1>{challenge.title}</h1>
            {getStatusBadge(challenge.status)}
          </div>
          <div className="meta-row">
            <span><strong>ID:</strong> {challenge.id}</span>
            <span><strong>Category:</strong> {challenge.category}</span>
            <span><strong>Posted:</strong> {challenge.createdAt}</span>
          </div>
        </div>

        <div className="tracking-content">
          <div className="main-column">
            <div className="tracking-section">
              <h2>Progress Tracker</h2>
              <ProgressTimeline currentStatus={challenge.status} />
            </div>

            <div className="tracking-section">
              <h2>Description</h2>
              <p className="challenge-description">{challenge.description}</p>
            </div>

            <div className="tracking-section">
              <h2>Communication</h2>
              <div className="mock-chat">
                <div className="chat-message system">
                  <p>TechTitans team has started working on this challenge.</p>
                  <span className="time">1 week ago</span>
                </div>
                <div className="chat-message team">
                  <strong>TechTitans (Team Lead)</strong>
                  <p>Hello! We are working on a sensor-based solution. Could you specify if the water logging happens immediately after rain or is it a drainage overflow issue?</p>
                  <span className="time">5 days ago</span>
                </div>
                <div className="chat-message you">
                  <strong>You</strong>
                  <p>Hi, it usually happens immediately during heavy rains because the drains are clogged.</p>
                  <span className="time">5 days ago</span>
                </div>
                <div className="chat-input-area">
                  <input type="text" placeholder="Type a message to the team..." />
                  <button className="send-btn">Send</button>
                </div>
              </div>
            </div>
          </div>

          <div className="side-column">
            <div className="info-card">
              <h3>Assigned Team</h3>
              {challenge.status !== 'open' ? (
                <div className="team-info">
                  <div className="team-name">TechTitans</div>
                  <div className="team-uni">NIT Jamshedpur</div>
                  <div className="team-mentor">Mentor: Dr. A. Kumar</div>
                </div>
              ) : (
                <p className="no-team">No team assigned yet. Open for applications.</p>
              )}
            </div>

            <div className="info-card">
              <h3>Activity Log</h3>
              <ActivityTimeline activities={activities} />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ChallengeTrackingPage;
