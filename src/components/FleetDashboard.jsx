import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import '../styles.css';

function FleetDashboard() {
  const [drones, setDrones] = useState([]);

  useEffect(() => {
    const fetchDrones = async () => {
      const droneSnap = await getDocs(collection(db, 'drones'));
      const droneList = droneSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDrones(droneList);
    };
    fetchDrones();
  }, []);

  return (
    <div className="container">
      <h2 className="section-title"> Fleet Dashboard</h2>
      <ul>
        {drones.map(drone => (
          <li key={drone.id} className="list-item">
            <strong>{drone.name}</strong> – {drone.status} – Battery: {drone.battery}%
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FleetDashboard;