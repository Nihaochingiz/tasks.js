
/**
 * Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between two consecutive perfect squares, and return these squares as a string in the format "bigger-smaller
 * 
 * 9  -->  "25-16"
   5  -->  "9-4"
   7  -->  "16-9""
 */
/*
function findSquares(num) {
    for ( let i = 0; i < num.length; i++) {
      let bigger = 0;
      let smaller = 0;
      if ( num % 2 === 0) {
        return false;
      }

      bigger += num 
    }
  }
*/
  const findSquares = num => {
    let min = ((num - 1) / 2) ** 2;//задаем переменную мин (num - 1) число минус один делим на 2 без остатка и возводим во вторую степень
    let max = ((num - 1) / 2 + 1) ** 2;//задаем переменную макс она равна минимальная минус один делим на 2 плюс один  и это возводим во 2 степень
    return `${max}-${min}`;
  };

  console.log(findSquares(9));