function getIntersect(head) {
  let tortoise = head,
    hare = head;

  while (hare !== null && hare.next !== null) {
    tortoise = tortoise.next;
    hare = hare.next;
    if (tortoise === hare) {
      return tortoise;
    }
  }

  return null;
}

function detectCycle(head) {
  if (head === null) return null;

  let intersect = getIntersect(head);
  if (intersect === null) {
    return null;
  }

  let ptr1 = head,
    ptr2 = intersect;
  while (ptr1 !== ptr2) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  return ptr1;
}
