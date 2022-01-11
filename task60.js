/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
повторяющиеся буквы, подряд или не подряд
Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

*/
let word = "aba";
/*
function isIsogram(str){
  str = str.toLowerCase();
  for(let i = 0; i < str.length; i++)
    for(let j = i + 1; j < str.length; j++)
      if(str[i] === str[j])
        return false;
  return true;
}
  
*/



function isIsogram(str) {
    return !/(\w).*\1/i.test(str);
}

  console.log(isIsogram(word));


