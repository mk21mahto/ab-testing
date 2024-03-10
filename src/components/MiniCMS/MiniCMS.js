import React, { useEffect, useState } from 'react';
import { startABTest, stopABTest, isVariantAlreadyStored } from './MiniCMSApi';

const MiniCMS = () => {
  const [controlValue, setControlValue] = useState(isVariantAlreadyStored(true));
  const [testValue, setTestValue] = useState(isVariantAlreadyStored(false));
  const [showError, setShowError] = useState(false);

  const handleStartTest = () => {
    startABTest(controlValue,testValue);
  };

  const handleStopTest = () => {
    stopABTest();
  };

  useEffect(() => {
    if (controlValue + testValue === 100) {
      setShowError(false);
    } else {
      setShowError(true);
    }
  }, [controlValue, testValue]);

  return (
    <div>
      <h2>Mini CMS</h2>
      <div>
        <input value="Control" readOnly />
        <input value={controlValue} onChange={(e) => setControlValue(Number(e.target.value))} />
      </div>
      <div>
        <input value="Test" readOnly />
        <input value={testValue} onChange={(e) => setTestValue(Number(e.target.value))} />
      </div>

      {showError && <p style={{color: 'red'}}>sum of variant and test should be 100</p>}
      <button onClick={handleStartTest} disabled={showError}>
        Start
      </button>
      <button onClick={handleStopTest} disabled={showError}>
        Delete
      </button>
      <div>
        <h3>CTRs</h3>
        <p>Control - {localStorage.getItem('interactionCount_false')}</p>
        <p>Test - {localStorage.getItem('interactionCount_true')}</p>
      </div>
    </div>
  );
};

export default MiniCMS;
