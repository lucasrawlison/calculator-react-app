export const handleInsertDot = (currentValue, setCurrentValue, setResult) =>{
    setCurrentValue((currentValue)=> currentValue.includes('.') ? currentValue : currentValue + '.')
    setResult(false);

}