//Реализуйте функцию getHiddenCard(), которая принимает на вход номер кредитки (состоящий из 16 цифр) в виде строки и возвращает его скрытую версию, которая может использоваться на сайте для отображения. Если исходная карта имела номер 2034399002125581, то скрытая версия выглядит так ****5581. Другими словами, функция заменяет первые 12 символов, на звездочки. Количество звездочек регулируется вторым необязательным параметром. Значение по умолчанию — 4.

// Кредитка передается внутрь как строка
//getHiddenCard('1234567812345678', 2); // '**5678'
//getHiddenCard('1234567812345678', 3); // '***5678'
//getHiddenCard('1234567812345678'); // '****5678'
//getHiddenCard('2034399002121100', 1); // '*1100'
// BEGIN (write your solution here)
const getHiddenCard= (number)=> {
  let last4 ='';
  
  for ( let i =  number.length - 4; i < number.length; i++) {
      //result += number[i] + '*';
        last4 += number[i]
    

    let hide = ''

    for ( let j = number.length - 4; j < number.length;j++) {
        hide +='#'
    }
    return last4 + hide;
  }
  
}
// END
console.log(getHiddenCard('1234567812345678'));

/*
function maskify(number) {
    if(number.length < 4 ) {
        return number
    } else {
        let last4 = '';
        for ( let i = number.length - 4; i < number.length; i++) {
            last4 += number[i]
        }
        let mask = ''
        for(let j = 0; j < number.length - 4; j++){
            mask += '#'
        }

        return mask + last4
    }
}

*/