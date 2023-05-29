import React, { useState } from 'react';

const StatInput = ({ label, value, onChange }) => {
  const [modifier, setModifier] = useState(0);

  const handleStatChange = (event) => {
    const statValue = parseInt(event.target.value);
    onChange(statValue);
    calculateModifier(statValue);
  };

  const calculateModifier = (statValue) => {
    const modifier = Math.floor((statValue - 10) / 2);
    setModifier(modifier);
  };

  return (
    <label>
      {label}:
      <input type="number" value={value} onChange={handleStatChange} />
      {!!value && 
      <span>{modifier >= 0 ? "+" : "-"}{Math.abs(modifier)}</span>
    }
    </label>
  );
};

export default StatInput;
