import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ChallengeDetailPage.css';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import AIInsightCard from '../../components/ai/AIInsightCard';
import MatchScore from '../../components/ai/MatchScore';
import ProgressTimeline from '../../components/challenge/ProgressTimeline';
import { challenges } from '../../data/challenges';

const ChallengeDetailPage = () => {
  const { id } = useParams();
  
  // Find challenge by ID or fallback to first one if not found (for demo)
  const challenge = challenges.find(c => c.id === id) || challenges[0];

  if (!challenge) {
    return <div className="container">Challenge not found</div>;
  }

  return (
    <div className="challenge-detail-page">
      <div className="detail-header-bg"></div>
      
      <div className="container detail-container">
        <div className="breadcrumb">
          <Link to="/explore">Challenges</Link> <span className="separator">/</span> <span>{challenge.title}</span>
        </div>

        <div className="detail-layout">
          <div className="detail-main">
            <div className="detail-badges">
              <Badge variant={
                challenge.status === 'Open' ? 'success' : 
                challenge.status === 'In Progress' ? 'warning' : 'primary'
              }>{challenge.status}</Badge>
              <Badge variant={
                challenge.priority === 'High' ? 'danger' :
                challenge.priority === 'Medium' ? 'warning' : 'primary'
              }>{challenge.priority} Priority</Badge>
              <Badge variant="outline">{challenge.category}</Badge>
            </div>
            
            <h1 className="detail-title">{challenge.title}</h1>
            
            <div className="detail-meta">
              <div className="meta-item">
                <span className="meta-label">Submitted by:</span>
                <span className="meta-value">{challenge.submittedBy.name} ({challenge.submittedBy.role})</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Date:</span>
                <span className="meta-value">{new Date(challenge.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Location:</span>
                <span className="meta-value">{challenge.location.district}, {challenge.location.block}</span>
              </div>
            </div>

            <div className="detail-section">
              <h2>Description</h2>
              <p className="detail-text">{challenge.description}</p>
            </div>

            <div className="detail-section">
              <h2>Expected Outcome</h2>
              <p className="detail-text">{challenge.expectedOutcome}</p>
            </div>

            <div className="detail-section">
              <h2>Evidence & Attachments</h2>
              <div className="evidence-grid">
                <div className="evidence-item">
                  <div className="evidence-placeholder">📸 Image 1</div>
                </div>
                <div className="evidence-item">
                  <div className="evidence-placeholder">📸 Image 2</div>
                </div>
                <div className="evidence-item doc">
                  <div className="evidence-placeholder">📄 Report.pdf</div>
                </div>
              </div>
            </div>
            
            <div className="detail-section">
              <h2>Project Timeline</h2>
              <ProgressTimeline currentStage={challenge.progress?.stage || 1} />
            </div>

          </div>

          <div className="detail-sidebar">
            <AIInsightCard insights={challenge.aiAnalysis} />
            
            <Card className="match-card">
              <h3>University Match Score</h3>
              <p className="match-desc">Based on resources, expertise, and proximity</p>
              <div className="match-score-container">
                <MatchScore score={85} />
              </div>
              <div className="recommended-list">
                <h4>Top Recommendations</h4>
                <ul>
                  {challenge.aiAnalysis?.matchedUniversities?.map((uni, idx) => (
                    <li key={idx}>{uni}</li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card className="action-card">
              <h3>Get Involved</h3>
              <div className="interest-stats">
                <strong>{challenge.metrics?.interestedTeams || 0}</strong> teams expressed interest
              </div>
              <div className="action-buttons">
                <Button variant="primary" fullWidth>Apply as Student Team</Button>
                <Button variant="outline" fullWidth>Express University Interest</Button>
                <Button variant="secondary" fullWidth>Offer Industry Support</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetailPage;
