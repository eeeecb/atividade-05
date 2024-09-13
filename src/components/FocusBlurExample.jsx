import React, { useState } from 'react';

const FocusBlurExample = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ width: '100%' }}>
      <h2>React onFocus and onBlur Example</h2>
      <input
        type="text"
        value={inputValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Click or tab to focus"
        style={{
          border: isFocused ? '2px solid var(--primary-color)' : '1px solid #444',
          width: '100%',
          maxWidth: '300px',
        }}
      />
      <div style={{ marginTop: '20px' }}>
        {isFocused ? <p>The input is focused!</p> : <p>The input is not focused.</p>}
      </div>
      <p>Input value:</p>
      <div className="input-value">{inputValue}</div>
    </div>
  );
};

export default FocusBlurExample;