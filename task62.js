/*
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
explode("312"); // => "333122"
explode("102269"); // => "12222666666999999999"
*/

let word = "312";
function explode(s) {
s=  s.replace(/\d/g, d => d.repeat(d));
return s
}

  console.log(explode(word));


  const explode = s => {
  let repNums = '';
  
  for(let i = 0; i < s.length; i++) {
    repNums += s[i].repeat(+s[i]);
    /*Метод repeat() конструирует и возвращает новую строку, содержащую указанное количество соединённых вместе копий строки, на которой он был вызван.

    */
  }
  return repNums;
}