/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. 
If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 
The input will be a non-negative integer.

Examples:
    16-->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11 

*/
/*
function digital_root(a) {
    return digital_root(a) + digital_root(a + 2);
   
  }

  console.log( digital_root(16,27) )
Объект Number является объектом-обёрткой, позволяющей вам работать с числовыми значениями. Объект Number создаётся через конструктор Number()
Несколько замечаний относительно использования объекта Number:

Если аргумент не может быть преобразован в число, возвращается NaN.
В неконструкторном контексте (то есть, без оператора new), объект Number может использоваться для проведения преобразования типов.
*/
/*
  function digital_root(n) {
    var digits = n.toString().split("").map(Number);//Number это функция, поэтому ее можно применить к каждому элементу массива
    var sum = 0;
    for (var i = 0; i < digits.length; i++) {
      sum += digits[i];
    }
    var sumString = sum.toString();
    if (sumString.length > 1) {
      var sumDigits = sumString.split("").map(Number);
      var firstSumDigit = sumDigits.slice(0);
      var lastSumDigit = sumDigits.slice(-1);
      return firstSumDigit[0] + lastSumDigit[0];
    } else {
        return sum;
    }
  }

*/
  function digital_root(n){
    let result = 0;
    String(n).split('').map(num => {
      result += Number(num);
    });
    return result > 10 ? digital_root(result) : result;
  }

  function digital_root(n) {
    if (n < 10) return n;
    return digital_root(
      n.toString().split('').reduce((acc, d) => {
        return acc + +d;
      },0));
  }


  function digital_root(n) {
    if (n < 10)
      return n;
  
    for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
      sum += Number(n[i]);
     
    return digital_root(sum);
  }



  function digital_root(n) {
    if (n < 10) return n
    return digital_root(n % 10 + digital_root(Math.floor(n / 10)))
  }

  function digital_root(n) {
    return (n - 1) % 9 + 1;
  }