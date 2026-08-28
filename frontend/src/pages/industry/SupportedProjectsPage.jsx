import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Badge from '../../components/common/Badge';
import ProgressBar from '../../components/common/ProgressBar';
import ProgressTimeline from '../../components/challenge/ProgressTimeline';
import './SupportedProjectsPage.css';

import { projects } from '../../data/projects';

const SupportedProjectsPage = () => {
  // Mock data
  const supportedProjects = projects.slice(0, 4).map((p, i) => ({
    ...p,
    contribution: i % 2 === 0 ? 'Funding (₹2.5L)' : 'Mentorship',
    beneficiaries: Math.floor(Math.random() * 5000) + 1000
  }));

  return (
    <DashboardLayout>
      <div className="supported-projects-page">
        <header className="page-header">
          <h1>Supported Projects</h1>
          <p>Track the progress and impact of projects you are supporting.</p>
        </header>

        <div className="sp-grid">
          {supportedProjects.map(project => (
            <div key={project.id} className="sp-card">
              <div className="sp-header">
                <div>
                  <h3>{project.title}</h3>
                  <p className="sp-univ">{project.university} • {project.teamName}</p>
                </div>
                <Badge variant={project.status === 'completed' ? 'success' : 'accent'}>
                  {project.status.replace('-', ' ')}
                </Badge>
              </div>

              <div className="sp-contribution">
                <strong>Your Contribution:</strong>
                <Badge variant="warning">{project.contribution}</Badge>
              </div>

              <div className="sp-progress">
                <div className="progress-labels">
                  <span>Project Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <ProgressBar progress={project.progress} color="var(--color-accent)" />
              </div>

              <div className="sp-impact">
                <div className="impact-metric">
                  <span className="metric-val">{project.beneficiaries.toLocaleString()}</span>
                  <span className="metric-label">Beneficiaries Reached</span>
                </div>
              </div>

              <div className="sp-timeline">
                <h4>Recent Milestones</h4>
                <ProgressTimeline status={project.status} progress={project.progress} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SupportedProjectsPage;
