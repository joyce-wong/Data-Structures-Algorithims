// Write a function, leafList, that takes in the root of a binary tree and returns an array containing the values of all leaf nodes in left-to-right order.

test_00:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

leafList(a); // -> [ 'd', 'e', 'f' ] 
test_01:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

leafList(a); // -> [ 'd', 'g', 'h' ]
test_02:
const a = new Node(5);
const b = new Node(11);
const c = new Node(54);
const d = new Node(20);
const e = new Node(15);
const f = new Node(1);
const g = new Node(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = f;
e.right = g;

//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3

leafList(a); // -> [ 20, 1, 3, 54 ]
test_03:
const x = new Node('x');

//      x

leafList(x); // -> [ 'x' ]
test_04:
leafList(null); // -> [ ]

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//depth first iterative O(n) time O(n) space
// const leafList = (root) => {
//   if(root === null) return []
//   const leaves = []
//   const stack = [root]
//   while(stack.length > 0){
//     const node = stack.pop()
//     if(node.right === null && node.left === null) leaves.push(node.val)
    
//     if(node.right !== null) stack.push(node.right)
//     if(node.left !== null) stack.push(node.left)
//   }
//   return leaves
// };

//recursive
// const leafList = (root) => {
//   if(root === null) return []
//   if(root.left === null && root.right === null) return [root.val]
//   return leafList(root.left).concat(leafList(root.right))
// }

//recursive with helper function O(n) time O(n) space
const leafList = (root) => {
    let leaves = []
    fillLeaves(root, leaves)
    return leaves
  }
  
  const fillLeaves = (root, leaves) => {
    if(root === null) return
    if(root.left === null && root.right === null) leaves.push(root.val)
    
    fillLeaves(root.left, leaves)
    fillLeaves(root.right, leaves)
  }
  module.exports = {
    leafList,
  };
  