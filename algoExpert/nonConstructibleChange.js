function nonConstructibleChange(coins) {
  if (!coins.length) return 1;
  
  coins.sort((a, b) => a - b);
  const minChange = 0;

  for (let i = 0; i < coins.length; i++){
    if (coins[i] > minChange + 1) break;
    minChange += coins[i];
  }

  return minChange - 1;
}

console.log(nonConstructibleChange([5,7,1,1,2,3,22]))