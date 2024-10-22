import React, { useEffect, useState } from 'react';

const Harvests = () => {
  const [harvests, setHarvests] = useState([]);
  const [cropName, setCropName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const fetchHarvests = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/harvests/');
        const data = await response.json();
        setHarvests(data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching harvests.');
        setLoading(false);
        console.error('Error fetching data:', err.message);
      }
    };

    fetchHarvests();
  }, []);

  const handleAddHarvest = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/harvests-add/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          crop_name: cropName,
          quantity,
          date
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add harvest.');
      }

      const newHarvest = await response.json();
      setHarvests([...harvests, newHarvest]); 
      setCropName('');
      setQuantity('');
      setDate('');
      setSuccessMessage('Harvest added successfully!');
    } catch (err) {
      setError('Error adding harvest.');
      console.error('Error:', err.message);
    } finally {
      setLoading(false);
    }
  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Harvests</h1>

      {}
      <form onSubmit={handleAddHarvest} className="space-y-3">
        <div>
          <label htmlFor="cropName" className="block text-sm font-medium text-gray-700">Crop Name</label>
          <input
            type="text"
            id="cropName"
            value={cropName}
            onChange={(e) => setCropName(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>
        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">Add Harvest</button>
      </form>

      {}
      {successMessage && <p className="text-green-600 mt-3">{successMessage}</p>}

      {}
      <ul className="mt-4 space-y-2">
        {harvests.map((harvest, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded-lg shadow-sm">
            {index + 1}. {harvest.crop_name} - Quantity: {harvest.quantity} - Date: {harvest.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Harvests;
