const data = [
  {name: "Саша", age: 19},
  {name: "Катя", age: 21},
  {name: "Миша", age: 17},
  {name: "Федя", age: 23},
  {name: "Клава", age: 22}
]

function calcAvgAge(data) {
    
    let sum = 0;
for (i = 0; i<data.length; i++){
  sum = data[i].age + sum 
  
  } 
  sum = sum / data.length
  console.log(sum)

  return sum
  }

  calcAvgAge(data)