import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function Header() {
  return (
    <div className="header">
      <h2>Drone Dashboard</h2>
      <nav>
        <Link to="/dashboard">Planner & Reports</Link>
        <Link to="/monitor">Monitor</Link>
      </nav>
    </div>
  );
}

export default Header;
