/*
Fun with ES6 Classes #3 - Cuboids, Cubes and Getters
Task
Define the following classes.

I. Cuboid
The object constructor for the class Cuboid should receive exactly three arguments in the following order: length, width, height and store these three values in this.length, this.width and this.height respectively.

The class Cuboid should then have a getter surfaceArea which returns the surface area of the cuboid and a getter volume which returns the volume of the cuboid.

II. Cube
class Cube is a subclass of class Cuboid. The constructor function of Cube should receive one argument only, its length, and use that value passed in to set this.length, this.width and this.height.

Hint: Make a call to super, passing in the correct arguments, to make life easier ;)

Related Articles
Listed below are a few articles of interest that may help you complete this Kata:

Stack Overflow - What are getters and setters in ES6?
getter - Javascript | MDN
Оператор set связывает свойство объекта с функцией, которая будет вызвана при попытке установить это свойство.
*/


class Cuboid {
    // TODO: Program Me
      constructor (length,width,height) {
          this.length = length;
         this.width = width;
         this.height= height;
      }
      get surfaceArea() {
          let surface = this.length * this.width + this.width * this.height +  this.length *  this.height;
          return 2 * surface ;
      }
      get volume() {
         let volume = this.length * this.width  * this.height
        return volume ;
      }
  }
  class Cube extends Cuboid {
   
      constructor (length) {
        super(length,length,length);
        
      }


  }

//Выше неправильный вариант
//Ниже правильный вариант
  class Cube {
    constructor(length) {
      this.length = length;
    }
    get surfaceArea(){
      return 6 * this.length**2;
    }
    set surfaceArea(a){
      this.length = (a/6)**0.5;
    }
    get volume(){
      return this.length**3;
    }
    set volume(v){
      this.length = v**(1/3);
    }
  }

//Правильный вариант
  class ES6Cube {
    constructor(n) {
      this._length = n,
      this._surfaceArea = n * n * 6,
      this._volume = n * n * n;
    }
    get length() {
        return this._length
    }
    set length(n) {
        this._length = n,
        this._surfaceArea = n * n * 6,
        this._volume = n * n * n;
    }
    get surfaceArea() {
        return this._surfaceArea
    }
    set surfaceArea(n) {
        this._length = Math.sqrt(n / 6),
        this._surfaceArea = n,
        this._volume = Math.pow(this._length, 3);
    }
    get volume() {
        return this._volume
    }
    set volume(n) {
        this._length = Math.pow(n, 1 / 3),
        this._surfaceArea = this._length * this._length * 6,
        this._volume = n;
    }
}



class Cube {
  constructor(length) {
    this.length = length;
  }
  get surfaceArea() {
    return 6 * this.length * this.length;
  }
  set surfaceArea(a) {
    this.length = (a/6) ** 0.5;
  }
  get volume() {
    return this.length * this.length * this.length;
  }
  set volume (v) {
    this.length = v**(1/3)
  }
}