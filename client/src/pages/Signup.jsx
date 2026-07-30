// src/pages/Signup.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/pages/Signup.css"; // Imports our layout structure stylesheet
import { handleSignup } from '../services/auth'; // Imports our signup service function

export default function Signup() {

// Inside src/pages/Signup.jsx
// Swap your short test strings with clean, compliant test values!

const [firstName, setFirstName] = useState('Admin');
const [lastName, setLastName] = useState('User');
const [email, setEmail] = useState('admin@test.com'); // Valid email string format
const [username, setUsername] = useState('admin123');
const [password, setPassword] = useState('SecurePassword@123'); // Satisfies .min() conditions
const [confirmPassword, setConfirmPassword] = useState('SecurePassword@123');
const [error, setError] = useState('');
const [loading, setLoading] = useState(false); // Tracks if the form is currently submitting

  // 2. ROUTING HOOK: Activating our steering wheel tool to programmatically change URLs
  const navigate = useNavigate();

 // inside src/pages/Signup.jsx

const onSubmit = async (e) => {
  e.preventDefault(); // Keep preventDefault here! It belongs to the form event.
  setError(''); 
  setLoading(true); 
  
      // Package everything cleanly
      const payload = {
        data: { firstName, lastName, email, username, password, confirmPassword },
        setError,
        navigate
      };

      try {
        await handleSignup(payload);
      } catch (err) {
        setError('An unexpected error occurred. Please try again.');
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