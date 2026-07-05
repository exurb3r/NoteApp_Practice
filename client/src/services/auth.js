// src/services/auths.js

// 1. SIGNUP HANDLER
export const handleSignup = async ({ data, setError, navigate }) => {
  if (data.password !== data.confirmPassword) {
    setError('Passwords do not match. Please verify your typing.');
    return; 
  }

  const BACKEND_URL = 'http://localhost:3500/auth/signup';

  const accountData = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    username: data.username,
    password: data.password
  };

  try {
    const response = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(accountData)
    });

    const result = await response.json();

    if (response.ok) {
      alert('Account created successfully! Redirecting to login...');
      navigate('/login'); 
    } else {
      setError(result.message || 'An error occurred during signup.');
    }
  } catch (error) {
    setError('Cannot connect to server. Please check if your backend is running.');
  }
};


// 2. LOGIN HANDLER 
export const handleLogin = async ({ data, setError, navigate }) => {
  const BACKEND_URL = 'http://localhost:3500/auth/login';

  // Your login controller only expects email and password
  const loginData = {
    email: data.email,
    password: data.password
  };

  try {
    const response = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData)
    });

    const result = await response.json();

    if (response.ok) {
      alert('Login successful!');
      localStorage.setItem('isAuthenticated', 'true'); // Store auth state
      navigate('/noteapp'); 
    } else {
      setError(result.message || 'Invalid email or password.');
    }
  } catch (error) {
    setError('Cannot connect to server. Please check if your backend is running.');
  }
};

