---
nav:
  title: LeetCode
  order: 3
group:
  title: 数组
  order: 1
title: 56 - 合并区间
order: 56
---

# 合并区间

`数组` `排序`

给出一个区间的集合，请合并所有重叠的区间。

**示例 1**:

```plain
输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
```

**示例 2**:

```plain
输入: intervals = [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
```

**注意**：输入类型已于2019年4月15日更改。 请重置默认代码定义以获取新方法签名。

**提示**：

- `intervals[i][0] <= intervals[i][1]`

## 解题思路

### 排序

我们用数组 `merged` 存储最终的答案。

首先，我们将列表中的区间按照左端点升序排序。然后我们将第一个区间加入 `merged` 数组中，并按顺序依次考虑之后的每个区间：

- 如果当前区间的左端点在数组 `merged` 中最后一个区间的右端点之后，那么它们不会重合，我们可以直接将这个区间加入数组 `merged` 的末尾；
- 否则，它们重合，我们需要用当前区间的右端点更新数组 `merged` 中最后一个区间的右端点，将其置为二者的较大值。

```js
const merge = function (intervals) {
  if (intervals === null || intervals.length === 0) return []

  intervals.sort((a, b) => a[0] - b[0])

  let result = [];

  for (let i = 0; i < intervals.length; i++) {
    if (i === 0 || intervals[i][0] > result[result.length-1][1]) {
      result.push(intervals[i])
    } else {
      result[result.length-1][1] = Math.max(result[result.length-1][1], intervals[i][1])
    }
  }

  return result;
}
```

#### 心得体会

- 数组排序优先想到 `sort` 将数组排列成有序的数组

#### 复杂度分析

- 时间复杂度：`O(nlogn)`，其中 n 为区间的数量。除去排序的开销，我们只需要一次线性扫描，所以主要的时间开销是排序的 `O(nlogn)`。
- 空间复杂度：`O(logn)`，其中 n 为区间的数量。这里计算的是存储答案之外，使用的额外空间。`O(logn)` 即为排序所需要的空间复杂度。

---

**参考资料：**

- [LeetCode 力扣官方题解](https://leetcode-cn.com/problems/merge-intervals/solution/he-bing-qu-jian-by-leetcode-solution/)

