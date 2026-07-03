// src/pages/Signup.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/pages/Signup.css"; // Imports our layout structure stylesheet

export default function Signup() {
  // 1. STATE MANAGEMENT (Memory slots tracking input entries in real time)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); // Holds system or validation error strings

  // 2. ROUTING HOOK: Activating our steering wheel tool to programmatically change URLs
  const navigate = useNavigate();

  // 3. HANDLER FUNCTION: Runs immediately when form submit is triggered
  const handleSignup = (e) => {
    // e.preventDefault() stops the browser from doing a full page refresh
    e.preventDefault(); 
    
    // Clears older validation messages to start a clean check
    setError('');       

    // PASSWORD CHECK: Safely verifies if both password fields match perfectly
    if (password !== confirmPassword) {
      setError('Passwords do not match. Please verify your typing.');
      return; // Breaks function execution early so account is not processed
    }

    // Success action placeholder
    alert('Account created successfully! Redirecting to login...');
    
    // Takes the user back to the login route screen so they can test their new account
    navigate('/login'); 
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
            {/* onSubmit links the interactive button click to our execution brain block */}
            <form onSubmit={handleSignup} className="signup-form">
              
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
                {/* type="submit" instructs the form wrapper to fire our handleSignup function */}
                <button type="submit" className="signup-button">
                  Create Account
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