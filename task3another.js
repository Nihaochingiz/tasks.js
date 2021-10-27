var words = ['Ночь', 'Улица', 'Фонарь', 'Аптека', 'Бессмысленный', 'Тусклый', 'Свет'];

getLastElementOfArray(words); // возвращает Свет;

function getLastElementOfArray(array) {
  // Напишите код здесь 
   return array[array.length - 1 ];

   }

console.log(getLastElementOfArray(words));// возвращает Свет;