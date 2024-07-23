export const handleOperatorInput = (operator, currentValue, setPreviousNumber, setCurrentValue, setOperator) =>{
    setPreviousNumber(currentValue);
    setCurrentValue('0');
    setOperator(operator)
    
  }