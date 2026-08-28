import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import StatsCard from '../../components/dashboard/StatsCard';
import ActivityTimeline from '../../components/dashboard/ActivityTimeline';
import ChallengeCard from '../../components/challenge/ChallengeCard';
import NotificationPanel from '../../components/dashboard/NotificationPanel';
import Button from '../../components/common/Button';
import useAuth from '../../hooks/useAuth';
import { challenges } from '../../data/challenges';
import './CitizenDashboard.css';

const CitizenDashboard = () => {
  const { user } = useAuth();
  
  // Mock data for citizen dashboard
  const myChallenges = challenges.slice(0, 3); // Just taking first 3 for demo
  const activities = [
    { id: 1, title: 'Challenge Updated', description: 'Your challenge "Water Supply Issue" has been assigned to NIT Jamshedpur', time: '2 hours ago', type: 'update' },
    { id: 2, title: 'AI Analysis Complete', description: 'AI has completed analysis of your recent challenge', time: '5 hours ago', type: 'system' },
    { id: 3, title: 'New Comment', description: 'A student asked a question on your challenge', time: '1 day ago', type: 'comment' },
    { id: 4, title: 'Challenge Published', description: 'Your challenge "Street Light Repair" is now live', time: '2 days ago', type: 'success' },
    { id: 5, title: 'Account Created', description: 'Welcome to JanSetu!', time: '1 week ago', type: 'system' }
  ];

  return (
    <DashboardLayout>
      <div className="citizen-dashboard">
        <div className="dashboard-header">
          <div className="welcome-section">
            <h1 className="welcome-title">Welcome back, {user?.name || 'Citizen'}</h1>
            <p className="welcome-subtitle">Here's an overview of your civic contributions</p>
          </div>
          <div className="header-actions">
            <Link to="/citizen/submit-challenge">
              <Button variant="primary">Submit New Challenge</Button>
            </Link>
          </div>
        </div>

        <div className="stats-row">
          <StatsCard title="My Challenges" value="12" icon="file-text" trend="+2 this month" />
          <StatsCard title="In Progress" value="5" icon="activity" trend="Active now" />
          <StatsCard title="Resolved" value="4" icon="check-circle" trend="Completed" />
          <StatsCard title="Pending Review" value="3" icon="clock" trend="Awaiting action" />
        </div>

        <div className="dashboard-grid">
          <div className="main-content">
            <div className="section-header">
              <h2>My Recent Challenges</h2>
              <Link to="/citizen/my-challenges" className="view-all-link">View All</Link>
            </div>
            <div className="recent-challenges-list">
              {myChallenges.map(challenge => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
              ))}
            </div>
          </div>
          
          <div className="side-content">
            <div className="side-panel">
              <NotificationPanel notifications={[]} />
            </div>
            <div className="side-panel">
              <h3 className="panel-title">Recent Activity</h3>
              <ActivityTimeline activities={activities} />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CitizenDashboard;
