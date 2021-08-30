function range(start, end, step) {
      if(start < end && step < 0) {
       [start, end] = [end, start]
      }
      if (step == null) step = 1;
      var array = [];

      if (step > 0) {
        for (var i = start; i <= end; i += step)
          array.push(i);
      } else {
        for (var i = start; i >= end; i += step)
          array.push(i);
      }
      return array;
    }

console.log (range(1, 10, 2));
// → [1, 3, 5, 7, 9]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log (range(1, 10, -1));
// → [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
