const numbers = [1, 2, 3, 4, 5, 6];

console.log(separateArray(numbers));
// должен вернуть { even: [2, 4, 6], odd: [1, 3, 5] }

//{ 
    //even: [2,4,6], 
   // odd: [1,3,5] 
//} 

function separateArray(array) {
  // Ваш код здесь
  let even = [];
  let odd= [];
  for ( i = 0; i < array.length; i++) {
     if ( array[i] % 2 === 0)  {
         even[even.length] = array[i];
     }
     else if ( array [i] % 2 === 1) {
         odd[odd.length] = array[i];
     }
    }
    return {
        even: even,
        odd: odd
    }
    
  }
  