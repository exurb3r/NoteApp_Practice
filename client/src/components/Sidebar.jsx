// src/components/Sidebar.jsx

import React from "react";
import "../styles/components/sidebar.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  function handleButtonClick(buttonName) {
    console.log(buttonName);
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h3>NoteApp</h3>
      </div>

      {/* Dashboard */}
      <div className="sidebar-section">
        <Button
          className="sidebar-item"
          onClick={() => {
            handleButtonClick("Dashboard");
            navigate("/noteapp");
          }}
        >
          <FaHome className="sidebar-icon" />
          <span>Dashboard</span>
        </Button>
      </div>

      {/* Notes */}
      <div className="sidebar-section">
        <p className="sidebar-heading">NOTES</p>

        <Button
          className="sidebar-item"
          onClick={() => {
            handleButtonClick("Personal Notes");
            navigate("/noteapp");
          }}
        >
          <FaStickyNote className="sidebar-icon" />
          <span>Personal Notes</span>
        </Button>

        <Button
          className="sidebar-item"
          onClick={() => {
            handleButtonClick("Community Notes");
            navigate("/noteapp/community-notes");
          }}
        >
          <FaUsers className="sidebar-icon" />
          <span>Community Notes</span>
        </Button>
      </div>

      {/* Account */}
      <div className="sidebar-section">
        <p className="sidebar-heading">ACCOUNT</p>

        <Button
          className="sidebar-item"
          onClick={() => {
            handleButtonClick("Profile");
            navigate("/noteapp/profile");
          }}
        >
          <FaUser className="sidebar-icon" />
          <span>Profile</span>
        </Button>

        <Button
          className="sidebar-item"
          onClick={() => {
            handleButtonClick("Notifications");
            navigate("/noteapp/notifications");
          }}
        >
          <FaBell className="sidebar-icon" />
          <span>Notifications</span>
        </Button>

        <Button
          className="sidebar-item"
          onClick={() => {
            handleButtonClick("Stats & Activities");
            navigate("/noteapp/stats-activities");
          }}
        >
          <FaChartBar className="sidebar-icon" />
          <span>Stats & Activity</span>
        </Button>
      </div>

      <hr className="sidebar-divider" />

      <div className="sidebar-section">
        <Button
          className="sidebar-item"
          onClick={() => handleButtonClick("More")}
        >
          <FaEllipsisH className="sidebar-icon" />
          <span>More</span>
        </Button>
      </div>
    </aside>
  );
}