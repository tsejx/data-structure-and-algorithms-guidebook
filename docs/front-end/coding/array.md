---
nav:
  title: 前端编程
  order: 4
group:
  title: 代码实现题
  order: 3
title: 数组方法
order: 1
---

# 数组方法

## 扁平化

```js
const flat = function (arr) {
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flat(item) : item);
  }, []);
};
```

## 数组去重

数组最后一项元素替换掉当前项元素，并删除最后一项元素。

```js
const dedupe = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // 取得当前数组中的每一项
    let item = arr[i];
    // 从 i+1 项开始截取数组中剩余元素，包括 i+1 位置的元素
    let remain = arr.slice(i + 1);

    if (remain.indexOf(item) > -1) {
      arr[i] = arr[arr.length - 1];
      arr.length--;
      i--;
    }
  }
};
```

对象键值对存储

```js
const dedupe = function (arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    if (typeof obj[item] !== 'undefined') {
      arr[i] = arr[arr.length - 1];
      arr.length--;
      i--;
    }

    obj[item] = item;
  }
};
```
