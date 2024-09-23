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

  // Fetch plants from the database
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

  // Function to handle form submission
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
      setPlants([...plants, newPlant]); // Add the new plant to the list
      setName(''); // Reset the form fields
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

  // If there's an error, show the error message
  if (error) return <div>{error}</div>;

  // Show a loading message until the data is fetched
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Plants</h1>

      {/* Add new plant form */}
      <form onSubmit={handleAddPlant}>
        <div>
          <label htmlFor="name">Plant Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="text"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="harvestDate">Expected Harvest Date:</label>
          <input
            type="date"
            id="harvestDate"
            value={harvestDate}
            onChange={(e) => setHarvestDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="plantDate">Planting Date:</label>
          <input
            type="date"
            id="plantDate"
            value={plantDate}
            onChange={(e) => setPlantDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Plant</button>
      </form>

      {/* Show success message if plant is added */}
      {successMessage && <p>{successMessage}</p>}

      {/* Display list of plants */}
      <ul>
        {plants.map((plant, index) => (
          <li key={index}>
            {plant.name} - {plant.expected_harvest_date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Plants;
