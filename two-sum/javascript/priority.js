/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description
 */
const twoSum = function(nums, target) {
  const o = {};
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const match = target - current;
    if (match in o) {
      return [o[match], i];
    } else {
      o[current] = i;
    }
  }
};
