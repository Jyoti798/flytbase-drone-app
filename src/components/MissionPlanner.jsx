import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import '../styles.css';

function MissionPlanner() {
  const [name, setName] = useState('');
  const [altitude, setAltitude] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'missions'), {
      name,
      altitude,
      status: 'pending',
      createdAt: Date.now()
    });
    setName('');
    setAltitude('');
  };

  return (
    <div className="container">
      <h2 className="section-title"> Mission Planner</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Mission Name" className="input-field" />
        <input value={altitude} onChange={e => setAltitude(e.target.value)} placeholder="Altitude (m)" className="input-field" />
        <button type="submit" className="button">➕ Plan Mission</button>
      </form>
    </div>
  );
}

export default MissionPlanner;
