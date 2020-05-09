function oaddEvenList(head) {
    if (!head || !head.next || !head.next.next) return head;

    let odd = head, even = head.next, evenHead = even;

    while () {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;
    return
}