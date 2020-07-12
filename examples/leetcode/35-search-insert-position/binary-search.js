var searchInsert = function(nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = Match.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
