import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import MatchScore from '../../components/ai/MatchScore';
import Badge from '../../components/common/Badge';
import { challenges } from '../../data/challenges';
import './AIRecommendedPage.css';

const AIRecommendedPage = () => {
  const [skills, setSkills] = useState(['React', 'Node.js', 'Machine Learning', 'Data Analysis', 'Python']);
  
  const recommendedChallenges = challenges.map((challenge, index) => ({
    ...challenge,
    matchScore: 95 - (index * 7), // Mock scores 95, 88, 81...
    matchReasons: ['Machine Learning expertise', 'Healthcare interest'].slice(0, (index % 2) + 1)
  }));

  return (
    <DashboardLayout>
      <div className="ai-recommended-page">
        <header className="page-header">
          <h1>AI-Matched Challenges for You</h1>
          <p>Based on your skills, interests, and academic discipline</p>
        </header>

        <section className="your-skills-section">
          <h2>Your Skills Profile</h2>
          <div className="skills-editor">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
                <button className="remove-skill">×</button>
              </span>
            ))}
            <button className="add-skill">+ Add Skill</button>
          </div>
        </section>

        <div className="filters-bar">
          <select className="sort-select">
            <option>Sort by: Match Score</option>
            <option>Sort by: Date Added</option>
            <option>Sort by: Deadline</option>
          </select>
        </div>

        <div className="challenges-grid">
          {recommendedChallenges.map(challenge => (
            <div key={challenge.id} className="challenge-card-ai">
              <div className="card-header">
                <MatchScore score={challenge.matchScore} size="lg" />
                <div className="header-info">
                  <Badge text={challenge.category || 'Category'} variant="primary" />
                  <span className="location">{challenge.location || 'Pan India'}</span>
                </div>
              </div>
              
              <div className="card-body">
                <h3>{challenge.title}</h3>
                <p className="organization">{challenge.organization}</p>
                
                <div className="match-reasons-box">
                  <h4>Why it's a match:</h4>
                  <ul>
                    {challenge.matchReasons.map((reason, i) => (
                      <li key={i}>{reason}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="card-footer">
                <button className="btn-apply-full">Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AIRecommendedPage;
