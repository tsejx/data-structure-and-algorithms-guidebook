# 事件处理


```js
class CustomEvent {
  constructor() {
    this._cache = {}
  }
  on(type, cb) {
    if (!this._cache[type]) {
      this._cache[type] = []
    }
    if (this._cache[type].indexOf(cb) === -1) {
      this._cache[type].push(cb)
    }
  }
  off(type, cb) {
    if(!this._cache[type]) {
      console.error(new Error('This type is not defined.'))
    } else {
      if (this._cache[type].indexOf(cb) !== -1) {
        this._cache[type].splice(this._cache[type].indexOf(cb), 1)
      }
    }
  }
}

//  使用方法
let e = new CustomEvent();
e.on('click', function clg() {
  console.log('Hello world!')
})
e.off('click', function clg() {
  console.log('Hello world!')
})
console.log(e);
```