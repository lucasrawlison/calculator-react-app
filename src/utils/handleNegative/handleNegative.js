export const handleNegative = (currentValue, setCurrentValue) =>{
    if(currentValue.includes('-')){
        
        setCurrentValue(currentValue.slice(1))
    }else{
        
        setCurrentValue('-' + currentValue)
    }

}