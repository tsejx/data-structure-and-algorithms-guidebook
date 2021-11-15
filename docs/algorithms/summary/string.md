---
nav:
  title: 算法
  order: 2
group:
  title: 算法技巧总结
  order: 30
title: 字符串解题技巧
order: 4
---

# 字符串解题技巧

## 字符串操作

### 反转字符串

```js
const str = 'helloworld';

const res = str.split('').reverse().join('');

console.log(res);
```

## 字符串类型

### 回文字符串

所谓的回文字符串，就是正着读和反着读是一样的。

```js
function isPalindrome(str) {
  // 先反转字符串
  const reversedStr = str.split('').reverse().join('');
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

也可以通过双指针方法判断是否为回文字符串：

```js
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;

    left++;
    right--;
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

### 换位词

## 字符串方法

### substr

### substring

### padStart

## 字符方法

常用编码：

- 字符串 0-9：48 至 57
- 大写字母 A-Z：65 至 90
- 小写字母 a-z：97 至 122
- 相同的大小写字母之间相差 `32`

常用方法：

- `String.prototype.charAt`：获取字符串指定索引的子字符
- `String.prototype.charCodeAt`：获取字符串指定索引的子字符的 Unicode 值
- `String.prototype.codePointAt`：同上
- `String.fromCharCode`：根据指定的 Unicode 值转换为字符
- `String.fromCodePoint`：同上

### charAt

使用方法 String.prototype.charAt 可以获取字符串指定索引下标的字符：

```js
const str = 'ABC';

// 获取第一个子字符的 Unicode 值
const s1 = str.charAt(0);

console.log(s1);
// 'A'
```

### charCodeAt

使用方法 String.prototype.charCodeAt 可以获取字符串指定索引下标的字符的 ASCII 码：

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

### fromCharCode

使用方法 String.fromCharCode 可以将 ASCII 码转换为字符：

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

## 双指针法的边界判断条件

### 从中心向外扩展

从字符串中心向两边扩展，需要获取字符中间点：

- 当字符串长度为偶数时

```js
const left = s.length / 2 - 1;
const right = s.length / 2;

// 例如：'abcd'
// left = 4 / 2 - 1 = 1 从中间左侧开始下标为 1 即为 b
// right = 4 / 2 = 2 从中间右侧开始下标为 2 即为 c
```

- 当字符串长度为奇数时

```js
const left = (s.length - 1) / 2;
const right = (s.length - 1) / 2;

// 例如：'abcde'
// left = (5 - 1) / 2 = 2 从中间左侧开始下标为 2 即为 c
// right = (5 - 1) / 2 = 2 从中间右侧开始下标为 2 即为 c
```

- 综合写法

```js
const left = s.length % 2 === 0 ? s.length / 2 - 1 : (s.length - 1) / 2;
const right = s.length % 2 === 0 ? s.lenght / 2 : (s.lenght - 1) / 2;
```

### 从两边向内收缩

```js
const start = 0;
const end = s.length - 1;
```

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

## 字符串比较方法

- 先后
- 是否存在重复的字符
