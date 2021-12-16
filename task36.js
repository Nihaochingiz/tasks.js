/*Задание
Реализуйте функцию filterString(), принимающую на вход строку и символ, и возвращающую новую строку, в которой удален переданный символ во всех его позициях.

Пример вызова:
*/
const str = 'If I look back I am lost';


const filterString = (str, char) => {
    
    let i = 0;
    let result = '';
    
    
    while(i<str.length) {
        const newChar = str[i];
        if (newChar !== char) {
        result += newChar 
    }
    i = i + 1
 
}
return result
};



console.log(filterString(str, 'I')); // 'f  look back  am lost'
