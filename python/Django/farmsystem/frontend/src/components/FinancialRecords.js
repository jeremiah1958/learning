import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FinancialRecords = () => {
  const [records, setRecords] = useState([]); // Initialize as an array
  const [newDescription, setNewDescription] = useState(''); // Input for new record description
  const [newAmount, setNewAmount] = useState(''); // Input for new record amount
  const [newDate, setNewDate] = useState(''); // Input for new record date
  const [newType, setNewType] = useState('Income'); // Default to 'Income'
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFinancialRecords = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/financial-summary/');
        console.log('API Response:', response.data); // Log the response data
        
        const data = Array.isArray(response.data) ? response.data : response.data.records; 
        
        setRecords(data); // Set the records data
        setLoading(false); // Stop loading once data is fetched
      } catch (err) {
        setError('Error fetching financial records.');
        setLoading(false); // Stop loading if there's an error
        console.error('Error fetching data:', err.response ? err.response.data : err.message); // Log detailed error
      }
    };

    fetchFinancialRecords();
  }, []);

  // Function to handle adding a new financial record
  const handleAddRecord = async (e) => {
    e.preventDefault(); // Prevent page refresh
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/add-financial-record/', {
        description: newDescription,
        amount: newAmount,
        date: newDate,
        type: newType, // Send type along with the other data
      });

      // Refresh records after successful addition
      setRecords([...records, response.data]); // Add the new record to the state
      alert('Record added successfully!');
      
      // Reset form fields after submission
      setNewDescription('');
      setNewAmount('');
      setNewDate('');
      setNewType('Income'); // Reset type to 'Income' by default
      
    } catch (err) {
      console.error('Error adding record:', err.response ? err.response.data : err.message);
    }
  };

  // If there's an error, show the error message
  if (error) return <div>{error}</div>;

  // Show a loading message until the data is fetched
  if (loading) return <div>Loading...</div>;

  // Check if records is an array before trying to map
  if (!Array.isArray(records)) {
    return <div>No financial records available.</div>;
  }

  // Render financial records if data is available
  return (
    <div>
      <h1>Financial Records</h1>
      <ul>
        {records.map((record) => (
          <li key={record.id}> {/* Assuming `id` is the unique key */}
            {record.description} - Amount: {record.amount} - Date: {record.date} - Type: {record.type}
          </li>
        ))}
      </ul>

      <h2>Add New Financial Record</h2>
      <form onSubmit={handleAddRecord}>
        <label>
          Description:
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Amount:
          <input
            type="number"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Type:
          <select value={newType} onChange={(e) => setNewType(e.target.value)}>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </label>
        <br />
        <button type="submit">Add Record</button>
      </form>
    </div>
  );
};

export default FinancialRecords;
