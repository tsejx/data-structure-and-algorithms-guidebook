# 对象

## 扁平化

```js
const objectFlat = (obj) => {
  const res = {};

  function flat(item, preKey = '') {
    Object.entries(item).forEach(([key, val]) => {
      const newKey = preKey ? `${preKey}.${key}` : key;

      if (val && Object.prototype.toString.call(val) === '[object Object]') {
        flat(val, newKey);
      } else {
        res[newKey] = val;
      }
    });
  }

  flat(obj);

  return res;
};
```

## Object.create

```js
Object.create = function (proto) {
  if (typeof proto !== 'object' && typeof proto !== 'function') {
    throw new TypeError('Object prototype may only be an Object:' + proto);
  } else if (proto === null) {
    throw new Error(
      "This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument."
    );
  }

  if (typeof properties !== 'undefined') {
    throw new Error(
      "This browser's implementation of Object.create is a shim and doesn't support a second argument."
    );
  }

  // 声明构造函数
  function Fn() {}
  // 将构造函数的运行 prototype 连接在指定的 proto 上
  Fn.prototype = proto;
  // 返回实例化对象
  return new Fn();
};
```

## new

```js
function objectFactory(constructor, ...restParams) {
  // 创建空对象，空对象关联构造函数的原型对象
  const instance = Object.create(constructor.prototype);
  // 执行对象类的构造函数，同时该实例的属性和方法被 this 所引用，即 this 指向新构造的实例
  const result = constructor.call(instance, restParams);
  // 判断构造函数的运行结果是否对象类型
  return (typeof result === 'object' && result) || instance;
}
```

## instanceof

1. 先取得当前类的原型，当前实例对象的原型链
2. 一直循环（执行原型链的查找机制）

```js
function _instanceof(instance, parent) {
  const constructor = parent.prototype;

  let proto = Object.getPrototypeOf(instance);

  while (true) {
    // 找到了原型链的末端
    if (proto === null) return false;

    // 当前实例对象的原型链上找到了当前类
    if (proto === constructor) return true;

    proto = Object.getPrototypeOf(proto);
  }
}
```

## 继承

```js
function inherit(Child, Parent) {
  // 以 Parent.protoyep 为原型创建实例
  let instance = Object.create(Parent.prototype);
  // 将 instance 的构造函数指定为 Child
  instance.constructor = Child;
  // 将 Child 构造函数的运行指定为 instance
  Child.prototype = instance;
}
```

## 拷贝

### 对象浅拷贝

#### 对象合并

```js
const result = Object.assign({}, source);
```

#### 解构赋值

```js
const result = { ...source };
```

问题：原型对象丢失，无法判断实例

### 对象深拷贝

##### 序列化反序列化法

能应付日常的拷贝需求，对基本数据类型、对象和数组有效。

```js
const result = JSON.parse(JSON.stringify(source));
```

##### 迭代递归法

- 能拷贝自身可枚举
- 能拷贝自身不可枚举
- 能拷贝自身 Symbol 类型键
- 能拷贝原型上可枚举
- 能拷贝原型上不可枚举
- 能拷贝原型上 Symbol 类型键

```js
const tags = {
  // 可继续遍历
  map: '[object Map]',
  set: '[object Set]',
  array: '[object Array]',
  object: '[object Object]',
  arguments: '[object Arguments]',
  // 不可继续遍历
  boolean: '[object Boolean]',
  number: '[object Number]',
  string: '[object String]',
  symbol: '[object Symbol]',
  error: '[object Error]',
  date: '[object Date]',
  regexp: '[object RegExp]',
  function: '[object Function]',
};

const deepTags = [tags.map, tags.set, tags.array, tags.object, tags.args];

function isObject(val) {
  const type = typeof val;
  return val !== null && (type === 'object' || type === 'function');
}

function cloneSymbol(origin) {
  return Symbol(origin.description);
}

function cloneRegExp(origin) {
  const flag = /\w*$/;
  const newRegExp = new origin.constructor(origin.source, flag.exec(origin));
  newRegExp.lastIndex = origin.lastIndex;
  return newRegExp;
}

function cloneFunction(origin) {
  return eval(`(${origin.toString()})`);
}

function deepClone(origin, hashMap = new WeakMap()) {
  // 拷贝原始数据类型
  if (!isObject(origin)) return origin;

  // 初始化
  const type = Object.prototype.toString.call(origin);

  // 初始化拷贝对象
  let target = null;

  if (deepTags.includes(type)) {
    target = new origin.constructor();
  } else {
    switch (type) {
      case tags.boolean:
      case tags.number:
      case tags.string:
      case tags.error:
      case tags.date:
        return new origin.constructor(origin);
      case tags.regexp:
        return cloneRegExp(origin);
      case tags.symbol:
        return cloneSymbol(origin);
      case tags.function:
        return cloneFunction(origin);
      default:
        return null;
    }
  }

  // 查表，防止循环拷贝
  if (hashMap.has(origin)) return hashMap.get(origin);

  // 哈希表设置值
  hashMap.set(origin, target);

  // 拷贝 Set
  if (type === tags.set) {
    origin.forEach((value) => {
      target.add(deepClone(value, hashMap));
    });
  }

  // 拷贝 Map
  if (type === tags.map) {
    origin.forEach((value, key) => {
      target.set(key, deepClone(value, hashMap));
    });
  }

  // 拷贝数组
  if (type === tags.array) {
    origin.forEach((item, index) => {
      target[index] = deepClone(origin[index], hashMap);
    });
  }

  // 拷贝对象
  if (type === tags.object) {
    Object.keys(origin).forEach((key) => {
      target[key] = deepClone(origin[key], hashMap);
    });
  }

  return target;
}
```

---

**参考资料：**

- [如何写出一个惊艳面试官的深拷贝?](https://juejin.im/post/5d6aa4f96fb9a06b112ad5b1)
