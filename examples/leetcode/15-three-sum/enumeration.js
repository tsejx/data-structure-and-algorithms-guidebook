/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const res = [];

  if (nums === null || nums.length < 3) return res;

  for (let i = 0; i < nums.length - 2; i++) {
    if (i && nums[i - 1] === nums[i]) continue;

    for (let j = i + 1; j < nums.length - 1; j++) {
      if (j && nums[j - 1] === nums[j]) continue;

      for (let k = i + 2; k < nums.length - 1; k++) {
        if (k && nums[k - 1] === nums[k]) continue;

        if (nums[i] + nums[j] + num[k] === 0) {
          res.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }

  return res;
};
