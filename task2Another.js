const arr = [17, 23, 31, 44, 59];

//doubleNumber(arr); // возвращает [34,46,62,88,118];
function doubleNumber(array) {
  
  let double = [];
  for (i = 0; i < array.length; i++) {
     double.push(array[i] * 2);
     console.log(double)
}
 return double
}


doubleNumber(arr);