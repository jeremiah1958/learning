import React from 'react';
import FoodItem from './FoodItem';

function FoodList({ foods, removeFood }) {
  return (
    <div className="food-list">
      {foods.length > 0 ? (
        foods.map(food => (
          <FoodItem key={food.id} food={food} removeFood={removeFood} />
        ))
      ) : (
        <p>No food items added yet.</p>
      )}
    </div>
  );
}

export default FoodList;
