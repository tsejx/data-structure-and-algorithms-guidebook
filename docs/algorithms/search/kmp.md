---
nav:
  title: 算法
  order: 2
group:
  title: 搜索
  order: 3
title: 字符串 - KMP 算法
order: 24
---

# KMP 算法

KMP（Knuth-Morris-Pratt）算法，是字符串匹配最经典的算法之一。

在完成 KMP 算法之前，我们要解决最核心的问题是：部分匹配表的生成。

部分匹配表，通俗点理解是，对于匹配串（dest）中所有字串的前缀和后缀匹配个数的分析。

- 文本串
- 模式串

## 利用 next 数组进行匹配

- 建立 `next` 数组
- 利用 `next` 数组进行匹配

首先建立 `next` 数组：

```js
const getNext = function(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      result.push(0);
      continue;
    }
  }
};
```

接下来，实现利用 `next` 数组加速字符串匹配。

```js
```

---

**参考资料：**

- [知乎：如何更好地理解 KMP 算法](https://www.zhihu.com/question/21923021)
- [字符串匹配的 KMP 算法](http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html)
- [字符串匹配的 KMP 算法](http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html)
- [字符串匹配问题 - KMP 算法](https://juejin.im/post/6844904134861127688)
- [帮你把 KMP 算法学个通透（B 站理论篇）](https://www.bilibili.com/video/BV1PD4y1o7nd/)
- [帮你把 KMP 算法学个通透（求 next 数组代码篇）](https://www.bilibili.com/video/BV1M5411j7Xx)
- [帮你把 KMP 算法学个通透](https://leetcode-cn.com/problems/implement-strstr/solution/bang-ni-ba-kmpsuan-fa-xue-ge-tong-tou-ming-ming-ba/)
