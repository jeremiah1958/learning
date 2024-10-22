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
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Farmers</h1>

      {/* Form */}
      <form onSubmit={handleAddFarmer} className="space-y-3">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
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
          <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-700">Contact Info:</label>
          <textarea
            id="contactInfo"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Add Farmer
        </button>
      </form>

      {}
      {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}

      {}
      <ul className="mt-4 space-y-1">
        {farmers.map((farmer, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded-lg shadow-sm">
            {index + 1}. {farmer.name} - Contact: {farmer.contact_info} - Location: {farmer.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Farmers;
