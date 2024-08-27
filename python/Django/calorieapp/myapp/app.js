import React, { useState } from 'react';
import AddFood from './AddFood';
import FoodList from './FoodList';
import CalorieSummary from './CalorieSummary';

function App() {
  const [foods, setFoods] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);

  const addFood = (foodName, calories) => {
    const newFood = { id: Date.now(), name: foodName, calories: parseInt(calories) };
    setFoods([...foods, newFood]);
    setTotalCalories(totalCalories + newFood.calories);
  };

  const removeFood = (id) => {
    const foodToRemove = foods.find(food => food.id === id);
    setFoods(foods.filter(food => food.id !== id));
    setTotalCalories(totalCalories - foodToRemove.calories);
  };

  const resetCalories = () => {
    setFoods([]);
    setTotalCalories(0);
  };

  return (
    <div className="app">
      <h1>Calorie Tracker</h1>
      <AddFood addFood={addFood} />
      <FoodList foods={foods} removeFood={removeFood} />
      <CalorieSummary totalCalories={totalCalories} resetCalories={resetCalories} />
    </div>
  );
}

export default App;
