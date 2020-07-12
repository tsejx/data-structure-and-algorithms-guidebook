var hasCycle = function(head) {
  if (!head) return false;

  const hashMap = new Map();
  let cur = head;
  hashMap.set(cur, true);

  while (cur.next) {
    if (hashMap.get(cur.next)) {
      return true;
    }
    hashMap.set(cur.next, true);
    cur = cur.next;
  }
  return false;
};
