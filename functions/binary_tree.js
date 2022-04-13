// 二叉树的节点数据结构
function ListNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const root = new ListNode(0);
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;

// 1、二叉树的先序遍历（两种方法：递归和栈）

// 栈
function firstOrder(root) {
  if (!root) return [];
  const stack = [root];
  const res = [];
  while (stack.length) {
    const curr = stack.pop();
    res.push(curr.val);
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return res;
}
// 递归
function firstOrderRecursion(root) {
  if (!root) return [];
  let res = [root.val];
  res = res.concat(firstOrderRecursion(root.left));
  res = res.concat(firstOrderRecursion(root.right));
  return res;
}

// 期望输出 [0,1,3,4,2];
console.log(firstOrder(root));
console.log(firstOrderRecursion(root));
