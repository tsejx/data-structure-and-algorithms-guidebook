var isValid = function(s) {
  if (s === '') return true;
  if (!s.length || s.length % 2 === 1) return false;

  let map = {
    '{': '}',
    '(': ')',
    '[': ']',
  };

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else if (s[i] !== map[stack.pop()]) {
      return false;
    }
  }
  return stack.length === 0;
};
