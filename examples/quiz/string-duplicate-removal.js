function removeDuplicateString(str) {
  const set = new Set(str.split(''));
  const arr = [...set];
  return arr.join('');
}

function removeDuplicateStringES5(str) {
  if (!str || typeof str !== 'string') return str;

  return (str.split('').reduce(
    (acc, item) => {
      if (!acc.hash.hasOwnProperty(item)) {
        acc.hash[item] = true;
        acc.arr.push(item);
      }
      return acc;
    },
    {
      hash: {},
      arr: [],
    }
  )).arr.join('');
}
