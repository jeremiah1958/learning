// src/components/WizardForm.js
import React, { useState } from 'react';
import Step1 from './personalinfo';
import Step2 from './contact';
import Step3 from './review';

const WizardForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  switch (currentStep) {
    case 1:
      return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
    case 2:
      return <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <Step3 formData={formData} setFormData={setFormData} prevStep={prevStep} />;
    default:
      return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
  }
};

export default WizardForm;
