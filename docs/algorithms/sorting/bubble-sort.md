---
nav:
  title: 算法
  order: 2
group:
  title: 排序
  order: 2
title: 冒泡排序
order: 2
---

# 冒泡排序

**冒泡排序**（Bubble Sort）是一种 `交换排序`，核心是冒泡，把数组中最小的那个往上冒，冒的过程就是和他 `相邻的元素` 交换。

重复走访要排序的数列，通过两两比较相邻记录的排序码。排序过程中每次从后往前冒一个最小值，且每次能确定一个数在序列中的最终位置。若发生逆序，则交换；有俩种方式进行冒泡，一种是先把小的冒泡到前边去，另一种是把大的元素冒泡到后边。

## 算法原理

1. 比较相邻的元素，如果第一个比第二个大，就交换他们两个
2. 对每对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这部做完后，最后的元素会是最大的数
3. 针对所有的元素重复以上的步骤，除了最后一个
4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较

通过两层循环控制：

- 第一个循环（外循环）：负责把需要冒泡的值排除在外
- 第二个循环（内循环）：负责两两比较交换

```jsx | inline
import React from 'react';
import img from '../../assets/sorting/bubble-sort.gif';

export default () => <img alt="冒泡排序" src={img} width="64%" height="64%" />;
```

## 算法分析

- 平均时间复杂度：`O(n^2)`
- 最佳时间复杂度：`O(n)`
- 最差时间复杂度：`O(n^2)`
- 空间复杂度：`O(1)`
- 排序方式：In-place
- 稳定性：稳定

解析说明：

冒泡排序设计相邻两两数据的比较，故需要嵌套两层 `for` 循环来控制：

- 外层循环 `n` 次，内存最多时循环 `n-1` 次，最少循环 `0` 次，平均循环 `(n - 1) / 2` 次
- 所以循环体内总的比较交换次数为 `n * (n - 1) / 2 = (n^2 - n) / 2`

按照计算时间复杂度的规则，去掉常数、去掉最高项系数，其复杂度为 `O(n^2)`

最优的空间复杂度为开始元素已排序，则空间复杂度为 0

最差的空间复杂度为开始元素为逆排序，则空间复杂度为 `O(n)`

平均的空间复杂度为 `O(1)`

## 算法实现

方法一：

```js
const bubbleSort = function (arr) {
  const len = arr.length;

  // 外循环控制从头到尾的比较+交换总共有多少轮
  for (let i = 0; i < len; i++) {
    // 内循环用于完成每轮遍历过程中的重复比较+交换
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 交换位置
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};
```

方法二：

```js
const bubbleSort = function (arr) {
  // 初始时，最后未知保持不变
  let i = arr.length - 1;

  while (i > 0) {
    // 每趟开始时，无记录交换
    let pos = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 记录交换的未知
        pos = j;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      // 为下一趟排序作准备
      i = pos;
    }
  }
  return arr;
};
```

方法三：正向冒泡+反向冒泡结合

```js
const bubbleSort = function (arr) {
  // 设置变量的初始值
  let index,
    low = 0,
    high = arr.length - 1;

  while (low < high) {
    // 正向冒泡，找到最大值
    for (index = low; index < high; ++index) {
      if (arr[index] > arr[index + 1]) {
        [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
      }
    }
    // 修改 high 值，前移一位
    --high;

    // 反向冒泡，找到最小值
    for (index = high; index > low; --index) {
      if (arr[index] < arr[index - 1]) {
        [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]];
      }
    }
    // 修改 low 值，后移一位
    ++low;
  }

  return arr;
};
```
