import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import StatsCard from '../../components/dashboard/StatsCard';
import ChartCard from '../../components/dashboard/ChartCard';
import MiniChart from '../../components/dashboard/MiniChart';
import AIInsightCard from '../../components/ai/AIInsightCard';
import './AnalyticsPage.css';

import { platformStats, categoryDistribution, districtDistribution, monthlyTrends, priorityDistribution, topSkills } from '../../data/analytics';

const AnalyticsPage = () => {
  return (
    <DashboardLayout>
      <div className="analytics-page">
        <header className="page-header">
          <div className="header-content">
            <h1>Platform Analytics</h1>
            <p>Comprehensive data and insights for JanSetu platform</p>
          </div>
          <div className="date-range">
            <select className="date-select"><option>Last 30 Days</option><option>This Year</option></select>
          </div>
        </header>

        <section className="kpi-grid">
          <StatsCard title="Total Challenges" value="1,284" icon="folder" trend="+12%" />
          <StatsCard title="Active Projects" value="342" icon="activity" trend="+8%" />
          <StatsCard title="Solved Challenges" value="517" icon="check-circle" trend="+15%" />
          <StatsCard title="Universities" value="86" icon="book" trend="+5%" />
          <StatsCard title="Industry Partners" value="42" icon="briefcase" trend="+10%" />
          <StatsCard title="Beneficiaries" value="2.4M+" icon="users" trend="+22%" />
        </section>

        <section className="charts-grid">
          <ChartCard title="Category Analysis">
            <MiniChart type="bar" data={categoryDistribution} />
          </ChartCard>
          <ChartCard title="Priority Distribution">
            <MiniChart type="donut" data={priorityDistribution} />
          </ChartCard>
          <ChartCard title="Monthly Trends">
            <MiniChart type="bar" data={monthlyTrends} />
          </ChartCard>
          <ChartCard title="Top Skills Demand">
            <div className="skills-list">
              {(topSkills || []).map(skill => (
                <div key={skill.name} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: `${skill.value}%` }}></div>
                  </div>
                  <span className="skill-val">{skill.value}%</span>
                </div>
              ))}
            </div>
          </ChartCard>
        </section>
        
        <section className="ai-insights-panel">
          <h3>AI Generated Insights</h3>
          <div className="insights-grid">
            <AIInsightCard type="info" title="Skill Gap" message="High demand for IoT skills but low student enrollment in hardware projects." />
            <AIInsightCard type="success" title="Positive Trend" message="Resolution time has decreased by 14% over the last quarter." />
            <AIInsightCard type="warning" title="Regional Alert" message="Dhanbad requires more industry partnerships for mining-related challenges." />
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsPage;
