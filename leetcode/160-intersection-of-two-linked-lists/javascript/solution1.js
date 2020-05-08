var getIntersectionNode = function(headA, headB) {
  let pA = headA,
    pB = headB;

  while (pA || pB) {
    if (pA === pB) return pA;

    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }

  return null;
};
