function miniMaxSum(arr) {

let minValue = 0, maxValue = 0, minIndex = 0, maxIndex = 0, minSum = 0, maxSum = 0;
minValue = Math.min(...arr);
maxValue = Math.max(...arr);
minIndex = arr.indexOf(minValue);
maxIndex = arr.indexOf(maxValue);

for (let i = 0; i < arr.length; i++){
    if (minIndex != i) {
        maxSum += arr[i];
    }
    if (maxIndex != i) {
        minSum += arr[i];
    }
}
   console.log(minSum, maxSum);
 }
