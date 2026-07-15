// src/components/Navbar.jsx
import React from 'react';
import { FaBars } from 'react-icons/fa';
import '../styles/components/navbar.css';
import { useNavigate } from 'react-router-dom';


export default function Navbar({ toggleSidebar }) {
    return (
        <nav className="navbar">
          <button
              className="navbar__menu-btn"
              onClick={toggleSidebar}
          >
              <FaBars />
          </button>
          <div className="navbar__title">Title Here</div>
      </nav>
    );
}