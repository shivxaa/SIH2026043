import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import StatsCard from '../../components/dashboard/StatsCard';
import ChartCard from '../../components/dashboard/ChartCard';
import MiniChart from '../../components/dashboard/MiniChart';
import AIInsightCard from '../../components/ai/AIInsightCard';
import Badge from '../../components/common/Badge';
import './AdminDashboard.css';

import { challenges } from '../../data/challenges';
import { platformStats, categoryDistribution, districtDistribution, monthlyTrends, priorityDistribution } from '../../data/analytics';

const AdminDashboard = () => {
  const recentChallenges = challenges?.slice(0, 10) || [];

  return (
    <DashboardLayout>
      <div className="admin-dashboard">
        <header className="admin-header">
          <div>
            <h1>Government Operations Center</h1>
            <p>Jharkhand Innovation Platform Analytics</p>
          </div>
          <div className="header-actions">
            <button className="btn-primary">Generate Report</button>
          </div>
        </header>

        <section className="stats-grid">
          <StatsCard title="Total Challenges" value="1,284" icon="folder" trend="+12%" />
          <StatsCard title="Active Projects" value="342" icon="activity" trend="+8%" />
          <StatsCard title="Solved Challenges" value="517" icon="check-circle" trend="+15%" />
          <StatsCard title="Universities" value="86" icon="book" trend="+5%" />
          <StatsCard title="Industry Partners" value="42" icon="briefcase" trend="+10%" />
          <StatsCard title="Beneficiaries Impacted" value="2.4M+" icon="users" trend="+22%" />
        </section>

        <section className="charts-row">
          <ChartCard title="Category Distribution">
            <MiniChart type="donut" data={categoryDistribution} />
          </ChartCard>
          <ChartCard title="Monthly Trends">
            <MiniChart type="bar" data={monthlyTrends} />
          </ChartCard>
        </section>

        <section className="dashboard-main">
          <div className="districts-section">
            <div className="section-title">District Overview</div>
            <div className="districts-grid">
              {(districtDistribution || []).slice(0, 6).map(dist => (
                <div key={dist.name} className="district-card">
                  <h4>{dist.name}</h4>
                  <div className="dist-metrics">
                    <div>
                      <span className="val">{dist.challenges}</span>
                      <span className="lbl">Challenges</span>
                    </div>
                    <div>
                      <span className="val">{dist.resolved}</span>
                      <span className="lbl">Resolved</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="insights-section">
            <div className="section-title">AI Insights & Alerts</div>
            <div className="insights-list">
              <AIInsightCard 
                type="warning" 
                title="Trend Alert" 
                message="Healthcare challenges have increased 23% this quarter in rural districts." 
              />
              <AIInsightCard 
                type="danger" 
                title="Low Resolution Rate" 
                message="Ranchi district has the highest unresolved challenge rate (68%)." 
              />
              <AIInsightCard 
                type="info" 
                title="Duplicate Detection" 
                message="3 new duplicate challenges detected this week. Action required." 
              />
            </div>
          </div>
        </section>

        <section className="recent-table-section">
          <div className="section-title">Recent Challenges</div>
          <div className="table-responsive">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>District</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentChallenges.map(c => (
                  <tr key={c.id}>
                    <td>{c.title}</td>
                    <td>{c.category}</td>
                    <td>{c.district}</td>
                    <td><Badge variant={c.priority === 'High' ? 'danger' : 'warning'}>{c.priority}</Badge></td>
                    <td><Badge variant={c.status === 'resolved' ? 'success' : 'accent'}>{c.status}</Badge></td>
                    <td>
                      <button className="btn-link">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
