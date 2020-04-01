// 众数
const arr = [3,2,3]
const obj = {};
for (let num of arr) {
  obj[num] = obj[num] ? obj[num] + 1 : 1;
}
let max = 0;
let num = 0;
for (let [key, value] of Object.entries(obj)) {
  if (value > max) {
    max = value;
    num = key;
  }
}
console.log(num);
