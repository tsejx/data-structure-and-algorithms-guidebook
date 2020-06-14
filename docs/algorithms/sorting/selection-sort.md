---
nav:
  title: 算法
  order: 2
group:
  title: 排序
  order: 2
title: 选择排序
order: 3
---

# 选择排序

**选择排序**（Selection Sort）是一个简单直观的排序方法，它的工作原理很简单，首先从 **未排序序列** 中找到最大的元素，放到已排序序列的末尾，重复上述步骤，直到所有元素排序完毕。

## 算法原理

1. 假设为排序序列的第一个是最大值，记下该元素的位子，从前往后比较
2. 若某个元素比该元素大，覆盖之前的位置
3. 重复第二个步骤，直到找到为排序的末尾
4. 将未排序元素的第一个元素和最大元素交换位置
5. 重复前面几个步骤，直到所有元素都已经排序

```jsx | inline
import React from 'react';
import img from '../../assets/sorting/selection-sort.gif';

export default () => <img alt="选择排序" src={img} width="64%" height="64%" />;
```

## 算法分析

- 平均时间复杂度：`O(n^2)`
- 最佳时间复杂度：`O(n^2)`
- 最差时间复杂度：`O(n^2)`
- 空间复杂度：`O(1)`
- 排序方式：In-place
- 稳定性：不稳定

选择排序的交换操作介于和 `n - 1` 次之间。选择排序的比较操作为 `n * (n-1) / 2` 次之间。选择排序的赋值操作介于 0 和 3(n-1)次之间。

比较次数 `O(n^2)`，比较次数与关键字的初始状态无关，总的比较次数 `N = (n-1) + (n-2) +…+ 1 = n x (n-1)/2`。交换次数 `O(n)`，最好情况是，已经有序，交换 `0` 次；最坏情况是，逆序，交换 `n - 1` 次。

## 算法实现

```js
const selectionSort = function(arr) {
  const len = arr.length;
  // 用于缓存未排序区间最小值的索引
  let minIndex;

  // 外循环遍历未排序部分元素（除了最后一个不用遍历，因为是仅有的未排序元素）
  for (let i = 0; i < len - 1; i++) {
    // 未排序序列中最小值的索引
    minIndex = i;

    // 内循环未排序区间，i 是左边界，len 是右边界
    for (let j = i + 1; j < len; j++) {
      // 当前值比当前最小值小时，标识当前值未最小值
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // 如果缓存的最小值非未排序区间首个元素
    // 则使用解构赋值交换当前索引的值
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
};
```
