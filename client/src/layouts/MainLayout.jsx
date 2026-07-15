// src/layouts/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="main-layout__content">
        <Sidebar />
        <main className="main-layout__main">
          <Outlet /> {/* This is where the child routes will be rendered */}
        </main>
      </div>
    </div>
  );
}