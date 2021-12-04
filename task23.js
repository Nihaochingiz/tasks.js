/*
Write a function that adds from two invocations.

All inputs will be integers.
add(3)(4)  // 7
add(12)(20) // 32

//Решения из интернета
const add = numberA => numberB => numberA + numberB

var add = function(a){
  return function(b){
    return a + b;
  }
}
*/
//Мое решение
function add (a){
  return function (b) {
    return a + b;
  }
}



console.log(add(3)(4));