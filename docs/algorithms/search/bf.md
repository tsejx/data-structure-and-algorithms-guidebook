---
nav:
  title: 算法
  order: 2
group:
  title: 搜索
  order: 3
title: 字符串 - BF 算法
order: 20
---

# BF 算法

BF 算法，亦即 Brute Force 暴力算法，是普通的模式匹配算法。

```jsx | inline
import React from 'react';
import img from '../../assets/string-search/bf.png';

export default () => <img alt="BF算法" src={img} width="60%" height="60%" />;
```

BF 算法的思想就是将文本串 `s` 的第一个字符与模式串 `p` 的第一个字符进行匹配：

- 若相等，则继续比较 `s` 的第二个字符和 `p` 的第二个字符
- 若不相等，则比较 `s` 的第二个字符和 `p` 的第一个字符

依次比较下去，直到得出最后的匹配的结果。

BF 算法是一种蛮力算法，没有任何优化，就是用两层循环的比较，当字符串比较大的时候，执行效率就非常低下，不适合比较非常大的字符串。

该算法最坏情况下进行 $M * (N - M)$ 次比较，时间复杂度 ：$O(M * N)$。最优情况 $M + N$。

因此，如果我们使用暴力搜索 `m` 字符中的 `n` 个字符串，那么我们需要尝试 `m * n` 次。

## 算法实现

### for 循环写法

```js
const BF = function(s, p) {
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < p.length; j++) {
      if (s[i] === j[i]) {
        // 字符匹配，两层循环索引下标自增
        i++;
        j++;
      } else {
        // 字符不匹配，跳出第二层循环
        // 第一层循环递增
        i = i - (j - 1);
        break;
      }
      // 当第二层循环亦即模式字符串已经匹配完毕
      // 表示主串中存在与模式串匹配的子字符串
      if (j === p.length) {
        return i - j;
      }
    }
  }

  return -1;
};
```

### while 循环写法

```js
const BF = function(s, p) {
  let i = 0,
    j = 0;

  while (i < s.length) {
    if (s[i] === p[j]) {
      i++;
      j++;
    } else {
      i = i - (j - 1);
      j = 0;
    }
    if (j === p.length) {
      return i - j;
    }
  }

  return -1;
};
```

算法复杂度分析：

- 时间复杂度：$O(m * n)$

BF 算法在主串和字串匹配失败时，主串进行的回溯操作会影响效率，回溯之后，主串与字串有些部分比较是没有必要的。这种简单的丢弃前面的匹配信息是 BF 算法之所以效率低的重要因素。

---

**参考资料：**

- [算法之字符串匹配算法](https://juejin.im/post/6844903843277307918)
- [JavaScript 字符串匹配算法](https://juejin.im/post/6844903896687575053)
- [算法学堂：字符串基础算法](https://juejin.im/post/6844904025486278670)
- [来了，字符串匹配算法](https://juejin.im/post/6844903795546128391)
- [数据结构与算法 6 - 字符串匹配](https://juejin.im/post/6844904158865129486)
