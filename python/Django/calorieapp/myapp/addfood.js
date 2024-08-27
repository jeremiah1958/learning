import React, { useState } from 'react';

function AddFood({ addFood }) {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (foodName && calories) {
      addFood(foodName, calories);
      setFoodName('');
      setCalories('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Food name"
        value={foodName}
        onChange={(e) => setFoodName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />
      <button type="submit">Add Food</button>
    </form>
  );
}

export default AddFood;
