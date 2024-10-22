import React, { useEffect, useState, useContext } from 'react';
import {UserContext} from '../UserContext'

const Plants = () => {
  const {isAuthenticated} = useContext(UserContext)
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
      if (isAuthenticated){
        return
      }
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
    <div className="min-h-screen bg-green-50 p-4">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg border border-green-200">
        <h1 className="text-2xl font-bold mb-4 text-green-800 text-center">Plants <i class="bi bi-tree-fill"></i></h1>
        <form onSubmit={handleAddPlant} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Plant Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-md text-sm"
          >
            Add Plant
          </button>
        </form>

        {successMessage && <p className="text-green-500 mt-4 text-sm">{successMessage}</p>}

        <ul className="mt-4 space-y-1">
          {plants.map((plant) => (
            <li key={plant.id} className="bg-gray-100 p-3 rounded-lg shadow-sm text-sm">
              {plant.name} (Planted on: {plant.plant_date})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Plants;
