/*
Your job is to create a class called Song.

A new Song will take two parameters, title and artist.

const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

mountMoose.title => 'Mount Moose'
mountMoose.artist => 'The Snazzy Moose'
You will also have to create an instance method named howMany() (or how_many()).

The method takes an array of people who have listened to the song that day. The output should be how many new listeners the song gained on that day out of all listeners. Names should be treated in a case-insensitive manner, i.e. "John" is the same as "john".

class Song {
    constructor(title,artist) {
        this.title = title
        this.artist = artist
        this.listener = []
      
    }

    howMany(people) {
       for ( let i = 0 ; i < people.length;i++) {
           let arrayOfUsers = 0;

           if (people[i] === true) {
               continue
           }
           else this.listener.append(people[i].toUpperCase())


          
           arrayOfUsers = users[i].length
           return arrayOfUsers
       }
        
    }
}

*/

   

class Song {
    constructor(title, artist) {
      this.title = title;
      this.artist = artist;
      this._listeners = [];
    }
    
    howMany(listeners) {
      let counter = 0
      for (let listener of listeners.map(i => i.toLowerCase())) {
        if (!this._listeners.includes(listener)) {
          this._listeners.push(listener);
          counter++;
        }
      }
      return counter;
    }
  }


/*Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
 Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.   
  class Song1{
    constructor(title, artist){
      this.title = title;
      this.artist = artist;
      this.listener = new Set()
    };
    howMany(people){
      let oldSize = this.listener.size;
      people.map(p => this.listener.add(p.toLowerCase()));
      return this.listener.size - oldSize;
    }
  }

*/

  function fun(number) {
    let i = 0;
    while (i) { // выводит 0, затем 1, затем 2
        console.log(i)
        i--;
      }
  }

  console.log(fun(50))