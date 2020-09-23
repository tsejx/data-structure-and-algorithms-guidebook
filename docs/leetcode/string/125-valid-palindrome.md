---
nav:
  title: LeetCode
  order: 3
group:
  title: 字符串
  order: 2
title: 125 - 验证回文串
order: 125
---

# 验证回文串

`字符串` `双指针`

## 解题思路

回文串：删除空格和逗号之后再进行判断。

### 暴力解法

算法思路：

- 替换非字母和数字，然后转换为大写或小写
- 用方法转换然后对比

```js
const isPalindrome = function (s) {
  if(s === '') return true;

  s = s.toString().replace(/[^\dA-Za-z]*/g, '').toLowerCase();

  return s === s.toString().split('').reverse().join('')
}
```

替换字符串中的非字母和数字：

```js
const res1 = str.replace(/\W_/g, '')

const res2 = str.replace(/[^\dA-Za-z]/g, '')
```

### 双指针

双指针，原地检测：

```js
const isPalindrome = function (s) {
  s = s.toLowerCase()

  let start = 0, end = s.length - 1;

  while(start <= end) {

    if (!s[start].match(/[a-z][0-9]/)) {
      start++
    } else if (!s[end].match(/[a-z][0-9]/)) {
      end--
    } else if (s[start] !== s[end]) {
      return false
    } else {
      start++;
      end--;
    }
  }

  return true;
}
```