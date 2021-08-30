function min(a,b) {
  var result = b;
  if (a < b)
    result = a;
  return result;
}

console.log(min(20, 10));
// → 20
console.log(min(100, 50));
// → -10
