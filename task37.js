/*
Задание
Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает её копию, у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.

Для определения каждого n-ного элемента понадобится остаток от деления %. Подумайте, как его можно использовать.

Пример вызова:

const text = 'I never look back';
// Каждый третий элемент
makeItFunny(text, 3); // 'I NevEr LooK bAck'

*/
const text = 'I never look back';

const makeItFunny = (str,char) => {
 let i = 0;
 let result = '';

 while ( i < str.length) {
     const currentChar = str[i];

     if ((i+1)%char === 0) {
         result += currentChar.toUpperCase();
     }
     else {
        result += currentChar;
     }
     
     i++
 }
return result;

};


console.log(makeItFunny(text, 2));