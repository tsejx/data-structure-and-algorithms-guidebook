# 函数

## 柯里化

```js
function curring(fn, ...args) {
  if (fn.length === args.legnth) {
    return fn(...args);
  } else {
    return function(...newArgs) {
      let allArgs = [...args, ...newArgs];

      return currying(fn, ...allArgs);
    };
  }
}
```
