import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="about-title">About JanSetu</h1>
          <p className="about-subtitle">Bridge of the People: Empowering Jharkhand through collaborative innovation.</p>
          <div className="prototype-badge">This is a prototype concept built for Smart India Hackathon 2026.</div>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text-content">
              <h2>Our Mission</h2>
              <p>
                To create a seamless, transparent, and AI-driven ecosystem that connects the pressing challenges of citizens and local governance with the intellectual capital of universities, students, mentors, and industry partners.
              </p>

              <h2>Our Vision</h2>
              <p>
                A future where every local problem in Jharkhand finds a scalable, technology-driven solution through active community participation, rapid prototyping, and sustainable deployment. We envision a state where innovation is not limited to tech hubs, but is decentralized and democratized.
              </p>

              <h2>How It Bridges Communities</h2>
              <p>
                JanSetu serves as the missing link between problem discovery and solution deployment. Often, citizens face infrastructural, health, or educational challenges but lack the technical expertise to solve them. Conversely, universities and technical institutes have the talent but lack real-world problems to work on. JanSetu bridges this gap.
              </p>
            </div>
            
            <div className="about-values">
              <h3>Platform Values</h3>
              <div className="value-item">
                <div className="value-icon">🔍</div>
                <div className="value-details">
                  <h4>Transparency</h4>
                  <p>Open tracking of challenge progress, fund allocation, and impact metrics.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <div className="value-details">
                  <h4>Collaboration</h4>
                  <p>Fostering synergy between citizens, academia, government, and industry.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon">💡</div>
                <div className="value-details">
                  <h4>Innovation</h4>
                  <p>Leveraging AI, data analytics, and modern tech to solve complex problems.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon">📈</div>
                <div className="value-details">
                  <h4>Impact</h4>
                  <p>Focusing on measurable, real-world outcomes that improve lives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="team-section">
        <div className="container">
          <h2>The Team behind JanSetu</h2>
          <p>We are a passionate team of innovators participating in the Smart India Hackathon 2026, dedicated to building digital public infrastructure that serves the nation.</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
