---
nav:
  title: 前端编程
  order: 4
group:
  title: 原生编程
  order: 2
title: 实现 Promise
order: 1
---

# 实现 Promise

简单 Promise 粗糙实现，关键点在于：

1. 当 `pending` 时，`thenable` 函数由一个队列维护
2. 当状态变为 `resolveed(fulfilled)` 时，队列中所有 `thenable` 函数执行
3. 当 `resolved` 时，`thenable` 函数直接执行

```js
class Promise {
  static resolve(value) {
    if (value && value.then) {
      return value;
    }
    return new Promise(resolve => resolve(value));
  }

  constructor(fn) {
    this.value = undefined;
    this.reason = undefined;
    this.status = 'PENDING';

    // 维护 resolve/pending 的函数队列
    this.resolveQueue = [];
    this.rejectQueue = [];

    const resolve = value => {
      //   注意此处的 setTImeout
      setTimeout(() => {
        this.status = 'RESOLVED';
        this.value = value;
        this.resolveQueue.forEach(({ fn, resolve: res, reject: rej }) => res(fn(value)));
      });
    };

    const reject = err => {
      setTimeout(() => {
        this.status = 'REJECTED';
        this.reason = err;
        this.rejectQueue.forEach(({ fn, resolve: res, reject: rej }) => rej(fn(err)));
      });
    };

    fn(resolve, reject);
  }

  then(fn) {}

  catch(fn) {}
}

Promise.resolve(10)
  .then(o => o * 10)
  .then(o => o + 10)
  .then(o => console.log(o));

new Promise((resolve, reject) => reject('Error')).catch(err => console.log('Error', err));
```

- [手写一个 Promise/A+，完美通过官方 872 个测试用例](https://juejin.im/post/5e8bec156fb9a03c4d40f4bc)
