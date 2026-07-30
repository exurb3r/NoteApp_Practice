// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleLogin } from '../services/auth'; // FIXED: Importing our named backend controller trigger
import "../styles/pages/Login.css"; 

export default function Login() {
  /**
   * 1. STATE MANAGEMENT
   * Notice we swapped 'username' to 'email' because your backend 
   * loginSchema explicitly validates against an email format.
   */
  const [email, setEmail] = useState('admin@test.com'); // Updated with valid string defaults for testing
  const [password, setPassword] = useState('SecurePassword@123'); 
  const [error, setError] = useState(''); 
  
  const navigate = useNavigate();

  /**
   * 2. HANDLER FUNCTION FOR FORM SUBMISSION
   * We now pass the live input credentials directly down to our fetch service module.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Wipe legacy error prompts

    // Fire the async request to your local Express server
    await handleLogin({
      data: { email, password },
      setError,
      navigate
    });
  };

  /**
   * 3. JSX VIEW LAYOUT
   */
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          
          <div className="login-card__header">
            <h1>Welcome To Note App</h1>
          </div>

          <div className="login-card__body">
            {/* Hooked up to our new handleSubmit async wrapper */}
            <form onSubmit={handleSubmit} className="login-form">
              
              {error && (
                <p className="form-error">
                  {error}
                </p>
              )}

              <div className="form-fields">
                {/* Changed input type to email to match backend schema rules */}
                <input 
                  type="email" 
                  className="form-input"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Email Address"
                  required 
                />
                
                <input 
                  type="password" 
                  className="form-input"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="Password"
                  required 
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="login-button">
                  Log In
                </button>
              </div>

              <div className="login-card__footer">
                <hr className="footer-divider" />
                <p className="signup-text">
                  Don't have an account? <a href="/signup" className="signup-link">Sign Up</a>
                </p>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}