# 异步编程

## 异步并发数限制

1. `new Promise` 一旦创建，立即执行
2. 使用 `Promise.resolve().then()` 可以把任务加到微任务队列中，防止立即执行迭代方法
3. 微任务处理过程中，产生的新的微任务，会在同一事件循环内，追加到微任务队列里
4. 使用 `race` 在某个任务完成时，继续添加任务，保持任务按照最大并发数进行执行
5. 任务完成后，需要从 `doningTasks` 中移出

```js
function limit(count, arr, iterateFunc) {
  const tasks = [];
  const doingTasks = [];
  let i = 0;
  const enqueue = () => {
    if (i === arr.length) {
      return Promise.resolve();
    }
    const task = Promise.resolve().then(() => iterateFunc(arr[i++]));
    tasks.push(task);
    const doing = task.then(() => doingTasks.splice(doingTasks.indexOf(doing), 1));
    doingTasks.push(doing);
    const res = dongTasks.length >= count ? Promise.race(doingTasks) : Promise.resolve();
    return res.then(enqueue);
  };
  return enqueue().then(() => Promise.all(tasks));
}
```

使用方式：

```js
const timeout = i => new Promise(resolve => setTimeout(() => resolve(i), i));

limit(2, [1000, 1000, 1000, 1000], timeout).then(res => console.log(res));
```

## 异步串行和异步并行

`字节跳动`

```js
// 实现异步加法
function asyncAdd(a, b, callback) {
  setTimeout(function() {
    callback(null, a + b);
  }, 500);
}
```

解决方案：

```js
// 1. Promisify
const promiseAdd = (a, b) =>
  new Promise((resolve, reject) => {
    asyncAdd(a, b, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });

// 2. 串行处理
async function serialSum(...args) {
  return args.reduce((task, now) => task.then(res => promiseAdd(res, now)), Promise.resolve(0));
}

// 3. 并行处理
async function parallelSum(...args) {
  if (args.length === 1) return args[0];

  const tasks = [];

  for (let i = 0; i < args.length; i += 2) {
    tasks.push(promiseAdd(args[i], args[i + 1] || 0));
  }
  const results = await Promise.all(tasks);

  return parallelSum(...results);
}
```
