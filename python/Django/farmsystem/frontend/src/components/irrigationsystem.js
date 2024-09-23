import React, { useEffect, useState } from 'react';

const IrrigationSystem = () => {
  const [irrigationData, setIrrigationData] = useState([]);
  const [newType, setNewType] = useState('');
  const [newDetails, setNewDetails] = useState('');
  const [newStatus, setNewStatus] = useState('off');
  const [newLastInspectionDate, setNewLastInspectionDate] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIrrigationData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/irrigation-system/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setIrrigationData(data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching irrigation system information.');
        setLoading(false);
        console.error('Error fetching data:', err.message);
      }
    };

    fetchIrrigationData();
  }, []);

  const handleAddIrrigationSystem = async (event) => {
    event.preventDefault(); // Prevent form submission default behavior
    console.log(typeof newLastInspectionDate);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/add-irrigation-system/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: newType,
          details: newDetails,
          status: newStatus,
          last_inspection_date: newLastInspectionDate,
        }),
      });

      if (!response.ok) {
        console.log(response.status)
        throw new Error(`Failed to add irrigation system: ${response.status}`);
      }

      const result = await response.json();
      alert('Irrigation system added successfully!');

      // Refresh the data after adding
      const fetchUpdatedData = await fetch('http://127.0.0.1:8000/api/irrigation-system/');
      const updatedData = await fetchUpdatedData.json();
      setIrrigationData(updatedData);

    } catch (err) {
      setError(`Error adding irrigation system: ${err.message}`);
      console.error(err.message);
    }
  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Irrigation System</h1>
      {irrigationData.length > 0 ? (
        irrigationData.map((system) => (
          <div key={system.id}>
            <p>Type: {system.type}</p>
            <p>Details: {system.details}</p>
            <p>Status: {system.status === 'on' ? 'On' : 'Off'}</p>
            <p>Last Inspection Date: {system.last_inspection_date}</p>
          </div>
        ))
      ) : (
        <p>No irrigation data available.</p>
      )}

      <h2>Add New Irrigation System</h2>
      <form onSubmit={handleAddIrrigationSystem}>
        <label>
          Type:
          <input type="text" value={newType} onChange={(e) => setNewType(e.target.value)} required />
        </label>
        <br />
        <label>
          Details:
          <input type="text" value={newDetails} onChange={(e) => setNewDetails(e.target.value)} required />
        </label>
        <br />
        <label>
          Status:
          <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
            <option value="off">Off</option>
            <option value="on">On</option>
          </select>
        </label>
        <br />
        <label>
          Last Inspection Date:
          <input type="date" value={newLastInspectionDate} onChange={(e) => setNewLastInspectionDate(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Add Irrigation System</button>
      </form>
    </div>
  );
};

export default IrrigationSystem;
