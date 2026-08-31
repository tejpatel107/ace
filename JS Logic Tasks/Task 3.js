// Task 3 - Matrix Rotation In Place

function rotateMatrix(matrix) {
  const len = matrix.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < len; i++) {
    matrix[i].reverse();
  }
}
