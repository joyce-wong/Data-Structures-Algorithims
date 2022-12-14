// tree value count
// Write a function, treeValueCount, that takes in the root of a binary tree and a target value. The function should return the number of times that the target occurs in the tree.

test_00:
const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

treeValueCount(a,  6); // -> 3
test_01:
const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   6     6
//  / \     \
// 4  6     12

treeValueCount(a,  12); // -> 2
test_02:
const a = new Node(7);
const b = new Node(5);
const c = new Node(1);
const d = new Node(1);
const e = new Node(8);
const f = new Node(7);
const g = new Node(1);
const h = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      7
//    /   \
//   5     1
//  / \     \
// 1   8     7
//    /       \
//   1         1
treeValueCount(a, 1); // -> 4
test_03:
const a = new Node(7);
const b = new Node(5);
const c = new Node(1);
const d = new Node(1);
const e = new Node(8);
const f = new Node(7);
const g = new Node(1);
const h = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      7
//    /   \
//   5     1
//  / \     \
// 1   8     7
//    /       \
//   1         1

treeValueCount(a, 9); // -> 0
test_04:
treeValueCount(null, 42); // -> 0

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//depth first iterative O(n) time O(n) space
// const treeValueCount = (root, target) => {
//   if (root === null) return 0
//   let count = 0
//   const stack = [root]
//   while(stack.length > 0){
//     node = stack.pop()
//     if(node.val === target) count++
    
//     if(node.right !== null) stack.push(node.right)
//     if(node.left !== null) stack.push(node.left)
//   }
//   return count
// }

//breadth first iterative O(n squared) time, O(n) space
// const treeValueCount = (root, target) => {
//   if(root === null) return 0
//   let count = 0
//   const queue = [root]
//   while(queue.length > 0){
//     current = queue.shift()
//     if(current.val === target) count++
    
//     if(current.left !== null) queue.push(current.left)
//     if(current.right !== null) queue.push(current.right)
//   }
//   return count
// }

//recursive O(n) time, O(n) space
const treeValueCount = (root, target) => {
    if(root === null) return 0
   const match = root.val === target ? 1 : 0
  
    const leftValues = treeValueCount(root.left, target)
    const rightValues = treeValueCount(root.right, target)
    return match + leftValues + rightValues
  };
  
  module.exports = {
    treeValueCount,
  };
  