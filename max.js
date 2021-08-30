function max (a, b) {
  var result = b;
  if ( a > b )
  result = a;
  else
  return result;
}

console.log( max(50,10))

//работает неправильно, результат выдает undefined

function max (a, b) {
  var result = b;
  if ( a > b )
  result = a;
  return result;
}

console.log( max(20,5))

//работает правильно
