/*
Nickname Generator


Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

If the 3rd letter is a consonant, return the first 3 letters.

nickname("Robert") //=> "Rob"
nickname("Kimberly") //=> "Kim"
nickname("Samantha") //=> "Sam"
If the 3rd letter is a vowel, return the first 4 letters.

nickname("Jeannie") //=> "Jean"
nickname("Douglas") //=> "Doug"
nickname("Gregory") //=> "Greg"
If the string is less than 4 characters, return "Error: Name too short".
Notes:
Vowels are "aeiou", so discount the letter "y".
Input will always be a string.
Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
The input can be modified
*/

let word = "Kimberly";
let word2 = "Jeannie";
let word3 = "";
let word4 = "";

function nicknameGenerator(name){
    //code goes here
    name.charAt(0).toUpperCase()
    if( name.length < 4){
        return "Error: Name too short"
    }
    else if(name.charAt(2)=== "a" || name.charAt(2)=== "e"  ||  name.charAt(2)=== "i" || name.charAt(2)=== "o"  || name.charAt(2)=== "u"   )
    return name = name.slice(0,4)
    else {
        return name = name.slice(0,3)
    }
   
  }

  console.log(nicknameGenerator(word))
  console.log(nicknameGenerator(word2))
  console.log(nicknameGenerator(word3))
  console.log(nicknameGenerator(word4))


