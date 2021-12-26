/*
Find the stray Number
You are given an odd-length 
array of integers, in which all of them are the same, except for one single number.
Complete the method which accepts such an array, 
and returns that single different number.
The input array will always be valid! (odd-length >= 3)\
Найди заблудившийся номер
Вам дается
массив целых чисел нечетной длины, в котором все они одинаковы, за исключением одного единственного числа.
Завершите метод, который принимает такой массив,
и вернет это единственное другое число.
Входной массив всегда будет действительным! (нечетная длина >= 3)
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

let arr = [1, 1, 2];
let arr2 = [17, 17, 3, 17, 17, 17, 17];
let arr3 = [1,2];
let arr4 = [1,2,3,4];
function stray(numbers) {
let strayNumber = 0;
while(numbers.length >=3 && numbers.length % 2 ===1){
for ( let i = 0; i < numbers.length;i++) {
    for (let j = 1; j < numbers.length;j++) {
        if (numbers[i]!==numbers[j]) {
            strayNumber +=numbers[j]
           
        }
    }
    return strayNumber;
}
  }
}


 console.log(stray(arr));
  console.log(stray(arr2));
  console.log(stray(arr3));
  console.log(stray(arr4));



  function stray(array){

    for(var i = 0; i < array.length; i++){
      if(array[i] === array[i+1]){
        if(array[i] === array[i+2]){
        } else {
          return array[i+2];
        }
      } else if(array[i] !== array[i+2]){
        return array[i]
      }
    }
  }