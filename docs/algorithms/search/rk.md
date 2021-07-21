---
nav:
  title: 算法
  order: 2
group:
  title: 搜索
  order: 3
title: 字符串 - RK 算法
order: 21
---

# RK 算法

哈希检索算法（Robin-Karp，简称 RK 算法），是对 BF 算法的一个改进：在 BF 算法中，每一个字符都需要进行比较，并且当我们发现首字符匹配时仍然需要比较剩余的所有字符。而在 RK 算法中，就尝试只进行一次比较来判定两者是否相等。 RK 算法也可以进行多模式匹配，在论文查重等实际应用中一般都是使用此算法。

首先计算子串的 HASH 值，之后分别取 **原字符串中子串长度的字符串** 计算 HASH 值，比较两者是否相等：

- 如果 HASH 值不同，则两者必定不匹配
- 如果相同，由于 HASH 冲突存在，也需要按照 BF 算法再次判定

```jsx | inline
import React from 'react';
import img from '../../assets/string-search/rk.png';

export default () => <img alt="RK算法" src={img} width="60%" height="60%" />;
```

按照此例子，首先计算子串 `DEF` 的 Hash 值为 `Hd`，之后从原字符串中依次取长度为 3 的字符串 `ABC`、`BCD`、`CDE`、`DEF` 计算 Hash 值，分别为 `Ha`、`Hb`、`Hc`、`Hd`，当 Hd 相等时，仍然要比较一次子串 `DEF` 和原字符串 `DEF` 是否一致。 时间复杂度：$O(n * m)$（实际应用中往往较快，期望时间为 $O(n+m)$）。

要实现 RK 算法，最重要的是怎么去选取 Hash 函数。这里我们选用 **除留余数法**。

```js
function hash(str) {
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    total += 37 * total + str.charCodeAt(i);
  }

  total = total % 144451;

  return parseInt(total);
}

function RK(s, p) {
  if (!s || !p) return -1;

  const sLen = s.length,
    pLen = p.length;
  const pHash = hash(p),
    index = -1;

  for (let i = 0; i <= sLen - pLen; i++) {
    const subStr = s.substr(i, pLen);

    if (hash(subStr) === pHash && substr === p) {
      index = i;
      break;
    }
  }

  return index;
}
```
