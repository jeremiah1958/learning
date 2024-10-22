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
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Financial Records</h1>
      <ul className="mb-4">
        {records.map((record, index) => (
          <li key={record.id} className="bg-gray-100 p-2 rounded-lg shadow-sm mb-2">
            {index + 1}. {record.description} - Amount: {record.amount} - Date: {record.date} - Type: {record.type}
          </li>
        ))}
      </ul>

      <h2 className="text-lg font-semibold mt-4">Add New Financial Record</h2>
      <form onSubmit={handleAddRecord} className="space-y-3">
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <input
            type="text"
            id="description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
          <input
            type="number"
            id="amount"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            id="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
          <select
            id="type"
            value={newType}
            onChange={(e) => setNewType(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Add Record
        </button>
      </form>
    </div>
  );
};

export default FinancialRecords;
