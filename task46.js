/*
Задание
На электронной карте Вестероса, которую реализовал Сэм, союзники Старков отображены зеленым кружком, враги — красным, а нейтральные семьи — серым.

Напишите для Сэма функцию whoIsThisHouseToStarks(), которая принимает на вход фамилию семьи и возвращает одно из трёх значений: 'friend', 'enemy', 'neutral'.

Правила определения:

Друзья ('friend'): 'Karstark', 'Tally'
Враги ('enemy'): 'Lannister', 'Frey'
Любые другие семьи считаются нейтральными
Примеры вызова:

whoIsThisHouseToStarks('Karstark'); // 'friend'
whoIsThisHouseToStarks('Frey');     // 'enemy'
whoIsThisHouseToStarks('Joar');     // 'neutral'
whoIsThisHouseToStarks('Ivanov');   // 'neutral'
*/

let whoIsThisHouseToStarks = (str)=> {
    if ( str === 'Karstark' || str === 'Tally') {
        return 'friend';
    }
    else if ( str === 'Lannister' || str === 'Frey'){
        return 'enemy';
    }
    else return 'neutral';
}

console.log(whoIsThisHouseToStarks('Karstark'));
console.log(whoIsThisHouseToStarks('Joar'));
console.log(whoIsThisHouseToStarks('Ivanov'));
console.log(whoIsThisHouseToStarks('Frey'));