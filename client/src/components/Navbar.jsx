// src/components/Navbar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the auth session and kick them back to login
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <nav style={{
      height: '60px',
      background: '#222',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      borderBottom: '1px solid #444'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
        🚀 Project Dashboard
      </div>
      <div>
        <button 
          onClick={handleLogout}
          style={{
            background: '#ff4d4f',
            color: 'white',
            border: 'none',
            padding: '6px 12px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}