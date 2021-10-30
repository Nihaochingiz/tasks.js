/**
есть массив, arr=[3,2,4,5,4,12,132,444,322,44,355,6,765,76,33,-223,443,-2,4,-775,-594,0,54]

Напишите функцию findMinMax которая возвращает минимальный и максимальный элемент массива( в таком виде {min: -2, max: 333} цифры для примера), цифры в массиве могут быть любыми(integer)//
*/


let arr=[3,2,4,5,4,12,132,444,322,44,355,6,765,76,33,-223,443,-2,4,-775,-594,0,54];

function findMinMax (array) {
    
    let min;
    let max;
    min = array[0];
    max= min;
    for ( let i = 0; i< array.length;i++) {
        if ( array[i] > max) {
            max = array[i]
        }

        else if ( array [i]< min) {
            min = array[i]
        }
    }

    return {
        max: max,
        min: min,
        
    }
    
}



console.log(findMinMax(arr));

