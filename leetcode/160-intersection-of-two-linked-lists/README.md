# 相交链表

https://leetcode-cn.com/problems/intersection-of-two-linked-lists/solution/tu-jie-leetcode160xiang-jiao-lian-biao-by-user7746/

双指针法：

走两趟，headA 开头的走到末尾就从 headB 开始，headB 反着来，相遇了就是相交点，没有则是没有相交。