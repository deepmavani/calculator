import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
        // Check for empty input or expressions ending with operator
        if (!input.trim() || /[+\-*/]$/.test(input)) {
          setResult('Error');
          return;
        }
        
        // Check for expressions with consecutive operators (like "8**8")
        if (/[+\-*/]{2,}/.test(input)) {
          setResult('Error');
          return;
        }
        
        // Handle 0/0 case specifically
        if (input === '0/0') {
          setResult('NaN');
        } else {
          const calculatedResult = eval(input);
          setResult(calculatedResult);
        }
      } catch (error) {
        setResult('Error');
      }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div style={calculatorStyle}>
      <h1>Calculator</h1>
      <input 
        type="text" 
        value={input} 
        readOnly 
        style={inputStyle}
      />
      <div style={resultStyle}>{result}</div>
      <div style={buttonsContainer}>
        <button style={buttonStyle} onClick={() => handleClick('7')}>7</button>
        <button style={buttonStyle} onClick={() => handleClick('8')}>8</button>
        <button style={buttonStyle} onClick={() => handleClick('9')}>9</button>
        <button style={buttonStyle} onClick={() => handleClick('/')}>/</button>
        
        <button style={buttonStyle} onClick={() => handleClick('4')}>4</button>
        <button style={buttonStyle} onClick={() => handleClick('5')}>5</button>
        <button style={buttonStyle} onClick={() => handleClick('6')}>6</button>
        <button style={buttonStyle} onClick={() => handleClick('*')}>*</button>
        
        <button style={buttonStyle} onClick={() => handleClick('1')}>1</button>
        <button style={buttonStyle} onClick={() => handleClick('2')}>2</button>
        <button style={buttonStyle} onClick={() => handleClick('3')}>3</button>
        <button style={buttonStyle} onClick={() => handleClick('-')}>-</button>
        
        <button style={buttonStyle} onClick={() => handleClick('0')}>0</button>
        <button style={buttonStyle} onClick={clearInput}>C</button>
        <button style={buttonStyle} onClick={calculate}>=</button>
        <button style={buttonStyle} onClick={() => handleClick('+')}>+</button>
      </div>
    </div>
  );
};


const calculatorStyle = {
  width: '300px',
  margin: '50px auto',
  padding: '20px',
  backgroundColor: '#f5f5f5',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  textAlign: 'center',
};

const inputStyle = {
  width: '100%',
  height: '40px',
  marginBottom: '10px',
  fontSize: '18px',
  textAlign: 'right',
  padding: '5px',
  boxSizing: 'border-box',
};

const resultStyle = {
  width: '100%',
  height: '30px',
  marginBottom: '15px',
  fontSize: '20px',
  textAlign: 'right',
  padding: '5px',
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '5px',
};

const buttonsContainer = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '10px',
};

const buttonStyle = {
  height: '50px',
  fontSize: '18px',
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Calculator;