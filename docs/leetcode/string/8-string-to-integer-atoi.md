---
nav:
  title: LeetCode
  order: 3
group:
  title: 字符串
  order: 2
title: 8 - 字符串转换整数
order: 8
---

# 字符串转换整数

## 解题思路

计算卡口

```js
// 计算最大值
const max = Math.pow(2, 31) - 1
// 计算最小值
const min = Math.pow(-2, 31)
```

### parseInt

官方的主要规则可以概况为：

- 无视开头空格
- 返回有符号整数
- 无视整数部分后的字符
- 范围在 32 位内（含）
- 其他情况返回 0

```js
const atoi = function (str) {
  const num = parseInt(str, 10)

  if(isNaN(num)) {
    return 0
  } else if (num < Math.pow(-2, 31) || num > Math.pow(2, 31) - 1) {
    return num < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1
  } else {
    return num
  }
}
```

### 正则匹配

```js
const atoi = function (str) {
  str = str.replace(/^\s+/, '')

  if (str === '') return 0

  const res = str.match(/^[\+\-]?\d+/)

  if (res) {
    if (res[0] < Math.pow(-2, 31)) {
      return Math.pow(-2, 31)
    } else if (res[0] > Math.pow(2, 31) - 1) {
      return Math.pow(2, 31) - 1
    } else {
      return res[0]
    }
  }

  return 0;
}
```

优化实现：

```js
const atoi = function (str) {
  // 编写正则表达式
  const reg = /\s*([-\+]?\d*).*)/
  // 得到捕获组
  const groups = str.match(str)
  // 计算最大值
  const max = Math.pow(2, 31) - 1
  // 计算最小值
  const min = Math.pow(-2, 31)

  // 用于存储转化后的数字
  let target = 0;
  // 如果匹配成功
  if (groups) {
    // 尝试转化捕获到的结构
    target = +groups[1]
    // 注意，即便成功，也可能出现非数字的情况，比如单一个 `+`
    if (isNaN(target)) {
      // 不能进行有效的转换时，请返回 0
      return 0;
    }
  }
  // 卡口判断
  if (target > max) {
    return max
  } else if (target < min) {
    return min
  }

  return target;
}
```

### 自动机

```js
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  // 自动机类
  class Automaton{
    constructor() {
      // 执行阶段，默认处于开始执行阶段
      this.state = 'start';
      // 正负符号，默认是正数
      this.sign = 1;
      // 数值，默认是0
      this.answer = 0;
      /*
      关键点：
      状态和执行阶段的对应表
      含义如下：
      [执行阶段, [空格, 正负, 数值, 其他]]
      */
      this.map = new Map([
        ['start', ['start', 'signed', 'in_number', 'end']],
        ['signed', ['end', 'end', 'in_number', 'end']],
        ['in_number', ['end', 'end', 'in_number', 'end']],
        ['end', ['end', 'end', 'end', 'end']]
      ])
    }

    // 获取状态的索引
    getIndex(char) {
      if (char === ' ') {
        // 空格判断
        return 0;
      } else if (char === '-' || char === '+') {
        // 正负判断
        return 1;
      } else if (typeof Number(char) === 'number' && !isNaN(char)) {
        // 数值判断
        return 2;
      } else {
        // 其他情况
        return 3;
      }
    }

    /*
    关键点：
    字符转换执行函数
    */
    get(char) {
      /*
      易错点：
      每次传入字符时，都要变更自动机的执行阶段
      */
      this.state = this.map.get(this.state)[this.getIndex(char)];

      if(this.state === 'in_number') {
        /*
        小技巧：
        在JS中，对字符串类型进行减法操作，可以将得到一个数值型（Number）的值

        易错点：
        本处需要利用括号来提高四则运算的优先级
        */
        this.answer = this.answer * 10 + (char - 0);

        /*
        易错点：
        在进行负数比较时，需要将INT_MIN变为正数
        */
        this.answer = this.sign === 1 ? Math.min(this.answer, Math.pow(2, 31) - 1) : Math.min(this.answer, -Math.pow(-2, 31));
      } else if (this.state === 'signed') {
        /*
        优化点：
        对于一个整数来说，非正即负，
        所以正负号的判断，只需要一次。
        故，可以降低其判断的优先级
        */
        this.sign = char === '+' ? 1 : -1;
      }
    }
  }

  // 生成自动机实例
  let automaton = new Automaton();

  // 遍历每个字符
  for(let char of str) {
    // 依次进行转换
    automaton.get(char);
  }

  // 返回值，整数 = 正负 * 数值
  return automaton.sign * automaton.answer;
};
```

---

**参考资料：**

- [LeetCode 力扣官方题解：字符串转换整数](https://leetcode-cn.com/problems/string-to-integer-atoi/solution/zi-fu-chuan-zhuan-huan-zheng-shu-atoi-by-leetcode-/)