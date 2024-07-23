import "./App.css";

import {handleNumberImput} from './utils/handleNumberImput/handleNumberImput.js';
import {handleDel} from './utils/handleDel/handleDel.js';
import {handleEraseInput} from './utils/handleEraseInput/handleEraseInput.js';
import {handleOperationResult} from './utils/handleOperationResult/handleOperationResult.js';
import {handleOperatorInput} from './utils/handleOperatorInput/handleOperatorInput.js';
import {handleNegative} from './utils/handleNegative/handleNegative.js';
import {handleInsertDot} from './utils/handleInsertDot/handleInsertDot.js';


import { useState } from "react";
import { ButtonsContainer } from "./components/ButtonsContainer";

function App() {
  const [currentValue, setCurrentValue] = useState('0')
  const [previousNumber, setPreviousNumber] = useState(null)
  const [operator, setOperator] = useState(null)
  const [result, setResult] = useState(false)
  

  return (
    
    <div className="container">
      <div className="calculator-container">
      <div className="display-container">
        <input readOnly type="text" value={currentValue}></input>
      </div>
        <ButtonsContainer 
          handleEraseInput={handleEraseInput}
          handleDel={handleDel} 
          handleNumberImput={handleNumberImput}
          handleOperatorInput={handleOperatorInput}
          handleOperationResult={handleOperationResult}
          result = {result}
          currentValue = {currentValue}
          operator = {operator}
          previousNumber = {previousNumber}
          setCurrentValue = {setCurrentValue}
          setResult = {setResult}
          setOperator = {setOperator}
          setPreviousNumber = {setPreviousNumber}
          handleNegative = {handleNegative}
          handleInsertDot={handleInsertDot}
          
        />
      </div>
    </div>
  );
}

export default App;
