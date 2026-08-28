import React from 'react';
import './ImpactPage.css';
import StatsCard from '../../components/dashboard/StatsCard';
import MiniChart from '../../components/dashboard/MiniChart';
import Card from '../../components/common/Card';
import { platformStats, categoryDistribution, districtDistribution } from '../../data/analytics';

const ImpactPage = () => {
  return (
    <div className="impact-page">
      <section className="impact-hero">
        <div className="container">
          <h1 className="impact-title">Our Impact Across Jharkhand</h1>
          <p className="impact-subtitle">Transparent tracking of how collaborative innovation is changing lives.</p>
        </div>
      </section>

      <section className="impact-content container">
        <div className="kpi-grid">
          <StatsCard 
            title="Total Challenges" 
            value={platformStats.totalChallenges.toLocaleString()} 
            trend={+12} 
            icon="📝" 
          />
          <StatsCard 
            title="Active Projects" 
            value={platformStats.activeProjects.toLocaleString()} 
            trend={+5} 
            icon="⚙️" 
          />
          <StatsCard 
            title="Solved Issues" 
            value={platformStats.solvedChallenges.toLocaleString()} 
            trend={+18} 
            icon="✅" 
          />
          <StatsCard 
            title="Universities" 
            value={platformStats.activeUniversities.toLocaleString()} 
            trend={+2} 
            icon="🏛️" 
          />
          <StatsCard 
            title="Citizens Impacted" 
            value="2.4M+" 
            trend={+22} 
            icon="👥" 
          />
          <StatsCard 
            title="Funds Mobilized" 
            value="₹2.4Cr" 
            trend={+15} 
            icon="💰" 
          />
        </div>

        <div className="charts-grid">
          <Card className="chart-card">
            <h3>Challenges by Category</h3>
            <p className="chart-desc">Distribution of issues across different domains</p>
            <div className="chart-wrapper">
              <MiniChart data={categoryDistribution} type="bar" height={250} />
            </div>
          </Card>
          
          <Card className="chart-card">
            <h3>Top Districts by Engagement</h3>
            <p className="chart-desc">Areas with highest number of reported challenges</p>
            <div className="district-list">
              {districtDistribution.slice(0, 5).map((dist, i) => (
                <div key={i} className="district-item">
                  <div className="dist-info">
                    <span className="dist-name">{dist.name}</span>
                    <span className="dist-val">{dist.value} challenges</span>
                  </div>
                  <div className="dist-bar-bg">
                    <div className="dist-bar-fill" style={{width: `${(dist.value / districtDistribution[0].value) * 100}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="success-stories">
          <h2>Success Stories</h2>
          <div className="stories-grid">
            <Card className="story-card">
              <div className="story-img bg-health"></div>
              <div className="story-content">
                <span className="story-tag">Healthcare</span>
                <h3>Mobile Blood Bank for Remote Villages</h3>
                <p>BIT Mesra students collaborated with local hospitals to create an IoT-enabled mobile blood storage unit, solving a critical challenge in West Singhbhum.</p>
                <div className="story-meta">Impact: 5,000+ lives • 3 Months to build</div>
              </div>
            </Card>
            <Card className="story-card">
              <div className="story-img bg-agri"></div>
              <div className="story-content">
                <span className="story-tag">Agriculture</span>
                <h3>AI Crop Disease Detection via WhatsApp</h3>
                <p>A simple WhatsApp bot powered by AI that helps farmers in Ranchi identify crop diseases from photos. Funded by local agriculture department.</p>
                <div className="story-meta">Impact: 12,000+ farmers • 2 Months to build</div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;
