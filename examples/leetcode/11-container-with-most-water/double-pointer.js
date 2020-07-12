/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  let l = 0;
  let r = height.length - 1;
  let max = 0;

  while (l < r) {
    max = Math.max(max, (r - 1) * Math.min(height[l], height[r]));
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return max;
};
