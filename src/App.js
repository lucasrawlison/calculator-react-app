import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentValue, setCurrentValue] = useState('0')
  const [previousNumber, setPreviousNumber] = useState(null)
  const [operator, setOperator] = useState(null)
  const [result, setResult] = useState(false)
  

  const handleNumberImput = (number) =>{
    if(!result){
      setCurrentValue((currentValue)=> (currentValue === '0' ? number : currentValue + number));

    }else{
      setCurrentValue(number);
      setResult(false);
    }
  }

  const handleEraseInput = () =>{
    setCurrentValue('0');
    setPreviousNumber(null);
    setOperator(null);
  }

  const handleOperatorInput = (operator) =>{
    setPreviousNumber(currentValue);
    setCurrentValue('0');
    setOperator(operator)
    // console.log("o operador é: " + operator);
    
  }

  const handleDel = () =>{
    let newCurent;

    if(currentValue.length > 1){
      newCurent = currentValue.slice(0, -1);
    }else{
      newCurent = '0';
    }

    setCurrentValue(newCurent);
  }

  const handleOperationResult = () =>{
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
        default:
          return;
      }

      setCurrentValue(result);
      setOperator(null);
      setPreviousNumber(null);
      setResult(true);

    }
  }



  return (
    
    <div className="container">
      <div className="calculator-container">
      <div className="display-container">
        <input readOnly type="text" value={currentValue}></input>
      </div>
        <div className="buttons-container">
          <button onClick={handleEraseInput} className="action-button">AC</button>
          <button className="action-button">+/-</button>
          <button className="action-button">%</button>
          <button onClick={()=> handleOperatorInput('/')} className="action-button">/</button>
          <button onClick={() => handleNumberImput('7')} className="number-button">7</button>
          <button onClick={() => handleNumberImput('8')} className="number-button">8</button>
          <button onClick={() => handleNumberImput('9')} className="number-button">9</button>
          <button onClick={()=> handleOperatorInput('*')} className="action-button">X</button>
          <button onClick={() => handleNumberImput('4')} className="number-button">4</button>
          <button onClick={() => handleNumberImput('5')} className="number-button">5</button>
          <button onClick={() => handleNumberImput('6')} className="number-button">6</button>
          <button onClick={()=> handleOperatorInput('-')} className="action-button">-</button>
          <button onClick={() => handleNumberImput('1')} className="number-button">1</button>
          <button onClick={() => handleNumberImput('2')} className="number-button">2</button>
          <button onClick={() => handleNumberImput('3')} className="number-button">3</button>
          <button onClick={()=> handleOperatorInput('+')} className="action-button">+</button>
          <button onClick={handleDel} className="action-button">del</button>
          <button onClick={() => handleNumberImput('0')} className="number-button">0</button>
          <button onClick={() => handleNumberImput('.')} className="action-button">.</button>
          <button onClick={()=> handleOperationResult()} className="action-button">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
