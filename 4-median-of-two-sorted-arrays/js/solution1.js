/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const m = nums1.length,
    n = nums2.length;

  if (m < n) {
    return findMedianSortedArrays(nums2, nums1);
  }

  let c = (m + n) >> 1;
  let low = 0,
    high = n;
  while (low < high) {
    let mid = (low + high) >> 1;
    if (mid < n && nums1[c - mid - 1] > nums2[mid]) {
      low = mid + 1;
    } else if (mid - 1 >= 0 && nums1[c - mid] < nums2[mid - 1]) {
      high = mid - 1;
    } else {
      high = low = mid;
    }
  }

  let a = Math.min(
    low >= n ? Number.MAX_VALUE : nums2[low],
    c - low >= m ? Number.MAX_VALUE : nums1[c - low]
  );
  if ((m + n) % 2 === 1) {
    return a;
  }
  let b = Math.max(
    low - 1 < 0 ? Number.MIN_VALUE : nums2[low - 1],
    c - low - 1 < 0 ? Number.MIN_VALUE : nums1[c - low - 1]
  );
  return (a + b) / 2;
};
