# JSON

重写 JSON.stringify()

```js
JSON.stringify = function(value, replacer, space) {
  var i;
  gap = '';
  indent = '';
  if (typeof space === 'number') {
    for (i = 0; i < space; i += 1) {
      indent += ' ';
    }
  } else if (typeof space === 'string') {
    indent = space;
  }
  rep = replacer;
  if (
    replacer &&
    typeof replacer !== 'function' &&
    (typeof replacer !== 'object' || typeof replacer.length !== 'number')
  ) {
    throw new Error('JSON.stringify');
  }
  return str('', {
    '': value,
  });
};
```
