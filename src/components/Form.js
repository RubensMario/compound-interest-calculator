import React from 'react';

export default function Form({ label, value, onChangeNumber, step, min }) {
  return (
    <div className="center">
      <div className="input-field col s4">
        <input
          type="number"
          style={{ width: '100%' }}
          onChange={onChangeNumber}
          value={value}
          step={step}
          min={min}
        />
        <label className="active">{label}</label>
      </div>
    </div>
  );
}
