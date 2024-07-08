import React from 'react';

const Display = ({ value }) => {
  return (
    <div className="bg-gray-200 text-right text-4xl p-4 rounded">
      {value || '0'}
    </div>
  );
};

export default Display;
