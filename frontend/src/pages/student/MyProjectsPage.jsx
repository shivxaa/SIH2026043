import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import ProgressBar from '../../components/common/ProgressBar';
import Badge from '../../components/common/Badge';
import { projects } from '../../data/projects';
import './MyProjectsPage.css';

const MyProjectsPage = () => {
  return (
    <DashboardLayout>
      <div className="my-projects-page">
        <header className="page-header">
          <h1>My Projects</h1>
          <p>Manage and track your active challenge projects</p>
        </header>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card-header">
                <div>
                  <h2 className="project-title">{project.title || 'Project Title'}</h2>
                  <p className="project-challenge">Solving: {project.challengeTitle || 'Challenge Name'}</p>
                </div>
                <Badge text={project.status || 'Active'} variant="success" />
              </div>

              <div className="project-details">
                <div className="detail-item">
                  <span className="label">Team</span>
                  <span className="value">{project.teamName || 'Team Name'}</span>
                </div>
                <div className="detail-item">
                  <span className="label">University</span>
                  <span className="value">{project.university || 'University Name'}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Mentor</span>
                  <span className="value">{project.mentor || 'Mentor Name'}</span>
                </div>
              </div>

              <div className="project-progress-section">
                <div className="progress-header">
                  <span className="progress-label">Overall Progress</span>
                  <span className="progress-value">{project.progress || 0}%</span>
                </div>
                <ProgressBar progress={project.progress || 0} />
              </div>

              <div className="project-milestone">
                <strong>Next Milestone:</strong> {project.nextMilestone || 'Implementation'}
                <span className="milestone-date">Due: {project.dueDate || 'TBD'}</span>
              </div>

              <div className="project-actions">
                <Link to={`/student/tasks`} className="btn-tasks">Tasks & Milestones</Link>
                <Link to={`/student/projects/${project.id || index}`} className="btn-view">View Workspace</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyProjectsPage;
