---
nav:
  title: 算法
  order: 2
group:
  title: 排序
  order: 2
title: 快速排序
order: 7
---

# 快速排序

**快速排序**（Quick Sort）使用分治法（Divide and conquer）策略来把一个串行（list）分为两个子串行（sub-lists）。

快速排序又是一种分而治之思想在排序算法上的典型应用。本质上来看，快速排序应该算是在冒泡排序基础上的 **递归分治法**。

## 算法思路

1. **挑选基准值**：从数列中挑出一个元素，称为 `基准`（pivot）
2. **分割**：重新排序数列，所有元素比基准值小的摆放在基准前面，所有比基准大的元素摆在基准的后面（相同的数可以到任意一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作
3. **递归排序子序列**：递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序

递归到最底部的判断条件是数列的大小是零或一，此时该数列显然已经有序。

选取基准值有数种具体方法，此选取方法对排序的时间性能有决定性影响。

```jsx | inline
import React from 'react';
import img from '../../assets/sorting/quick-sort.gif';

export default () => <img alt="快速排序" src={img} width="64%" height="64%" />;
```

## 算法分析

- 平均时间复杂度：`O(nlogn)`
- 最佳时间复杂度：`O(nlogn)`
- 最差时间复杂度：`O(n^2)`
- 空间复杂度：根据实现方式的不同而不同

## 算法实现

### 随机化快速排序法

```js
function quickSort(arr, left, right) {
  const len = arr.length;
  // 最初调用的时候不会传 left、right 两个值，故这样写是完成一个初始化
  left = typeof left === 'number' ? left : 0;
  right = typeof right === 'number' ? right : len - 1;

  if (left < right) {
    let partitionIndex = left - 1;

    for (var i = left; i <= right; i++) {
      // 小细节：当每个递归首次调用此函数的时候，如果进入这个 if 的话，i === index
      // 这里面会隐藏一次自身与自身的位置交换
      if (arr[i] <= arr[right]) {
        partitionIndex++;
        [arr[i], arr[partitionIndex]] = [arr[partitionIndex], arr[i]];
      }
    }

    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }

  return arr;
}
```

### 双路快速排序法

```js
const quickSort = function(arr) {
  // 检查数组的元素个数
  if (arr.length <= 1) {
    return arr;
  }

  // 基准数，取位于数组中间的值
  let pivot = arr.splice(~~(arr.length / 2), 1)[0],
    left = [], // 存放位于基准数左边的子集
    right = []; // 存放位于基准数右边的子集

  // 遍历数组，小于基准的元素放入左边子集，否则放入右边子集
  while (arr.length) {
    if (arr[0] < pivot) {
      left.push(arr.shift());
    } else {
      right.push(arr.shift());
    }
  }

  // 使用递归不断重复这个过程
  return quickSort(left).concat(pivot, quickSort(right));
};
```

简化版：

```js
const quickSort = function(arr) {
  return arr.length <= 1
    ? arr
    : quickSort(arr.slice(1).filter(item => item <= arr[0])).concat(
        arr[0],
        quickSort(arr.slice(1).filter(item => item > arr[0]))
      );
};
```

### 三路快速排序法

三路快速排序是快速排序的的一个优化版本， 将数组分成三段， 即小于基准元素、 等于 基准元素和大于基准元素， 这样可以比较高效的处理数组中存在相同元素的情况,其它特征与快速排序基本相同。

- 随机选取基准值 `pivot`（支点随机选取）
- 配合着使用插入排序(当问题规模较小时，近乎有序时，插入排序表现的很好)
- 当大量数据，且重复数多时，用三路快排

---

**参考资料：**

- [图解快速排序及双路三路快速排序](https://segmentfault.com/a/1190000021726667)
