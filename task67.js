/*
Fun with ES6 Classes #2 - Animals and Inheritance



class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

Task
Define the following classes that inherit from Animal.

I. Shark
The constructor function for Shark should accept 3 arguments in total in the following order: name, age, status. All sharks should have a leg count of 0 (since they obviously do not have any legs) and should have a species of "shark".

II. Cat
The constructor function for Cat should accept the same 3 arguments as with Shark: name, age, status. Cats should always have a leg count of 4 and a species of "cat".

Furthermore, the introduce/Introduce method for Cat should be identical to the original except there should be exactly 2 spaces and the words "Meow meow!" after the phrase. For example:

var example = new Cat("Example", 10, "Happy");

III. Dog
The Dog constructor should accept 4 arguments in the specified order: name, age, status, master. master is the name of the dog's master which will be a string. Furthermore, dogs should have 4 legs and a species of "dog".

Dogs have an identical introduce/Introduce method as any other animal, but they have their own method called greetMaster/GreetMaster which accepts no arguments and returns "Hello (insert_master_name_here)" (of course not the literal string but replace the (insert_master_name_here) with the name of the dog's master).
*/
class Animal {
    constructor(name, age, legs, species, status) {
      this.name = name;
      this.age = age;
      this.legs = legs;
      this.species = species;
      this.status = status;
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }


// Get Coding :)


// Get Coding :)
class Shark extends Animal {
    constructor(name,age,status) {
      super(name,age,status);
      this.legs = 0;
      this.species = "shark";
      this.name = name;
      this.age = age;
      this.status = status;
    }
    introduce() {
         super.introduce(); // доступ к родительскому методу с синтаксисом super.X()
         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  class Cat extends Animal {
    constructor(name,age,status) {
     super(name,age,status);
      this.legs = 4;
      this.species = "cat";
      this.status = status;

    }
    introduce() {
         super.introduce(); // доступ к родительскому методу с синтаксисом super.X()
         return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
    
  }
  
  class Dog extends Animal {
    constructor(name, age, status, master) {
    super(name,age,status);
      this.master = master;
      this.legs = 4;
       this.species = "dog";
       this.status = status;
    }
    greetMaster() {
   return `Hello ${this.master}`;
    }
    introduce() {
        super.introduce()
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
    // On your own now - you can do it :D
  }






  //Тут код получше моего

  