/*
Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.
*/

class MyString {
    constructor (str) {
        this.str = str;
    }

    reverseString() {
       let a = this.str.split('').reverse().join("");
        return a;
    }

    ucFirst(){
           let b = this.str[0].toUpperCase()
            return b + this.str.slice(1)
    }

    ucWords() {
        return this.str.replace(/(^|\s)\S/g, c => {
            return c.toUpperCase()
        })
    }
}

var newStr = new MyString("человек человек человек ");
console.log(newStr.reverseString());
console.log(newStr.ucFirst());
console.log(newStr.ucWords());