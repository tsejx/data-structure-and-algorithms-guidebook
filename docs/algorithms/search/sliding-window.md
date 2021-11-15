# 滑动窗口

滑动窗口类型的题目经常是用来执行数组或是链表上某个区间（窗口）上的操作。比如找最长的全为 1 的子数组长度。滑动窗口一般从第一个元素开始，一直往右边一个一个元素挪动。当然了，根据题目要求，我们可能有固定窗口大小的情况，也有窗口的大小变化的情况。

```jsx | inline
import React from 'react';
import img from '../../assets/sliding-window/sliding-window.png';

export default () => <img alt="滑动窗口" src={img} width="45%" height="45%" />;
```

滑动窗口的解题思路：

1. 我们在字符串 `S` 中使用双指针中的左右指针技巧，初始化 `left = right = 0`，把索引闭区间 `[left, right]` 称为一个 **窗口**。
2. 我们先不断地增加 `right` 指针扩大窗口 `[left, right]`，直到窗口中的字符串符合要求（包含了 `T` 中的所有字符）
3. 我们停止增加 `right`，转而不断增加 `left` 指针缩小窗口 `[left, right]`，直到窗口中的字符串不再符合要求（不包含 `T` 中的所有字符了）。同时，每次增加 `left`，我们都要更新一轮结果
4. 重复第 2 和第 3 步，直到 `right` 到达字符串 `S` 的尽头

这个思路的本质就是：增加窗口右边界，寻找一个可行解，在找到可行解的情况下增加窗口左边界，优化可行解，找到最优解。

```js
var slidingWindow = function (s, t) {
  let need = {},
    window = {};

  // 统计需要用到的字符
  for (const char of t) {
    need[char] = (need[char] || 0) + 1;
  }

  let left = 0,
    right = 0;
  let valid = 0;

  while (right < s.length) {
    // 即将移入窗口的字符
    const nextChar = s.charAt(right);
    // 右移窗口
    right++;

    // ---窗口内数据更新---
    // do something

    // ---打印调试输出位置---

    // 判断左侧窗口是否要收缩
    while() {
      // 将移出窗口的字符
      const removedChar = s.charAt(left)
      // 窗口从左侧向内收缩
      left++;

      // ---进行窗口内数据变更---
      // do something
    }
  }
};
```

## 相关题目

- 76 最小覆盖子串
- 567 字符串排列
- 438 找所有字母异位词
- 3 最长无重复子串

## 参考资料

- [我写了套框架，把滑动窗口算法变成了默写题](https://mp.weixin.qq.com/s/ioKXTMZufDECBUwRRp3zaA)
