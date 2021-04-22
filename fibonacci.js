let fibonacci = (num) => {
    let fibArr = [0,1];
    for(let i = 2; i<= num; i++) {
        fibArr.push(fibArr[i-1] + fibArr[i-2]);
    }
    return fibArr[num-1];
};