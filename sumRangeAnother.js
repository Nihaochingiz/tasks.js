function range(start, end, step=1) {
let array = [];

 if (step > 0) {
   for (var i = start; i <= end; i += step)
     array.push(i);
 } else {
   for (var i = start; i >= end; i += step)
     array.push(i);
 }
 return array;
}
console.log (range(1,10,2))

console.log(range(5, 2, -1));
