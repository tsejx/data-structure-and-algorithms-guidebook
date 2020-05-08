---
难度: 困难
分组: 数组
解决方案: 二分查找、分治算法
---

# 寻找两个有序数组的中位数

原题链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays/

## 題目

给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例 1:

```
nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
```

示例 2:

```
nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
```

## 思路

中位数（Median）：把数组分成左右等分的中位数

题目限制了时间复杂度为 O(log(m+n))，应该想到使用**二分查找法**（Binary Search）来求解。

难点在于两个数组有重合部分直接找中点比较麻烦，排序的话时间复杂度会较高。

even 偶数 median = len /2

odd 奇数 median = (len + 1) / 2

### 二分查找

排好序的数组中查找很容易想到可以用二分查找（Binary Search），这里对数组长度小的做二分，保证数组 A 和数组 B 做 partition 之后 `len(Alert)+len(Bleft)=(m+n+1)/2`，m 是数组 A 的长度，n 是数组 B 的长度，对数组 A 做 partition 的位置是区间 `[0, m]`。



---

**参加资料：**

* [米开：LeetCode4.Median of Two Sorted Arrays](https://www.bilibili.com/video/av55640101?from=search&seid=12519983835714710032)

