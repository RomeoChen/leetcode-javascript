function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var balanceBST = function (root) {
  let valuesLDR = [];

  /**
   * 将平衡树中序遍历为数组，此数组一定是升序的
   * @param {TreeNode} root 
   */
  function BSTtoLDR(root) {
    if (root.left) {
      BSTtoLDR(root.left);
    }
    valuesLDR.push(root.val);
    if (root.right) {
      BSTtoLDR(root.right);
    }
  }
  BSTtoLDR(root);

  /**
   * 根据升序数组构造树，每次取中间位置的值作为根节点
   * @param {Array} values 
   */
  function buildBalanceBST(values) {
    const mid = Math.floor(values.length / 2);
    const node = new TreeNode(values[mid]);
    const leftValues = values.slice(0, mid);
    if (leftValues.length) {
      node.left = buildBalanceBST(leftValues);
    }
    const rightValues = values.slice(mid + 1);
    if (rightValues.length) {
      node.right = buildBalanceBST(rightValues);
    }
    return node;
  }

  return buildBalanceBST(valuesLDR);
};



const root = new TreeNode(4),
      node1 = new TreeNode(2),
      node2 = new TreeNode(5),
      node3 = new TreeNode(3);

root.left = node1;
root.right = node2;
node1.right = node3;

console.log(balanceBST(root));
