
/*
Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between two consecutive perfect squares, and return these squares as a string in the format "bigger-smaller"
*/


const findSquares = num => {
    let max = Math.ceil(num / 2);
    let min = num - max;
     return `${max*max}-${min*min}`;
  };
