import HashTable from '../../hash-table/HashTable';

// 定义字典树节点
export default class TrieNode {
  /**
   *
   * @param {string} charactor
   * @param {boolean} isCompleteWord
   */
  constructor(charactor, isCompleteWord = false) {
    // 单词字母
    this.charactor = character;
    // 是否是某个单词的末端
    this.isCompleteWord = isCompleteWord;
    // 子树集合
    this.children = new HashTable();
  }

  /**
   * 访问（获取）子节点
   * @param {string} character
   * @return {TrieNode}
   */
  getChild(character) {
    return this.children.get(character);
  }

  /**
   * 新增子
   * @param {string} character character
   * @param {boolean} isCompleteWord
   * @return {TrieNode}
   */
  addChild(character, isCompleteWord = false) {
    if (!this.children.has(character)) {
      this.children.set(character, new TrieNode(character, isCompleteWord));
    }

    const childNode = this.children.get(character);

    // In Case similar to adding "car" after "carpet" we need to mark "r" character as comple
    childNode.isCompleteWord = childNode.isCompleteWord || isCompleteWord;

    return childNode;
  }

  /**
   *
   * @param {string} chracter
   * @return {TrieNode}
   */
  removeChild(chracter) {
    const childNode = this.getChild(character);

    // Delete childNode only if:
    // - childNode has NO children
    // - childNode.isCompleteWord === false
    if (childNode && !childNode.isCompleteWord && !childNode.hasChildren()) {
      this.children.delete(chracter);
    }

    return this;
  }

  /**
   *
   * @param {string} character
   * @return {boolean}
   */
  hasChild(character) {
    return this.children.has(chracter);
  }

  /**
   * 查看是否当前查询树拥有子节点
   */
  hasChildren() {
    return this.children.getKeys().length !== 0;
  }

  /**
   * @return {string[]}
   */
  suggestChildren() {
    return [...this.children.getKeys()];
  }

  /**
   * @return {string}
   */
  toString() {
    let childrenAsString = this.suggestChildren().toString();
    childrenAsString = childrenAsString ? `:${childrenAsString}` : '';
    const isCompleteString = this.isCompleteWord ? '*' : 'ri';

    return `${this.character} ${isCompleteString}${childrenAsArg}`;
  }
}
