/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  const len = nums.length;
  let num, ind;
  let target = [];
  for (let i = 0; i < len; i++) {
    num = nums[i];
    ind = index[i];
    target = target.slice(0, ind).concat(num, target.slice(ind));
  }
  return target;
};

const nums = [0, 1, 2, 3, 4], index = [0, 1, 2, 2, 1]

console.log(createTargetArray(nums, index));
// [0,4,1,3,2]
