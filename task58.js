/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/


let word = "How can mirrors be real if our eyes aren't real"
/*
function toJadenCase(str) {
    let m = '';
    for ( let i = 0; i < str.length;i++) {
        if (str[i]===' ') {
        m +=  str[i+1].toUpperCase()
        }
        
    }
    return m 
}
*/
/*
function toJadenCase(str) {
    return str.replace(/(^\w{1})|(\s{1}\w{1})/g, (u) => u.toUpperCase());
}



*/

function toJadenCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }
 


console.log(toJadenCase(word));

String.prototype.toJadenCase = function () {
    return this.split(' ').
      map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
  };