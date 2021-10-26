const arr = [17, 23, 31, 44, 59];

//doubleNumber(arr); // возвращает [34,46,62,88,118];


function doubleNumber(array) {
  

  for ( i = 0; i < array.length; i++) {
   array = []
    array[i] = array[i] *2
     console.log(array)
}
return array;
}

doubleNumber(arr);