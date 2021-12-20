/*
Задание
Реализуйте функцию convertText(), которая принимает на вход строку и, если первая буква не заглавная, возвращает перевернутый вариант исходной строки. Если первая буква заглавная, то строка возвращается без изменений. Если на вход передана пустая строка, функция должна вернуть пустую строку.

Примеры вызова:

convertText('Hello'); // 'Hello'
convertText('hello'); // 'olleh'

// Не забудьте учесть пустую строку!
convertText(''); // ''
Перевернуть строчку можно используя функцию reverse(). В качестве аргумента в неё нужно передать строку, которую мы хотим перевернуть:

const result = reverse('Hello!');
console.log(result); // => '!olleH'
*/

/*

const convertText = (string)=> {
    const firstChar = string[0];
    if ( firstChar == firstChar.toUpperCase()) {
        return  string.split("").reverse().join("");
    }
    else if (firstChar === string[0]) {
        return string;
    }
}
*/

const convertText = (string)=> {

const firstChar = string[0];

return firstChar == firstChar.toUpperCase()?string.split("").reverse().join(""):string;



}


console.log(convertText('hello'));
console.log(convertText('Hello'));