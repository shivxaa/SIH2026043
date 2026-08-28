import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import StatsCard from '../../components/dashboard/StatsCard';
import Badge from '../../components/common/Badge';
import ProgressBar from '../../components/common/ProgressBar';
import NotificationPanel from '../../components/dashboard/NotificationPanel';
import { projects } from '../../data/projects';
import { notifications } from '../../data/notifications';
import './MentorDashboard.css';

const MentorDashboard = () => {
  return (
    <DashboardLayout>
      <div className="mentor-dashboard">
        <header className="dashboard-header">
          <h1>Welcome back, Dr. Sharma! 🎓</h1>
          <p>Here's an overview of your mentoring activities.</p>
        </header>

        <section className="stats-section">
          <StatsCard title="Assigned Projects" value="5" icon="👥" />
          <StatsCard title="Pending Reviews" value="3" icon="📝" />
          <StatsCard title="Milestones Approved" value="18" icon="✅" />
          <StatsCard title="Feedback Given" value="24" icon="💬" />
        </section>

        <div className="dashboard-grid">
          <div className="main-column">
            <section className="projects-section card">
              <div className="section-header">
                <h2>Assigned Projects Overview</h2>
                <Link to="/mentor/projects" className="view-all">View All</Link>
              </div>
              <div className="projects-list">
                {projects.slice(0, 3).map((project, index) => (
                  <div key={index} className="mentor-project-card">
                    <div className="project-header">
                      <div>
                        <h3>{project.title || 'Project Title'}</h3>
                        <span className="team-name">{project.teamName || 'Team Alpha'} • {project.university || 'IIT Delhi'}</span>
                      </div>
                      <Badge text="Active" variant="success" />
                    </div>
                    <div className="project-progress-wrapper">
                      <div className="progress-labels">
                        <span>Progress</span>
                        <span>{project.progress || 45}%</span>
                      </div>
                      <ProgressBar progress={project.progress || 45} />
                    </div>
                    <div className="project-actions">
                      <Link to={`/mentor/review/${project.id || index}`} className="btn-review-sm">Review Project</Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="pending-reviews-section card">
              <h2>Pending Reviews</h2>
              <div className="reviews-list">
                <div className="review-item">
                  <div className="review-info">
                    <h4>UI/UX Design Mockups</h4>
                    <p>Smart City Traffic • TechTitans</p>
                    <span className="submit-time">Submitted 2 hours ago</span>
                  </div>
                  <Link to="/mentor/milestones" className="btn-action-primary">Review Now</Link>
                </div>
                <div className="review-item">
                  <div className="review-info">
                    <h4>Database Schema Architecture</h4>
                    <p>Healthcare Portal • HealthHacks</p>
                    <span className="submit-time">Submitted 5 hours ago</span>
                  </div>
                  <Link to="/mentor/milestones" className="btn-action-primary">Review Now</Link>
                </div>
              </div>
            </section>
          </div>

          <div className="side-column">
            <section className="activity-section card">
              <h2>Recent Activity</h2>
              <ul className="activity-timeline">
                <li>
                  <div className="activity-marker"></div>
                  <div className="activity-content">
                    <p>You approved <strong>Core Implementation</strong> for EcoWarriors</p>
                    <span className="time">Yesterday</span>
                  </div>
                </li>
                <li>
                  <div className="activity-marker"></div>
                  <div className="activity-content">
                    <p>Left feedback on <strong>TechTitans</strong> repository</p>
                    <span className="time">2 days ago</span>
                  </div>
                </li>
                <li>
                  <div className="activity-marker"></div>
                  <div className="activity-content">
                    <p>New project <strong>AgriInnovators</strong> assigned to you</p>
                    <span className="time">3 days ago</span>
                  </div>
                </li>
              </ul>
            </section>
            
            <NotificationPanel notifications={notifications.slice(0, 3)} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MentorDashboard;
