// 找到最长不重复子串的长度。
// 例如，[1,2,3,4,2] 的最长不重复子串为 [1,2,3,4]，其长度为 4

function maxLength( arr ) {
  if (!arr.length) return 0;
  // write code here
  const subArrLength = [];
  let i = 0;
  while (i < arr.length) {
      const temp = [arr[i]];
      let j;
      let index = -1;
      for (j = i + 1; j < arr.length; j++) {
          if (temp.includes(arr[j])) {
              index = temp.indexOf(arr[j]);
              break;
          }
          temp.push(arr[j])
      }
      i = index !== -1 ? index + i + 1 : j;
      subArrLength.push(temp.length);
  }
  return Math.max(...subArrLength) || 0;
}

console.log(maxLength([1,2,3,2])); // 3
console.log(maxLength([1,2,3,4,2,5,3,6,4,7,9,2,10])); // 8