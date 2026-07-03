// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/pages/Login.css"; 

export default function Login() {
  /**
   * 1. STATE MANAGEMENT (React useState Hook)
   * We track what the user types in real-time. 'useState' creates a state variable 
   * to hold the value and a setter function to update it.
   */
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('123');
  const [error, setError] = useState(''); // Holds text error strings if credentials fail
  
  /**
   * 2. ROUTING HOOK
   * useNavigate is a hook from react-router-dom that gives us a programmatic way
   * to redirect the user to a new URL path without causing a full page refresh.
   */
  const navigate = useNavigate();

  /**
   * 3. HANDLER FUNCTION FOR FORM SUBMISSION
   * This triggers immediately when the user clicks the "Log In" button or hits enter.
   */
  const handleLogin = (e) => {
    // e.preventDefault() stops the browser from doing its default behavior,
    // which is reloading the whole page and erasing our application state.
    e.preventDefault();
    
    // Clear out any old error messages from previous login attempts
    setError('');

    // Hardcoded credentials simulating data that would typically come from an API/Database
    const HARDCODED_USER = 'admin';
    const HARDCODED_PASS = '123';

    /**
     * 4. THE AUTHENTICATION CHECK
     * We compare the live values inside our state variables (username, password) 
     * against our hardcoded authentication targets.
     */
    if (username === HARDCODED_USER && password === HARDCODED_PASS) {
      
      /**
       * SUCCESS FLOW:
       * A) Save a persistent flag string inside the user's browser storage object.
       * This allows our 'ProtectedRoute' configuration guard to check it and keep us logged in
       * even if we hit refresh, open a new tab, or close the window.
       */
      localStorage.setItem('isAuthenticated', 'true');
      
      /**
       * B) Tell React Router to change the browser URL string to '/noteapp'.
       * The ProtectedRoute guard intercepting this request will read the localStorage 
       * flag we just set above, clear us for entry, and load the MainLayout frame.
       */
      navigate('/noteapp'); 
      
    } else {
      /**
       * FAILURE FLOW:
       * If the credentials don't match, we update our error state. React notices this 
       * state change and automatically re-renders the UI to reveal the error box below.
       */
      setError('Invalid username or password.');
    }
  };

  /**
   * 5. JSX VIEW LAYOUT
   * The structural markup determining how elements arrange on screen.
   */
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          
          {/* Card Title Header */}
          <div className="login-card__header">
            <h1>Welcome To Note App</h1>
          </div>

          <div className="login-card__body">
            {/* The onSubmit event listener intercepts the form submission and runs our logic handler */}
            <form onSubmit={handleLogin} className="login-form">
              
              {/* CONDITIONAL RENDERING: 
                  If 'error' contains a string (evaluated as truthy), render this paragraph.
                  If 'error' is empty ('', evaluated as falsy), React skips this block entirely. */}
              {error && (
                <p className="form-error">
                  {error}
                </p>
              )}

              {/* Username and Password Core Form Inputs */}
              <div className="form-fields">
                <input 
                  type="text" 
                  className="form-input"
                  // Value binds the visible input text directly to our React state value
                  value={username} 
                  // onChange is an event listener. Every time the user presses a key, 
                  // it fires 'setUsername' with the exact text currently inside the box.
                  onChange={(e) => setUsername(e.target.value)} 
                  placeholder="Username"
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

              {/* Form Actions / Submission Interface */}
              <div className="form-actions">
                {/* type="submit" instructs the form element wrapper to invoke the onSubmit handler */}
                <button type="submit" className="login-button">
                  Log In
                </button>
              </div>

              {/* --- NEW BOTTOM FOOTER SECTION WITH DIVIDER --- */}
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