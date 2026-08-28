import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import ChallengeCard from '../../components/challenge/ChallengeCard';
import MatchScore from '../../components/ai/MatchScore';
import { challenges } from '../../data/challenges';
import './RecommendedChallengesPage.css';

const RecommendedChallengesPage = () => {
  // Generate match scores for demo purposes
  const getMatchReasons = (score) => {
    if (score > 90) return ['Strong skill overlap (Civil Eng, IoT)', 'Alumni successful in similar past projects', 'High relevance to local district'];
    if (score > 80) return ['Good skill overlap', 'Mentors available in department'];
    return ['General technical fit'];
  };

  const recommendations = challenges.map(c => {
    const score = Math.floor(Math.random() * 30) + 65; // 65-95 score
    return {
      ...c,
      matchScore: score,
      matchReasons: getMatchReasons(score)
    };
  }).sort((a, b) => b.matchScore - a.matchScore);

  return (
    <DashboardLayout>
      <div className="recommended-challenges-page">
        <div className="page-header">
          <div className="header-content">
            <h1>AI-Recommended Challenges</h1>
            <p>Challenges matched to your university's expertise, past successes, and available skills.</p>
          </div>
        </div>

        <div className="recommendations-list">
          {recommendations.map(challenge => (
            <div key={challenge.id} className="recommendation-card-wrapper">
              <div className="match-sidebar">
                <MatchScore score={challenge.matchScore} size="lg" />
                <div className="match-reasons">
                  <h4>Why this match?</h4>
                  <ul>
                    {challenge.matchReasons.map((reason, idx) => (
                      <li key={idx}>{reason}</li>
                    ))}
                  </ul>
                </div>
                <button className="invite-teams-btn">Invite Teams</button>
              </div>
              <div className="challenge-content">
                <ChallengeCard challenge={challenge} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RecommendedChallengesPage;
