import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../common/Badge';
import './ChallengeCard.css';

const ChallengeCard = ({ challenge }) => {
  const priorityColor = { critical: 'danger', high: 'warning', medium: 'info', low: 'default' }[challenge.priority] || 'default';

  const district = challenge.location?.district || challenge.district || '';
  const skills = challenge.requiredSkills || challenge.skills || [];
  const beneficiaryCount = challenge.beneficiaries?.count ?? challenge.beneficiaries ?? 0;
  const teams = challenge.interestedTeams ?? challenge.teams ?? 0;
  const date = challenge.dateSubmitted || challenge.date || '';
  const description = challenge.description || '';

  const formattedDate = date ? new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '';

  return (
    <div className="challenge-card">
      <div className="challenge-card-header">
        <Badge variant="primary">{challenge.category}</Badge>
        <Badge variant={priorityColor}>{challenge.priority}</Badge>
      </div>
      <Link to={`/challenges/${challenge.id}`} className="challenge-card-title">
        {challenge.title}
      </Link>
      <div className="challenge-card-location">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        {district}
      </div>
      <p className="challenge-card-desc">{description.length > 120 ? description.slice(0, 120) + '…' : description}</p>
      <div className="challenge-card-tags">
        {skills.slice(0, 4).map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
      </div>
      <div className="challenge-card-footer">
        <div className="footer-stat">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
          {typeof beneficiaryCount === 'number' ? beneficiaryCount.toLocaleString() : beneficiaryCount}
        </div>
        <div className="footer-stat">Teams: {teams}</div>
        <div className="footer-stat">{formattedDate}</div>
      </div>
      {challenge.aiAnalysis?.matchedUniversities && (
        <div className="ai-match-indicator">✨ AI Matched Universities</div>
      )}
    </div>
  );
};

export default ChallengeCard;
