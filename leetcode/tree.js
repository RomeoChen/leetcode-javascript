const comments = [
  {id:1, parent_id:null},
  {id:2, parent_id:1},
  {id:3, parent_id:1},
  {id:4, parent_id:2},
  {id:5, parent_id:4},
]

const tree = {
  id: 1,
  parent_id: null,
  children: [
    {
      id: 2,
      parent_id: 1,
      children: [
        {
          id: 4, 
          parent_id: 2, 
          children: [
            {
              id: 5,
              parent_id: 4,
              children: []
            }
          ]
        }
      ],
    },
    {
      id: 3,
      parent_id: 1,
      children: [],
    }
  ]
}


function Node(id, parent_id = null) {
  this.id = id;
  this.parent_id = parent_id;
  this.children = [];
}

function func(comments) {
  let root = comments.find(x => x.parent_id === null);
  root = new Node(root.id);
  function findChildren(node) {
    let children = comments.filter(x => x.parent_id === node.id);
    children.forEach(child => {
      child = new Node(child.id, child.parent_id);
      findChildren(child);
      node.children.push(child);
    });
  }
  findChildren(root);
  return root;
}

const newTree = func(comments);
console.log(newTree);
