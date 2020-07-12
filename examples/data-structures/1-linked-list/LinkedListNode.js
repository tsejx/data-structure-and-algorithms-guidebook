/**
 * 链表结点
 */
export default LinkedListNode {
    constructor(value, next = null){
        // 数据域
        this.value = value;
        // 指针域
        this.next = next;
    }
    toString(callback){
        return callback ? callback(this.value) : `${this.value}`
    }
}