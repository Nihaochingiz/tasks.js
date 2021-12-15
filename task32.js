

/*
Реализуйте функцию joinNumbersFromRange(), которая объединяет все числа из диапазона в строку:

joinNumbersFromRange(1, 1); // '1'
joinNumbersFromRange(2, 3); // '23'
joinNumbersFromRange(5, 10); // '5678910'
*/
// BEGIN (write your solution here)
const joinNumbersFromRange = (firstNumber, secondNumber) => {
  
    let i = firstNumber;
    let str = '';

    while (i <= secondNumber) {
      str = str+ i
      i += 1
    }
    return str;
  }
  // END


  console.log(joinNumbersFromRange(1,2));



   //`${str}${i}`;