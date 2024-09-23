import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Farmers = () => {
  const [farmers, setFarmers] = useState([]);
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const fetchFarmers = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/farmers/');
        const data = await response.json();
        setFarmers(data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching farmers.');
        setLoading(false);
        console.error('Error fetching data:', err.message);
      }
    };

    fetchFarmers();
  }, []);

  const handleAddFarmer = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/farmers-add/', {
        name,
        contact_info: contactInfo,
        location
      });

      const newFarmer = response.data;
      setFarmers([...farmers, newFarmer]);
      setName('');
      setContactInfo('');
      setLocation('');
      setSuccessMessage('Farmer added successfully!');
    } catch (err) {
      setError('Error adding farmer.');
      console.error('Error:', err.message);
    } finally {
      setLoading(false);
    }
  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Farmers</h1>

      {/* Add new farmer form */}
      <form onSubmit={handleAddFarmer}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="contactInfo">Contact Info:</label>
          <textarea
            id="contactInfo"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Farmer</button>
      </form>

      {/* Show success message if farmer is added */}
      {successMessage && <p>{successMessage}</p>}

      {/* Display list of farmers */}
      <ul>
        {farmers.map((farmer, index) => (
          <li key={index}>
            {farmer.name} - Contact: {farmer.contact_info} - Location: {farmer.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Farmers;
