---
nav:
  title: 算法
  order: 2
group:
  title: 算法技巧总结
  order: 100
title: 字符串解题技巧
order: 2
---

# 字符串解题技巧

## 反转字符串

```js
const str = 'helloworld';

const res = str
  .split('')
  .reverse()
  .join('');

console.log(res);
```

## 判断字符是否回文

所谓的回文字符串，就是正着读和反着读是一样的。

```js
function isPalindrome(str) {
  // 先反转字符串
  const reversedStr = str
    .split('')
    .reverse()
    .join('');
  // 判断反转前后是否相等
  return reversedStr === str;
}
```

同时，回文字符串还有另一个特性：如果从中间位置劈开，那么两边的两个子串在内容上是完全对称的。因此我们可以结合对称性来做判断：

```js
function isPalindrome(str) {
  // 缓存字符串的长度
  const len = str.length;
  // 遍历前半部分，判断和后半部分是否对称
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }
  return true;
}
```

谨记这个 **对称** 的特性，非常容易用到。

字符串相关：

1. 判断回文思路
2. 对称性
3. 字符串翻转
4. 删除一个字符能否形成回文
5. 字符串解析
6. 字符串匹配

字符串题干中出现 **回文** 关键字，那么首先想到的必须是：`对称性` 和 `双指针`。

## Unicode 编码

- `String.prototype.charAt`：获取字符串指定索引的子字符
- `String.prototype.charCodeAt`：获取字符串指定索引的子字符的 Unicode 值
- `String.prototype.codePointAt`：同上
- `String.fromCharCode`：根据指定的 Unicode 值转换为字符
- `String.fromCodePoint`：同上

**String.prototype.charAt**

```js
const str = 'ABC';

// 获取第一个子字符的 Unicode 值
const s1 = str.charAt(0);

console.log(s1);
// 'A'
```

**String.prototype.charCodeAt**

```js
const str1 = 'ABC';
const str2 = 'abc';

const code1 = str1.charCodeAt(0);
const code2 = str2.charCodeAt(0);

console.log(code1);
// 65
console.log(codee2);
// 97
```

**String.fromCharCode**

```js
const s1 = String.fromCharCode(65);
// A
const s2 = String.fromCharCode(90);
// Z
const s3 = String.fromCharCode(97);
// a
const s4 = String.fromCharCode(122);
// z
```

## 边界判断条件

## 常用计算公式

```js
// 获取数字数量级
// 例如：
// 1: 9 -> 0
// 2: 99 -> 1
// 3: 99 -> 2
// 4: 999 -> 3
const n = Math.floor(Math.log10(x));

// 对应个十百千的转化
const n = 10 ** Math.floor(Math.log10(x));
```
