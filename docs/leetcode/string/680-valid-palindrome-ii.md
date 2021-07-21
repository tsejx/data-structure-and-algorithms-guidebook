---
nav:
  title: LeetCode
  order: 3
group:
  title: 字符串
  order: 2
title: 680 - 验证回文字符串 II
order: 680
---

# 验证回文字符串 II

## 解题思路

如何判断自己解决回文类问题的解法是否 **高效**？其中一个很重要的标准，就是看你对回文字符串的对称特性利用得是否彻底。

### 双指针

实现思路：

- 判断是否是回文串，用 **双指针** 的思路肯定没错
- 设置头尾指针，如果双指针指向的字符相同，指针往中间挪动，继续检查
- 如果指向的字符不同，看看能否通过删除一个字符（要么删左指针指向的字符，要么删右指针指向的字符），使得剩下的字串仍是回文串
- 写一个判断回文串的辅助函数，判断 **删去一个字符后的子串** 是否是回文串
- 辅助函数的双指针在循环时，如果字符不同，就一票否决，不像上面那样给机会

```js
const validPalindrome = function(s) {
  let start = 0,
    end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end]) {
      // 转为判断删掉字符后的子字符，是否是回文串
      return isPalindrome(s, start + 1, end) || isPalindrome(s, start, end - 1);
    }

    start++;
    end--;
  }

  function isPalindrome(str, start, end) {
    while (start < end) {
      // 一票否决
      if (str[start] !== str[end]) {
        return false;
      }

      start++;
      end--;
    }

    return true;
  }

  return true;
};
```

### 贪心算法

```js
const validPalindrome = function(s) {
  let start = 0,
    end = s.length - 1;

  while (start <= end) {
    if (s[start] === s[end]) {
      start++;
      end++;
    } else {
      break;
    }
  }

  if (start > end) {
    return true;
  } else {
    let tmpStart = start,
      tmpEnd = end;

    // 删除做指针指向的字符
    start++;
    while (start <= end) {
      if (s[start] === s[end]) {
        start++;
        end--;
      } else {
        break;
      }
    }

    if (start > end) return true;

    // 此路不通，复位，删除缩小范围的结束指针指向的字符
    start = tmpStart;
    end = tmpEnd;
    end--;

    while (start <= end) {
      if (s[start] === s[end]) {
        start++;
        end--;
      } else {
        break;
      }
    }

    if (start > end) {
      return true;
    }
  }

  return false;
};
```
