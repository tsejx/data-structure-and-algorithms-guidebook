---
nav:
  title: LeetCode
  order: 3
group:
  title: 数组
  order: 1
title: 88 - 合并两个有序数组
order: 88
---

# 合并两个有序数组

`数组` `双指针`

给你两个有序整数数组 `nums1` 和 `nums2`，请你将 `nums2` 合并到 `nums1` 中，使 `nums1` 成为一个有序数组。

说明:

- 初始化 `nums1` 和 `nums2` 的元素数量分别为 `m` 和 `n`
- 你可以假设 `nums1` 有足够的空间（空间大小大于或等于 `m + n`）来保存 `nums2` 中的元素。
 

示例:

```plaint
输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
```

## 解题思路

### 双指针

```js
const merge = function (num1, m, num2, n) {
  // 初始化两个指针指向，初始化 nums1 尾部索引
  let i = m - 1, j = n - 1, k = m + n - 1;

  while(i >= 0 && j >= 0) {

    if (nums1[i] < nums2[j]) {
      nums1[k] = nums2[j]
      j--;
    } else {
      nums1[k] = nums1[i]
      i--;
    }

    k--;
  }

  while(j >= 0) {
    nums1[k] = nums2[j]
    j--;
    k--;
  }
}
```

---

**参考资料：**