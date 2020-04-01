function func(arr, n) {
  let len = arr.length;
  let left = 0, right = len - 1;
  let i = Math.floor((left+right)/2);
  let res = -1;
  while (left < right) {
    if (arr[i] < n) {
      left = i;
    } else if (arr[i] > n) {
      right = i;
    } else {
      res = i;
      left = i;
    }
    if (i === Math.floor((left + right)/2)) {
      break;
    }
    i = Math.floor((left + right) / 2);
  }
  return res;
}

const arr = [1,2,2,2,3,4]

console.log(func(arr, 1));
console.log(func(arr, 2));
console.log(func(arr, 11));
console.log(func(arr, 15));