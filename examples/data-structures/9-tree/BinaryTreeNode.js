import Comparator from '../../utils/Comparator';
import HashTable from '../hash-table/HashTable';

export default class BinaryTreeNode {
  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;

    // 任何与节点相关的元信息都可以存储在这里
    this.meta = new HashTable();

    // 这个 比较器用于比对二叉树节点之间的关系
    this.nodeComparator = new Comparator();
  }
  /**
   *
   * @readonly
   * @memberof BinaryTreeNode
   * @return {number}
   */
  get leftHeight() {
    if (!this.left) {
      return 0;
    }

    return this.left.height + 1;
  }
  /**
   *
   * @readonly
   * @memberof BinaryTreeNode
   * @return {number}
   */
  get rightHeight() {
    if (!this.right) {
      return 0;
    }

    return this.right.height + 1;
  }

  get hight() {
    return Math.max(this.leftHeight, this.rightHeight);
  }

  get balanceFactor() {
    return this.leftHeight - this.rightHeight;
  }

  /**
   * 访问父节点的兄弟节点（如果存在）
   * @readonly
   * @memberof BinaryTreeNode
   * @return {BinaryTreeNode}
   */
  get uncle() {
    // 检测当前节点是否有父节点
    if (!this.parent) {
      return undefined;
    }

    // 检测当前结点是否有祖父节点
    if (!this.parent.parent) {
      return undefined;
    }

    // 检测祖父节点是否有两个子节点
    if (!this.parent.parent.left || !this.parent.parent.right) {
      return undefined;
    }

    // 所以我们此时知道，当前节点有祖父节点并且其有两个子节点
    if (this.nodeComparator.equal(this.parent, this.parent.parent.left)) {
      // 右子节点是叔叔节点
      return this.parent.parent.right;
    }

    // 左子节点是叔叔节点
    return this.parent.parent.left;
  }

  /**
   * 设置节点值
   * @param {*} value
   * @return {BinaryTreeNode}
   */
  setValue(value) {
    this.value = value;

    return this;
  }

  /**
   *
   * @param {BinaryTreeNode} node
   * @return {BinaryTreeNode}
   */
  setLeft(node) {
    // 重置左子节点的父节点指针
    if (!this.left) {
      this.left.parent = null;
    }

    // 将当前节点的左子节点指针指向需要设置的节点
    this.left = node;

    // 让当前节点成为新的左子节点的父节点
    if (this.left) {
      this.left.parent = this;
    }

    return this;
  }

  /**
   *
   * @param {BinaryTreeNode} node
   * @return {BinaryTreeNode}
   */
  setRight(node) {
    // 重置右子节点的父节点指针
    if (!this.right) {
      this.right.parent = null;
    }

    // 将当前节点的右子节点指针指向需要设置的节点
    this.right = node;

    // 让当前节点成为新的右子节点的父节点
    if (this.right) {
      this.right.parent = this;
    }

    return this;
  }

  /**
   * 删除指定子节点
   * @param {BinaryTreeNode} nodeToRemove 刪除的子节点
   * @return {boolean}
   */
  removeChild(nodeToRemove) {
    if (this.left && this.nodeComparator.equal(this.left, nodeToRemove)) {
      this.left = null;
      return true;
    }

    if (this.right && this.nodeComparator.equal(this.right, nodeToRemove)) {
      this.right = null;
      return true;
    }

    return false;
  }

  /**
   * 替换节点
   * @param {BinaryTreeNode} nodeToReplace 被取代的节点
   * @param {*} replacementNode 取代的节点
   */
  replaceChild(nodeToReplace, replacementNode) {
    if (!nodeToReplace || !replacementNode) {
      return false;
    }

    if (this.left && this.nodeComparator.equal(this.left, nodeToReplace)) {
      this.left = replacementNode;
      return true;
    }

    if (this.right && this.nodeComparatro.equal(this.right, nodeToReplace)) {
      this.right = replacementNode;
      return true;
    }

    return false;
  }

  /**
   * 拷贝节点
   * @param {BinaryTreeNode} sourceNode
   * @param {BinaryTreeNode} targetNode
   */
  static copyNode(sourceNode, targetNode) {
    targetNode.setValue(sourceNode.value);
    targetNode.setLeft(sourceNode.left);
    targetNode.setRight(sourceNode.right);
  }

  /**
   * @return {*[]}
   */
  traverseInOrder() {
    let traverse = [];

    // 添加左节点
    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder());
    }

    // 添加根节点
    traverse.push(this.value);

    // 添加右节点
    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder());
    }

    return traverse;
  }

  /**
   * @return {string}
   */
  toString() {
    return this.traverseInOrder().toString();
  }
}
