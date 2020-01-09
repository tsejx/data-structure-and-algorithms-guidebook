/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let water = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      let newWater = (right - left) * height[left];
      water = Math.max(water, newWater);
      left++;
    } else {
      let newWater = (right - left) * height[right];
      water = Math.max(water, newWater);
      right--;
    }
  }

  return water;
};
