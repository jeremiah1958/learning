import React from 'react';

function FoodItem({ food, removeFood }) {
  return (
    <div className="food-item">
      <span>{food.name} - {food.calories} Calories</span>
      <button onClick={() => removeFood(food.id)}>Remove</button>
    </div>
  );
}

export default FoodItem;
