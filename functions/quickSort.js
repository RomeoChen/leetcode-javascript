// 快速排序
function quickSort(arr, left = 0, right) {
  const len = arr.length;
  if (right === undefined) right = len - 1;
  if (left >= right) return;
  const pivot = arr[left];
  let goRight = false;
  let i = left, j = right;
  while (i !== j) {
    if (goRight) {
      while (arr[i] <= pivot && i !== j) i ++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else {
      while (arr[j] >= pivot && i !== j) j --;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    goRight = !goRight;
  }
  quickSort(arr, left, i - 1);
  quickSort(arr, i + 1, right);
}

const arr = [4, 3, 12, 1, 7, 8, 9, 2];
quickSort(arr);
console.log(arr)