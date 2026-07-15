// src/components/Sidebar.jsx

import React from "react";
import "../styles/components/sidebar.css";

import {
  FaHome,
  FaStickyNote,
  FaUsers,
  FaUser,
  FaBell,
  FaChartBar,
  FaEllipsisH,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h3>NoteApp</h3>
      </div>

      <div className="sidebar-section">
        <button className="sidebar-item">
          <FaHome className="sidebar-icon" />
          <span>Dashboard</span>
        </button>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-heading">NOTES</p>

        <button className="sidebar-item">
          <FaStickyNote className="sidebar-icon" />
          <span>Personal Notes</span>
        </button>

        <button className="sidebar-item">
          <FaUsers className="sidebar-icon" />
          <span>Community Notes</span>
        </button>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-heading">ACCOUNT</p>

        <button className="sidebar-item">
          <FaUser className="sidebar-icon" />
          <span>Profile</span>
        </button>

        <button className="sidebar-item">
          <FaBell className="sidebar-icon" />
          <span>Notifications</span>
        </button>

        <button className="sidebar-item">
          <FaChartBar className="sidebar-icon" />
          <span>Stats & Activity</span>
        </button>
      </div>

      <hr className="sidebar-divider" />

      <div className="sidebar-section">
        <button className="sidebar-item">
          <FaEllipsisH className="sidebar-icon" />
          <span>More</span>
        </button>
      </div>
    </aside>
  );
}