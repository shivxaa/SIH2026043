import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Tabs from '../../components/common/Tabs';
import Badge from '../../components/common/Badge';
import { projects } from '../../data/projects';
import './TasksPage.css';

const TasksPage = () => {
  const [activeProject, setActiveProject] = useState(projects[0]?.title || 'Project 1');

  const mockTasks = [
    { id: 1, title: 'Design Database Schema', desc: 'Create ERD and SQL scripts for the main database.', status: 'Completed', priority: 'High', due: '2026-08-15' },
    { id: 2, title: 'Setup Authentication', desc: 'Implement JWT based auth for users and mentors.', status: 'Completed', priority: 'High', due: '2026-08-20' },
    { id: 3, title: 'Develop Frontend Dashboard', desc: 'Create responsive layout with sidebars.', status: 'In Progress', priority: 'Medium', due: '2026-08-28' },
    { id: 4, title: 'Integrate AI Matching', desc: 'Connect frontend to python ML service.', status: 'In Progress', priority: 'High', due: '2026-09-05' },
    { id: 5, title: 'Write Unit Tests', desc: 'Jest tests for utility functions.', status: 'To Do', priority: 'Low', due: '2026-09-10' },
    { id: 6, title: 'Prepare Demo Video', desc: 'Record screen flow for the presentation.', status: 'To Do', priority: 'Medium', due: '2026-09-15' }
  ];

  const milestones = [
    { id: 1, title: 'Project Proposal', status: 'completed', due: '2026-08-01' },
    { id: 2, title: 'UI/UX Design', status: 'completed', due: '2026-08-15' },
    { id: 3, title: 'Core Implementation', status: 'in-progress', due: '2026-09-01' },
    { id: 4, title: 'Final Submission', status: 'pending', due: '2026-09-20' }
  ];

  const columns = ['To Do', 'In Progress', 'Completed'];

  const getPriorityVariant = (priority) => {
    switch(priority) {
      case 'High': return 'danger';
      case 'Medium': return 'warning';
      case 'Low': return 'primary';
      default: return 'primary';
    }
  };

  return (
    <DashboardLayout>
      <div className="tasks-page">
        <header className="page-header">
          <h1>Tasks & Milestones</h1>
          <p>Manage your team's workflow and deliverables</p>
        </header>

        <div className="project-selector">
          <Tabs 
            tabs={projects.slice(0, 3).map(p => p.title || 'Project')} 
            activeTab={activeProject} 
            onChange={setActiveProject} 
          />
        </div>

        <section className="milestones-tracker card">
          <h2>Milestone Timeline</h2>
          <div className="timeline-container">
            {milestones.map((ms, index) => (
              <div key={ms.id} className={`milestone-node ${ms.status}`}>
                <div className="node-icon">
                  {ms.status === 'completed' ? '✓' : ms.status === 'in-progress' ? '⏱' : '○'}
                </div>
                <div className="node-content">
                  <h4>{ms.title}</h4>
                  <span className="node-date">Due: {ms.due}</span>
                  {ms.status === 'in-progress' && (
                    <button className="btn-upload-deliverable">Upload Deliverable</button>
                  )}
                </div>
                {index < milestones.length - 1 && <div className="node-line"></div>}
              </div>
            ))}
          </div>
        </section>

        <section className="task-board">
          {columns.map(col => (
            <div key={col} className="task-column">
              <h3 className="column-title">{col}</h3>
              <div className="task-list">
                {mockTasks.filter(t => t.status === col).map(task => (
                  <div key={task.id} className="task-card">
                    <div className="task-card-header">
                      <Badge text={task.priority} variant={getPriorityVariant(task.priority)} />
                      <span className="task-due">{task.due}</span>
                    </div>
                    <h4>{task.title}</h4>
                    <p>{task.desc}</p>
                    <div className="task-card-footer">
                      <div className="assignee-avatar">RA</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </DashboardLayout>
  );
};

export default TasksPage;
