import './style.css';

export const ButtonsContainer = ({handleEraseInput, handleDel, handleNumberImput, handleOperatorInput, handleOperationResult, result, setResult, setCurrentValue, setOperator, setPreviousNumber, currentValue, operator, previousNumber}) =>{

    return(
    <div className="buttons-container">
      <button onClick={()=> handleEraseInput(setCurrentValue, setPreviousNumber, setOperator)} className="action-button">AC</button>
      <button className="action-button">+/-</button>
      <button className="action-button">%</button>
      <button onClick={()=> handleOperatorInput('/', currentValue, setPreviousNumber, setCurrentValue, setOperator)} className="action-button">/</button>
      <button onClick={() => handleNumberImput('7', result, setResult, setCurrentValue)} className="number-button">7</button>
      <button onClick={() => handleNumberImput('8', result, setResult, setCurrentValue)} className="number-button">8</button>
      <button onClick={() => handleNumberImput('9', result, setResult, setCurrentValue)} className="number-button">9</button>
      <button onClick={()=> handleOperatorInput('*', currentValue, setPreviousNumber, setCurrentValue, setOperator )} className="action-button">X</button>
      <button onClick={() => handleNumberImput('4', result, setResult, setCurrentValue)} className="number-button">4</button>
      <button onClick={() => handleNumberImput('5', result, setResult, setCurrentValue)} className="number-button">5</button>
      <button onClick={() => handleNumberImput('6', result, setResult, setCurrentValue)} className="number-button">6</button>
      <button onClick={()=> handleOperatorInput('-', currentValue, setPreviousNumber, setCurrentValue, setOperator)} className="action-button">-</button>
      <button onClick={() => handleNumberImput('1', result, setResult, setCurrentValue)} className="number-button">1</button>
      <button onClick={() => handleNumberImput('2', result, setResult, setCurrentValue)} className="number-button">2</button>
      <button onClick={() => handleNumberImput('3', result, setResult, setCurrentValue)} className="number-button">3</button>
      <button onClick={()=> handleOperatorInput('+', currentValue, setPreviousNumber, setCurrentValue, setOperator)} className="action-button">+</button>
      <button onClick={() => handleDel(currentValue, setCurrentValue)} className="action-button">del</button>
      <button onClick={() => handleNumberImput('0', result, setResult, setCurrentValue)} className="number-button">0</button>
      <button onClick={() => handleNumberImput('.', result, setResult, setCurrentValue)} className="action-button">.</button>
      <button onClick={()=> handleOperationResult(operator, previousNumber, currentValue , setCurrentValue, setOperator, setPreviousNumber, setResult)} className="action-button">=</button>
    </div>
    )

}