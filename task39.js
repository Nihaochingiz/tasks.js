
/*
Задание
Реализуйте функцию hasChar(), которая проверяет (с учётом регистра), содержит ли строка указанную букву. Функция принимает два параметра:

Строка
Буква для поиска
Пример вызова:

hasChar('Renly', 'R'); // true
hasChar('Renly', 'r'); // false
hasChar('Tommy', 'm'); // true
hasChar('Tommy', 'd'); // false
*/
const hasChar= (string, char)=> {

    let i = 0;//начало цикла начало шагов

    while( i < string.length) {//проходим по всему циклу 

        if ( char === string[i]) {//сравниваем новую букву с каждой букве в слове
           return true; // если нашли то true
        }
        i++
    }
    return false;
}

        /*
        i = i  + 1
    }
    return false;
 
}

*/


console.log(hasChar('Renly', ',m'));