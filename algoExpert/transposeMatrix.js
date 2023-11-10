function transposeMatrix(matrix) {
  const transposedMatrix = [];

  for (let column in matrix[0]) {
    const newRow = []
    for (let row in matrix) {
      newRow.push(matrix[row][col])
    }
    transposedMatrix.push(newRow)
  }
  return transposedMatrix;
}

console.log(
  transposeMatrix([
    //0,1,2
    [1, 2, 3], //0
    [4, 5, 6], //1
  ])
);
