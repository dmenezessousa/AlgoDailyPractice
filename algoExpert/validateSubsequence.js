function validateSubsequence(array, sequence) {
  let idx = 0

  for (let num of array) {
    if (num === sequence[idx]) {
        idx++
      }
  }
  return idx === sequence.length
}

console.log(validateSubsequence([1,2,3,4,5,6,7,8], 10))