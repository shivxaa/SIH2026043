import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import StatsCard from '../../components/dashboard/StatsCard';
import ChartCard from '../../components/dashboard/ChartCard';
import ActivityTimeline from '../../components/dashboard/ActivityTimeline';
import MatchScore from '../../components/ai/MatchScore';
import useAuth from '../../hooks/useAuth';
import { challenges } from '../../data/challenges';
import { projects } from '../../data/projects';
import './UniversityDashboard.css';

const UniversityDashboard = () => {
  const { user } = useAuth();
  
  // Mock data specifically for university
  const recommendedChallenges = challenges.slice(0, 3).map(c => ({...c, matchScore: Math.floor(Math.random() * 20) + 75}));
  const activeProjectsList = projects.slice(0, 4);

  return (
    <DashboardLayout>
      <div className="university-dashboard">
        <div className="dashboard-header">
          <div className="welcome-section">
            <h1 className="welcome-title">Welcome back, {user?.name || 'University Nodal Officer'}</h1>
            <p className="welcome-subtitle">BIT Mesra Innovation Hub Overview</p>
          </div>
          <div className="header-actions">
            <Link to="/university/recommended-challenges" className="btn-primary-link">
              Explore AI Recommendations
            </Link>
          </div>
        </div>

        <div className="stats-row">
          <StatsCard title="Recommended Challenges" value="28" icon="zap" trend="New matches today" />
          <StatsCard title="Active Projects" value="8" icon="briefcase" trend="Across 4 departments" />
          <StatsCard title="Teams Deployed" value="12" icon="users" trend="48 students active" />
          <StatsCard title="Success Rate" value="78%" icon="trending-up" trend="+5% this semester" />
        </div>

        <div className="dashboard-grid">
          <div className="main-content">
            <div className="section-card">
              <div className="section-header">
                <h2>Top AI Recommendations for Your Institute</h2>
                <Link to="/university/recommended-challenges" className="view-all-link">View All</Link>
              </div>
              <div className="recommended-list">
                {recommendedChallenges.map(challenge => (
                  <div key={challenge.id} className="recommended-item">
                    <div className="score-col">
                      <MatchScore score={challenge.matchScore} size="sm" />
                    </div>
                    <div className="details-col">
                      <h4>{challenge.title}</h4>
                      <p>{challenge.category} • {challenge.district}</p>
                    </div>
                    <div className="action-col">
                      <Link to={`/university/challenges/${challenge.id}`} className="view-btn">View Details</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-card mt-6">
              <div className="section-header">
                <h2>Active Projects Progress</h2>
                <Link to="/university/projects" className="view-all-link">Manage Projects</Link>
              </div>
              <div className="projects-table-container">
                <table className="projects-table">
                  <thead>
                    <tr>
                      <th>Project Team</th>
                      <th>Challenge</th>
                      <th>Progress</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeProjectsList.map(project => (
                      <tr key={project.id}>
                        <td><strong>{project.teamName}</strong></td>
                        <td className="truncate">{project.challengeTitle}</td>
                        <td>
                          <div className="progress-cell">
                            <div className="progress-bar-bg">
                              <div className="progress-bar-fill" style={{ width: `${project.progress}%` }}></div>
                            </div>
                            <span>{project.progress}%</span>
                          </div>
                        </td>
                        <td>
                          <span className={`status-pill ${project.status.toLowerCase()}`}>{project.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="side-content">
            <div className="section-card">
              <h3>Department Involvement</h3>
              <div className="chart-placeholder">
                <p>Computer Science: 45%</p>
                <p>Civil Engineering: 30%</p>
                <p>Electrical: 15%</p>
                <p>Mechanical: 10%</p>
                {/* CSS based visual representation instead of external chart lib */}
                <div className="mini-bars">
                  <div className="bar"><div className="fill cse" style={{width: '45%'}}></div></div>
                  <div className="bar"><div className="fill ce" style={{width: '30%'}}></div></div>
                  <div className="bar"><div className="fill ee" style={{width: '15%'}}></div></div>
                  <div className="bar"><div className="fill me" style={{width: '10%'}}></div></div>
                </div>
              </div>
            </div>
            
            <div className="section-card">
              <h3>Pending Applications</h3>
              <div className="pending-list">
                <div className="pending-item">
                  <div className="pending-info">
                    <strong>CodeCrafters</strong>
                    <span>Applied for: Smart Traffic System</span>
                  </div>
                  <Link to="/university/applications" className="action-link">Review</Link>
                </div>
                <div className="pending-item">
                  <div className="pending-info">
                    <strong>GreenEarth</strong>
                    <span>Applied for: Waste Management</span>
                  </div>
                  <Link to="/university/applications" className="action-link">Review</Link>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Link to="/university/applications" className="view-all-link">View all 5 pending</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UniversityDashboard;
