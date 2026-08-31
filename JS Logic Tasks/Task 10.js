// Task 10 - Find All Paths in a Graph

function validateSudoku(matrix) {
  return (
    validateRows(matrix) && validateColumns(matrix) && validateGrids(matrix)
  );
}

function validateRows(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    const set = new Set();
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === ".") {
        continue;
      }

      if (set.has(matrix[i][j])) {
        return false;
      }

      set.add(matrix[i][j]);
    }
  }

  return true;
}

function validateColumns(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    const set = new Set();
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === ".") {
        continue;
      }

      if (set.has(matrix[j][i])) {
        return false;
      }

      set.add(matrix[j][i]);
    }
  }

  return true;
}

function validateGrids(matrix) {
  for (let sr = 0; sr < matrix.length; sr += 3) {
    for (let sc = 0; sc < matrix.length; sc += 3) {
      const set = new Set();
      for (let i = sr; i < sr + 3; i++) {
        for (let j = sc; j < sc + 3; j++) {
          if (matrix[i][j] === ".") {
            continue;
          }

          if (set.has(matrix[i][j])) {
            return false;
          }

          set.add(matrix[i][j]);
        }
      }
    }
  }
  return true;
}

board = [
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."],
];

console.log(validateSudoku(board));
