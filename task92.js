
/*
Email Validation
Write a function to test whether a given input is a valid email address.

For the purposes of this kata, here is what makes a valid email:

At least one letter character at the beginning
All characters between the first character and the @ (if any) must be letters, numbers, or underscores
There must be an @ character (after the points listed just now)
After the @ character, there must be at least one word character (letter, number, or underscore) or hyphen
The email must end with at least one set of a dot followed by one or more word characters.
The input must NOT be case-sensitive
The function should return true or false.
*/

let mail = "_bc@example.com"
/*
function validate(input){
  let newInput = input.toLowerCase().split('')

 for (let i = 0 ; i < newInput.length;i++) {
         newMail += newInput[0]
        return newMail
 }
 
}
*/
function validate(input) {

    if (input.charAt(0) === '_') {
      return false
    }
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailPattern.test(input);
  
  }


  function validate(input){
    return /^[a-z]+\w+@[\w-]+(\.\w+)+$/gi.test(input);
  }
console.log(validate(mail))