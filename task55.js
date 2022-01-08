
/*
Task
You are given a dictionary/hash/object containing some languages and your test results in the given languages. 
Return the list of languages where your test score is at least 60, in descending order of the results.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

*/

let languages = {"Java": 10, "Ruby": 80, "Python": 65};

function myLanguages(results) {
    let valuesLanguages = Object.values(results);
    let keyLanguages = Object.keys(results);
    let result1 =[];
    for(let i = 0; i < valuesLanguages.length;i++){
    if(valuesLanguages[i] >= 60) {
        result1.push(keyLanguages[i])
    }
   
}
return result1.sort((a, b) => results[b] - results[a]);
}
console.log(myLanguages(languages));


