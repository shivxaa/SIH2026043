import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Tabs from '../../components/common/Tabs';
import ChallengeCard from '../../components/challenge/ChallengeCard';
import { challenges } from '../../data/challenges';
import './MyChallengesPage.css';

const MyChallengesPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Assume all mock challenges belong to the user for demo purposes
  const myChallenges = challenges;

  const getFilteredChallenges = () => {
    if (activeTab === 'all') return myChallenges;
    if (activeTab === 'open') return myChallenges.filter(c => c.status === 'open');
    if (activeTab === 'in-progress') return myChallenges.filter(c => c.status === 'in_progress');
    if (activeTab === 'resolved') return myChallenges.filter(c => c.status === 'resolved');
    return myChallenges;
  };

  const filteredChallenges = getFilteredChallenges();

  const tabOptions = [
    { id: 'all', label: `All (${myChallenges.length})` },
    { id: 'open', label: `Open (${myChallenges.filter(c => c.status === 'open').length})` },
    { id: 'in-progress', label: `In Progress (${myChallenges.filter(c => c.status === 'in_progress').length})` },
    { id: 'resolved', label: `Resolved (${myChallenges.filter(c => c.status === 'resolved').length})` },
  ];

  return (
    <DashboardLayout>
      <div className="my-challenges-page">
        <div className="page-header">
          <h1>My Challenges</h1>
          <p className="subtitle">Track the status of civic issues you've reported</p>
        </div>

        <div className="filters-section">
          <Tabs 
            tabs={tabOptions}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>

        <div className="challenges-grid">
          {filteredChallenges.length > 0 ? (
            filteredChallenges.map(challenge => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))
          ) : (
            <div className="empty-state">
              <p>No challenges found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyChallengesPage;
