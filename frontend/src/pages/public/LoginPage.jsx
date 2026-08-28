import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './LoginPage.css';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { switchRole } = useAuth();
  const navigate = useNavigate();

  const handleDemoLogin = async (role) => {
    try {
      await switchRole(role);
      navigate('/dashboard');
    } catch (err) {
      console.error('Demo login failed:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await switchRole('citizen');
      navigate('/dashboard');
    } catch (err) {
      console.error('Login failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <Card className="login-card">
          <div className="login-header">
            <h1 className="login-logo">JanSetu</h1>
            <p>Welcome back to the platform</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
            <Button type="submit" variant="primary" fullWidth size="large" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          <div className="login-footer">
            Don't have an account? <Link to="/register">Register here</Link>
          </div>

          <div className="demo-section">
            <div className="demo-divider">
              <span>Quick Demo Access (SIH 2026)</span>
            </div>
            <div className="demo-roles-grid">
              <button className="demo-role-btn" onClick={() => handleDemoLogin('citizen')}>
                <span className="role-icon">👤</span> Citizen
              </button>
              <button className="demo-role-btn" onClick={() => handleDemoLogin('university')}>
                <span className="role-icon">🏛️</span> University
              </button>
              <button className="demo-role-btn" onClick={() => handleDemoLogin('student')}>
                <span className="role-icon">🎓</span> Student
              </button>
              <button className="demo-role-btn" onClick={() => handleDemoLogin('mentor')}>
                <span className="role-icon">👨‍🏫</span> Mentor
              </button>
              <button className="demo-role-btn" onClick={() => handleDemoLogin('industry')}>
                <span className="role-icon">🏢</span> Industry
              </button>
              <button className="demo-role-btn" onClick={() => handleDemoLogin('admin')}>
                <span className="role-icon">⚙️</span> Admin
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
