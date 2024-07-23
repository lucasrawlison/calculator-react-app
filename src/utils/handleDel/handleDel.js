export const handleDel = (currentValue, setCurrentValue) =>{
    let newCurent;

    if(currentValue.length > 1){
      newCurent = currentValue.slice(0, -1);
    }else{
      newCurent = '0';
    }

    setCurrentValue(newCurent);
}