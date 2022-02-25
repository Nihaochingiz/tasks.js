/*
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"


var Ball = function(ballType) {
    // your code goes here
    ball1 = new Ball();
    ball1.prototype.ballType = 'regular'
    ballType.ballType
  };
  */
  class Ball {
    constructor(ballType = 'regular') {
        ballType
        this.ballType = ballType

      
    }
}

   

    const ball1 = new Ball('super');
    const ball2 = new Ball();


    console.log(ball1)
    console.log(ball2)