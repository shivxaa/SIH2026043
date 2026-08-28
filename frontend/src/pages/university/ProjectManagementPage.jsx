import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import ProgressBar from '../../components/common/ProgressBar';
import Badge from '../../components/common/Badge';
import { projects } from '../../data/projects';
import './ProjectManagementPage.css';

const ProjectManagementPage = () => {
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const toggleProject = (id) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  const getStatusBadge = (status) => {
    const s = status.toLowerCase();
    if (s === 'active') return <Badge variant="primary">Active</Badge>;
    if (s === 'completed') return <Badge variant="success">Completed</Badge>;
    if (s === 'review') return <Badge variant="warning">In Review</Badge>;
    return <Badge>{status}</Badge>;
  };

  return (
    <DashboardLayout>
      <div className="project-management-page">
        <div className="page-header">
          <h1>Project Management</h1>
          <p>Monitor active student projects, track milestones, and manage deliverables.</p>
        </div>

        <div className="projects-list">
          {projects.map(project => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <div key={project.id} className={`project-card ${isExpanded ? 'expanded' : ''}`}>
                <div className="project-summary" onClick={() => toggleProject(project.id)}>
                  <div className="project-main-info">
                    <h3>{project.challengeTitle}</h3>
                    <div className="project-meta">
                      <span className="team-badge">Team: {project.teamName}</span>
                      <span className="mentor-info">Mentor: {project.mentor || 'Unassigned'}</span>
                    </div>
                  </div>
                  
                  <div className="project-status-info">
                    <div className="progress-section">
                      <div className="progress-text">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <ProgressBar progress={project.progress} />
                    </div>
                    <div className="status-badge-container">
                      {getStatusBadge(project.status)}
                    </div>
                    <div className="expand-icon">
                      {isExpanded ? '▲' : '▼'}
                    </div>
                  </div>
                </div>

                {isExpanded && (
                  <div className="project-details">
                    <div className="details-grid">
                      <div className="milestones-section">
                        <h4>Milestones</h4>
                        <ul className="milestone-list">
                          {project.milestones?.map((m, idx) => (
                            <li key={idx} className={`milestone-item ${m.completed ? 'completed' : ''}`}>
                              <span className="checkbox">{m.completed ? '✓' : ''}</span>
                              <div className="milestone-text">
                                <span className="m-title">{m.title}</span>
                                <span className="m-date">{m.dueDate}</span>
                              </div>
                            </li>
                          )) || <p className="text-muted">No milestones defined yet.</p>}
                        </ul>
                      </div>
                      
                      <div className="actions-section">
                        <h4>Management Actions</h4>
                        <div className="action-buttons-grid">
                          <button className="action-btn">Schedule Review</button>
                          <button className="action-btn">Message Team</button>
                          <button className="action-btn">View Repository</button>
                          <button className="action-btn update-status">Update Status</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProjectManagementPage;
