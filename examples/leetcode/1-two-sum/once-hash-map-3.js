/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description
 */
const twoSum = function(nums, target) {
  let hashMap = new Map();
  let index = 0;

  while (index < nums.length) {
    const cur = nums[index];
    const complement = target - cur;

    if (hashMap.has(complement)) {
      return [hashMap.get(complement), index];
    }

    hashMap.set(cur, index);
    index++;
  }
};
