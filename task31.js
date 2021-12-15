let multiplyNumbersFromRange = (firstNumber,lastNumber) => {
    let i = firstNumber;
    let result = 1;
  
    while( i <= lastNumber){
    result = result * i;
    i = i + 1
   
}
return result;
  }
  // END


console.log(multiplyNumbersFromRange(1, 10));

