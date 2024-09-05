// src/components/Step1.js
import React from 'react';

const Step1 = ({ formData, setFormData, nextStep }) => {
  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step1;
