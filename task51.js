/*


Write a function that accepts an array of 10 integers (between 0 and 9),
that returns a string of those numbers in the form of a phone number.

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!


createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"


*/
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function createPhoneNumber(numbers){
    return numbers.join('').replace(/(...)(...)(.*)/,'($1) $2-$3');  
     //приводим массив в строку при помощи метода join  создаем регулярное выражение точка это любой символ кроме переноса строки 
  //скобки значат, что строка будет запомнена, значит мы можем ее использовать 
//*Соответствует предыдущему символу повторенному 0 или более раз
// $ соответсвует концу ввода
  }
  
  function createPhoneNumber(arr) {
    return `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-${arr.slice(6).join('')}`;
  }
  /*
  `Number ${ это символ для интерполяций выражений это процесс замены заполнителей в строке значениями строковой переменной 
  lice() возвращает новый массив, содержащий копию части исходного массива то есть с 0 по 3 элемент и мы приводим их в строку,
  далее с 3 по 6 элемент мы тоже приводим к строке причем мы поставили пробел между двумя $arr далее ставим - перед третим $arr после 
  шестого элемента делаем снова join, но уже до конца без ограничений поэтому (6)
  */


  console.log(createPhoneNumber(array))



