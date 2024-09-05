// src/components/Step3.js
import React from 'react';

const Step3 = ({ formData, setFormData, prevStep }) => {
  return (
    <div>
      <h2>Step 3: Review and Submit</h2>
      <p><strong>First Name:</strong> {formData.firstName}</p>
      <p><strong>Last Name:</strong> {formData.lastName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <button onClick={prevStep}>Previous</button>
      <button onClick={() => alert('Form Submitted!')}>Submit</button>
    </div>
  );
};

export default Step3;
