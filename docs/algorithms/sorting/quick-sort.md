---
nav:
  title: 算法
  order: 2
group:
  title: 排序
  order: 2
title: 快速排序
order: 6
---

# 快速排序

**快速排序**（Quick Sort）使用分治法（Divide and conquer）策略来把一个串行（list）分为两个子串行（sub-lists）。

快速排序又是一种分而治之思想在排序算法上的典型应用。本质上来看，快速排序应该算是在冒泡排序基础上的递归分治法。

## 算法思路

1. 从数列中挑出一个元素，称为 `基准`（pivot）
2. 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准大的摆在基准的后面（相同的数可以到任意一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作
3. 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序

```jsx | inline
import React from 'react';
import img from '../../assets/sorting/quick-sort.gif';

export default () => <img alt="快速排序" src={img} width="64%" height="64%" />;
```

## 算法分析

- 平均时间复杂度：`O(NlogN)`
- 最佳时间复杂度：`O(NlogN)`
- 最差时间复杂度：`O(N^2)`
- 空间复杂度：根据实现方式的不同而不同

## 算法实现

方法一：

```js
const quickSort = function(arr) {
  if (left < right) {
    let x = arr[right],
      i = left - 1,
      temp;
    for (let j = left; j <= right; j++) {
      if (arr[j] <= x) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    quickSort(arr, left, i - 1);
    quickSort(arr, i + 1, right);
  }

  return arr;
};
```

方法二：

```js
const quickSort = function(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let base = arr.splice(~~(arr.length / 2), 1)[0];
  let left = [];
  let right = [];
  while (arr.length) {
    if (arr[0] < base) {
      left.push(arr.shift());
    } else {
      right.push(arr.shift());
    }
  }

  return quickSortAdvanced(left).concat(base, quickSortAdvanced(right));
};
```

方法三：

```js
const quickSort = function(arr) {
  return arr.length <= 1
    ? arr
    : quickSortSenior(arr.splice(1).filter(item => item <= arr[0])).concat(
        arr[0],
        quickSortSenior(arr.slice(1).filter(item => item > arr[0]))
      );
};
```
