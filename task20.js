function arithmetic(a, b, operator){
    //your code here!

    let result;

    if (operator == "add"  ) {
        result = a + b
    }
    else if (operator == "subtract" ) {
        result = a - b
    }
    else if  (operator == "multiply"  ) {
        result = a * b
    }
    else if  (operator == "divide"  ) {
        result = a / b
    }
    
    return result;
  }

  console.log(arithmetic(5,6, "add"))