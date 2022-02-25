/*
Array deep count
Array.prototype.length will give you the number of top-level elements in an array.

Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.

For example:

deepCount([1, 2, 3]);  
//>>>>> 3
deepCount(["x", "y", ["z"]]);  
//>>>>> 4
deepCount([1, 2, [3, 4, [5]]]);  
//>>>>> 7
*/

//Метод Array.isArray() возвращает true, если объект является массивом и false, если он массивом не является.
//Оператор typeof возвращает строку, указывающую тип операнда
// console.log(typeof 42);// expected output: "number"
let arr = ["x", "y", ["z"]];
let arr2 = (["x", "y", ["z"]]); 
function deepCount(a){
    let count = 0;//объявляем счетчик
    const recursion = (arr)=> {// вызываем стрелочную функцию recursion из нашей функции
        count +=arr.length;// count поначалу будет равно количеству элементов в масиве .length
        for( let i= 0; i < arr.length;i++) {//запускаем цикл
            if ( Array.isArray(arr[i])) {// если элемент массива будет array
                recursion(arr[i])//вызываем функцию рекурсии, эту же функцию
            }//выходим из условия
        }//Выходим из цикла
    }//заканчивается стрелочная функция
      recursion(a)//вызываем функцию recursion, с аргументом deepCount
      return count;//Возвращаем тот счетчик с самого начала
}


console.log(deepCount(arr2))

