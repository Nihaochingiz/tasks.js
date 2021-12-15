//reverse name

let text = 'Ilya';

const reverseName = (name) => {
 let i = 0;
 let result = ''; 

 while ( i < name.length) {
     result = name[i] + result
     i = i + 1;
 }
return result;
}


console.log(reverseName(text));


/*
Единственный возможно сложный момент в этом коде – прочувствовать, как собирается сама строка. Так как каждый следующий символ прикрепляется к результирующей строке слева, то, в конечном итоге, строка оказывается перевернута.
*/


// BEGIN (write your solution here)
const reverse = (str) => {
    let i  = str.length - 1;
    let result = '';
  
    while (i >=0 ){
      result = result + str[i]
    i = i - 1;
    }
  return result
  }
  // END