

/*
You are given a sequence of valid words and a string. Test if the string is made up by one or more words from the array.

Task
Test if the string can be entirely formed by consecutively concatenating words of the dictionary.

For example:
dictionary: ["code", "wars"]

s1:         "codewars" =>  true  -> match 'code', 'wars'
s2:         "codewar"  =>  false -> match 'code', unmatched 'war'
One word from the dictionary can be used several times.

Вам дается последовательность допустимых слов и строка. Проверьте, состоит ли строка из одного или нескольких слов из массива.
*/

let word = 'codewars';


let dictionary = ["code", "wars"]

var validWord = function(dictionary, word) {

    
    if ( dictionary[0] +  dictionary[1] != word) {
        return false
    }

   else  if( dictionary[0] + dictionary[1] ||  dictionary[1] + dictionary[0]=== word) {
        return true
    }
    else if ( dictionary[0] + dictionary[0] === word) {
        return true
    }
    else if  ( dictionary[1] + dictionary[1] === word) {
        return true
    } 

   
    else return false
  };

  console.log(validWord(dictionary,word))




  /*



var validWord = function(dict, word) {
    const values = Object.values(dict)
  
    for( let i = 0; i <= values.length;i++) {
        let newValues = '';
        newValues += values[i]
        return [newValues]
        
    }
    
  };

  console.log(validWord(dict))
*/
