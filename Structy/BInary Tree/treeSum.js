// tree sum
// Write a function, treeSum, that takes in the root of a binary tree that contains number values. The function should return the total sum of all values in the tree.

test_00:
const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

treeSum(a); // -> 21
test_01:
const a = new Node(1);
const b = new Node(6);
const c = new Node(0);
const d = new Node(3);
const e = new Node(-6);
const f = new Node(2);
const g = new Node(2);
const h = new Node(2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      1
//    /   \
//   6     0
//  / \     \
// 3   -6    2
//    /       \
//   2         2

treeSum(a); // -> 10
test_02:
treeSum(null); // -> 0

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//depth first iterative O(n) runtime, O(n) space
// const treeSum = (root) => {
//   //declare variable that tracks sum
//   if(root === null) return 0
//   let sum = 0
//   const stack = [root]
//   while(stack.length > 0){
//     const node = stack.pop()
//     sum += node.val
//     if(node.right !== null) stack.push(node.right)
//     if(node.left !== null) stack.push(node.left)
//   }
//   return sum
// };

//breadth first iterative O(nsquared) runtime, O(n) space
//shift method runs in O(n) as JS does not have native queue structure 
//that is maximally efficient
// const treeSum = (root) => {
//   if(root === null) return 0
//   let sum = 0
//   const queue = [root]
//   while(queue.length > 0){
//     const current = queue.shift()
//     sum += current.val
//     if(current.left) queue.push(current.left)
//     if(current.right) queue.push(current.right)
//   }
//   return sum
// }

//recursive depth first O(n) runtime O(n)space
const treeSum = (root) => {
    if(root === null) return 0
  return root.val + treeSum(root.left) + treeSum(root.right)
  }
  
  
  module.exports = {
    treeSum,
  };