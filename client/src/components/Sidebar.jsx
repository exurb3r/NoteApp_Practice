// src/components/Sidebar.jsx
import React from 'react';

export default function Sidebar() {
  return (
    <aside style={{
      width: '240px',
      background: '#f8f9fa',
      borderRight: '1px solid #e0e0e0',
      minHeight: 'calc(100vh - 60px)', // Takes full remaining screen height below navbar
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        <li style={{ marginBottom: '15px' }}>
          <a href="/home" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>
            🏠 Home Overview
          </a>
        </li>
        <li style={{ marginBottom: '15px' }}>
          <a href="#" style={{ textDecoration: 'none', color: '#666' }}>
            📊 Analytics
          </a>
        </li>
        <li style={{ marginBottom: '15px' }}>
          <a href="#" style={{ textDecoration: 'none', color: '#666' }}>
            ⚙️ Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}