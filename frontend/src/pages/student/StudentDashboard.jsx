import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import StatsCard from '../../components/dashboard/StatsCard';
import Badge from '../../components/common/Badge';
import MatchScore from '../../components/ai/MatchScore';
import ProgressBar from '../../components/common/ProgressBar';
import NotificationPanel from '../../components/dashboard/NotificationPanel';
import { challenges } from '../../data/challenges';
import { projects } from '../../data/projects';
import { notifications } from '../../data/notifications';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const studentSkills = ['React', 'Node.js', 'Machine Learning', 'Data Analysis', 'Python'];
  const recommendedChallenges = [
    { ...challenges[0], matchScore: 85, matchReasons: ['React', 'Node.js'] },
    { ...challenges[1], matchScore: 78, matchReasons: ['Machine Learning', 'Python'] },
    { ...challenges[2], matchScore: 72, matchReasons: ['Data Analysis'] }
  ];

  return (
    <DashboardLayout>
      <div className="student-dashboard">
        <header className="dashboard-header">
          <h1>Welcome back, Rahul! 👋</h1>
          <p>Here is what's happening with your projects today.</p>
        </header>

        <section className="stats-section">
          <StatsCard title="AI Matched Challenges" value="15" icon="🤖" />
          <StatsCard title="Active Projects" value="2" icon="🚀" />
          <StatsCard title="Completed" value="3" icon="✅" />
          <StatsCard title="Pending Applications" value="4" icon="⏳" />
        </section>

        <div className="dashboard-grid">
          <div className="main-column">
            <section className="skills-section card">
              <h2>Your Skills</h2>
              <div className="skills-list">
                {studentSkills.map((skill, index) => (
                  <Badge key={index} text={skill} variant="primary" />
                ))}
              </div>
            </section>

            <section className="recommended-section card">
              <div className="section-header">
                <h2>AI Recommended Challenges</h2>
                <Link to="/student/recommended" className="view-all">View All</Link>
              </div>
              <div className="recommended-list">
                {recommendedChallenges.map((challenge, index) => (
                  <div key={index} className="recommended-card">
                    <div className="match-score-container">
                      <MatchScore score={challenge.matchScore} size="sm" />
                    </div>
                    <div className="challenge-info">
                      <h3>{challenge.title || 'Challenge Title'}</h3>
                      <p className="match-reasons">Matches: {challenge.matchReasons.join(', ')}</p>
                    </div>
                    <Link to={`/challenges/${challenge.id}`} className="btn-apply">View</Link>
                  </div>
                ))}
              </div>
            </section>

            <section className="projects-section card">
              <div className="section-header">
                <h2>Current Projects</h2>
                <Link to="/student/projects" className="view-all">View All</Link>
              </div>
              <div className="projects-list">
                {projects.slice(0, 2).map((project, index) => (
                  <div key={index} className="project-item">
                    <div className="project-header">
                      <h3>{project.title || 'Project Title'}</h3>
                      <Badge text="Active" variant="success" />
                    </div>
                    <ProgressBar progress={project.progress || 60} />
                    <div className="project-meta">
                      <span>Next milestone: {project.nextMilestone || 'Implementation Phase'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="side-column">
            <section className="milestones-section card">
              <h2>Upcoming Milestones</h2>
              <ul className="milestones-list">
                <li>
                  <div className="milestone-date">Aug 15</div>
                  <div className="milestone-details">
                    <h4>Submit Prototype</h4>
                    <p>Smart City Traffic Project</p>
                  </div>
                </li>
                <li>
                  <div className="milestone-date">Aug 22</div>
                  <div className="milestone-details">
                    <h4>Code Review</h4>
                    <p>Healthcare App</p>
                  </div>
                </li>
                <li>
                  <div className="milestone-date">Sep 01</div>
                  <div className="milestone-details">
                    <h4>Final Presentation</h4>
                    <p>Smart City Traffic Project</p>
                  </div>
                </li>
              </ul>
            </section>
            
            <NotificationPanel notifications={notifications.slice(0, 4)} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
