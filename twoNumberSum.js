function twoNumberSum(array, targetSum) {
  // Write your code here.
  let storedNumbers = {}; 
  for(let x of array){
    const numberToCheck = targetSum - x;
    if(numberToCheck in storedNumbers){
      return [numberToCheck,x];
    }else{
      storedNumbers[x] = true
    }
  }
  return[];
}