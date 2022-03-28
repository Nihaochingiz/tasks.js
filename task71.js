//from book eloquent JS

function power ( base, exponent) {
    if (exponent == 0) {
      return 1;
    } else {
      return base * power(base, exponent - 1);
    }
  }
  
  console.log(power(2,5))


  function sumRange( start, end, step = 1) {
    var array = [];
  
  
    if ( step > 0) {
      for ( var i = start ; i <= end; i += step)
      array.push(i);
  
    } else {
        for (var i = start; i => end; i += step)
      array.push(i);
    }
    return array;
    }
  
  
  console.log(sumRange(5,100,3))


  function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt('Сколько нужно добавить?', 0);
    };
  
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);


  function birthdayCakeCandles(candles) {
    var maxHeight = Math.max(...candles);
    var maxHeightCount = 0;  
    for(var i = 0; i < candles.length; i++){
        if (ar[i] == maxHeight){
            maxHeightCount = maxHeightCount + 1;
        }
    }
    
    
}
console.log(maxHeightCount);





// Родительский класс для всех животных
class Animal {
    constructor(name, age, childs = null) {
      this.name = name;
      this.age = age;
      this.childs = childs;
    }
   }
    
   // Класс Cat - потомок класса Animal
   // Имеет те же поля, что и Animal
   class Cat extends Animal {
    constructor(name, age, childs = null) {
      super(name, age, childs);
    }
   }
    
   // Класс Dog - потомок класса Animal
   // Имеет те же поля, что и Animal
   class Dog extends Animal {
    constructor(name, age, childs = null) {
      super(name, age, childs);
    }
   }
    
   // Класс Cow - потомок класса Animal
   // Имеет те же поля, что и Animal
   class Cow extends Animal {
    constructor(name, age, childs = null) {
      super(name, age, childs);
    }
   }
    
   // Рекурсивная функция для подсчета age
   // Обходит все дочерние элементы
   function getAnimalsAge(animals) {
    let output = 0;
    
    if (animals.length > 0) {
      // Использование функции reduce для получения общего age
      // https://learn.javascript.ru/array-iteration
      output += animals.reduce((acc, current) => {
        // Сумма age всех childs
        let count = 0;
        // Если childs пустой или его нет, тогда нет смысла пробегать по ним
        if (current.childs && current.childs.length > 0) {
          // Применение рекурсии
          count += getAnimalsAge(current.childs);
        }
    
        // Возвращаем сумму аккумулятора, текущего животного, сумму age всех childs
        return acc + current.age + count;
      }, 0);
    }
    
    return output;
   }
    
   // Функция для получения определённого количества животных
   function generateAnimals(type, count) {
    let output = [];
    
    for (let i = 0; i <= count; i++) {
      let parameter = {
        name: `${type} ${i}`,
        age: i,
        childs: []
      };
    
      let item = null;
    
      switch (type) {
        case "Cat":
          item = new Cat(parameter.name, parameter.age);
          break;
        case "Dog":
          item = new Dog(parameter.name, parameter.age);
          break;
        case "Cow":
          item = new Cow(parameter.name, parameter.age);
          break;
      }
    
      if (item) {
        output.push(item);
      }
    }
    
    return output;
   }
    
   // Добавление childs ко всем переданным животным
   function addChildsTo(animals, count, type) {
    animals.forEach(animal => {
      if (!animal.childs) {
        animal.childs = [];
      }
      // Обратите внимание, что массив - ссылка, поэтому изменяя здесь его поля
      // мы меняем их глобально
      animal.childs = generateAnimals(type, count);
    });
   }
    
   let cats = generateAnimals("Cat", 5);
   addChildsTo(cats, 10, "Cat");
    
   let dogs = generateAnimals("Dog", 3);
   addChildsTo(dogs, 3, "Dog");
    
   let cows = generateAnimals("Cow", 7);
   addChildsTo(cows, 1, "Dog");
    
   // Использование оператора Spread (ES6)
   // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax
   let animals = [...cats, ...dogs, ...cows];
    
   console.log(getAnimalsAge(animals)) // 411




   
function Calculator () {
    this.read = function() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}


let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum());
alert( "Mul=" + calculator.mul());