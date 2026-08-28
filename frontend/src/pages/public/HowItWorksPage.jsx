import React from 'react';
import './HowItWorksPage.css';

const HowItWorksPage = () => {
  return (
    <div className="how-page">
      <section className="how-hero">
        <div className="container">
          <h1 className="how-title">How JanSetu Works</h1>
          <p className="how-subtitle">A step-by-step guide to collaborative innovation</p>
        </div>
      </section>

      <section className="how-content">
        <div className="container">
          
          <div className="role-section">
            <h2 className="role-title">For Citizens & Communities</h2>
            <div className="steps-container">
              <div className="step-card">
                <div className="step-num">1</div>
                <h3>Identify & Document</h3>
                <p>Spot a local challenge (e.g., healthcare access, clean water). Take photos, gather data, and clearly define the problem.</p>
              </div>
              <div className="step-card">
                <div className="step-num">2</div>
                <h3>Submit Challenge</h3>
                <p>Use the JanSetu portal to submit the challenge with location and evidence. AI helps categorize and estimate severity.</p>
              </div>
              <div className="step-card">
                <div className="step-num">3</div>
                <h3>Track Progress</h3>
                <p>Get updates when your challenge is approved, adopted by a university, and when a solution is deployed.</p>
              </div>
            </div>
          </div>

          <div className="role-section">
            <h2 className="role-title">For Universities & Institutions</h2>
            <div className="steps-container">
              <div className="step-card">
                <div className="step-num">1</div>
                <h3>Discover Challenges</h3>
                <p>Browse AI-matched local challenges that align with your institution's expertise and research areas.</p>
              </div>
              <div className="step-card">
                <div className="step-num">2</div>
                <h3>Adopt & Allocate</h3>
                <p>Express interest in a challenge and allocate it to faculty mentors and student project teams.</p>
              </div>
              <div className="step-card">
                <div className="step-num">3</div>
                <h3>Oversee & Certify</h3>
                <p>Monitor team progress, provide lab resources, and validate the final solution before deployment.</p>
              </div>
            </div>
          </div>

          <div className="role-section">
            <h2 className="role-title">For Students & Innovators</h2>
            <div className="steps-container">
              <div className="step-card">
                <div className="step-num">1</div>
                <h3>Form a Team</h3>
                <p>Create a multidisciplinary team based on the required skills highlighted by JanSetu's AI.</p>
              </div>
              <div className="step-card">
                <div className="step-num">2</div>
                <h3>Build & Prototype</h3>
                <p>Work with mentors to design, build, and test your solution. Log progress on the platform.</p>
              </div>
              <div className="step-card">
                <div className="step-num">3</div>
                <h3>Deploy & Impact</h3>
                <p>Implement the solution in the community. Earn credits, certificates, and potential startup funding.</p>
              </div>
            </div>
          </div>

          <div className="role-section">
            <h2 className="role-title">For Industry & Government</h2>
            <div className="steps-container">
              <div className="step-card">
                <div className="step-num">1</div>
                <h3>Monitor Dashboard</h3>
                <p>Track regional issues, ongoing projects, and overall impact through real-time data analytics.</p>
              </div>
              <div className="step-card">
                <div className="step-num">2</div>
                <h3>Provide Resources</h3>
                <p>Offer funding, technical mentorship, or infrastructure to promising solutions via CSR or government schemes.</p>
              </div>
              <div className="step-card">
                <div className="step-num">3</div>
                <h3>Scale Solutions</h3>
                <p>Identify successful prototypes and help scale them across the state for maximum impact.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
