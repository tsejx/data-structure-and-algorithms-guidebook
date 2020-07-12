var dailyTemperature = function(T) {
  let res = new Array(T.length).fill(0);
  let stack = [];

  for (let i = 0; i < T.length; i++) {
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      let topIndex = stack.pop();
      res[topIndex] = i - topIndex;
    }
    stack.push(i);
  }
  return res;
};
