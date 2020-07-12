/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s === '') return true;
  if (!s.length || s.length % 2 === 1) return false;

  const stack = s.split(''),
    rightStack = [];

  while (stack.length) {
    const top = stack.pop();

    if (top === ')' || top === ']' || top === '}') {
      rightStack.push(top);
      continue;
    }

    const right = rightStack.pop();
    if (
      (top === '(' && right !== ')') ||
      (top === '[' && right !== ']') ||
      (top === '{' && right !== '}')
    )
      return false;
  }

  return true;
};
