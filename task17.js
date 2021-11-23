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
        'algebra': 6,
        'history': 8,
        'physics': 9,
        'geography': 2,
        'chemistry': 9
      }

      let secondSon= 
      {
          'algebra': 6,
          'history': 1,
          'physics': 2,
          'geography': 7,
          'chemistry': 9
        }
        let thirdSon= 
        {
            'algebra': 1,
            'history': 7,
            'physics': 3,
            'geography': 6,
            'chemistry': 5
          }

      const ageTable = {
        'firstSonAge': 14,
        'secondSonAge': 9,
        'thirdSonAge': 8
      }
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

      console.log(total1);
      console.log(total2);
      console.log(total3);
      
    
    }


        

      console.log(whoseBicycle(firstSon,secondSon,thirdSon));

      