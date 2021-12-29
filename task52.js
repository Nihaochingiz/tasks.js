/*
Task
Given an array of integers, your function bubblesortOnce/bubblesort_once/BubblesortOnce (or equivalent, depending on your language's naming conventions) should return a new array equivalent to performing exactly 1 complete pass on the original array. Your function should be pure, i.e. it should not mutate the input array.
Чтобы отсортировать этот список в порядке возрастания с помощью пузырьковой сортировки, сначала вам нужно сравнить первые два члена списка. Если первый срок больше второго срока, вы выполняете обмен. Затем список становится:
*/

let arr = [9, 7, 5, 3, 1, 2, 4, 6, 8];

//We need [7, 9, 5, 3, 1, 2, 4, 6, 8]

/*
function bubblesortOnce(array) {
    for ( let n = 0; n < array.length;n++){
    for ( let i = 0 ; i < array.length - 1 - n ;i++){
        if (array[i] > array[i + 1]) {
            const buff = array[i]// Это частый алгоритм swapa двух элементов
            array[i] = array [i+1]
            array[i+1] = buff
        }
    }
    
}
    
  
  return array;
}

*/


function bubblesortOnce(array) {
    for(let i = 0; i<= array.length-1;i++){
        if (array[i] > array[i + 1]) {
           [array[i], array[i+1]] = [array[i + 1], array[i]];
           return array;
        }
    
    }
}
console.log(bubblesortOnce(arr))
//Мое решение

//Правильное решение 
/*
function bubblesortOnce(arr) {
    for (var i = 0; i < arr.length; i++) {//Объявляем проходпо массиву
      if (arr[i] > arr[i + 1]) {// условие если первый элемент больше следующего
        var a = arr[i]// присваиваем переменной а этот первый элемент
        var b = arr[i + 1]// присваиваем переменной б элемент следующий
        arr[i] = b// делаем свап теперь первый элемент это b
        arr[i + 1] = a// а второй элемент это а
      }
    }
    return arr;//возвращаем массив
  }

  */

  function bubblesortOnce(arr) {
      let newArr = arr;
    for (var i = 0; i < newArr.length; i++) {//Объявляем проходпо массиву
      if (newArr[i] > newArr[i + 1]) {// условие если первый элемент больше следующего
        var a = newArr[i]// присваиваем переменной а этот первый элемент
        var b = newArr[i + 1]// присваиваем переменной б элемент следующий
        newArr[i] = b// делаем свап теперь первый элемент это b
        newArr[i + 1] = a// а второй элемент это а

        
      }
    }
    return newArr;//возвращаем массив
  }


  //правильное решение

  function bubblesortOnce(arr) {
    let newArr = arr.slice();//Вот что я забыл как сделать новый массив Метод slice() возвращает новый массив, содержащий копию части исходного массива.
    for (let i = 0; i < newArr.length - 1; i++) {
      if (newArr[i] > newArr[i + 1]) {
        [newArr[i], newArr[i + 1]] = [newArr[i + 1], newArr[i]];
      }
    }
    return newArr;
  }