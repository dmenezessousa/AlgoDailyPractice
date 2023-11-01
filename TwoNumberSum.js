function twoNumberSum(array, targetSum) {
  const seen = new Set()

  for (let currentNum of array) {
    let potentialMatch = targetSum - currentNum
    if (seen.has(potentialMatch)) return [num, potentialMatch]
    seen.add(num)
  }

  return []
}


twoNumberSum([4,6], 10)