import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import StatsCard from '../../components/dashboard/StatsCard';
import ChallengeCard from '../../components/challenge/ChallengeCard';
import NotificationPanel from '../../components/dashboard/NotificationPanel';
import './IndustryDashboard.css';

import { challenges } from '../../data/challenges';
import { projects } from '../../data/projects';
import { notifications } from '../../data/notifications';

const IndustryDashboard = () => {
  const featuredChallenges = challenges?.slice(0, 3) || [];
  const activeCollaborations = projects?.slice(0, 4) || [];

  return (
    <DashboardLayout>
      <div className="industry-dashboard">
        <header className="dashboard-header">
          <h1>Welcome, TechCorp Industries</h1>
          <p>Here's your collaboration overview</p>
        </header>

        <section className="stats-section">
          <StatsCard title="Open Opportunities" value="24" icon="briefcase" trend="+3" />
          <StatsCard title="Active Collaborations" value="6" icon="users" trend="+1" />
          <StatsCard title="Resources Committed" value="₹12.5L" icon="rupee" trend="Steady" />
          <StatsCard title="Projects Supported" value="15" icon="check-circle" trend="+2" />
        </section>

        <div className="dashboard-grid">
          <div className="main-content">
            <section className="featured-opportunities">
              <div className="section-header">
                <h2>Featured Opportunities</h2>
                <Link to="/industry/opportunities" className="view-all">View All</Link>
              </div>
              <div className="opportunities-grid">
                {featuredChallenges.map(challenge => (
                  <ChallengeCard key={challenge.id} challenge={challenge} />
                ))}
              </div>
            </section>

            <section className="active-collaborations">
              <div className="section-header">
                <h2>Active Collaborations</h2>
                <Link to="/industry/projects" className="view-all">View All</Link>
              </div>
              <div className="collaboration-list">
                {activeCollaborations.map(project => (
                  <div key={project.id} className="collaboration-item">
                    <div className="collab-info">
                      <h3>{project.title}</h3>
                      <p>{project.university} | {project.teamName}</p>
                    </div>
                    <div className="collab-status">
                      <span className="badge">Mentorship</span>
                      <span className={`status-badge ${project.status}`}>{project.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="sidebar">
            <NotificationPanel notifications={notifications} />
          </aside>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default IndustryDashboard;
