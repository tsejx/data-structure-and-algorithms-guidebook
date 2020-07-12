const mult = function () {
  const cache = {};
  const calculate = () => {
    let a = 1;
    for (let i = 0; i < arguments.length; i++) {
      a = a * arguments[i];
    }
    return a;
  };

  return function () {
    const args = Array.prototype.join.call(arguments, ',');
    // 缓存有的直接返回
    if (cache[args]) {
      return cache[args];
    }

    return (cache[args] = calculate.apply(null, arguments));
  };
};
