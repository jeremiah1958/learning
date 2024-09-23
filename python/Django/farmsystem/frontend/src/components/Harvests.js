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
      setHarvests([...harvests, newHarvest]); // Add the new harvest to the list
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
    <div>
      <h1>Harvests</h1>

      {/* Add new harvest form */}
      <form onSubmit={handleAddHarvest}>
        <div>
          <label htmlFor="cropName">Crop Name:</label>
          <input
            type="text"
            id="cropName"
            value={cropName}
            onChange={(e) => setCropName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Harvest</button>
      </form>

      {/* Show success message if harvest is added */}
      {successMessage && <p>{successMessage}</p>}

      {/* Display list of harvests */}
      <ul>
        {harvests.map((harvest, index) => (
          <li key={index}>
            {harvest.crop_name} - {harvest.quantity} - {harvest.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Harvests;
