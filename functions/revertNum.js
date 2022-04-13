// 翻转一个整数
// 2634 => 4362

function revertNum(num) {
  let res = 0;
  while (num) {
    let currBit = num % 10;
    res = res * 10 + currBit;
    num = parseInt(num / 10);
  }
  return res;
}

console.log(revertNum(2634))