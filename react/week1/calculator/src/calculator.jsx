import React, { useState } from 'react';
import Button from './button';
import Display from './display';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [operator, setOperator] = useState('');
  const [num1, setNum1] = useState('');

  const handleNumberClick = (value) => {
    setDisplayValue(displayValue + value);
  };

  const handleOperatorClick = (operator) => {
    setOperator(operator);
    setNum1(displayValue);
    setDisplayValue('');
  };

  const handleEqualsClick = () => {
    let result;
    const num1Float = parseFloat(num1);
    const displayValueFloat = parseFloat(displayValue);

    switch (operator) {
      case '+':
        result = num1Float + displayValueFloat;
        break;
      case '-':
        result = num1Float - displayValueFloat;
        break;
      case '*':
        result = num1Float * displayValueFloat;
        break;
      case '/':
        result = num1Float / displayValueFloat;
        break;
      default:
        result = displayValue;
    }
    setDisplayValue(result.toString());
  };

  const handleClearClick = () => {
    setDisplayValue('');
    setOperator('');
    setNum1('');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-4 rounded-lg shadow-lg transform scale-170">
        <Display value={displayValue} />
        <div className="flex flex-wrap justify-center mb-4">
          <Button value="7" onClick={() => handleNumberClick('7')} />
          <Button value="8" onClick={() => handleNumberClick('8')} />
          <Button value="9" onClick={() => handleNumberClick('9')} />
          <Button value="/" onClick={() => handleOperatorClick('/')} />
          <br />
          <Button value="4" onClick={() => handleNumberClick('4')} />
          <Button value="5" onClick={() => handleNumberClick('5')} />
          <Button value="6" onClick={() => handleNumberClick('6')} />
          <Button value="*" onClick={() => handleOperatorClick('*')} />
          <br />
          <Button value="1" onClick={() => handleNumberClick('1')} />
          <Button value="2" onClick={() => handleNumberClick('2')} />
          <Button value="3" onClick={() => handleNumberClick('3')} />
          <Button value="-" onClick={() => handleOperatorClick('-')} />
          <br />
          <Button value="0" onClick={() => handleNumberClick('0')} />
          <Button value="." onClick={() => handleNumberClick('.')} />
          <Button value="+" onClick={() => handleOperatorClick('+')} />
          <Button value="C" onClick={handleClearClick} />
          <br />
          <Button value="=" onClick={handleEqualsClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
