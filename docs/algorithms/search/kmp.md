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

**K**nuth-**M**orris-**P**ratt 字符串查找算法，简称为 KMP 算法，常用于在一个文本串 S 内查找一个模式串 P 的出现位置。

KMP 算法相比于 BF 算法的优点在于会动态地调整每次往后移动的距离，而 BF 算法则每次 `+1`。

## 算法推倒过程

对于字符串 `abababca`：

| `char` | `index` | `value` |
| :----- | :------ | :------ |
| `a`    | 0       | 0       |
| `b`    | 1       | 0       |
| `a`    | 2       | 1       |
| `b`    | 3       | 2       |
| `a`    | 4       | 3       |
| `b`    | 5       | 4       |
| `c`    | 6       | 0       |
| `a`    | 7       | 1       |

- 前缀：指除了最后一个字符外，一个字符串的全部头部组合。例如，`Harry` 的前缀包括 `{ "H", "Ha", "Har", "Harr" }`，我们把所有前缀组成的集合，称为字符串的前缀集合
- 后缀：指除了第一个字符外，一个字符串的全部尾部组合。例如，`Potter` 的后缀包括 `{ "otter", "tter", "er", "r" }`，然后把所有后缀组成的集合，称为字符串的后缀集合。

需要注意的是，字符串本身并不是自己的后缀。

### 前缀和后缀

### 前缀表的分解

KMP 中的匹配表的算法，其中 `p` 表示前缀，`n` 表示后缀，`r` 表示结果

```
a             p=>0, n=>0, r = 0
aa
```

KMP 实现（一）：缓存匹配表的 KMP
KMP 实现（二）：动态计算的 `next` 的 KMP

在完成 KMP 算法之前，我们要解决最核心的问题是：前缀表的生成。

前缀表，通俗点理解是，对于匹配串（pattern）中所有字串的前缀和后缀匹配个数的分析。

- 文本串 以 `aabaabaaf` 为例
- 模式串 以 `aabaaf` 为例

## 算法实现

## 终极版本

前缀的末尾是 `arr.length - 1`，后缀的末尾是 `1`。

```js
// 用 table[i] 作为子串 0..i 的最长前缀的长度构造一个表
function longestPrefix(str) {
  // 创建一个大小等于模式串长度的表（使用数组表示）
  // table[i] 将存储子字符串 str[0..i] 的最长前缀的前缀
  const table = new Array(str.length);
  let maxPrefix = 0;

  // 子字符串 str[0] 的最长前缀具有长度
  table[0] = 0;

  // 对于下面的子串，我们有两种情况
  for (let i = 1; i < str.length; i++) {
    // 情况 1: 当前字符不匹配最长前缀的最后一个字符
    while (maxPrefix > 0 && str.charAt(i) !== str.charAt(maxPrefix)) {
      // 如果是这种情况，我们必须回溯，并试图找到一个字符，将等于当前字符
      // 如果我们到达 0，那么我们啾找不到匹配的字符
      maxPrefix = table[maxPrefix - 1];
    }

    // 情况 2:最长前缀的最后一个字符与 str 中的当前字符匹配
    if (str.charAt(maxPrefix) === str.charAt(i)) {
      // 如果是这种情况，我们知道在位置 i 的最长前缀还有一个字符
      // 例如，考虑 `-` 不是集合 `[a-c]` 中包含的任何字符
      // str = abc----abc
      // 假设 i 将会是字符 c 在字符串 str 中的最后的索引
      // 那么 maxPrefix 将会是 2（字符串 str 中第一个字符 `c`）
      // maxPrefix 将会是 3
      maxPrefix++;
      // 所以 table[9] 的最长前后缀是 3
    }

    table[i] = maxPrefix;
  }

  return table;
}

// 查找 str 中所有匹配模式串的字符串
// 该算法基于 Knuth—Morris-Pratt 算法，它的优化在于它与 O(n) 复杂度匹配
function kmpMatching(str, pattern) {
  const next = longestPrefix(pattern);
  let matches = [];

  // `j` 是模式串中的索引
  let j = 0;
  // `i` 是文本串中的索引
  let i = 0;

  while (i < str.length) {
    // 情况 1: S[i] === P[j]，因此我们分别将 S 和 P 的索引向下个索引移动
    if (str.charAt(i) === pattern.charAt(i)) {
      i++;
      j++;
    }

    // 情况 2: `j` 与模式串长度相等
    // 这表示我们到达了模式串的末端，也就是说我们找到了匹配的字符串
    if (j === pattern.length) {
      matches.push(i - j);
      // 下面我们必须更新 `j`，因为我们想匹配多次
      // 我们可以跳转到目前已知的最长前缀的最后一个字符，而不是更新到 `j = 0`
      // `j - 1` 表示模式串最后字符，因为 `j` 事实上就是 `P.length`
      // 例如：
      // S =  a b a b d e
      // P = `a b`a b
      // 我们会跳转到 `a b` 并且我们会在下次迭代中比较 `d`
      // a b a b `d` e
      //     a b `a` b
      j = next[j - 1];
    }
    // 情况 3:
    // S[i] !== P[j] 表示失配
    else if (str.charAt(i) !== pattern.charAt(j)) {
      // 如果我们至少找到了一个共同的字符，请执行与情况 2 中相同的操作
      if (j !== 0) {
        j = next[j - 1];
      } else {
        // 否则，`j = 0`，我们可以移动到下个字符 S[i + 1]
        i++;
      }
    }
  }

  return matches;
}
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
