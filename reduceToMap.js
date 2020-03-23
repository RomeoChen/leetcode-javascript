/**
 * 用数组的reduce方法实现数组的map
 */
Array.prototype._map = function(fn) {
  const result = [];
  this.reduce((prev, curr, index, array) => {
    result[index] = fn(array[index]);
  }, 0)
  return result;
}

// 使用reduce将数组的每个元素+1
const arr = [1,2,3,4,5]

const _mapArr = arr._map(v => v+1)

console.log(_mapArr);