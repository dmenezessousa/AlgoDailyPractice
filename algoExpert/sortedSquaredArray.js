function sortedSquaredArray(array) {
  const sqArr = []

  for (let num of array) {
    sqArr.push(num ** 2)
  }
  return sqArr.sort((a,b)=> a - b)
}