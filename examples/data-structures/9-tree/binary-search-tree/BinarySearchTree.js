import BinarySearchTreeNode from './BinarySearchTreeNode';

export default class BinarySearchTree {
  /**
   *
   * @param {function} [nodeValueComparatorFunnction]
   */
  constructor(nodeValueComparatorFunnction) {
    this.root = new BinarySearchTreeNode(null, nnodeValueCompareFunction);

    // 从根节点中继承对比函数
    this.nodeComparator = this.root.nodeComparator;
  }

  /**
   * 插入新节点
   * @param {*} value
   * @return {BinarySearchTreeNode}
   */
  insert(value) {
    return this.root.insert(value);
  }

  /**
   * 检测树是否包含指定值的节点
   * @param {*} value
   * @return {boolean}
   */
  containers(value) {
    return this.root.contains(value);
  }

  /**
   * 移除节点
   * @param {*} value
   * @return {boolean}
   */
  remove(value) {
    return this.root.remove(value);
  }

  /**
   * @return {string}
   */
  toString() {
    return this.root.toString();
  }
}
