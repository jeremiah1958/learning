import React, { useEffect, useState } from 'react';

const Plants = () => {
  const [plants, setPlants] = useState([]);
  const [name, setName] = useState('');
  const [harvestDate, setHarvestDate] = useState('');
  const [plantDate, setPlantDate] = useState('');
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/plants/");
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setPlants(data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching plants.');
        setLoading(false);
        console.error('Error fetching data:', err.message);
      }
    };

    fetchPlants();
  }, []);

  const handleAddPlant = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/plants-add/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          expected_harvest_date: harvestDate,
          plant_date: plantDate,
          quantity: quantity
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add plant.');
      }

      const newPlant = await response.json();
      setPlants([...plants, newPlant]); 
      setName(''); 
      setHarvestDate('');
      setPlantDate('');
      setQuantity('');
      setSuccessMessage('Plant added successfully!');
    } catch (err) {
      setError('Error adding plant.');
      console.error('Error:', err.message);
    } finally {
      setLoading(false);
    }
  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Plants</h1>
<div>
  
</div>
      {}
      <form onSubmit={handleAddPlant} className="bg-white p-4 rounded-lg shadow-md space-y-3 mb-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Plant Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity:</label>
          <input
            type="text"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>
        <div>
          <label htmlFor="harvestDate" className="block text-sm font-medium text-gray-700">Expected Harvest Date:</label>
          <input
            type="date"
            id="harvestDate"
            value={harvestDate}
            onChange={(e) => setHarvestDate(e.target.value)}
            required
            className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>
        <div>
          <label htmlFor="plantDate" className="block text-sm font-medium text-gray-700">Planting Date:</label>
          <input
            type="date"
            id="plantDate"
            value={plantDate}
            onChange={(e) => setPlantDate(e.target.value)}
            required
            className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full text-sm"
        >
          Add Plant
        </button>
      </form>

      {successMessage && <p className="text-green-500 mt-4 text-sm">{successMessage}</p>}

      {}
      <ul className="mt-4 space-y-1">
        {plants.map((plant, index) => (
          <li key={plant.id} className="bg-gray-100 p-2 rounded-lg shadow-sm text-sm">
            {index + 1}. {plant.name} (Planted on: {plant.plant_date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Plants;
