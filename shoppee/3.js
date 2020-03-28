const tree = [
  null,
  {
    value: 4,
    parentIndex: 0,
    deep:0,
  },
  {
    value: 2,
    parentIndex: 1,
    deep: 1,
  },
  {
    value: 7,
    parentIndex: 1,
    deep: 1,
  },
  {
    value: 1,
    parentIndex: 2,
    deep: 2,
  },
  {
    value: 3,
    parentIndex: 2,
    deep: 2,
  },
  {
    value: 6,
    parentIndex: 3,
    deep: 2,
  },
  {
    value: 9,
    parentIndex: 3,
    deep: 2,
  },
  {
    value: 8,
    parentIndex: 4,
    deep: 3,
  },
]

const nodeStr = '8 7';
const nodes = nodeStr.split(' ');
const startNodeValue = nodes[0]*1;
const distNodeValue = nodes[1]*1;

function calDistance(startNode, distNode) {
  let startNodeDeep = startNode.deep,
      distNodeDeep = distNode.deep;

  // 先判断其中一个节点是否为另一个节点的祖先
  while (startNode.deep > distNode.deep) {
    startNode = tree[startNode.parentIndex]
  }
  if (startNode === distNode) {
    return startNodeDeep - distNodeDeep;
  }

  while (distNode.deep > startNode.deep) {
    distNode = tree[distNode.parentIndex]
  }
  if (startNode === distNode) {
    return distNodeDeep - startNodeDeep;
  }

  while (startNode.parentIndex !== distNode.parentIndex) {
    startNode = tree[startNode.parentIndex];
    distNode = tree[distNode.parentIndex];
  }
  const bothParentDeep = tree[startNode.parentIndex].deep;
  return (startNodeDeep + distNodeDeep) - 2 * bothParentDeep;
}

const startNode = tree.find(node=>node&&node.value === startNodeValue);
const distNode = tree.find(node=>node&&node.value === distNodeValue)
const distance = calDistance(startNode, distNode)
console.log(distance);

