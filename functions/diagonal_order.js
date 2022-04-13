// 给定一个矩阵，要求沿规定路线输出

function diagonalOrder (matrix) {
  if (!matrix || !matrix.length) return [];
  const m = matrix.length;
  const n = matrix[0].length;
  let topright = true; // top-right: true 表示朝右上方遍历, false 表示朝左下方遍历
  let i = j = 0;
  const res = [];

  while (res.length !== m * n) {
    res.push(matrix[i][j]);
    if (topright) {
      if (i === 0 && j < n - 1) {
        j++; topright = false; continue;
      }
      if (j === n - 1) {
        i++; topright = false; continue;
      }
      i--; j++;
    } else {
      if (j === 0 && i < m - 1) {
        i++; topright = true; continue;
      }
      if (i === m - 1) {
        j++; topright = true; continue;
      }
      i++; j--;
    }
  }
  return res;
}

/**
input：
  1 2 3
  4 5 6
  7 8 9

output：
  1 2 4 7 5 3 6 8 9
 */
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(diagonalOrder(matrix))