/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description
 */
const twoSum = function(nums, target) {
  const o = {};
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    const match = target - cur;
    if (match in o) {
      return [o[match], i];
    } else {
      o[cur] = i;
    }
  }
};
