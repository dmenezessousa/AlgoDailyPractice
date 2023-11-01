function plusMinus(arr) {
  // Write your code here
  let negInt = 0
  let zeroInt = 0
  let posInt = 0
  
  const n = arr.length
  for(let i = 0; i < n; i++){
      if(arr[i] > 0){
          posInt++;
      }else if(arr[i] < 0){
          negInt++;
      }else{
          zeroInt++
      }
  }
  
  const totalNeg = negInt / n
  const totalPos = posInt/ n
  const totalZero = zeroInt / n

  console.log(totalPos.toFixed(n))
  console.log(totalNeg.toFixed(n))
  console.log(totalZero.toFixed(n))
}

plusMinus([1, 2, 3, -1, -2, -3, 0, 0])
plusMinus([-4, 3, -9, 0, -4, 1])
