/*
Сэмвелл обнаружил, что его сообщения перехватываются в замке «Близнецы» и там читаются. Из-за этого их атаки перестали быть внезапными. Немного подумав, он разработал программу, которая бы шифровала сообщения по следующему алгоритму. Она бы брала текст и переставляла в нем каждые два подряд идущих символа.
encrypt('move'); // 'omev'
encrypt('attack'); // 'taatkc'
// Если число символов нечётное
// то последний символ остается на своем месте
encrypt('go!'); // 'og!'
Реализуйте функцию encrypt(), которая принимает на вход исходное сообщение и возвращает зашифрованное.

Подумайте. Может ли эта функция расшифровать зашифрованное сообщение?
    */

const encrypt = (str) => {
    let result = '';
    for (let i = 0;i < str.length; i += 2){
    
    if (str[i + 1] !== undefined) {
    result = `${result}${str[i + 1]}${str[i]}`
    }else {
    result = `${result}${str[i]}`
    }
    
    }
    return result
    }

console.log(encrypt('move'));


const encrypt = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i += 2) {
      const nextSymbol = str[i + 1] || '';
      result = `${result}${nextSymbol}${str[i]}`;
    }
  
    return result;
  };
  // END
  
  export default encrypt;