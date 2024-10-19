import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FinancialRecords = () => {
  const [records, setRecords] = useState([]); 
  const [newDescription, setNewDescription] = useState(''); 
  const [newAmount, setNewAmount] = useState(''); 
  const [newDate, setNewDate] = useState(''); 
  const [newType, setNewType] = useState('Income'); 
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFinancialRecords = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/financial-summary/');
        console.log('API Response:', response.data); 
        
        const data = Array.isArray(response.data) ? response.data : response.data.records; 
        
        setRecords(data); 
        setLoading(false); 
      } catch (err) {
        setError('Error fetching financial records.');
        setLoading(false); 
        console.error('Error fetching data:', err.response ? err.response.data : err.message); 
      }
    };

    fetchFinancialRecords();
  }, []);

  
  const handleAddRecord = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/add-financial-record/', {
        description: newDescription,
        amount: newAmount,
        date: newDate,
        type: newType, 
      });

      
      setRecords([...records, response.data]); 
      alert('Record added successfully!');
      
      
      setNewDescription('');
      setNewAmount('');
      setNewDate('');
      setNewType('Income'); 
      
    } catch (err) {
      console.error('Error adding record:', err.response ? err.response.data : err.message);
    }
  };

  
  if (error) return <div>{error}</div>;

  
  if (loading) return <div>Loading...</div>;

  
  if (!Array.isArray(records)) {
    return <div>No financial records available.</div>;
  }

  
  return (
    <div>
      <h1>Financial Records</h1>
      <ul>
        {records.map((record, index) => (
          <li key={record.id}> {}
            {index + 1}. {record.description} - Amount: {record.amount} - Date: {record.date} - Type: {record.type}
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
