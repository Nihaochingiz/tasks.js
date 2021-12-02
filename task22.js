

//Return the odd from the list

/*
[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []
/
*/
//Правильный вариант со стрелочной функцией 
function odds(values){
  // arrow it
  return values.filter( n => n % 2);
}




/*//right

  function odds(values) {
    let onlyOdd= [];
    for( let i = 0; i< values.length;i++) {
      if (values[i] % 2 === 1 ) {
        onlyOdd += values[i] + [","]
        
      }
    }

   console.log(onlyOdd);
  }

*/
  
   
  

 /* function isInteger(value) {
    if (undefined === value || null === value) {
      return false
    }
    return value % 2 == 0
  }
}
*/ 


/*
 else if ((dataEmpty.length == 0) ) {
      values[i] = [];
      console.log(values[i])
    }
*/
function odds(values) {
  
  for( let i = 0; i< values.length;i++) {
    values[i] % 2
      
    }
  }

 console.log(onlyOdd);

  (odds([1, 2, 3, 4, 5,6,7,8,9,10]));
  (odds([2, 4, 6]));
  (odds([]));


  /*
  Это правильный вариант 
    function odds(values) {
    let onlyOdd = [];
    for( let i = 0; i<= values.length;i++) {
      if (values[i] % 2 === 1 ) {
        onlyOdd += values[i]
      }
    }
    return onlyOdd;
  }
*/