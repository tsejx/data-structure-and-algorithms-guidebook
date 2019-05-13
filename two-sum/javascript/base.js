/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description 通过嵌套循环和差值匹配筛选
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};
