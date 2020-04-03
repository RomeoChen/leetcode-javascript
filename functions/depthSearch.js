var maxAreaOfIsland = function (grid) {
  const depthSearch = (i, j) => {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
      return 0;
    }
    if (grid[i][j]) {
      grid[i][j] = 0;
      return 1 + depthSearch(i - 1, j) +
        depthSearch(i, j - 1) +
        depthSearch(i + 1, j) +
        depthSearch(i, j + 1);
    } else {
      return 0;
    }
  }
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      res = Math.max(res, depthSearch(i, j));
    }
  }
  return res;
};

const grid = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
              [0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
              [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
              [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]

console.log(maxAreaOfIsland(grid))