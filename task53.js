/*
Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  => 
*/
function absentVowel(x){
    let arr =  'aeiou';
     for ( let i =0 ; i <= arr.length;i++){
       if (x.indexOf(arr[i])==-1) {
         return Number(i)
       }
     }
   }