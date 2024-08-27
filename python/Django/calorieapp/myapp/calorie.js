import React from 'react';

function CalorieSummary({ totalCalories, resetCalories }) {
  return (
    <div className="calorie-summary">
      <h2>Total Calories: {totalCalories}</h2>
      <button onClick={resetCalories}>Reset Calories</button>
    </div>
  );
}

export default CalorieSummary;
