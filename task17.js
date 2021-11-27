/*
I am the father of three wonderful sons. before the beginning of the school year, I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year. it's time to keep promises and I count on you.

You have 3 input objects(school diaries) with school subjects and marks (1-10). For example:
If two or three sons have the same highest marks, you need to choose the younger one. Use the age table which is constant and preloaded:

Перевод:
Я отец трех замечательный сыновей. Перед началом учебного года, я пообещал им, что куплю велосипед для того, кто принесет лучшие оценки к концу года. Настало время исполнять обещания и я полагаюсь на тебя.

У тебя 3 входящих объекта( школьные дневники) со школьными предметами и оценками (1 - 10) Например:
Если 2 или три сына имеют такие же высокие оценки, тебе нужно выбрать самого младшего. Пользуйся таблицей
*/

 
let firstSon= 
    {
      'algebra': 1,
      'history': 1,
      'physics': 1,
      'geography': 1,
      'chemistry': 8
      }

      let secondSon= 
      {
        'algebra': 1,
        'history': 1,
        'physics': 1,
        'geography': 1,
        'chemistry': 7
        }
        let thirdSon= 
        {
            'algebra': 1,
            'history': 1,
            'physics': 1,
            'geography': 1,
            'chemistry': 8
          }

      const ageTable = {
        'firstSonAge': 7,
        'secondSonAge': 9,
        'thirdSonAge': 8
      }

      
     

    //Переводим объект ageTable в массив
    //Далее ищем самый маленький элемент массива
//let age = Object.values(ageTable);
//let min = Math.min(...age);
function findMin (obj) {
  let min = 2000;
  let son;
  for ( let key in obj ) {
      if ( obj[key] < min) {
          min = obj[key];
          son = key;
      }
    }
    son = String(son);
    console.log(typeof son);
    if(son === 'firstSonAge'){
      return "I need to buy a bicycle for my first son.";
       }else  if(son === 'secondSonAge'){
         return "I need to buy a bicycle for my second son.";
       }else if(son === 'thirdSonAge'){
         return "I need to buy a bicycle for my third son.";
       }
    }

     //В данной функции сравниваем сумму оценок из дневников
    function whoseBicycle(diary1,diary2,diary3) {
       
      var total1 = 0;
      var total2 = 0;
      var total3 = 0;
       for ( var key1 in diary1) {
         total1 += diary1[key1];
       }
      
     
      for ( var key2 in diary2) {
        total2 += diary2[key2];
        
      }
    
     for ( var key3 in diary3) {
      total3 += diary3[key3]; 
    }
    let arr = {'firstSonAge':total1,'secondSonAge':total2,'thirdSonAge':total3};
    let max = arr['firstSonAge'];
    let keyMax;
    for(let key in arr){
    if(max< arr[key]){
      max = arr[key];
      keyMax = key;
    }
    }
    let arrmax ={};
    for(let key in arr){
      if(max === arr[key]){
        arrmax = {...arrmax,[key]: ageTable[key]};
      }
      }
if(Object.values(arrmax).length>1){
  console.log(1)
  return findMin(arrmax)
}else{
      let son = String(Object.keys(arrmax)[0]);
  if(son === 'firstSonAge'){
 return "I need to buy a bicycle for my first son.";
  }else  if(son  === 'secondSonAge'){
    return "I need to buy a bicycle for my second son.";
  }else if(son === 'thirdSonAge'){
    return "I need to buy a bicycle for my third son.";
  }
}



      /*if(total1 === total2){
        findMin({'firstSonAge': ageTable['firstSonAge'],'secondSonAge':ageTable['secondSonAge']});
      }else  if(total1 === total3){
        findMin({'firstSonAge': ageTable['firstSonAge'],'thirdSonAge':ageTable['thirdSonAge']});
      }else  if(total2 === total3){
        findMin({'secondSonAge': ageTable['secondSonAge'],'thirdSonAge':ageTable['thirdSonAge']});
      }else  if(total1 === total2 && total2 === total3){
        findMin(ageTable);
      }else{

      }*/
   
    
   // result = [total1, total2,total3]
    
  
      


  }
 

      
  console.log(whoseBicycle(firstSon,secondSon,thirdSon));
  