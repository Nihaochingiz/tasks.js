/*
Задание
Реализуйте функцию getSentenceTone(), которая принимает строку и определяет тон предложения. Если все символы в верхнем регистре, то это вопль — 'scream'. В ином случае — нормальное предложение — 'general'.

Примеры вызова:

getSentenceTone('Hello'); // general
getSentenceTone('WOW');   // scream
*/


const getSentenceTone = (string) => {
    
    const newString = string.toUpperCase();
    if ( string === newString) {
        return 'scream';
    }
    else return 'general'

}

console.log(getSentenceTone('Hello'));
console.log(getSentenceTone('WOW'));   // scream)
