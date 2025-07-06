
import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { realtimeDb } from '../firebase';
import '../styles.css';

function Monitor() {
  const [positions, setPositions] = useState({});

  useEffect(() => {
    const positionRef = ref(realtimeDb, 'positions/');
    const unsubscribe = onValue(positionRef, (snapshot) => {
      const data = snapshot.val();
      setPositions(data || {});
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="container">
      <h2 className="section-title"> Live Monitor</h2>
      <ul>
        {Object.entries(positions).map(([droneId, pos]) => (
          <li key={droneId} className="list-item">
            <strong>{droneId}</strong>: Lat {pos.lat}, Lng {pos.lng}, Status: {pos.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Monitor;