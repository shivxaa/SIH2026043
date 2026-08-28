import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import Button from '../../components/common/Button';
import ChallengeCard from '../../components/challenge/ChallengeCard';
import { challenges } from '../../data/challenges';

const LandingPage = () => {
  const featuredChallenges = challenges.slice(0, 3);

  return (
    <div className="landing-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-badge">SIH 2026 Prototype • MedTech / BioTech / HealthTech</div>
          <h1 className="hero-headline">From Community Challenges to Real-World Solutions</h1>
          <p className="hero-subheading">
            Connect citizens, communities, government, universities, students, mentors and industry to transform local challenges into measurable innovations across Jharkhand.
          </p>
          <div className="hero-ctas">
            <Link to="/submit-challenge">
              <Button variant="primary" size="large">Report a Challenge</Button>
            </Link>
            <Link to="/explore">
              <Button variant="outline" size="large">Explore Challenges</Button>
            </Link>
          </div>
          <div className="hero-secondary-links">
            <Link to="/register?role=university">Join as University →</Link>
            <Link to="/register?role=industry">Join as Industry Partner →</Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><strong>1,284</strong> Challenges</div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat"><strong>342</strong> Active Projects</div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat"><strong>517</strong> Solved</div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat"><strong>86</strong> Universities</div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat"><strong>2.4M+</strong> Beneficiaries</div>
          </div>
        </div>
      </section>

      {/* 2. ECOSYSTEM FLOW SECTION */}
      <section className="ecosystem-section">
        <div className="container">
          <h2 className="section-title">How the Ecosystem Works</h2>
          <div className="ecosystem-flow">
            <div className="flow-node">
              <div className="node-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div className="node-label">Citizens</div>
              <div className="node-desc">Report problems</div>
            </div>
            <div className="flow-connector"><svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none"/></svg></div>
            
            <div className="flow-node">
              <div className="node-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <div className="node-label">AI Analysis</div>
              <div className="node-desc">Score & Match</div>
            </div>
            <div className="flow-connector"><svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none"/></svg></div>

            <div className="flow-node">
              <div className="node-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              </div>
              <div className="node-label">Universities</div>
              <div className="node-desc">Adopt challenges</div>
            </div>
            <div className="flow-connector"><svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none"/></svg></div>

            <div className="flow-node">
              <div className="node-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              </div>
              <div className="node-label">Students</div>
              <div className="node-desc">Build solutions</div>
            </div>
            <div className="flow-connector"><svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none"/></svg></div>

            <div className="flow-node">
              <div className="node-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <div className="node-label">Mentors</div>
              <div className="node-desc">Guide teams</div>
            </div>
            <div className="flow-connector"><svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none"/></svg></div>

            <div className="flow-node">
              <div className="node-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              </div>
              <div className="node-label">Industry</div>
              <div className="node-desc">Fund & Scale</div>
            </div>
            <div className="flow-connector"><svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none"/></svg></div>

            <div className="flow-node">
              <div className="node-icon" style={{color: 'var(--color-success)'}}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
              </div>
              <div className="node-label">Impact</div>
              <div className="node-desc">Real change</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS SECTION */}
      <section className="how-it-works-section">
        <div className="container">
          <h2 className="section-title">Simple, Transparent, AI-Powered</h2>
          <div className="how-steps-grid">
            <div className="how-step">
              <div className="step-number">1</div>
              <div className="step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg></div>
              <h3 className="step-title">Submit</h3>
              <p className="step-desc">Citizens submit local challenges with evidence and location details.</p>
            </div>
            <div className="how-step">
              <div className="step-number">2</div>
              <div className="step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9-4.03-9-9-9z"></path><path d="M12 11v6"></path><circle cx="12" cy="7" r="1"></circle></svg></div>
              <h3 className="step-title">Analyze</h3>
              <p className="step-desc">AI categorizes, prioritizes, and extracts actionable insights.</p>
            </div>
            <div className="how-step">
              <div className="step-number">3</div>
              <div className="step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></div>
              <h3 className="step-title">Match</h3>
              <p className="step-desc">Universities and teams are matched by their expertise and resources.</p>
            </div>
            <div className="how-step">
              <div className="step-number">4</div>
              <div className="step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg></div>
              <h3 className="step-title">Solve</h3>
              <p className="step-desc">Collaborative teams build, validate, and deploy the solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED CHALLENGES SECTION */}
      <section className="featured-challenges-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title" style={{textAlign: 'left', marginBottom: '8px'}}>Active Challenges Seeking Solutions</h2>
              <p className="section-subtitle">Real problems from communities across Jharkhand</p>
            </div>
          </div>
          <div className="challenges-grid">
            {featuredChallenges.map(challenge => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
          <div className="view-all-wrapper">
            <Link to="/explore">
              <Button variant="outline">View All Challenges →</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. AI FEATURES SECTION */}
      <section className="ai-features-section">
        <div className="container">
          <h2 className="section-title ai-title">AI-Powered Intelligence Layer</h2>
          <div className="ai-features-grid">
            <div className="ai-feature-card">
              <div className="ai-icon">🔍</div>
              <h3 className="ai-feature-title">Smart Classification</h3>
              <p className="ai-feature-desc">Auto-categorize challenges by domain, tagging relevant technologies and skills needed.</p>
            </div>
            <div className="ai-feature-card">
              <div className="ai-icon">⚖️</div>
              <h3 className="ai-feature-title">Priority Scoring</h3>
              <p className="ai-feature-desc">AI-determined urgency and impact scale based on population density and issue severity.</p>
            </div>
            <div className="ai-feature-card">
              <div className="ai-icon">🎯</div>
              <h3 className="ai-feature-title">Expert Matching</h3>
              <p className="ai-feature-desc">Intelligently connect the right universities and student teams with specific challenges.</p>
            </div>
            <div className="ai-feature-card">
              <div className="ai-icon">📈</div>
              <h3 className="ai-feature-title">Impact Prediction</h3>
              <p className="ai-feature-desc">Estimate potential beneficiaries, resource requirements, and long-term outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMPACT NUMBERS SECTION */}
      <section className="impact-numbers-section">
        <div className="container">
          <h2 className="section-title">Creating Measurable Impact Across Jharkhand</h2>
          <div className="impact-stats-grid">
            <div className="impact-stat-block">
              <div className="impact-stat-val">24</div>
              <div className="impact-stat-label">Districts Covered</div>
            </div>
            <div className="impact-stat-block">
              <div className="impact-stat-val">86</div>
              <div className="impact-stat-label">Universities</div>
            </div>
            <div className="impact-stat-block">
              <div className="impact-stat-val">342</div>
              <div className="impact-stat-label">Active Projects</div>
            </div>
            <div className="impact-stat-block">
              <div className="impact-stat-val">₹2.4Cr</div>
              <div className="impact-stat-label">Resources Mobilized</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="bottom-cta-section">
        <div className="container cta-container">
          <h2 className="cta-title">Ready to Make a Difference?</h2>
          <p className="cta-desc">Join thousands of citizens, students, and organizations building solutions for Jharkhand.</p>
          <div className="cta-buttons">
            <Link to="/submit-challenge"><Button variant="primary">Report a Challenge</Button></Link>
            <Link to="/register?role=student"><Button variant="secondary">Join as Student</Button></Link>
            <Link to="/register?role=university"><Button variant="outline" style={{backgroundColor: 'transparent', color: 'white', borderColor: 'white'}}>Join as University</Button></Link>
            <Link to="/register?role=industry"><Button variant="outline" style={{backgroundColor: 'transparent', color: 'white', borderColor: 'white'}}>Partner with Us</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
