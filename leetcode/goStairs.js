// 爬楼梯，共n个台阶，每次只能爬一个或两个台阶，共几种爬法？
const n = 4;
const arr = [1, 2];
for (let i = 2; i < n; i++) {
  arr[i] = arr[i - 1] + arr[i - 2];
}
console.log(arr[n-1]);
