// components/RegistrationProcess.jsx
import React, { useState } from 'react';
import PackageSelection from './PackageSelection';
import VendorDetailsForm from './VendorDetailsForm';
import PaymentDetailsForm from './PaymentDetailsForm';
import Confirmation from './Confirmation';

const RegistrationProcess = () => {
  const [step, setStep] = useState(1);
  const [registrationData, setRegistrationData] = useState({
    selectedPackage: null,
    vendorDetails: {},
    paymentDetails: {}
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleRegistrationData = (newData) => {
    setRegistrationData({ ...registrationData, ...newData });
  };

  switch (step) {
    case 1:
      return <PackageSelection onContinue={nextStep} onDataUpdate={handleRegistrationData} />;
    case 2:
      return <VendorDetailsForm onContinue={nextStep} onBack={prevStep} onDataUpdate={handleRegistrationData} />;
    case 3:
      return <PaymentDetailsForm onContinue={nextStep} onBack={prevStep} onDataUpdate={handleRegistrationData} />;
    case 4:
      return <Confirmation data={registrationData} />;
    default:
      return <div>Unknown step</div>;
  }
};

export default RegistrationProcess;
