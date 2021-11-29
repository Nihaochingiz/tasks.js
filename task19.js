
/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

Дезоксирибонуклеиновая кислота (ДНК) - это химическое вещество, содержащееся в ядре клеток и несущее "инструкции" по развитию и функционированию живых организмов.

В строках ДНК символы "A" и "T" дополняют друг друга, как "C" и "G". У вас есть функция с одной стороны ДНК (строка, за исключением Хаскелла); вам нужно получить другую комплементарную сторону. Цепочка ДНК никогда не бывает пустой или ДНК вообще нет (опять же, за исключением Хаскелла).
*/




function DNAStrand(dna) {
  let str = '';
  for ( let i = 0; i < dna.length ; i++) {
    if ( dna[i] === "A") {
      str += "T"
    }
    else if ( dna[i] === "T") {
      str += "A"
    }
    else if ( dna[i] === "G") {
      str += "C"
    }
    else if ( dna[i] === "C") {
      str += "G"
    }
    else if (dna[i] !== "A" && dna[i] !== "B") {
      str += dna[i];
    }
    

  }
  return str
}

console.log(DNAStrand(("ATTGC")));
console.log(DNAStrand(("GTAT")));
console.log(DNAStrand(("ADPTTCG")));


/*
var demo = ["abc", "test", "agava", "koleso", "ttest", "doubble"];
var rex = /.*(\w).*(\1.*)+/;
for(var i = 0; i < demo.length; i++)
{
    var m = demo[i].match(rex);
    document.write(demo[i] + ": " + (m ? m[1] : 'none') + '<br />');
}
*/
  //let correct = dna.replaceAll('C','G','A','T',);
/*function DNAStrand(dna) {
   let chars = {'С':'G','A':'T'};
   for ( let i = 0 ; i < dna.length; i++) {
    let nice = dna[i].replace(/[abc]/g, m => chars[m]);  
    return nice;
}
  }
  */