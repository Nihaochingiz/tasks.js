
/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

*/
/*
function highAndLow(numbers){
    
 let newNum = numbers.split(" ")
//Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.
 return Math.max.apply(null,newNum) + " " +Math.min.apply(null,newNum)

//Метод apply() вызывает функцию с указанным значением this и аргументами, предоставленными в виде массива (либо массивоподобного объекта).
  
    
    
  }
  */



  console.log(highAndLow("1 2 -3 4 5"))
  


 
function highAndLow(numbers){
  let highElement =  numbers[0];
  let lowElement = numbers[0];

  numbers = numbers.split(' ');

  for( let i = 0 ; i < numbers.length;i++) {
    if(+numbers[i] < +lowElement) {
      lowElement = numbers[i]
    }
    else if (+numbers[i] > +highElement) {
      highElement= numbers[i]
    }
  }
  return `${ highElement} ${lowElement}`
}


/*
solution from codewars 
function highAndLow(numbers){

var numArray = numbers.split(" ");
var max      = Number(numArray[0]);
var min      = Number(numArray[0]);
var num;

for(var i = 1; i< numArray.length; i++){

  num = Number(numArray[i]);
  
  if (num > max) {
  max = num;
  }
  if(num < min) { 
  min = num;
  }
}

return max + " " + min;

}





*/