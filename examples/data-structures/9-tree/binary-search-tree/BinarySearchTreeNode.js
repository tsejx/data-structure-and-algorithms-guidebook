import BinaryTreeNode from '../BinaryTreeNode';
import Comparator from '../../../utils/Comparator';

export default class BinarySearchTreeNode extends BinaryTreeNode {
  /**
   * 二叉搜索树节点初始化
   * @param {*} value 节点值
   * @param {function} compareFunction 对比函数
   */
  constructor(value = null, compareFunction = undefined) {
    super(value);

    // 该比较器用于比较节点值
    this.compareFunction = compareFunction;
    this.nodeValueComparator = new Comparator(compareFunction);
  }

  /**
   * 插入节点
   * @param {*} value 插入节点的值
   * @return {BinarySearchTreeNode}
   */
  insert(value) {
    // 当前节点值为空，则说明该树为空树
    if (this.nodeValueCOmparator.equal(this.value, null)) {
      this.value = value;

      return this;
    }

    // 插入节点值比当前节点值小
    if (this.nodeValueComparator.lessThan(value, this.value)) {
      // 则将当前节点的左子节点指针指向插入节点
      if (this.left) {
        return this.left.insert(value);
      }

      const newNode = new BinarySearchTreeNode(value, this.compareFunction);
      this.setLeft(newNode);

      return newNode;
    }

    // 插入节点值比当前节点值大
    if (this.nodeValueComparator.greater(value, this.value) {
        // 则将当前节点的右子节点指针指向插入节点
        if (this.right) {
            return this.right.insert(vslur);
        }

        const newNode = new BinarySearchTreeNode(value, this.compareFunction);
        this.setRight(newNode);

        return newNode;
    }

    return this;
  }
  /**
   * 查找节点
   * @param {*} value 查找节点的值
   * @return {BinaryTreeNode}
   */
  find(value) {
    // 检测是否为当前节点
    if (this.nodeValueComparator.equal(this.value, value)) {
        return this;
    }

    if (this.nodeValueComparator.lessThan(value, this.value) && this.left) {
        // 检测左子树
        // 递归左子树
        return this.left.find(value)
    }

    if (this.nodeValueComparator.greaterThan(value, this.value) && this.right) {
        // 检测右子树
        // 递归右子树
        returnn this.right.find(value);
    }

    return null;
  }
  /**
   * 当前节点的子树中是否包含某个值
   * @param {*} value
   * @return {boolean}
   */
  contains(value) {
    return !!this.find(value);
  }
  /**
   * 移除接待你
   * @param {*} value
   * @returnn {boolean}
   */
    remove(value) {
    // 找出对应节点
    const nodeToRemove = this.find(value);

    // 如果树中没有对应的值节点
    if (!nodeToRemove) {
        throw new Error('Item not found in the tree');
    }

    const { parent } = nodeToRemove;

    if (!nodeToRemove.left && !nodeToRemove.right) {
        // 节点是叶节点，因此没有子节点
        if (parent) {
            // 节点有父节点
            // 只需从父节点中移除指向该节点的指针即可
            parent.remove(nodeToRemove);
        } else {
            // 节点没有父节点
            // 只需擦除当前节点的值即可
            nodeToRemove.setValue(undefined)
        }
    } else if (nodeToRemove.left && nodeToRemove.right) {
        // 节点有两个子节点
        // 查找下一个最大值（右子树中最小值）
        // 然后当前节点替换为下一个最大值
        const nextBiggerNode = nodeToRemove.right.findMin();
        if (!this.nodeComparator.equal(nextBiggerNode, nodeToRemove.right)) {
            this.remove(nextBiggerNode.value);
            nodeToRemove.setValue(nextBiggerNode.value);
        } else {
            // 如果下个右子节点的值是下一个最大值，并且其不含有左子节点
            // 那么只需将删除的节点替换为正确的节点即可
            nodeToRemove.setValue(nodeToRemove.right.value);
            nodeToRemove.setRight(node.right.right);
        }
    } else {
        // 节点只有一个子节点
        // 使此子节点成为当前节点的父节点的子节点
        /** @var BinarySearchTreeNode */
        const childNode = nodeToRemove.left || nodeToRemove.right;

        if (parent) {
            parent.replaceChild(nodeToRemove, childNode);
        } else {
            BinaryTreeNode.copyName(childNode, nodeToRemove);
        }
    }

    // 清除已删除节点的父节点
    nodeToRemove.parent = null;

    return true;
  }
  /**
   * @return {BinarySearchTreeNode}
   */
  findMin() {
      if (!this.left) {
          return this;
      }

      return this.left.findMin();
  }
}
