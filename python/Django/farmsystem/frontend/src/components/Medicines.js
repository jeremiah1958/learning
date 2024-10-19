import React, { useEffect, useState } from 'react';

const Medicines = () => {
  const [medicines, setMedicines] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [applicationDate, setApplicationDate] = useState('');
  const [quantity, setQuantity] = useState('');
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/medicines/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setMedicines(data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching medicines.');
        setLoading(false);
        console.error('Error fetching data:', err.message);
      }
    };

    fetchMedicines();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/medicines-add/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          description,
          application_date: applicationDate,
          quantity: parseInt(quantity, 10),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setMedicines([...medicines, data]);
      setName('');
      setDescription('');
      setApplicationDate('');
      setQuantity('');
      setShowForm(false);
      setSuccess('Medicine added successfully!');
    } catch (err) {
      setError(`Error adding medicine: ${err.message}`);
    }
  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Medicines</h1>
      <ul>
        {medicines.map((medicine, index) => (
          <li key={medicine.id}>
            {index + 1}. {medicine.name} - {medicine.description} - {medicine.application_date} - {medicine.quantity}
          </li>
        ))}
      </ul>

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Add Medicine'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Description:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Application Date (YYYY-MM-DD):
            <input
              type="date"
              value={applicationDate}
              onChange={(e) => setApplicationDate(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Quantity:
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Add Medicine</button>
        </form>
      )}

      {success && <div>{success}</div>}
    </div>
  );
};

export default Medicines;
