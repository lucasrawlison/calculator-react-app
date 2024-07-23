export const handleOperatorInput = (
  operator,
  previousNumber, 
  currentValue, 
  setPreviousNumber, 
  setCurrentValue, 
  setOperator
) => {

  if (operator === "%") {
    if(previousNumber){
      setCurrentValue(previousNumber*(currentValue/100))
    }else{
      setCurrentValue(currentValue/100)
    }
  } else {
    setPreviousNumber(currentValue);
    setOperator(operator);
    setCurrentValue("0");
  }
};
