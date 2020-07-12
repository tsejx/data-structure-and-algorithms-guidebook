/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description
 */
const twoSum = function(nums, target) {
  let hashMap = {};
  let index = 0;

  while (index < nums.length) {
    const cur = nums[index];
    const complement = target - cur;

    if (complement in hashMap) {
      return [hashMap[complement], index];
    }

    hashMap[cur] = index;
    index++;
  }
};
