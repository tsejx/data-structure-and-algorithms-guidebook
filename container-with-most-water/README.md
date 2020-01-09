---
tag: 数组 双指针
---

# 盛最多水的容器

题目地址：https://leetcode-cn.com/problems/container-with-most-water/

## 解决方案

### 暴力法

考虑每对可能出现的线段组合并找出这些情况下的最大面积。

**复杂度：**

- 时间复杂度：O(n2)，计算所有 `n(n-1)/2` 种高度组合的面积
- 空间：O(1)，使用恒定的额外空间

### 双指针法

解法：https://leetcode-cn.com/problems/container-with-most-water/solution/container-with-most-water-shuang-zhi-zhen-fa-yi-do/

**复杂度：**

- 时间复杂度：O(n)，一次扫描
- 空间复杂度：O(1)，使用恒定的空间
