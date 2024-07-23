export const handleOperationResult = (operator, previousNumber, currentValue , setCurrentValue, setOperator, setPreviousNumber, setResult) =>{
    console.log("teste");
    if(operator && previousNumber){
      const current = parseFloat(currentValue);
      const previous = parseFloat(previousNumber);
      let result;
      switch(operator){
        case "+":
          result = (previous + current);
          break; 
        case "-":
          result = (previous - current);
          break; 
        case "*":
          result = (previous * current);
          break; 
        case "/":
          result = (previous / current);
          break; 
        case "%":
          result = (previous / current);
          break; 
        default:
          return;
      }

      setCurrentValue(result.toString());
      setOperator(null);
      setPreviousNumber(null);
      setResult(true);

    }
  }