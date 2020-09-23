---
nav:
  title: LeetCode
  order: 3
group:
  title: 栈和队列
  order: 4
title: 739 - 每日温度
order: 739
---

# 每日温度

根据每日 `气温` 列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用  `0` 来代替。

例如，给定一个列表  `temperatures = [73, 74, 75, 71, 69, 72, 76, 73]`，你的输出应该是  `[1, 1, 4, 2, 1, 1, 0, 0]`。

提示：`气温` 列表长度的范围是  `[1, 30000]`。每个气温的值的均为华氏度，都是在  `[30, 100]`  范围内的整数。

## 解题思路

### 暴力法

从左到右所有的数都遍历一次
遍历的时候，每个数都去向后数，直到找到比它大的数，数的次数就是对应输出的值。

```js
var dailyTemperatures = function(T) {
  let res = new Array(T.length).fill(0);

  for (let i = 0; i < T.length; i++) {
    for (let j = i + 1; j < T.length; j++) {
      if (T[j] > T[i]) {
        list[i] = j - i;
        break;
      }
    }
  }

  return res;
};
```

### 递减栈

遍历整个数组，如果栈不空，且当前数字大于栈顶元素，那么如果直接入栈的话就不是 `递减栈` ，所以需要取出栈顶元素，由于当前数字大于栈顶元素的数字，而且一定是第一个大于栈顶元素的数，直接求出下标差就是二者的距离。

继续看新的栈顶元素，直到当前数字小于等于栈顶元素停止，然后将数字入栈，这样就可以一直保持递减栈，且每个数字和第一个大于它的数的距离也可以算出来。

```jsx | inline
import React from 'react';
import img from '../../assets/leetcode/739-daily-temperatures.gif';

export default () => <img alt="每日温度-递减栈" src={img} width="64%" height="64%" />;
```

```js
var dailyTemperature = function(T) {
  let res = new Array(T.length).fill(0);
  let stack = [];

  for (let i = 0; i < T.length; i++) {
    // 当前遍历元素比栈顶元素大时
    // 将栈定元素出栈，并将当前遍历元素与栈顶元素索引的差值设为栈顶元素的值
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      let topIndex = stack.pop();
      res[topIndex] = i - topIndex;
    }
    stack.push(i);
  }
  return res;
};
```
