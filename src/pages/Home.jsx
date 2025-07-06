import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function Home() {
  return (
    <div className="home">
      <h1 className="home-title">Drone Survey Management</h1>
      <Link to="/dashboard" className="home-link">Enter Dashboard</Link>
    </div>
  );
}

export default Home;
