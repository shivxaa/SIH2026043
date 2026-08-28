import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Select from '../../components/common/Select';
import AIInsightCard from '../../components/ai/AIInsightCard';
import AISuggestions from '../../components/ai/AISuggestions';
import { analyzeChallenge } from '../../services/aiService';
import './SubmitChallengePage.css';

const STEPS = ['Describe', 'Evidence', 'AI Analysis', 'Review', 'Published'];

const SubmitChallengePage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiResults, setAiResults] = useState(null);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    district: '',
    location: '',
    urgency: '',
    outcome: '',
    beneficiaries: '',
    files: []
  });

  const categories = [
    { value: 'healthcare', label: 'Healthcare & Sanitation' },
    { value: 'education', label: 'Education' },
    { value: 'infrastructure', label: 'Infrastructure & Roads' },
    { value: 'water', label: 'Water Supply' },
    { value: 'electricity', label: 'Electricity' },
    { value: 'agriculture', label: 'Agriculture' },
    { value: 'environment', label: 'Environment' },
    { value: 'transport', label: 'Public Transport' },
    { value: 'governance', label: 'E-Governance' },
    { value: 'other', label: 'Other' }
  ];

  const districts = [
    { value: 'ranchi', label: 'Ranchi' },
    { value: 'jamshedpur', label: 'Jamshedpur (East Singhbhum)' },
    { value: 'bokaro', label: 'Bokaro' },
    { value: 'dhanbad', label: 'Dhanbad' },
    { value: 'hazaribagh', label: 'Hazaribagh' },
    { value: 'deoghar', label: 'Deoghar' },
    { value: 'giridih', label: 'Giridih' },
    { value: 'palamu', label: 'Palamu' },
    { value: 'dumka', label: 'Dumka' },
    { value: 'chaibasa', label: 'Chaibasa (West Singhbhum)' }
  ];

  const urgencies = [
    { value: 'immediate', label: 'Immediate (Critical)' },
    { value: '1month', label: 'Within 1 month' },
    { value: '3months', label: 'Within 3 months' },
    { value: '6months', label: 'Within 6 months' },
    { value: 'longterm', label: 'Long-term' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = async () => {
    if (currentStep === 1) {
      setCurrentStep(2);
      setIsAnalyzing(true);
      
      // Simulate AI analysis delay
      setTimeout(async () => {
        try {
          const results = await analyzeChallenge(formData);
          setAiResults(results);
        } catch (e) {
          // Fallback mock data if service is not fully implemented
          setAiResults({
            category: 'Infrastructure',
            confidence: 92,
            priorityScore: 85,
            priorityReasons: ['Affects large number of daily commuters', 'Safety hazard'],
            keywords: ['road repair', 'potholes', 'accidents', 'monsoon'],
            skills: ['Civil Engineering', 'Urban Planning', 'Data Analytics'],
            technologies: ['GIS Mapping', 'Drone Survey', 'Material Science'],
            impact: 'Approx 5000+ daily beneficiaries within 3 months',
            similarChallenges: 14,
            suggestions: [
              'Implement a smart pothole detection system using mobile cameras.',
              'Use recycled plastic for durable road construction.'
            ]
          });
        }
        setIsAnalyzing(false);
      }, 2000);
    } else {
      setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1));
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const renderStepIndicator = () => (
    <div className="step-indicator">
      {STEPS.map((step, index) => (
        <div key={step} className={`step ${index === currentStep ? 'active' : index < currentStep ? 'completed' : ''}`}>
          <div className="step-circle">{index < currentStep ? '✓' : index + 1}</div>
          <div className="step-label">{step}</div>
          {index < STEPS.length - 1 && <div className="step-line" />}
        </div>
      ))}
    </div>
  );

  const renderDescribeForm = () => (
    <div className="form-section animate-fade-in">
      <h2 className="section-title">Describe Your Challenge</h2>
      <p className="section-desc">Provide detailed information about the civic issue you are facing.</p>
      
      <div className="form-grid">
        <div className="form-group full-width">
          <Input 
            label="Challenge Title *" 
            name="title" 
            value={formData.title} 
            onChange={handleInputChange} 
            placeholder="e.g., Frequent Water Logging in Sector 4"
            required 
          />
        </div>
        
        <div className="form-group full-width">
          <label className="form-label">Detailed Description * (min 100 chars recommended)</label>
          <textarea 
            className="form-textarea" 
            name="description" 
            value={formData.description} 
            onChange={handleInputChange} 
            placeholder="Describe the issue, how long it has been happening, and its impact on the community..."
            rows={5}
            required
          />
        </div>

        <div className="form-group">
          <Select 
            label="Category" 
            name="category" 
            value={formData.category} 
            onChange={handleInputChange}
            options={categories} 
          />
        </div>

        <div className="form-group">
          <Select 
            label="District" 
            name="district" 
            value={formData.district} 
            onChange={handleInputChange}
            options={districts} 
          />
        </div>

        <div className="form-group full-width">
          <Input 
            label="Specific Location" 
            name="location" 
            value={formData.location} 
            onChange={handleInputChange} 
            placeholder="e.g., Main Road near City Center Mall"
          />
        </div>

        <div className="form-group">
          <Select 
            label="Urgency" 
            name="urgency" 
            value={formData.urgency} 
            onChange={handleInputChange}
            options={urgencies} 
          />
        </div>

        <div className="form-group">
          <Input 
            label="Target Beneficiaries" 
            name="beneficiaries" 
            value={formData.beneficiaries} 
            onChange={handleInputChange} 
            placeholder="e.g., Local residents, School children"
          />
        </div>

        <div className="form-group full-width">
          <label className="form-label">Expected Outcome</label>
          <textarea 
            className="form-textarea" 
            name="outcome" 
            value={formData.outcome} 
            onChange={handleInputChange} 
            placeholder="What does a successful resolution look like?"
            rows={3}
          />
        </div>
      </div>

      <div className="form-actions">
        <Button variant="secondary" onClick={() => navigate('/citizen')}>Cancel</Button>
        <Button variant="primary" onClick={handleNext} disabled={!formData.title || !formData.description}>Next Step</Button>
      </div>
    </div>
  );

  const renderEvidenceForm = () => (
    <div className="form-section animate-fade-in">
      <h2 className="section-title">Upload Evidence</h2>
      <p className="section-desc">Photos, videos, or documents help students understand the problem better.</p>
      
      <div className="upload-area">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="upload-icon"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
        <h3>Drag & drop files here</h3>
        <p>or click to browse (Max 5MB per file)</p>
        <Button variant="outline" size="sm" className="mt-4">Browse Files</Button>
      </div>

      <div className="file-list">
        {formData.files.length > 0 ? (
          formData.files.map((file, i) => <div key={i} className="file-item">{file.name}</div>)
        ) : (
          <p className="no-files-text">No files uploaded yet.</p>
        )}
      </div>

      <div className="form-actions">
        <Button variant="secondary" onClick={handleBack}>Back</Button>
        <Button variant="primary" onClick={handleNext}>Next Step</Button>
      </div>
    </div>
  );

  const renderAIAnalysis = () => (
    <div className="form-section animate-fade-in">
      {isAnalyzing ? (
        <div className="ai-loading-state">
          <div className="brain-pulse-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
          </div>
          <h3>AI is analyzing your challenge...</h3>
          <p>Extracting insights, categorizing, and finding similar cases.</p>
        </div>
      ) : aiResults ? (
        <div className="ai-results-view">
          <h2 className="section-title">AI Analysis Results</h2>
          <p className="section-desc">Our AI has analyzed your challenge to make it more actionable for student teams. You can edit these before publishing.</p>
          
          <AIInsightCard insights={aiResults} />
          
          <div className="mt-6">
            <AISuggestions suggestions={aiResults.suggestions} />
          </div>

          <div className="form-actions mt-6">
            <Button variant="secondary" onClick={handleBack}>Back</Button>
            <Button variant="primary" onClick={handleNext}>Confirm Analysis</Button>
          </div>
        </div>
      ) : null}
    </div>
  );

  const renderReview = () => (
    <div className="form-section animate-fade-in">
      <h2 className="section-title">Review & Publish</h2>
      <p className="section-desc">Please review the details before making it public on JanSetu.</p>
      
      <div className="review-container">
        <div className="review-block">
          <h3>Basic Details</h3>
          <div className="review-grid">
            <div className="review-item"><span className="label">Title:</span> {formData.title}</div>
            <div className="review-item"><span className="label">Category:</span> {aiResults?.category || formData.category}</div>
            <div className="review-item"><span className="label">Location:</span> {formData.district} - {formData.location}</div>
            <div className="review-item"><span className="label">Urgency:</span> {formData.urgency}</div>
          </div>
          <div className="review-item full"><span className="label">Description:</span><p>{formData.description}</p></div>
        </div>

        <div className="review-block ai-block">
          <h3>AI Enriched Data</h3>
          <div className="review-tags">
            <span className="label">Keywords:</span>
            {aiResults?.keywords?.map((k, i) => <span key={i} className="review-tag">{k}</span>)}
          </div>
          <div className="review-tags mt-2">
            <span className="label">Required Skills:</span>
            {aiResults?.skills?.map((s, i) => <span key={i} className="review-tag skill-tag">{s}</span>)}
          </div>
        </div>
      </div>

      <div className="form-actions">
        <Button variant="secondary" onClick={handleBack}>Go Back</Button>
        <Button variant="success" onClick={handleNext}>Publish Challenge</Button>
      </div>
    </div>
  );

  const renderPublished = () => (
    <div className="form-section success-section animate-fade-in">
      <div className="success-icon-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      </div>
      <h2 className="success-title">Challenge Published Successfully!</h2>
      <p className="success-desc">Your challenge has been published to the JanSetu marketplace. Student teams will now be able to view it and submit solutions.</p>
      
      <div className="challenge-id-box">
        Challenge ID: <strong>JS-2026-{Math.floor(Math.random() * 10000)}</strong>
      </div>

      <div className="success-actions">
        <Button variant="outline" onClick={() => navigate('/citizen/my-challenges')}>View My Challenges</Button>
        <Button variant="primary" onClick={() => navigate('/citizen')}>Go to Dashboard</Button>
      </div>
    </div>
  );

  return (
    <DashboardLayout>
      <div className="submit-challenge-page">
        <div className="page-header">
          <h1>Submit a New Challenge</h1>
        </div>
        
        <div className="form-container">
          {renderStepIndicator()}
          
          <div className="step-content">
            {currentStep === 0 && renderDescribeForm()}
            {currentStep === 1 && renderEvidenceForm()}
            {currentStep === 2 && renderAIAnalysis()}
            {currentStep === 3 && renderReview()}
            {currentStep === 4 && renderPublished()}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SubmitChallengePage;
