import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import '../styles.css';

function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'missions'), (snapshot) => {
      const reportList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setReports(reportList);
    });
    return () => unsubscribe();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    const missionRef = doc(db, 'missions', id);
    await updateDoc(missionRef, {
      status: newStatus
    });
  };

  return (
    <div className="container">
      <h2 className="section-title"> Survey Reports</h2>
      {reports.length === 0 ? (
        <p>No missions found.</p>
      ) : (
        <ul>
          {reports.map(report => (
            <li key={report.id} className="list-item">
              <strong>{report.name || "Unnamed Mission"}</strong> – Altitude: {report.altitude || "--"}m – Status: <strong>{report.status}</strong>
              <br />
              <select
                value={report.status}
                onChange={e => handleStatusChange(report.id, e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="in-mission">In-Mission</option>
                <option value="completed">Completed</option>
              </select>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Reports;