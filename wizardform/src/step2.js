// src/components/Step2.js
import React from 'react';

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div>
      <h2>Step 2: Contact Details</h2>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step2;
