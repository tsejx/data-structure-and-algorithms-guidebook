# 设计模式

## 订阅发布

```js
class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [callback];
    } else {
      this.events[eventName].push(callback);
    }
  }
  emit(eventName) {
    this.events[eventName] && this.events[eventName].forEach(cb => cb());
  }
}
```
