// src/pages/Signup.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/pages/Signup.css"; // Imports our layout structure stylesheet
import handleSignup from '../services/auths'; // Imports our signup service function

export default function Signup() {

  // 1. STATE MANAGEMENT (Memory slots tracking input entries in real time)
  const [firstName, setFirstName] = useState('admin');
  const [lastName, setLastName] = useState('admin');
  const [email, setEmail] = useState('test@gmail.com');
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('123');
  const [confirmPassword, setConfirmPassword] = useState('123');
  const [error, setError] = useState(''); // Holds system or validation error strings
  const [loading, setLoading] = useState(false); // FIXED: Added missing loading state

  // 2. ROUTING HOOK: Activating our steering wheel tool to programmatically change URLs
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous error messages
    setLoading(true); // Set loading state to true while processing
    
    try {
        await handleSignup(e, firstName, lastName, email, username, password, confirmPassword, setError, navigate);
    } catch (error) {
        setError('An error occurred while fetching data. Please try again.');
    } finally {
        setLoading(false);
    }
  };

  return (
    // Outer baseline full-page layout centering container
    <div className="signup-page">
      <div className="signup-container">
        
        {/* Main visible content frame wrapper */}
        <div className="signup-card">
          
          {/* Card Title Box */}
          <div className="signup-card__header">
            <h1>Create Account</h1>
          </div>

          {/* Card Form Body Area */}
          <div className="signup-card__body">
            {/* FIXED: Changed onSubmit from handleSignup to your local onSubmit function */}
            <form onSubmit={onSubmit} className="signup-form">
              
              {/* CONDITIONAL RENDERING: If error state has text, render this warning box immediately */}
              {error && (
                <p className="form-error">
                  {error}
                </p>
              )}

              {/* Input grid listing all required fields */}
              <div className="form-fields">
                
                <input 
                  type="text" 
                  className="form-input"
                  value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)} 
                  placeholder="First Name"
                  required 
                />

                <input 
                  type="text" 
                  className="form-input"
                  value={lastName} 
                  onChange={(e) => setLastName(e.target.value)} 
                  placeholder="Last Name"
                  required 
                />

                <input 
                  type="email" 
                  className="form-input"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Email Address"
                  required 
                />

                <input 
                  type="text" 
                  className="form-input"
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  placeholder="Username"
                  required 
                />
                
                {/* --- SIDE-BY-SIDE PASSWORD ROW LAYOUT --- */}
                <div className="password-row">
                  <input 
                    type="password" 
                    className="form-input"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password"
                    required 
                  />

                  {/* EMPTY PLACEHOLDER BOX: Drop your Show/Hide toggle button code right here later */}
                  <div className="show-btn-placeholder"></div>

                  <input 
                    type="password" 
                    className="form-input"
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    placeholder="Confirm Password"
                    required 
                  />
                </div>

              </div>

              {/* Form Submission Action Box */}
              <div className="form-actions">
                {/* Visual bonus: Disable the button while sending data */}
                <button type="submit" className="signup-button" disabled={loading}>
                  {loading ? 'Creating Account...' : 'Create Account'}
                </button>
              </div>

              {/* Bottom redirection utility links */}
              <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', textAlign: 'center' }}>
                Already have an account? <a href="/login" style={{ color: '#0076ff', textDecoration: 'none' }}>Log In</a>
              </p>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}