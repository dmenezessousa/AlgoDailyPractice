// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14

function miniMaxSum(arr) {
  // Write your code here
  let min = arr[0]
  let max = arr[0]
  let sum = arr[0]
  
  for(let i=1; i< arr.length; i++){
      sum += arr[i]
      
      if(arr[i] > max){
          max = arr[i]
      }
      
      if(arr[i] < min){
          min = arr[i]
      }
  }
  
  console.log((sum - max) + ' ' + (sum - min))
}

miniMaxSum([1,2,3,4,5])