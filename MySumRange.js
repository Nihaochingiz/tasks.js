
function sumRange( start, end, step = 1) {
  var array = [];


  if ( step > 0) {
    for ( var i = start ; i <= end; i += step)
    array.push(i);

  } else {
      for (var i = start; i => end; i += step)
    array.push(i);
  }
  return array;
  }


console.log(sumRange(5,100,3))
