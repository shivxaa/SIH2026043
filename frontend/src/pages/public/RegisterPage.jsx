import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './RegisterPage.css';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';

const roles = [
  { id: 'citizen', title: 'Citizen / Community', icon: '👤', desc: 'Report challenges and track progress' },
  { id: 'university', title: 'University / Institute', icon: '🏛️', desc: 'Adopt challenges and guide teams' },
  { id: 'student', title: 'Student Innovator', icon: '🎓', desc: 'Build solutions and gain experience' },
  { id: 'mentor', title: 'Expert / Mentor', icon: '👨‍🏫', desc: 'Guide teams with industry experience' },
  { id: 'industry', title: 'Industry Partner', icon: '🏢', desc: 'Provide funding and resources' },
];

const RegisterPage = () => {
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    organization: '',
    skills: ''
  });
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const roleParam = params.get('role');
    if (roleParam && roles.some(r => r.id === roleParam)) {
      setSelectedRole(roleParam);
      setStep(2);
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step === 1 && selectedRole) setStep(2);
    else if (step === 2) setStep(3);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock registration
    navigate('/login');
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <Card className="register-card">
          <div className="register-header">
            <h2>Join JanSetu</h2>
            <p>Create your account to start making an impact</p>
          </div>

          <div className="step-indicator">
            <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>1</div>
            <div className={`step-line ${step >= 2 ? 'active' : ''}`}></div>
            <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>2</div>
            <div className={`step-line ${step >= 3 ? 'active' : ''}`}></div>
            <div className={`step-dot ${step >= 3 ? 'active' : ''}`}>3</div>
          </div>

          {step === 1 && (
            <div className="step-content">
              <h3>Select your role</h3>
              <div className="roles-grid">
                {roles.map((role) => (
                  <div 
                    key={role.id}
                    className={`role-select-card ${selectedRole === role.id ? 'selected' : ''}`}
                    onClick={() => setSelectedRole(role.id)}
                  >
                    <div className="role-select-icon">{role.icon}</div>
                    <h4>{role.title}</h4>
                    <p>{role.desc}</p>
                  </div>
                ))}
              </div>
              <div className="step-actions right">
                <Button variant="primary" onClick={handleNext} disabled={!selectedRole}>Next Step</Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="step-content">
              <h3>Basic Information</h3>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" />
              </div>
              <div className="step-actions">
                <Button variant="outline" onClick={handleBack}>Back</Button>
                <Button variant="primary" onClick={handleNext} disabled={!formData.name || !formData.email || !formData.password}>Next Step</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="step-content">
              <h3>Role Specific Details</h3>
              
              {(selectedRole === 'university' || selectedRole === 'industry' || selectedRole === 'student') && (
                <div className="form-group">
                  <label>{selectedRole === 'student' ? 'University Name' : 'Organization Name'}</label>
                  <input type="text" name="organization" value={formData.organization} onChange={handleChange} placeholder="Enter institution or company name" />
                </div>
              )}

              {(selectedRole === 'student' || selectedRole === 'mentor') && (
                <div className="form-group">
                  <label>Skills / Expertise (comma separated)</label>
                  <input type="text" name="skills" value={formData.skills} onChange={handleChange} placeholder="e.g. React, Python, Data Analysis" />
                </div>
              )}

              {selectedRole === 'citizen' && (
                <div className="form-group">
                  <label>District</label>
                  <select name="district" className="form-select">
                    <option value="">Select District</option>
                    <option value="ranchi">Ranchi</option>
                    <option value="dhanbad">Dhanbad</option>
                    <option value="bokaro">Bokaro</option>
                    <option value="jamshedpur">Jamshedpur</option>
                  </select>
                </div>
              )}

              <div className="terms-check">
                <label>
                  <input type="checkbox" required />
                  I agree to the Terms of Service and Privacy Policy
                </label>
              </div>

              <div className="step-actions">
                <Button variant="outline" onClick={handleBack}>Back</Button>
                <Button variant="primary" onClick={handleSubmit}>Complete Registration</Button>
              </div>
            </div>
          )}

          <div className="register-footer">
            Already have an account? <Link to="/login">Sign in</Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
