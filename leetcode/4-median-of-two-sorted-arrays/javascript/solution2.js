var findMedianSortedArrays = function (nums1, nums2) {
    // define points
    // search cut point shorter array

    if (nums2.length > nums1.length) findMedianSortedArrays(nums2, nums1)

    const len1 = nums1.length;
    const len2 = nums2.length;

    let left = 0;
    let right = len2 * 2

    while (left <= right) {
        let c2 = (left + right) >> 1
        let c1 = len1 + len2- c2
        let l1 = c1 === 0 ? -Number.MAX_VALUE : nums1[c1 - 1 >> 1];
        let r1 = c1 === len1 * 2 ? Number.MAX_VALUE : nums1[c1 >> 1]
        let l2 = c2 === 0 ? -Number.MAX_VALUE : nums2[c2 - 1 >> 1]
        let r2 = c2 === len2 * 2 ? Number.MAX_VALUE : nums2[c2 >> 1]

        if (r2 < l1) {
            left = c2 + 1
        } else if（l2 > r1）{
            right = c2 - 1
        } else {
            // return [Math.max(l1, l2), Math.min(r1, r2)]
            return [Math.max(l1, l2), Math.min(r1, r2)] / 2
        }
    }
}