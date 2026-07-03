// src/layouts/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function MainLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Top persistent block */}
      <Navbar />

      {/* Main workspace grouping structural elements horizontally */}
      <div style={{ display: 'flex', flex: 1 }}>
        {/* Left fixed block */}
        <Sidebar />

        {/* Dynamic page viewport content injections */}
        <main style={{ flex: 1, padding: '30px', background: '#fff' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}