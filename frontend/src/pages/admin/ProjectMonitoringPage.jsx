import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Badge from '../../components/common/Badge';
import ProgressBar from '../../components/common/ProgressBar';
import SearchBar from '../../components/common/SearchBar';
import './ProjectMonitoringPage.css';

import { projects } from '../../data/projects';

const ProjectMonitoringPage = () => {
  return (
    <DashboardLayout>
      <div className="project-monitoring">
        <header className="page-header">
          <h1>Project Monitoring</h1>
          <p>Track progress of active innovation projects across all districts.</p>
        </header>

        <section className="overview-stats">
          <div className="stat-box">
            <span className="stat-val">{(projects || []).length}</span>
            <span className="stat-label">Total Projects</span>
          </div>
          <div className="stat-box on-track">
            <span className="stat-val">{(projects || []).filter(p => p.progress > 50).length}</span>
            <span className="stat-label">On Track</span>
          </div>
          <div className="stat-box at-risk">
            <span className="stat-val">{(projects || []).filter(p => p.progress < 30).length}</span>
            <span className="stat-label">At Risk</span>
          </div>
          <div className="stat-box completed">
            <span className="stat-val">{(projects || []).filter(p => p.status === 'completed').length}</span>
            <span className="stat-label">Completed</span>
          </div>
        </section>

        <div className="toolbar">
          <SearchBar placeholder="Search projects, universities..." />
          <div className="filters">
            <select className="filter-select"><option>All Status</option></select>
            <select className="filter-select"><option>All Universities</option></select>
            <select className="filter-select"><option>All Stages</option></select>
          </div>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Project</th>
                <th>University</th>
                <th>Team</th>
                <th>Stage</th>
                <th>Progress</th>
                <th>Start Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {(projects || []).map(p => (
                <tr key={p.id}>
                  <td className="title-cell">{p.title}</td>
                  <td>{p.university}</td>
                  <td>{p.teamName}</td>
                  <td><Badge variant="outline">Development</Badge></td>
                  <td className="progress-cell">
                    <ProgressBar progress={p.progress} color={p.progress < 30 ? 'var(--color-danger)' : 'var(--color-success)'} />
                    <span className="progress-text">{p.progress}%</span>
                  </td>
                  <td>2026-06-15</td>
                  <td>
                    <Badge variant={p.progress < 30 ? 'danger' : p.progress > 80 ? 'success' : 'warning'}>
                      {p.progress < 30 ? 'Delayed' : p.progress > 80 ? 'On Track' : 'In Progress'}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProjectMonitoringPage;
