---
nav:
  title: 算法
  order: 2
group:
  title: 排序
  order: 2
title: 归并排序
order: 6
---

# 归并排序

**归并排序**（Merge sort）是建立在归并操作上的一种有效的排序算法。

该算法是采用 **分治法**（Divide and Conquer）的一个非常典型的应用。

作为一种典型的分而治之思想的算法应用，归并排序的实现由两种方法：

- 自上而下的递归（所有递归的方法都可以用迭代重写，所以就有了第 2 种方法）
- 自下而上的迭代

## 算法原理

归并排序是用分治思想，分治模式在每层递归上有三个步骤：

- **分解**（Divide）：将 `n` 个元素分成含 `n / 2` 个元素的子序列
- **解决**（Comquer）：用合并排序法对两个子序列递归的排序
- **合并**（Combine）：合并两个已排序的子序列已得到排序结果

### 迭代法

1. 申请**临时空间**，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列
2. 设定两个指针，最初位置分别为两个已经排序序列的起始位置
3. 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置
4. 重复步骤 3 直到某一指针达到序列尾
5. 将另一序列剩下的所有元素直接复制到合并序列尾

### 递归法

1. 将序列每相邻两个数字进行归并操作，形成 `Math.floor(n / 2)` 个序列，排序后每个序列包含两个元素
2. 将上述序列再次归并，形成 `Math.floor(n / 4)` 个序列，每个序列包含四个元素
3. 重复步骤 2，直到所有元素排序完毕

```jsx | inline
import React from 'react';
import img from '../../assets/sorting/merge-sort.gif';

export default () => <img alt="归并排序" src={img} width="45%" height="45%" />;
```

## 算法分析

- 平均时间复杂度：`O(nlogn)`
- 最佳时间复杂度：`O(n)`
- 最差时间复杂度：`O(nlogn)`
- 空间复杂度：`O(n)`
- 排序方式：In-place
- 稳定性：稳定

不管元素在什么情况下都要做这些步骤，所以花销的时间是不变的，所以该算法的最优时间复杂度和最差时间复杂度及平均时间复杂度都是一样的为：`O( nlogn )`

归并的空间复杂度就是那个临时的数组和递归时压入栈的数据占用的空间：`n + logn`；所以空间复杂度为: `O(n)`。

归并排序算法中，归并最后到底都是相邻元素之间的比较交换，并不会发生相同元素的相对位置发生变化，故是稳定性算法。

```jsx | inline
import React from 'react';
import img from '../../assets/sorting/merge-sort.png';

export default () => <img alt="归并排序" src={img} width="70%" height="70%" />;
```

## 算法实现

```js
// 采用自上而下的递归方法

// 分（切割）
function mergeSort(arr) {
  let len = arr.length;

  // 当分裂到数组元素仅存一个或没有时，表示无法再继续分裂了
  // 则返回数组进行归并
  if (len <= 1) {
    return arr;
  }

  // 计算切割点
  let mid = Math.floor(len / 2),
    // 递归切割左子数组，然后归并为有序数组
    left = mergeSort(arr.slice(0, mid)),
    // 递归切割右子数组，然后归并为有序数组
    right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// 治（归并）
function merge(left, right) {
  let sorted = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      // 左边数组首个元素比右边数组首个元素小
      // 将左边数组首个元素推出原数组，并推入已排序数组
      sorted.push(left.shift());
    } else {
      // 右边数组首个元素比左边数组首个元素小
      // 将有边数组首个元素推出原数组，并推入已排序数组
      sorted.push(right.shift());
    }
  }

  // 走到这步，说明某边数组已经空了
  // 所以如果另一边数组还有一个元素，则直接推出原数组，并推入已排序数组
  while (left.length) sorted.push(left.shift());
  while (right.length) sorted.push(right.shift());

  return sorted;
}
```

> 如果我们有两个已经排序好的数组，如何将他们归并成一个数组？

我们可以开辟一个临时数组来辅助我们的归并，也就是说他比我们插入排序也好，选择排序也好多使用了存储的空间，也就是说他需要 `O(n)` 的额外空间来完成这个排序。只不过现在计算机中时间的效率要比空间的效率重要得多。无论是内存也好还是硬盘也好可以存储的数据越来越多，所以设计一个算法，时间复杂度是要优先考虑的。
