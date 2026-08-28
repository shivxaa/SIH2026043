import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import ProgressBar from '../../components/common/ProgressBar';
import Badge from '../../components/common/Badge';
import { projects } from '../../data/projects';
import './AssignedProjectsPage.css';

const AssignedProjectsPage = () => {
  return (
    <DashboardLayout>
      <div className="assigned-projects-page">
        <header className="page-header">
          <h1>Assigned Projects</h1>
          <p>Monitor and guide your mentee teams</p>
        </header>

        <div className="assigned-projects-list">
          {projects.map((project, index) => (
            <div key={index} className="assigned-project-card">
              <div className="card-main-info">
                <div className="header-info">
                  <h2>{project.title || 'Project Title'}</h2>
                  <p className="challenge-name">Solving: {project.challengeTitle || 'Challenge Name'}</p>
                </div>
                <Badge text={project.status || 'Active'} variant="success" />
              </div>

              <div className="team-info-section">
                <div className="team-details">
                  <span className="label">Team Name</span>
                  <span className="value">{project.teamName || 'Team Alpha'}</span>
                </div>
                <div className="team-details">
                  <span className="label">University</span>
                  <span className="value">{project.university || 'IIT Delhi'}</span>
                </div>
                <div className="team-avatars">
                  <div className="avatar">A</div>
                  <div className="avatar">R</div>
                  <div className="avatar">S</div>
                  <div className="avatar">+2</div>
                </div>
              </div>

              <div className="project-stats-grid">
                <div className="stat-box">
                  <span className="stat-label">Milestones</span>
                  <span className="stat-value">3 / 7 Completed</span>
                </div>
                <div className="stat-box">
                  <span className="stat-label">Last Activity</span>
                  <span className="stat-value">2 days ago</span>
                </div>
                <div className="stat-box progress-box">
                  <div className="progress-header">
                    <span className="stat-label">Overall Progress</span>
                    <span className="stat-value">{project.progress || 45}%</span>
                  </div>
                  <ProgressBar progress={project.progress || 45} />
                </div>
              </div>

              <div className="card-actions">
                <Link to={`/mentor/review/${project.id || index}`} className="btn-full-review">Review Details</Link>
                <Link to={`/mentor/milestones`} className="btn-give-feedback">Give Feedback</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AssignedProjectsPage;
