import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import MatchScore from '../../components/ai/MatchScore';
import './OpportunitiesPage.css';

import { projects } from '../../data/projects';
import { challenges } from '../../data/challenges';

const OpportunitiesPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Expertise Match', 'Funding Needed', 'Mentorship', 'Technology'];

  // Mock data mapping
  const opps = projects.map(p => ({
    ...p,
    supportType: p.id % 2 === 0 ? 'Funding' : 'Mentorship',
    matchScore: Math.floor(Math.random() * 40) + 60,
    tags: ['AI', 'Healthcare', 'Data']
  }));

  return (
    <DashboardLayout>
      <div className="opportunities-page">
        <header className="page-header">
          <h1>Project Opportunities</h1>
          <p>Find university projects that need your industry expertise.</p>
        </header>

        <div className="filter-tabs">
          {tabs.map(tab => (
            <button 
              key={tab} 
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="opp-grid">
          {opps.map(opp => (
            <div key={opp.id} className="opp-card">
              <div className="opp-card-header">
                <h3>{opp.title}</h3>
                <MatchScore score={opp.matchScore} />
              </div>
              <p className="univ-name">{opp.university} • {opp.teamName}</p>
              
              <div className="support-needed">
                <strong>Support Needed:</strong>
                <Badge variant={opp.supportType === 'Funding' ? 'warning' : 'accent'}>
                  {opp.supportType}
                </Badge>
              </div>

              <div className="expertise-tags">
                {opp.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <div className="opp-actions">
                <Button variant="primary">Offer Support</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OpportunitiesPage;
