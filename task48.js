/*
Задание
Реализуйте функцию getNumberExplanation(),
которая принимает на вход число и возвращает объяснение этого числа. 
Если для числа нет объяснения, то возвращается null:

getNumberExplanation(8);   // null

// Объяснения есть только для указанных ниже чисел
getNumberExplanation(666); // 'devil number'
getNumberExplanation(42);  // 'answer for everything'
getNumberExplanation(7);   // 'prime number'
*/


const getNumberExplanation=(num)=> {
    switch (num) {
        case 666:
    return 'devil number';
    break;
    case 42:
        return 'answer for everything';
        break;
        case 7:
            return 'prime number';
        break;
        default:
            return null;
        
    }
}


console.log(getNumberExplanation(666));
console.log(getNumberExplanation(42));
console.log(getNumberExplanation(1));
console.log(getNumberExplanation(7));
