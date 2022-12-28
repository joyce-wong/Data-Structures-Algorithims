tree levels
Write a function, treeLevels, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a level of the tree.

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

treeLevels(a); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]
test_01:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");
const i = new Node("i");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;
f.left = i;

//         a
//      /    \
//     b      c
//   /  \      \
//  d    e      f
//      / \    /
//     g  h   i

treeLevels(a); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f'],
//   ['g', 'h', 'i']
// ]
test_02:
const q = new Node("q");
const r = new Node("r");
const s = new Node("s");
const t = new Node("t");
const u = new Node("u");
const v = new Node("v");

q.left = r;
q.right = s;
r.right = t;
t.left = u;
u.right = v;

//      q
//    /   \
//   r     s
//    \
//     t
//    /
//   u
//  /
// v

treeLevels(q); //->
// [
//   ['q'],
//   ['r', 's'],
//   ['t'],
//   ['u'],
//   ['v']
// ]
test_03:
treeLevels(null); // -> []

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//depth first iterative O(n) time, O(n) space
// const treeLevels = (root) => {
//   if(root === null) return []
//   let result = []
//   const stack = [{node: root, levelN: 0}]
//   while(stack.length > 0){
//     const {node, levelN} = stack.pop()
//         if(result.length === levelN){
//       result.push([node.val])
//     } else {
//       result[levelN].push(node.val)
//     }
    
//     if(node.right !== null) stack.push({node: node.right, levelN: levelN + 1})
//     if(node.left !== null) stack.push({node: node.left, levelN: levelN + 1})
//   }
//   return result
// };

//breadth first iterative O(n) time, O(n) space
// const treeLevels = (root) => {
//   if(root === null) return []
//   const result = []
//   const queue = [{node: root, levelN: 0}]
//   while(queue.length > 0){
//     const {node, levelN} = queue.shift()
//     if(result.length === levelN){
//       result.push([node.val])
//     } else {
//       result[levelN].push(node.val)
//     }
    
//     if(node.left !== null) queue.push({node: node.left, levelN: levelN + 1})
//     if(node.right !== null) queue.push({node: node.right, levelN: levelN + 1})
//   }
//   return result
// }

//recursive O(n) time, O(n) space
const treeLevels = (root) => {
    const levels = []
    fillLevels(root, levels, 0)
    return levels
  }
  
  const fillLevels = (root, levels, levelN) => {
    if(root === null) return
    if(levels.length === levelN){
      levels[levelN] = [root.val]
    } else {
      levels[levelN].push(root.val)
    }
    fillLevels(root.left, levels, levelN + 1)
    fillLevels(root.right, levels, levelN + 1)
  }
  
  module.exports = {
    treeLevels,
  };
  