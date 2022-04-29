//Реализуйте функцию printReversedNameBySymbol(), которая печатает переданное слово посимвольно, как в //примере из теории, но делает это в обратном порядке.

const text = 'Arya';


const printReversedNameBySymbol=(name)=> {
    
    let newString = '';
    let i = name.length - 1;
    /*
    The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, "o"
       */

    while ( i >= 0) {
        newString += name[i]
        console.log(name[i]);
        i = i - 1
    }
    
}



printReversedNameBySymbol(text);

// => 'a'
// => 'y'
// => 'r'
// => 'A'
